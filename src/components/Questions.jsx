import React from "react";

export default function Questions(props){
    let buttons = ["b11","b12","b13","b14"]
    let answer = props.correctanswer;
   const [selected, SetSelected] = React.useState(5);
    let questions = [props.questiona,props.questionb,props.questionc,props.correctanswer]

    React.useEffect(() => {
        for(let x =0; x<4; x++){
            let rando =[Math.floor(Math.random() * 4)]
            let first = questions[x];
            let picked = questions[rando];
            questions[rando] = first;
            questions[x] = picked;
            
        }
    }, [buttons])
    

    function picked(num){
        SetSelected(num);
        console.log(num);
        console.log(props.id);
    }
   
return(
    <>
    <h2>{props.mainquestion}</h2>
    <div className="options">
    {questions[0]!=null ? <button className="b11" style={{background:selected==0?"DarkGrey":"LightGrey "}} onClick={() => picked(0)} >{questions[0]}</button>:console.log("no")}
    {questions[1]!=null ?  <button className="b12" style={{background:selected==1?"DarkGrey":"LightGrey "}} onClick={() => picked(1)} >{questions[1]}</button>:console.log("no")}
    {questions[2]!=null ? <button className="b13" style={{background:selected==2?"DarkGrey":"LightGrey "}} onClick={() => picked(2)} >{questions[2]}</button>:console.log("no")}
    {questions[3]!=null? <button className="b14" style={{background:selected==3?"DarkGrey":"LightGrey "}} onClick={() => picked(3)} >{questions[3]}</button>:console.log("no")}
    </div>
    <hr></hr>
    </>
    

)


}