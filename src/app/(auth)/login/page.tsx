import { Metadata } from 'next';
import loginImage from '@/assets/login-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Log In',
};

export default async function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-xl bg-card shadow-2xl">
        <div className="w-full space-y-10 p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Login to bugbook</h1>

          <div className="space-y-5">
            <LoginForm />

            <Link
              href={'/signup'}
              className="block text-center hover:underline"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>

        <Image
          src={loginImage}
          alt="Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
