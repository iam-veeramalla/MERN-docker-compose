import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import employees from "./routes/employees.js";
import departments from "./routes/departments.js";
import attendance from "./routes/attendance.js";
import leave from "./routes/leave.js";
import payroll from "./routes/payroll.js";
import reports from "./routes/reports.js";
import settings from "./routes/settings.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/employees", employees);
app.use("/departments", departments);
app.use("/attendance", attendance);
app.use("/leave", leave);
app.use("/payroll", payroll);
app.use("/reports", reports);
app.use("/settings", settings);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
