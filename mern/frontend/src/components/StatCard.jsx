export default function StatCard({ title, value, subtitle, tone = "cyan" }) {
  const tones = {
    cyan: "from-cyan-500/15 to-cyan-500/5 text-cyan-700",
    emerald: "from-emerald-500/15 to-emerald-500/5 text-emerald-700",
    violet: "from-violet-500/15 to-violet-500/5 text-violet-700",
    amber: "from-amber-500/15 to-amber-500/5 text-amber-700",
    rose: "from-rose-500/15 to-rose-500/5 text-rose-700",
  };

  return (
    <div className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${tones[tone] || tones.cyan} p-5 shadow-sm`}>
      <p className="text-sm font-medium text-slate-600">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
