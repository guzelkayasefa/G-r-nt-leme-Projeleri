import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] = issue.message;
      });
      return NextResponse.json({ message: 'Formu kontrol et.', errors }, { status: 400 });
    }

    console.log('Roof iletişim formu', result.data);

    return NextResponse.json({ message: 'Mesajın için teşekkürler!' });
  } catch (error) {
    console.error('Contact API hatası', error);
    return NextResponse.json({ message: 'Beklenmedik bir hata oluştu.' }, { status: 500 });
  }
}
