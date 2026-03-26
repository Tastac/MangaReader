import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (!username || !password) return null;

        // dummy check
        if (username === "admin" && password === "admin") {
          return {
            id: "1",
            name: "admin",
            email: "admin@example.com",
          };
        }

        return null;
      },
    }),
  ],
});