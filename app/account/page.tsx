'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Login from '@/app/ui/login';
import Logout from '@/app/ui/logout';
import NextAuthProvider from '../providers/NextAuth';

export default function Page() {
	const { data: session, status } = useSession();
	return (          
    <main className="min-h-screen p-8 md:py-12 md:px-24">
      <div className="flex flex-col gap-4 max-w-5xl w-full">
				<h1 className="text-white w-full border-b border-slate-700 pb-6 md:pt-8 lg:w-auto lg:rounded-xl lg:border lg:p-4">
					Account
        </h1>
		<NextAuthProvider>
				{status === 'authenticated' ? (
					<div>
						<p className='my-4'>セッションの期限：{session.expires}</p>
						<p className='my-4'>ようこそ、{session.user?.name}さん</p>
						<Image
							src={session.user?.image ?? ``}
							alt="user icon"
							className="m-4 rounded-full"
							width={32}
							height={32}
						/>
						<div>
							<Logout />
						</div>
					</div>
				) : (
					<Login />
				)}
				</NextAuthProvider>
			</div>
		</main>
	);
}
