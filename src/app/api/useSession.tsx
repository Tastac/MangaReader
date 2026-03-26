"use client"
import { useSession } from "next-auth/react";

export default function useAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>You must log in first.</p>;
  }

  return <div>Welcome {session?.user?.name}!</div>;
}