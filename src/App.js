// import MyNewComp from './components/MyNewComp';
// import PersonCard from './components/PersonCard';
// import FunctionalPerson from './components/FunctionalPerson';
import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Display from './components/Display'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let person = { fname: firstName, lname: lastName };
    setUsers(oldUsers => [...oldUsers, person]);
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="App">
      {/* <MyNewComp /> */}
      <div className="m-5 test-center">
        <UserForm
          fname={firstName}
          lname={lastName}
          handleFirst={setFirstName}
          handleLast={setLastName}
          addUser={handleSubmit}
        />
      </div>
      {
        users.map((user,idx) => {
          return <Display
            fname={user.fname}
            lname = {user.lname}
              />
        })
      }
      <div className="justify-content-center row m-5">
        {/* <PersonCard firstName="John" lastName="Walsh" age={23} hairColor="Red"/>
        <PersonCard firstName="Mark" lastName="Young" age={43} hairColor="Blue"/>
        <PersonCard firstName="Sammie" lastName="Eurendomunch" age={87} hairColor="Brown"/>
        <PersonCard firstName="Mandy" lastName="Flashero" age={12} hairColor="Purple and sometimes green(mood depending)"/>
         */}
        
        {/* <FunctionalPerson firstName="John" lastName="Walsh" age={23} hairColor="Red"/>
        <FunctionalPerson firstName="Mark" lastName="Young" age={43} hairColor="Blue"/>
        <FunctionalPerson firstName="Sammie" lastName="Eurendomunch" age={87} hairColor="Brown"/>
        <FunctionalPerson firstName="Mandy" lastName="Flashero" age={12} hairColor="Purple and sometimes green(mood depending)"/> */}
      </div>
      
      {/* <Ninja firstName="" lastName="" speed={3} strength={3} health={3}/> */}

    </div>
  );
}

export default App;
