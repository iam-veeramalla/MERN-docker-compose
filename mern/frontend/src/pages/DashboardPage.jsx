import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const metrics = [
  { title: "Total Employees", value: "248", subtitle: "+12% from last quarter", tone: "cyan" },
  { title: "Active Employees", value: "236", subtitle: "95% engagement", tone: "emerald" },
  { title: "Inactive Employees", value: "12", subtitle: "Pending review", tone: "amber" },
  { title: "Departments", value: "8", subtitle: "Across 3 regions", tone: "violet" },
];

const recentEmployees = [
  { name: "Ava Patel", department: "Engineering", status: "Active" },
  { name: "Marcus Lee", department: "Finance", status: "On Leave" },
  { name: "Sofia Chen", department: "People Ops", status: "Active" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Welcome back, Olivia"
        description="Here is your people operations snapshot for today."
        actions={[
          <button key="1" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">New Hire</button>,
          <button key="2" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Export Report</button>,
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Employee Growth</h2>
              <p className="text-sm text-slate-500">Quarterly hiring and retained team size</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">+18.4%</span>
          </div>
          <div className="flex h-48 items-end justify-between gap-3 rounded-2xl bg-slate-50 p-4">
            {[42, 58, 71, 83, 96, 110, 124].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-cyan-300" style={{ height: `${height}px` }} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
          <div className="mt-4 space-y-3">
            {['Add Employee', 'Approve Leave', 'Run Payroll', 'Create Report'].map((action) => (
              <button key={action} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700">
                <span>{action}</span>
                <span>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Recent Employees</h2>
              <p className="text-sm text-slate-500">New additions and status updates</p>
            </div>
          </div>
          <div className="space-y-3">
            {recentEmployees.map((person) => (
              <div key={person.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-medium text-slate-900">{person.name}</p>
                  <p className="text-sm text-slate-500">{person.department}</p>
                </div>
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{person.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Department Distribution</h2>
          <div className="mt-6 space-y-4">
            {[
              { name: 'Engineering', value: '38%' },
              { name: 'Sales', value: '24%' },
              { name: 'Operations', value: '18%' },
              { name: 'Finance', value: '20%' },
            ].map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-cyan-500" style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
