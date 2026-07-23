/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";

const Record = ({ record, deleteRecord, isDeleting }) => (
  <tr className="border-b border-slate-200 bg-white text-sm text-slate-700">
    <td className="px-4 py-3">{record.name}</td>
    <td className="px-4 py-3">{record.position}</td>
    <td className="px-4 py-3">{record.level}</td>
    <td className="px-4 py-3">
      <div className="flex gap-2">
        <Link
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
          to={`/edit/${record._id}`}
        >
          Edit
        </Link>
        <button
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          onClick={() => deleteRecord(record._id)}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </td>
  </tr>
);

export default function RecordList({ refreshTrigger = 0 }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  async function fetchRecords() {
    try {
      setLoading(true);
      setError("");
      const data = await api.get("/record");
      setRecords(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Unable to load employee records.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecords();
  }, [refreshTrigger]);

  async function deleteRecord(id) {
    try {
      setDeletingId(id);
      setError("");
      setSuccessMessage("");
      await api.delete(`/record/${id}`);
      setSuccessMessage("Employee deleted successfully.");
      await fetchRecords();
    } catch (err) {
      setError(err.message || "Unable to delete the employee record.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Employee List</h3>
        <p className="text-sm text-slate-500">Current records in the system.</p>
      </div>

      {error ? <div className="mb-4 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
      {successMessage ? <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{successMessage}</div> : null}

      <div className="overflow-hidden rounded-md border border-slate-200">
        {loading ? (
          <div className="p-4 text-sm text-slate-500">Loading records...</div>
        ) : records.length === 0 ? (
          <div className="p-4 text-sm text-slate-500">No employee records found yet.</div>
        ) : (
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Position</th>
                <th className="px-4 py-3 font-medium">Level</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <Record
                  record={record}
                  deleteRecord={() => deleteRecord(record._id)}
                  isDeleting={deletingId === record._id}
                  key={record._id}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
