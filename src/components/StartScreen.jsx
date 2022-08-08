import React from "react"
import blob from '../assets/blobs@2x.png'
import blob2 from "../assets/blob2"
export default function StartScreen(){
return(
    <>
    <img src={blob}></img>
    <h1>Quizzical</h1>
    <h4>Test Your Knowledge</h4>
    <button type="button">Start Quiz</button>
    <img src={blob2}></img>
    </>
)






}