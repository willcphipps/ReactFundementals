import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const FunctionalPerson = ({ firstName, lastName, age, hairColor }) => {
  const [currentAge, setCurrentAge] = useState(age);
  
  const birthday = () => {
    currentAge < 100 ? setCurrentAge(currentAge + 1) : alert(`you have had a good life ${firstName}, \nyour hair was always so ${hairColor}`)
  }
    return (
      <div className="card card col-sm-4 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-success">
              Name:{" "}
              {firstName} {" "}
              {lastName}
            </h2>
          </div>
          <p className="card-text">Age: {currentAge}</p>
          <p className="card-text">Hair Color: {hairColor}</p>
          <button
            onClick={ birthday }
            className="btn btn-outline-primary">
            birthday
        </button>
        </div>
      </div>
    );
  }

export default FunctionalPerson;