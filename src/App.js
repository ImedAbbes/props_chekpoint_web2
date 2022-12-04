import React from 'react'
import Profile from './Profile/Profile.js'
import img from './Aizen.jpg'
import img2 from './zaraki.jpg'
import img3 from './Yamamoto.webp'

function App() {
  
  const handleName =(e)=>{
    alert(e)
  }
  return (
    <div style={{backgroundColor:"#32213A",padding:"30px",display:"flex"}}>
      <Profile fct={handleName} fullName="Aizen Sosuke" bio=" fictional character from the manga series Bleach" profession="Former captain of 5th Division" >{img}</Profile>
      <Profile fct={handleName} fullName="Kenpachi Zaraki" bio=" fictional character from the manga series Bleach" profession="Captain of 11th Division" >{img2}</Profile>
      <Profile fct={handleName} fullName="Genryûsai Shigekuni Yamamoto" bio=" fictional character from the manga series Bleach" profession="Captain of 1st Division" >{img3}</Profile>

    </div>
  )
}



export default App
