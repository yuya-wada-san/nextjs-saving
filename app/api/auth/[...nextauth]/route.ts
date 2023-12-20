import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
		user?: { 
			name?: string | null 
			email?: string | null 
			image?: string | null 
		} 
		expires?: string 
  }
}

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	]
});
export { handler as GET, handler as POST };