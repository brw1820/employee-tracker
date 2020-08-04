import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import axios from "axios";
import "./Home.css";

class Homepage extends Component {
  state = {
    searchInput: "",
    employees: [],
    value: "",
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.searchInput);
    this.handleSearchInput();
  };

  handleSearchInput = () => {
    const searchedEmployees = this.state.employees.filter((employee) =>
      employee.name.first.includes(this.state.searchInput)
    );
    console.log(searchedEmployees);
    this.setState({ employees: searchedEmployees });
  };

  sortEmployees = () => {
    const sortedEmployees = this.state.employees.sort(function (a, b) {
      const nameA = a.name.last.toLowerCase();
      const nameB = b.name.last.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
    console.log("click");
  };

  // const sortedEmployees = this.state.employees.sort(compare);

  // this.setState({
  //   employees: sortedEmployees
  // })

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h1>Your Employees</h1>
          </div>
          <div className="col-sm-3">
            <div>
              <h4>Search for an employee: </h4>
              <input
                type="text"
                onChange={this.handleInputChange}
                placeholder="Search for an Employee"
                className="form-control"
                name="searchInput"
              />
              <button onClick={this.sortEmployees}>
                Sort Employee Alphabetically by Last Name
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="employee-container">
              {this.state.employees.map((data) => (
                <EmployeeCard
                  image={data.picture.large}
                  id={data.id.value}
                  firstName={data.name.first}
                  lastName={data.name.last}
                  location={data.location.city}
                  email={data.email}
                  phone={data.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
