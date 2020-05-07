import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class PersonCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentAge: this.props.age
    };
  }
  birthday = () => {
    this.state.currentAge < 100 ? this.setState({ currentAge: this.state.currentAge + 1 }) : alert("You have lived a full life \nBonvoyage");
  }
  render() {
    return (
      
      <div className="card card col-sm-4 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-primary">
              Name:{ " " }
              {this.props.firstName} { " " }
              {this.props.lastName}
            </h2>
          </div>
          <p className="card-text">Age: {this.state.currentAge}</p>
          <p className="card-text">Hair Color: {this.props.hairColor}</p>
          <button
            onClick= {this.birthday}
            className="btn btn-outline-primary">
            birthday
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;  