import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Display = ({ fname, lname }) => {
  return (
    <div>
        <div class="">
              <p class="lead">{fname} {" "} {lname} </p>
             
        </div>
    </div>
  );
}
export default Display;