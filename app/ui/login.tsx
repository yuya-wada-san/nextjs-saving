import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status !== 'authenticated') {
		return (
			<div>
				<p>あなたはログインしていません</p>
				<button 
          className='text-center w-full md:w-auto my-4 flex items-center gap-2 justify-between md:self-start rounded-lg bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-400 md:text-base'
          onClick={() => signIn('google', {}, { prompt: 'login' })}
          >
					Googleでログイン
          <ArrowRightIcon className="w-4" />
				</button>
			</div>
		);
	}
	return null;
}
