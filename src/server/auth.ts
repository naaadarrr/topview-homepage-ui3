import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import _ from "lodash";
import { getFullSignInUrl, getAuthInfo } from "@/utils/auth";

// import { PrismaClient } from '@prisma/client';
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"];
    id: string;
    // ...other properties
    // role: UserRole;
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const secret = "g9gHHKzM6+ZV9DDC1BC8/EqfVYfJhiqkSEnyd++OFIQ=";

dayjs.extend(utc);

// const prisma = new PrismaClient();

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  debug: true,
  secret: secret,
  jwt: {
    secret: secret,
    maxAge: 15 * 24 * 60 * 60, // 15days
  },
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60, // 15days
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    callbackUrl: {
      name: `__Secure-next-auth.callback-url`,
      options: {
        httpOnly: false,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      let newSession = { ...session };
      if (token) {
        newSession = Object.assign(newSession, {
          id: token.id,
        });
      }
      return newSession;
    },
  },
  providers: [
    CredentialsProvider({
      id: "email",
      name: "email",
      credentials: {
        email: { label: "email", type: "string" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials ?? {};
          const signInUrl = getFullSignInUrl(
            "/api/trpc/account.signInWithEmail",
          );

          const payload: {
            id: string;
            email: string;
            name: string;
            image: string;
          } = await getAuthInfo({
            url: signInUrl,
            data: { email, password },
          });
          return payload;
        } catch (e) {
          throw new Error("Failed to sign in");
        }
      },
    }),
    CredentialsProvider({
      id: "google-one-tap",
      name: "google-one-tap",
      credentials: {
        // token: { label: 'token', type: 'string' }
        sub: { label: "sub", type: "string" },
        picture: { label: "picture", type: "string" },
        email: { label: "email", type: "email" },
        name: { label: "name", type: "string" },
      },
      async authorize(credentials) {
        const signInUrl = getFullSignInUrl(
          "/api/trpc/account.signInWithGoogle",
        );
        const payload: {
          id: string;
          email: string;
          name: string;
          image: string;
        } = await getAuthInfo({
          url: signInUrl,
          data: _.pick(credentials, ["sub", "email", "name", "picture"]),
        });

        return payload;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile) {
        const signInUrl = getFullSignInUrl(
          "/api/trpc/account.signInWithGoogle",
        );

        const payload: {
          id: string;
          email: string;
          name: string;
          image: string;
        } = await getAuthInfo({
          url: signInUrl,
          data: _.pick(profile, ["sub", "email", "name", "picture"]),
        });

        return payload;
      },
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
      async profile(profile) {
        const signInUrl = getFullSignInUrl("/api/trpc/account.signInWithApple");
        const payload: {
          id: string;
          email: string;
          name: string;
          image: string;
        } = await getAuthInfo({
          url: signInUrl,
          data: _.pick(profile, ["sub", "email", "name", "picture"]),
        });
        return payload;
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export function auth() {
  return getServerSession(authOptions);
}
