import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { api } from "../lib/api";

const initialForm = {
  name: "",
  email: "",
  department: "Engineering",
  position: "Software Engineer",
  status: "Active",
  salary: "",
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [query, setQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      setLoading(true);
      const data = await api.get("/employees");
      setEmployees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesQuery = `${employee.name} ${employee.email} ${employee.position}`.toLowerCase().includes(query.toLowerCase());
      const matchesDepartment = filterDepartment === "All" || employee.department === filterDepartment;
      const matchesStatus = filterStatus === "All" || employee.status === filterStatus;
      return matchesQuery && matchesDepartment && matchesStatus;
    });
  }, [employees, filterDepartment, filterStatus, query]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/employees", form);
      setForm(initialForm);
      loadEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/employees/${id}`);
      loadEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Employee Management"
        description="Manage employee records, departments, and people operations workflows."
        actions={[
          <button key="1" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Export CSV</button>,
          <button key="2" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Print List</button>,
        ]}
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Add Employee</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <div className="grid gap-4 md:grid-cols-2">
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })}>
                <option>Engineering</option>
                <option>Sales</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>People Ops</option>
              </select>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} required />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Salary" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} required />
            </div>
            <button className="rounded-xl bg-cyan-600 px-4 py-2 font-semibold text-white">Save Employee</button>
          </form>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Employee Directory</h2>
              <p className="text-sm text-slate-500">Search, filter, and manage your team</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-3 md:flex-row">
            <input className="flex-1 rounded-xl border border-slate-200 px-3 py-2" placeholder="Search employee" value={query} onChange={(e) => setQuery(e.target.value)} />
            <select className="rounded-xl border border-slate-200 px-3 py-2" value={filterDepartment} onChange={(e) => setFilterDepartment(e.target.value)}>
              <option>All</option>
              <option>Engineering</option>
              <option>Sales</option>
              <option>Finance</option>
              <option>Operations</option>
              <option>People Ops</option>
            </select>
            <select className="rounded-xl border border-slate-200 px-3 py-2" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option>All</option>
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select>
          </div>
          {loading ? (
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">Loading employees…</div>
          ) : (
            <div className="space-y-3">
              {filteredEmployees.map((employee) => (
                <div key={employee._id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                  <Link to={`/employees/${employee._id}`} className="flex-1">
                    <div>
                      <p className="font-semibold text-slate-900">{employee.name}</p>
                      <p className="text-sm text-slate-500">{employee.position} • {employee.department}</p>
                      <p className="text-sm text-slate-500">{employee.email}</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{employee.status}</span>
                    <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700" onClick={() => handleDelete(employee._id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
