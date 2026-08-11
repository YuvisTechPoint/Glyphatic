import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnStudio = nextUrl.pathname.startsWith('/studio');
      
      if (isOnStudio) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
