import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

console.log("AUTH_SECRET loaded?", !!process.env.AUTH_SECRET);
console.log("NEXTAUTH_SECRET loaded?", !!process.env.NEXTAUTH_SECRET);

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  providers: [
    
  ],
})