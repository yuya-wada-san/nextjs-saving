'use client'

import Link from "next/link";
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
	const { data: session, status } = useSession();
  return (
    <header className="py-4 px-8 md:px-24 font-mono text-slate-300 bg-sky-700">
      <div className="max-w-5xl flex justify-between items-center">
        <nav className="flex">
          <Link href="/" className="mr-5 border-b hover:text-white font-bold">Home</Link>
          <Link href="/pages/summary" className="mr-5 border-b hover:text-white">Summary</Link>
          <Link href="/pages/create" className="mr-5 border-b hover:text-white">Create</Link>
        </nav>
        {status === 'authenticated' ? (
					<div className="md:flex md:items-center md:gap-2">
            <Image
              src={session.user?.image ?? ``}
              alt="user icon"
              className="mx-auto rounded-full"
              width={32}
              height={32}
              onClick={() => signOut()}
            />
						<div className="hidden md:block">
              <button 
                className="py-2 px-4 rounded-lg bg-slate-700 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
                onClick={() => signOut()}
                >
                Logout
              </button>
						</div>
					</div>
				) : (
          <button 
            className="py-2 px-4 rounded-lg bg-slate-700 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
            onClick={() => signIn('google', {}, { prompt: 'login' })}
            >
            Login
          </button>
				)}          
      </div>
    </header>
  );
}