import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-4xl font-semibold text-slate-900">Oops</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-500">{error?.message || "Unable to render this page right now."}</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">Return home</Link>
      </div>
    </div>
  );
}
