import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";

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

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, search the OMDB API for the value of `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };

  render() {
    return (
        <div className="container">
            <div className="row">
          <div className="col-sm-12">
            <h1>Your Employees</h1>
          </div>
          <div className="col-sm-12">
            <div>
              <h4>Search for an employee: </h4>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleOnChange}
                placeholder="Name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
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