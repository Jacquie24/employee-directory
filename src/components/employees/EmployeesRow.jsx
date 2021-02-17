import React from 'react';

const EmployeesRow = ({employees}) => {
    return (
        <tbody>
            {employees.map((employee) => (
                
                <tr key={employee.id.value}>
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first}></img></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.date.substring(0, 10)}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default EmployeesRow;