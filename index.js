// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "1234 W. Main St. TestTown, IL 50011"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = getEmployeeCopy(employee);
    newEmployee[key] = value;
    return newEmployee;
}

function getEmployeeCopy(employee) {
    return {...employee};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = getEmployeeCopy(employee);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}