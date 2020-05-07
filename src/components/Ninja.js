import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Ninja.module.css';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: this.props.age
        };
    }
}