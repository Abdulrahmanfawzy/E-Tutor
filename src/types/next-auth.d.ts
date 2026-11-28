import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    tokenType: string;
    roles: string[];
    isInstructor: boolean;
    isAdmin: boolean;
    emailVerified: boolean;
    status: string;
  }

  interface Session {
    user: {
      id: string;
      accessToken: string;
      roles: string[];
      isInstructor: boolean;
      isAdmin: boolean;
      emailVerified: boolean;
      status: string;
    } & NonNullable<DefaultSession["user"]>;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    tokenType?: string;
    roles?: string[];
    isInstructor?: boolean;
    isAdmin?: boolean;
    emailVerified?: boolean;
    status?: string;
  }
}
