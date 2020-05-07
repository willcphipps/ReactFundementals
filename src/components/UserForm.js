import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

    
const UserForm = ({ fname, lname, handleFirst, handleLast, addUser}) => {

    return (
        <form onSubmit = {(e) => addUser(e)}>
            <input
                type="text"
                name="firstName"
                value={fname}
                placeholder="First Name:"
                onChange = {(e) => handleFirst(e.target.value)}
            />
            <input
                type="text"
                name="lastName"
                value={lname}
                placeholder="First Name:"
                onChange = {(e) => handleLast(e.target.value)}
            />
            <input
                type="submit"
                value="submit"
            />
        </form>
    )
}


export default UserForm;