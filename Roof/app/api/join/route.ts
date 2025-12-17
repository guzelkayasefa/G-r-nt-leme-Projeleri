import { mkdir, readFile, writeFile, unlink, access } from 'fs/promises';
import { constants } from 'fs';
import { join as pathJoin, dirname } from 'path';
import { NextResponse } from 'next/server';
import { joinSchema } from '@/lib/validation';

export const runtime = 'nodejs';

const dataPath = pathJoin(process.cwd(), 'data', 'leads.json');
const lockPath = pathJoin(process.cwd(), 'data', 'leads.lock');

async function ensureDataFile() {
  await mkdir(dirname(dataPath), { recursive: true });
  try {
    await access(dataPath, constants.F_OK);
  } catch {
    await writeFile(dataPath, '[]');
  }
}

async function acquireLock(retry = 10) {
  for (let attempt = 0; attempt < retry; attempt += 1) {
    try {
      await writeFile(lockPath, process.pid.toString(), { flag: 'wx' });
      return;
    } catch (error: any) {
      if (error.code === 'EEXIST') {
        await new Promise((resolve) => setTimeout(resolve, 50));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Dosya kilidi alınamadı.');
}

async function releaseLock() {
  await unlink(lockPath).catch(() => undefined);
}

export async function POST(request: Request) {
  let lockAcquired = false;
  try {
    await ensureDataFile();
    const payload = await request.json();
    const result = joinSchema.safeParse(payload);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] = issue.message;
      });
      return NextResponse.json({ message: 'Formu kontrol et.', errors }, { status: 400 });
    }

    await acquireLock();
    lockAcquired = true;
    let leads: Array<{ fullName: string; email: string; city: string; interests: string[]; contribution: string; createdAt: string }> = [];

    try {
      const fileContent = await readFile(dataPath, 'utf-8');
      leads = JSON.parse(fileContent);
    } catch (error) {
      console.warn('Leads dosyası okunamadı, yeniden oluşturuluyor.', error);
      leads = [];
    }

    const alreadyExists = leads.some((lead) => lead.email.toLowerCase() === result.data.email.toLowerCase());
    if (alreadyExists) {
      return NextResponse.json({ message: 'Bu e-posta zaten kayıtlı.' }, { status: 409 });
    }

    const newEntry = { ...result.data, createdAt: new Date().toISOString() };
    leads.push(newEntry);
    await writeFile(dataPath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ message: 'Roof listesine başarıyla eklendin!' });
  } catch (error) {
    console.error('Join API hatası', error);
    return NextResponse.json({ message: 'Beklenmedik bir hata oluştu.' }, { status: 500 });
  } finally {
    if (lockAcquired) {
      await releaseLock();
    }
  }
}
