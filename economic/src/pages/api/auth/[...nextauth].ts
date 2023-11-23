import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { env } from "~configs/config";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
}
export default NextAuth(authOptions)