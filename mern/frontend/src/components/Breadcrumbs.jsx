import { Link, useLocation } from "react-router-dom";

const labels = {
  "/": "Dashboard",
  "/employees": "Employees",
  "/departments": "Departments",
  "/attendance": "Attendance",
  "/leave": "Leave",
  "/payroll": "Payroll",
  "/reports": "Reports",
  "/settings": "Settings",
  "/help": "Help",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;

  const segments = path.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return { label: labels[href] || segment, href };
  });

  return (
    <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
      <Link to="/" className="font-medium text-slate-700">Home</Link>
      {crumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <span>/</span>
          <Link to={crumb.href} className={index === crumbs.length - 1 ? "font-semibold text-slate-900" : "text-slate-500"}>
            {crumb.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
