// Write your solution in this file!
const employee = {
    name: 'name1',
    streetAddress: 'address1',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
    ...employee,
    [key]: value,
   };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key1, value1) {
    employee[key1] = value1;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {...employee};
   delete newEmployee[key];
   return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}