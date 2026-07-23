import PageHeader from "../components/PageHeader";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Use analytics to monitor workforce health and performance."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Employee Growth</h2>
          <div className="mt-4 h-40 rounded-2xl bg-slate-50" />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Salary Statistics</h2>
          <div className="mt-4 h-40 rounded-2xl bg-slate-50" />
        </div>
      </div>
    </div>
  );
}
