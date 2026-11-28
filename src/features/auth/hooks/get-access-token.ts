import "server-only";

import { headers } from "next/headers";
import { getToken } from "next-auth/jwt";
import type { NextApiRequest } from "next";

/** Reads the backend access token from the encrypted NextAuth JWT on the server. */
export async function getAccessToken(): Promise<string | null> {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    throw new Error("NEXTAUTH_SECRET must be set to read the NextAuth token.");
  }

  const request = {
    headers: await headers(),
  } as unknown as NextApiRequest;

  const token = await getToken({ req: request, secret });

  return typeof token?.accessToken === "string" ? token.accessToken : null;
}
