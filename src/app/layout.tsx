import "./styles.css";
import "../api/auth/auth.ts";
import loginChecker from "@/app/login/page.tsx";
import Login from "@/app/login/page.tsx";

export default function MangaSiteMockup() {
  return (
  <html lang="en">
    <body>
      <div className="app">
        <Login />
      </div>
    </body>
  </html>
  );
}