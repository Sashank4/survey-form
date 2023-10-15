import React from 'react'
import '../component/popup.css'


const popup = (props) => {

   
  return (props.trigger)?
     (
        <div className="popup">
          <div className="popup-content">
            <h2>Check your details once again</h2>
            <p>
              First Name: {props.firstName}
              <br />
              Last Name: {props.lastName}
              <br />
              Date of Birth: {props.date}
              <br />
              Country: {props.country}
              <br />
              Gender: {props.gender}
              <br />
              Email: {props.email}
              <br />
              Mobile Number: {props.number}
            </p>
            <button onClick={() => { props.setTrigger(false); }}>Close</button>
          </div>
        </div>
      ): "";

  
}

export default popup