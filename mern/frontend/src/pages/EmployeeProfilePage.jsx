import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { api } from "../lib/api";

export default function EmployeeProfilePage() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        setLoading(true);
        const data = await api.get(`/employees/${id}`);
        setEmployee(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadEmployee();
  }, [id]);

  if (loading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-500">Loading profile…</div>;
  }

  if (!employee) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-500">Employee not found.</div>;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={employee.name}
        description={`${employee.department} • ${employee.position}`}
        actions={[<Link key="1" to="/employees" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Back to directory</Link>]}
      />

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-xl font-semibold text-white">{employee.name?.charAt(0) || "E"}</div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{employee.name}</h2>
              <p className="text-sm text-slate-500">{employee.position}</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-900">Employee ID:</span> {employee.employeeId || "—"}</p>
            <p><span className="font-semibold text-slate-900">Email:</span> {employee.email}</p>
            <p><span className="font-semibold text-slate-900">Phone:</span> {employee.phone || "—"}</p>
            <p><span className="font-semibold text-slate-900">Hire Date:</span> {employee.hireDate || "—"}</p>
            <p><span className="font-semibold text-slate-900">Salary:</span> {employee.salary || "—"}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Employment Summary</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Department</p><p className="font-semibold text-slate-900">{employee.department}</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Status</p><p className="font-semibold text-slate-900">{employee.status}</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Attendance</p><p className="font-semibold text-slate-900">94%</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Leave Balance</p><p className="font-semibold text-slate-900">18 days</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
