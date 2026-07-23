import PageHeader from "../components/PageHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Configure company profile, preferences, and account security."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Company Information</h2>
          <div className="mt-4 space-y-3">
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Company name" />
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Primary contact" />
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Preferences</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span>Dark mode</span><input type="checkbox" /></label>
            <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span>Email notifications</span><input type="checkbox" defaultChecked /></label>
          </div>
        </div>
      </div>
    </div>
  );
}
