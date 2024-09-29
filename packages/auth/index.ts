import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession, type NextAuthOptions, type User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { siteConfig } from "@saasfly/common";

import { env } from "./env.mjs";

type UserId = string;
type IsAdmin = boolean;

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      isAdmin: IsAdmin;
    };
  }
}

declare module "next-auth" {
  interface JWT {
    isAdmin: IsAdmin;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      httpOptions: { timeout: 15000 },
    }),
  ],
  callbacks: {
    session({ token, session }) {
      if (token && session.user) {
        session.user.id = token.sub ?? "";
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.isAdmin = false; // Set to false for dummy implementation
      }
      return session;
    },
    async jwt({ token }) {
      return {
        ...token,
        isAdmin: false, // Set to false for dummy implementation
      };
    },
  },
  debug: env.IS_DEBUG === "true",
};

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
