import { redirect } from 'next/navigation';
import { validateRequest } from '@/auth';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();

  if (user) {
    redirect('/');
  }

  return <>{children}</>;
}
