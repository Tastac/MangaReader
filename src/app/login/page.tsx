"use client"
import * as React from "react";
import { useState } from 'react';
import { signIn } from "next-auth/react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: login,
      password: password,
      redirect: false
    });

    if (!result?.error) {
      window.location.href = "/home";
    }
  }

  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group" id="username-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="username"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    </div>
  )
}