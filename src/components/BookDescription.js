import React from 'react';
import {useLocation} from "react-router-dom";

export default function BookDescription() {

  const location = useLocation();
  
  return (
    <>
    <div>
        <h1>Description of {location.state.title}</h1>
        <h5>{location.state.description}</h5>
    </div>
    </>
  )
}
