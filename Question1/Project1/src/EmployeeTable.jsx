const employees = [
  { id: 1, name: 'Ava Patel', department: 'Engineering', salary: 72000 },
  { id: 2, name: 'Noah Kim', department: 'Sales', salary: 48000 },
  { id: 3, name: 'Mia Chen', department: 'Design', salary: 56000 },
]

function EmployeeTable() {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr
            key={employee.id}
            style={{
              backgroundColor: employee.salary > 50000 ? '#d9f2d9' : 'white',
            }}
          >
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>${employee.salary.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeTable
