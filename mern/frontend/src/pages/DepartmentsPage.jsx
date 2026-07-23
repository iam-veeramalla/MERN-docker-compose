import PageHeader from "../components/PageHeader";

const departments = [
  { name: "Engineering", manager: "Mina Torres", budget: "$1.2M", employees: 68, description: "Product and platform development" },
  { name: "Sales", manager: "Drew Brooks", budget: "$640K", employees: 42, description: "Revenue growth and partnerships" },
  { name: "Finance", manager: "Talia Nguyen", budget: "$420K", employees: 21, description: "Planning and controls" },
];

export default function DepartmentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Departments"
        description="Track organizational structure, staffing, and budgets."
        actions={[<button key="1" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add Department</button>]}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {departments.map((department) => (
          <div key={department.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">{department.name}</h2>
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{department.employees} employees</span>
            </div>
            <p className="mt-3 text-sm text-slate-500">{department.description}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Manager:</span> {department.manager}</p>
              <p><span className="font-semibold text-slate-900">Budget:</span> {department.budget}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
