import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/", icon: "▣" },
  { label: "Employees", path: "/employees", icon: "👥" },
  { label: "Departments", path: "/departments", icon: "🏢" },
  { label: "Attendance", path: "/attendance", icon: "🕒" },
  { label: "Leave", path: "/leave", icon: "🗓️" },
  { label: "Payroll", path: "/payroll", icon: "💳" },
  { label: "Reports", path: "/reports", icon: "📈" },
  { label: "Settings", path: "/settings", icon: "⚙️" },
  { label: "Help", path: "/help", icon: "❓" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:justify-between border-r border-slate-200 bg-slate-950 text-slate-100">
      <div>
        <div className="px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-xl">🏢</div>
            <div>
              <p className="text-lg font-semibold">Northstar HR</p>
              <p className="text-sm text-slate-400">People Ops Suite</p>
            </div>
          </div>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? "bg-cyan-500 text-white shadow-lg" : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="m-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">Need support?</p>
        <p className="mt-1 text-slate-400">Open a help request or review employee policies.</p>
        <button className="mt-3 rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-white">Contact HR</button>
      </div>
    </aside>
  );
}
