import "server-only";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export async function getAccessToken(): Promise<string | null> {
  const session = await getServerSession(authOptions);

  return session?.user?.accessToken ?? null;
}
