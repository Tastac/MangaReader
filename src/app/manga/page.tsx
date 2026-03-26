import { auth } from "@/app/api/auth/auth.ts";
import { redirect } from "next/navigation";

export default async function MangaPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Manga Page</h1>
      <p>Welcome, {session.user.name}!</p>
      <p>This is where your manga list and reading progress will go.</p>
    </main>
  );
}