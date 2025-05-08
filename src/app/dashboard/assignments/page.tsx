import Link from "next/link";
import Image from "next/image";

export default function AssignmentsPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mb-10 flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/4145199/pexels-photo-4145199.jpeg?auto=compress&w=64&q=80" width={64} height={64} alt="Assignments" className="rounded-lg"/>
        <div>
          <h1 className="text-3xl font-bold text-pink-700">Assignment Manager</h1>
          <p className="text-slate-700">Create, assign, and track classroom assignments with ease.</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-slate-800">Your Assignments</h2>
        <p className="mb-4 text-slate-600">
          No assignments yet. <Link href="/dashboard/assignments/new" className="text-blue-600 hover:underline">Create your first assignment</Link>
        </p>
        {/* Assignment list will go here in future implementation */}
      </div>
      <div className="flex gap-4">
        <Link href="/dashboard/assignments/new" className="px-5 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition shadow">
          + New Assignment
        </Link>
        <Link href="/dashboard" className="px-5 py-2 rounded-lg bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition shadow">
          Back to Dashboard
        </Link>
      </div>
    </section>
  );
}
