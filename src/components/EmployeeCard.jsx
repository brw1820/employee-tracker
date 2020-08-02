import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img  src={props.img} className="card-img" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="content">
              <h5>
                <strong>{props.name}</strong>
              </h5>
              <p>
                <strong>{props.position}</strong>
              </p>
              <p className="office#">
                office#<strong>{props.office}</strong>
              </p>
              <p className="mobile#">
                mobile#<strong>{props.mobile}</strong>
              </p>
              <p className="email#">
                email:<strong>{props.email}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;