const departments = [
  { _id: 'dept-1', name: 'Engineering', manager: 'Mina Torres', budget: '$1.2M', employees: 68, description: 'Product and platform development' },
  { _id: 'dept-2', name: 'Sales', manager: 'Drew Brooks', budget: '$640K', employees: 42, description: 'Revenue growth and partnerships' },
  { _id: 'dept-3', name: 'Finance', manager: 'Talia Nguyen', budget: '$420K', employees: 21, description: 'Planning and controls' },
];

export const listDepartments = (_req, res) => {
  res.status(200).json(departments);
};

export const createDepartment = (req, res) => {
  const department = { _id: `dept-${Date.now()}`, ...req.body };
  departments.push(department);
  res.status(201).json(department);
};
