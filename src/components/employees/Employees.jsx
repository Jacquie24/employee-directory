import React, { Component } from 'react';

class Employees extends Component {
    state = {
        employees: [
            {
                image: <img src="https://www.placecage.com/50/50" alt="Nic Cage"></img>,
                name: "Nicolas Cage",
                phone: "(303) 410-9936",
                email: "nic@niciscool.com",
                DOB: "12-12-1966"

            },
            {
                image: <img src="http://placekitten.com/g/50/50" alt="Cool Cat"></img>,
                name: "Cool Cat",
                phone: "(303) 410-9937",
                email: "cat@catiscool.com",
                DOB: "09-20-1988"

            },
        ]
    }
    render() {
        return (
                <div className="container">
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
      {this.state.employees.map((employee) => (
    <tr>
    <td>{employee.image}</td>
    <td>{employee.name}</td>
    <td>{employee.phone}</td>
    <td>{employee.email}</td>
    <td>{employee.DOB}</td>
  </tr>          
      ))}


  </tbody>
</table>
            </div>
        );
    }
}

export default Employees;