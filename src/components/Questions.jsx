import React from "react";

export default function Questions(props){
    let buttons = ["b11","b12","b13","b14"]
    let questions = [props.questiona,props.questionb,props.questionc,props.correctanswer]

    for(let x =0; x<4; x++){
        let rando =[Math.floor(Math.random() * 4)]
        let first = questions[x];
        let picked = questions[rando];
        questions[rando] = first;
        questions[x] = picked;
        
    }
    console.log(questions);
   
return(
    <>
    <h2>{props.mainquestion}</h2>
    <div className="options">
    {questions[0]!=null ? <button className="b11">{questions[0]}</button>:console.log("no")}
    {questions[1]!=null ?  <button className="b12">{questions[1]}</button>:console.log("no")}
    {questions[2]!=null ? <button className="b13">{questions[2]}</button>:console.log("no")}
    {questions[3]!=null? <button className="b14">{questions[3]}</button>:console.log("no")}
    </div>
    <hr></hr>
    </>
    

)


}