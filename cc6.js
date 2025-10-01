class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in ${this.department}`;
  }
}

//Employee Subclass
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
  }
}

//Sample Staff
const employees = [
  new Employee("John", "Mathematics"),
  new Employee("Pete", "English"),

  new Manager("Kenya", "Mathematics", 30),
  new Manager("Zara", "English", 15)
];

for (let emp of employees) {
  console.log(emp.describe());
}

//New class - step 5
class Company {
  constructor(employees) {
}

  addEmployee(employee) {
  }
  listEmployees() {
    return `${this.name} works in ${this.department}`;
  }
}

//Step 6
const Company = {
  describe() {
    return listEmployees();
  }
}
