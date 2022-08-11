import React from "react";

export default function Questions(props){
    let buttons = ["b11","b12","b13","b14"]
    let answer = props.correctanswer;
    let correct =false;
   const [selected, SetSelected] = React.useState(5);
    

    
    console.log("answer is" +answer)
    function picked(num){
        SetSelected(num);
        props.questions[selected] == answer?  correct=true:correct =false;
        console.log(correct);
    }
   
return(
    <>
    <h2>{props.mainquestion}</h2>
    <div className="options">
    {props.questions[0]!=null && <button className="b11" style={{background:selected==0?"DarkGrey":"LightGrey "}} onClick={() => picked(0)} >{props.questions[0]}</button>}
    {props.questions[1]!=null &&  <button className="b12" style={{background:selected==1?"DarkGrey":"LightGrey "}} onClick={() => picked(1)} >{props.questions[1]}</button>}
    {props.questions[2]!=null && <button className="b13" style={{background:selected==2?"DarkGrey":"LightGrey "}} onClick={() => picked(2)} >{props.questions[2]}</button>}
    {props.questions[3]!=null && <button className="b14" style={{background:selected==3?"DarkGrey":"LightGrey "}} onClick={() => picked(3)} >{props.questions[3]}</button>}
    </div>
    <hr></hr>
    </>
    

)


}