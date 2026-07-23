import PageHeader from "../components/PageHeader";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Attendance"
        description="Track clock-ins, attendance history, and team punctuality."
        actions={[<button key="1" className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Clock In</button>]}
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Today’s Attendance</h2>
          <div className="mt-4 space-y-3">
            {['Ava Patel', 'Marcus Lee', 'Sofia Chen'].map((person) => (
              <div key={person} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span className="font-medium text-slate-900">{person}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Present</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Attendance Statistics</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Attendance rate</p><p className="text-2xl font-semibold text-slate-900">94.2%</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Late arrivals</p><p className="text-2xl font-semibold text-slate-900">6</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Absences</p><p className="text-2xl font-semibold text-slate-900">3</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
