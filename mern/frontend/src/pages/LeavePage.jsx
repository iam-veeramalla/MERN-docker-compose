import PageHeader from "../components/PageHeader";

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Leave Management"
        description="Handle requests, balances, approvals, and absence planning."
        actions={[<button key="1" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Request Leave</button>]}
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Pending Requests</h2>
          <div className="mt-4 space-y-3">
            {['Sofia Chen • Sick Leave', 'Marcus Lee • Annual Leave'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span className="font-medium text-slate-900">{item}</span>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">Approve</button>
                  <button className="rounded-lg bg-rose-600 px-3 py-2 text-sm font-semibold text-white">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Leave Balance</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Annual leave</p><p className="text-2xl font-semibold text-slate-900">18 days</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Sick leave</p><p className="text-2xl font-semibold text-slate-900">8 days</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Pending</p><p className="text-2xl font-semibold text-slate-900">2 requests</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
