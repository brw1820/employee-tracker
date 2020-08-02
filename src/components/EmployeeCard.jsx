
import React from "react";


const EmployeeCard = (props) => {
    return (
        <div className="card">
            <div className="img-container">
        <img alt="" src=""/>
      </div>
      <div className="content">
        <ul>
          <li>
            <p>First Name:</p> {props.firstName} <p>Last Name:</p> {props.lastName}
          </li>
          <li>
            <p>Email:</p> {props.email}
          </li>
        </ul>
      </div>            
        </div>
    );
};

export default EmployeeCard;
import React from "react";
