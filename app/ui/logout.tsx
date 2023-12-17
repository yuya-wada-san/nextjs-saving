import { useSession, signOut } from 'next-auth/react';

export default function Logout() {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return (
			<div>
				<button
          className='text-center flex items-center justify-center gap-5 rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-600 md:text-base'
          onClick={() => signOut()}
          >
          ログアウト
        </button>
			</div>
		);
	}
	return null;
}

