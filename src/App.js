import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNewComp from './components/MyNewComp';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* <MyNewComp /> */}
      .<div class="row m-5">
        <PersonCard 
          firstName="John"
          lastName="Walsh"
          age={23}
          hairColor="Red"
        />
        <PersonCard 
          firstName="Mark"
          lastName="Young"
          age={43}
          hairColor="Blue"
        />
        <PersonCard 
          firstName="Sammie"
          lastName="Eurendomunch"
          age={87}
          hairColor="Brown"
        />
        <PersonCard 
          firstName="Mandy"
          lastName="Flashero"
          age={12}
          hairColor="Purple and sometimes green(mood depending)"
        />
        
      </div>

    </div>
  );
}

export default App;
