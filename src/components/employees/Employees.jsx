import React, { Component } from 'react';

class Employees extends Component {
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
    <tr>
      <td><img src="https://www.placecage.com/50/50" alt="Nic Cage"></img></td>
      <td>Nicolas Cage</td>
      <td>(303) 410-9936</td>
      <td>nic@niciscool.com</td>
      <td>12-12-1966</td>
    </tr>
    <tr>
      <td><img src="http://placekitten.com/g/50/50" alt="Cool Cat"></img></td>
      <td>Cool Cat</td>
      <td>(303) 410-9937</td>
      <td>cat@niciscool.com</td>
      <td>09-20-1988</td>
    </tr>

  </tbody>
</table>
            </div>
        );
    }
}

export default Employees;