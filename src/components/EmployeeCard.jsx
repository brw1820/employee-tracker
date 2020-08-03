import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img  src={props.image} className="card-img" alt={props.lastName} />
        </div>
        <div className="col-md-6">
          <div className="main-card">
            <div className="return-value">
              <p className= "first-name">
                <strong>First Name:</strong>{props.firstName}
              </p>
              <p className = "lastName">
                <strong>Last Name:</strong>{props.lastName}
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