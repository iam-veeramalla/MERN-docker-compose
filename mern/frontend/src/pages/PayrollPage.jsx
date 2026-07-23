import PageHeader from "../components/PageHeader";

const payrollRows = [
  { name: "Ava Patel", month: "July", salary: "$7,200", bonus: "$600", deduction: "$120", net: "$7,680" },
  { name: "Marcus Lee", month: "July", salary: "$5,800", bonus: "$300", deduction: "$90", net: "$6,010" },
];

export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Payroll"
        description="Review monthly pay, allowances, deductions, and salary summaries."
        actions={[<button key="1" className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Generate Payslip</button>]}
      />
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Employee</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Month</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Base Salary</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Bonus</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Deduction</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {payrollRows.map((row) => (
              <tr key={row.name} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                <td className="px-4 py-3 text-slate-600">{row.month}</td>
                <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                <td className="px-4 py-3 text-slate-600">{row.bonus}</td>
                <td className="px-4 py-3 text-slate-600">{row.deduction}</td>
                <td className="px-4 py-3 font-semibold text-emerald-700">{row.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
