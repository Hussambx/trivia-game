import React from "react"
export default function StartScreen(props){
return(
    <>
    <h1>Quizzical</h1>
    <h4>Test Your Knowledge</h4>
    <button className="b1" type="button" onClick={props.handleClick}>Start Quiz</button>
    </>
)






}