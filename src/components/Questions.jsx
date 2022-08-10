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
    <h2>Hi This Is My Test Question</h2>
    <div className="options">
    <button className="b11">Q1</button>
    <button className="b12">Q1</button>
    <button className="b13">Q1</button>
    <button className="b14">Q1</button>
    </div>
    </>
    

)


}