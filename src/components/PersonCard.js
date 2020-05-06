import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class PersonCard extends Component{
  render() {
    return (
      <div className="card card col-sm-4 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2 className="bg-primary">
              name:
              { this.props.firstName } 
              {this.props.lastName}
            </h2>
          </div>
          <p className="card-text">Age: {this.props.age}</p>
          <p className="card-text">Hair Color: {this.props.hairColor}</p>
        </div>
      </div>
    );
  }
}

export default PersonCard;  