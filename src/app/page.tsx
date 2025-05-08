import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-tr from-slate-50 via-white to-blue-50">
      <section className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text mb-3">
          Welcome to ClassSync
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-8 font-medium">
          Collaborative classroom management for educators & students — organize, assign, and collaborate in real time.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/(auth-pages)/sign-in" className="rounded-full px-6 py-3 bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition">
            Get Started
          </Link>
          <Link href="/dashboard" className="rounded-full px-6 py-3 bg-white border border-blue-600 text-blue-700 font-semibold shadow-md hover:bg-blue-50 transition">
            Go to Dashboard
          </Link>
        </div>
      </section>
      <section className="w-full max-w-5xl grid md:grid-cols-3 gap-8 mt-4">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition group">
          <h3 className="text-xl font-semibold mb-2 text-blue-700 group-hover:text-blue-900 transition">Collaboration Rooms</h3>
          <p className="text-slate-600 text-sm mb-4">Work together with classmates or colleagues in real-time rooms—chat, edit, and share ideas live.</p>
          <Link href="/dashboard/collaboration" className="text-sm font-medium text-blue-600 hover:underline">
            Enter Rooms &rarr;
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition group">
          
          <h3 className="text-xl font-semibold mb-2 text-pink-700 group-hover:text-pink-900 transition">Assignment Manager</h3>
          <p className="text-slate-600 text-sm mb-4">Educators can create, assign, and track classroom tasks. Students get a clear view of what's due.</p>
          <Link href="/dashboard/assignments" className="text-sm font-medium text-pink-600 hover:underline">
            Manage Assignments &rarr;
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition group">
          
          <h3 className="text-xl font-semibold mb-2 text-emerald-700 group-hover:text-emerald-900 transition">Project Templates</h3>
          <p className="text-slate-600 text-sm mb-4">Start fast with customizable templates for common projects, lessons, and study plans.</p>
          <Link href="/dashboard/templates" className="text-sm font-medium text-emerald-600 hover:underline">
            Browse Templates &rarr;
          </Link>
        </div>
      </section>
      <section className="w-full max-w-3xl mt-20 bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Onboarding: Choose Your Journey</h2>
          <p className="mb-4 text-slate-700">
            Get started as an <span className="font-semibold text-blue-700">Educator</span> or <span className="font-semibold text-pink-700">Student</span>. Your experience will be personalized to your needs.
          </p>
          <div className="flex gap-4">
            <Link href="/(auth-pages)/sign-in?role=educator" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">I'm an Educator</Link>
            <Link href="/(auth-pages)/sign-in?role=student" className="px-5 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition">I'm a Student</Link>
          </div>
        </div>
        
      </section>
    </main>
  );
}
