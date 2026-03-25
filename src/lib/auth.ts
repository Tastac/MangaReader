import NextAuth from "next-auth"
//import GoogleProvider from "next-auth/providers/google";

console.log("AUTH_SECRET loaded?", !!process.env.AUTH_SECRET);
//console.log("NEXTAUTH_SECRET loaded?", !!process.env.NEXTAUTH_SECRET);
//console.log("GOOGLE_CLIENT_ID loaded?", !!process.env.GOOGLE_CLIENT_ID);

export const authConfig = {
  //secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  providers: [
    /*GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),*/
  ],
}