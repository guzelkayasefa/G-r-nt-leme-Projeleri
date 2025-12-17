import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'İsmin en az 2 karakter olmalı.'),
  email: z.string().email('Geçerli bir e-posta adresi gir.'),
  message: z.string().min(10, 'Mesajın en az 10 karakter olmalı.').max(1000, 'Mesaj çok uzun.')
});

export const updatesSchema = contactSchema.pick({ name: true, email: true });

export const joinSchema = z.object({
  fullName: z.string().min(3, 'Ad Soyad en az 3 karakter olmalı.'),
  email: z.string().email('Geçerli e-posta gerekli.'),
  city: z.string().min(2, 'Şehir gir.'),
  interests: z.array(z.string()).min(1, 'En az bir ilgi alanı seç.'),
  contribution: z
    .string()
    .min(10, 'Kısa da olsa katkını yaz.')
    .max(500, 'Lütfen 500 karakteri geçme.')
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type JoinFormValues = z.infer<typeof joinSchema>;
export type UpdatesFormValues = z.infer<typeof updatesSchema>;
