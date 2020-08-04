import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="card" style={{ width: "25%" }}>
      <div className="row no-gutters">
        <div className="col-md-3">
          <img  src={props.image} className="card-img" alt={props.lastName} />
        </div>
        <div className="col-md-6">
          <div className="main-card">
            <div className="return-value">
              <p className= "first-name">
                <strong>Name:</strong>{props.firstName} {props.lastName}
              </p>
              <p className = "location">
                <strong>Location:</strong>{props.location}
              </p>
              <p className="email">
               <strong>E-Mail:</strong>{props.email}
              </p>
              <p className="phone">
                <strong>Phone:</strong>{props.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;