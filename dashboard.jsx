// src/components/Dashboard.js
import React from 'react';

const Dashboard = (props) => {
  console.log(props)
  return (  
      <main className="container">  
      <div>
       <img className="image"
        src={props.img}></img>
        </div>
     <div className="entry">
          <img src="imgs/location.jpeg"></img>
          <span>{props.place}</span>
          <a href={props.location} alt="munner">view on google</a><br />
         <h3>{props.id}</h3> 
         <p>{props.data}</p><br />
        </div>
     </main>
  )
}

 export default Dashboard