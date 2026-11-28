
"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { AuthSessionProvider } from "@/features/auth/providers/auth-session-provider";

export function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <AuthSessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthSessionProvider>
  );
}
