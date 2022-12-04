import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div  style={{backgroundColor:"#383B53", maxWidth:"25%", padding:"20px",borderRadius:"20px",margin:"auto",textAlign:"center",fontSize:"1.2em",color:"white",display:"flex",flexDirection:"column"}}>
      Hello, i'm {props.fullName}, {props.bio}, {props.profession}
      <img src={props.children} style={{padding:"20px"}}/>
      <button onClick={()=>{props.fct(props.fullName)}} style={{backgroundColor:"#66717E",color:"white",cursor:"pointer",width:"max-content",padding:"5%",borderRadius:"15px",margin:"auto",border:"none","&:hover":{color:"blue"}}}>Alert my Name</button>
      </div>
  )
}
Profile.defaultProps={
  fullName : "Bleach",
  bio: "a Japanese manga series",
  profession:""
}
Profile.propTypes={
  fullName: PropTypes.string
}

export default Profile
