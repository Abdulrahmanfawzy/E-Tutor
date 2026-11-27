
import login from "@/actions/login";
import type { LoginResponse } from "@/features/auth/types/login-types";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                login: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                if (!credentials?.login || !credentials?.password) {
                    return null;
                }

                let response: LoginResponse;

                try {
                    response = await login({
                        login: credentials.login,
                        password: credentials.password,
                    });
                } catch (error) {
                    console.error("[auth] Login API request failed:", error);
                    throw error;
                }

                if (response.success === false) {
                    console.warn("[auth] Login API rejected the credentials.");
                    return null;
                }

                if (response.success !== true) {
                    console.error(
                        "[auth] Login API response did not include success: true.",
                    );
                    throw new Error("The login API returned an unexpected response.");
                }

                if (!response.data?.user || !response.data.token) {
                    console.error(
                        "[auth] Login API response is missing the expected user or token fields.",
                    );
                    throw new Error("The login API returned an unexpected response.");
                }

                const { user, token, token_type } = response.data;
                const roles = Array.isArray(user.roles) ? user.roles : [];
                const normalizedRoles = roles.map((role) => role.toLowerCase());
                const isAdmin =
                    Boolean(user.is_admin) || normalizedRoles.includes("admin");
                const isInstructor =
                    Boolean(user.is_instructor) ||
                    normalizedRoles.includes("instructor");

                // Return authenticated user
                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email,
                    image: user.avatar_url,

                    accessToken: token,
                    tokenType: token_type,

                    roles,
                    isInstructor,
                    isAdmin,
                    emailVerified: user.email_verified,
                    status: user.status,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.tokenType = user.tokenType;
                token.roles = user.roles;
                token.isInstructor = user.isInstructor;
                token.isAdmin = user.isAdmin;
                token.emailVerified = user.emailVerified;
                token.status = user.status;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub ?? "";
                session.user.roles = token.roles ?? [];
                session.user.isInstructor = token.isInstructor ?? false;
                session.user.isAdmin = token.isAdmin ?? false;
                session.user.emailVerified = token.emailVerified ?? false;
                session.user.status = token.status ?? "";
            }
            return session;
        },
    },
};
