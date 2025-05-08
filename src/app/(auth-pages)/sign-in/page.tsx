import Link from "next/link";
import { Suspense } from "react";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const role = typeof searchParams.role === "string" ? searchParams.role : "";

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-700">
          {role === "educator" ? "Educator" : role === "student" ? "Student" : "Sign In"}
        </h1>
        <p className="mb-4 text-slate-700 text-center">
          {role === "educator" && (
            <>
              Welcome, educator! Sign in to manage assignments, create collaboration rooms, and guide your classroom with ease.
            </>
          )}
          {role === "student" && (
            <>
              Welcome, student! Sign in to join rooms, keep track of assignments, and collaborate with your peers.
            </>
          )}
          {!role && (
            <>
              Choose your role to get started:
              <div className="mt-4 flex gap-4">
                <Link href="?role=educator" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
                  I'm an Educator
                </Link>
                <Link href="?role=student" className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition font-medium">
                  I'm a Student
                </Link>
              </div>
            </>
          )}
        </p>
        {(role === "educator" || role === "student") && (
          <Suspense fallback={<div>Loading sign-in form...</div>}>
            {/* Placeholder for actual sign-in form */}
            <form className="w-full flex flex-col gap-4 mt-6">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg font-semibold shadow ${
                  role === "educator"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-pink-600 text-white hover:bg-pink-700"
                } transition`}
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 w-full flex justify-between text-xs text-slate-500">
              <Link href="?">
                &larr; Change role
              </Link>
              <Link href="/(auth-pages)/sign-up">
                Need an account? Sign Up
              </Link>
            </div>
          </Suspense>
        )}
      </section>
    </main>
  );
}
