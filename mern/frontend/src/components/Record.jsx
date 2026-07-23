import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../lib/api";
import RecordList from "./RecordList";

const initialForm = {
  name: "",
  position: "",
  level: "",
};

export default function Record() {
  const [form, setForm] = useState(initialForm);
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [refreshKey, setRefreshKey] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString();
      if (!id) {
        setIsNew(true);
        setForm(initialForm);
        setMessage({ type: "", text: "" });
        return;
      }

      try {
        setLoading(true);
        setMessage({ type: "", text: "" });
        const record = await api.get(`/record/${id}`);
        if (!record) {
          setMessage({ type: "error", text: "Record not found." });
          navigate("/create", { replace: true });
          return;
        }

        setIsNew(false);
        setForm({
          name: record.name || "",
          position: record.position || "",
          level: record.level || "",
        });
      } catch (error) {
        setMessage({ type: "error", text: error.message || "Unable to load the employee record." });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.position || !form.level) {
      setMessage({ type: "error", text: "Please fill in all fields before saving." });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: "", text: "" });

      if (isNew) {
        await api.post("/record", form);
      } else {
        await api.put(`/record/${params.id}`, form);
      }

      setMessage({
        type: "success",
        text: isNew ? "Employee added successfully." : "Employee updated successfully.",
      });
      setForm(initialForm);
      setIsNew(true);
      setRefreshKey((value) => value + 1);
      navigate("/create", { replace: true });
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Unable to save the employee record." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">Employee Records</h2>
        <p className="mt-1 text-sm text-slate-500">Add, update, and manage employee details.</p>

        {message.text ? (
          <div className={`mt-4 rounded-md border px-3 py-2 text-sm ${message.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`}>
            {message.text}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
                placeholder="Enter name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
              />
            </div>
            <div>
              <label htmlFor="position" className="mb-1 block text-sm font-medium text-slate-700">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                value={form.position}
                onChange={(e) => updateForm({ position: e.target.value })}
                placeholder="Enter position"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
              />
            </div>
            <div>
              <label htmlFor="level" className="mb-1 block text-sm font-medium text-slate-700">Level</label>
              <select
                id="level"
                name="level"
                value={form.level}
                onChange={(e) => updateForm({ level: e.target.value })}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
              >
                <option value="">Select level</option>
                <option value="Intern">Intern</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-md border border-slate-300 bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Saving..." : isNew ? "Add Employee" : "Update Employee"}
          </button>
        </form>
      </div>

      <RecordList refreshTrigger={refreshKey} />
    </div>
  );
}
