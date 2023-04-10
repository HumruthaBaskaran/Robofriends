import React from "react";
import 'tachyons';


function RoboCard({id, name, email}){
return (
 <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
)
}

export default RoboCard