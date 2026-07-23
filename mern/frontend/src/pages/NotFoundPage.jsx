import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-5xl font-semibold text-slate-900">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-slate-500">The page you are looking for could not be found. Return to the dashboard to continue.</p>
      <Link to="/" className="mt-6 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">Back to dashboard</Link>
    </div>
  );
}
