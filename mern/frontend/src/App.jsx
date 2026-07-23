import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Employee Management</p>
                <h1 className="text-lg font-semibold text-slate-800">Dashboard</h1>
              </div>
              <div className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
                HR Portal
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 lg:p-8">
            <Breadcrumbs />
            <Outlet />
          </main>

          <footer className="border-t border-slate-200 bg-white px-6 py-4 text-sm text-slate-500">
            Employee Records Management System
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
