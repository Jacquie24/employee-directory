import React, { Component } from 'react';
import axios from "axios";
import EmployeesRow from "./EmployeesRow";
import SearchBar from "../SearchBar/SearchBar";

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

      searchEmp = (e) => {
            const searchString = e.target.value.toLowerCase();
            const searchArray = this.state.employees.filter(employee => {
              return (
                employee.name.first.toLowerCase().includes(searchString) ||
                employee.name.last.toLowerCase().includes(searchString)
              );
            });
            console.log(searchString);
            console.log(searchArray);
            this.setState({
                filterEmployees: searchArray
            })
// What goes here??? .map over searchArray?
      }

    
    render() {
        return (
                <div className="container">
<SearchBar handleChange={this.searchEmp}/>

                <table className="table mt-5">
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