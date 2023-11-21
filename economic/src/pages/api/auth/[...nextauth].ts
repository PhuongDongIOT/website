import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { env } from "~constants/config.constants"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)