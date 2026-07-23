import PageHeader from "../components/PageHeader";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Help Center"
        description="Find guidance, support resources, and HR knowledge articles."
      />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Common resources</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {['Employee handbook', 'Payroll FAQ', 'Leave policy', 'IT support'].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
