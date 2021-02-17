import React, { Component } from 'react';
import axios from "axios";
import EmployeesRow from "./EmployeesRow";

class Employees extends Component {
    state = {
        employees: [
        ],
        filterEmployees: []
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=25&nat=us")
      .then((response) => {
        console.log(response.data.results);
            this.setState({
              employees: response.data.results,
              filterEmployees: response.data.results
            });
            // this.nameSort();
          })
          .catch((err) => console.log(err));
      }

    
      // Changes state when an input change occurs
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      }

      nameSort = () => {
          const sortedArray = this.state.employees.sort(function (a,b) {
            var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

          this.setState({
              filterEmployees: sortedArray
          })

      }

      

    
    render() {
        return (
                <div className="container">
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name<i className="fa fa-arrow-circle-down" aria-hidden="true" onClick={this.nameSort}></i></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
      <EmployeesRow employees={this.state.filterEmployees}/>

</table>
            </div>
        );
    }
}

export default Employees;