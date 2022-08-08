import React from "react"
import blob from '../assets/blobs@2x.png'
import blob2 from "../assets/blobs.png"
export default function StartScreen(props){
    
return(
    <>
    <h1>Quizzical</h1>
    <h4>Test Your Knowledge</h4>
    <button type="button" onClick={props.handleClick}>Start Quiz</button>
    </>
)






}