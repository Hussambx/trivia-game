import React from "react";

export default function Questions(props){
    let buttons = ["b11","b12","b13","b14"]
    let answer = props.correctanswer;
    let correct =false;
    let nomore = false
   const [selected, SetSelected] = React.useState(5);
    const[qorder,SetOrder] = React.useState(props.questions);

   React.useEffect(() => {
   props.handin == true ? nomore = true:nomore = false;
 
}, [props.handin])


React.useEffect(() => {
    if(props.handin==false){
        SetOrder(prevState=> props.questions.slice())
     
    }
   
}, [props.questions])
      
React.useEffect(() => {
    SetSelected(-1);
   
}, [props.newgame])



   
    
    function picked(num){
        if(nomore==false){
            SetSelected(num);
            props.questions[selected] == answer?  correct=true:correct =false;
        }
    }
   

  
return(
    <>
    <h2>{props.mainquestion}</h2>
    <div className="options">
    {qorder[0]!=null && <button className="b11" style={{background:selected==0 && props.handin==false?"DarkGrey": props.handin==true && selected==0 && qorder[0]==props.correctanswer? "Green":props.handin==true && selected==0 && qorder[0]!=props.correctanswer?"Red": props.handin==true&&qorder[0]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(0)} onMouseDown={props.questions[0]==props.correctanswer? props.handleClick:console.log()} >{qorder[0]}</button>}
    {qorder[1]!=null &&  <button className="b12" style={{background:selected==1 && props.handin==false?"DarkGrey": props.handin==true && selected==1 && qorder[1]==props.correctanswer? "Green":props.handin==true && selected==1 && qorder[1]!=props.correctanswer?"Red": props.handin==true&&qorder[1]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(1)} onMouseDown={qorder[1]==props.correctanswer? props.handleClick:console.log()}>{qorder[1]}</button>}
    {qorder[2]!=null && <button className="b13" style={{background:selected==2 && props.handin==false?"DarkGrey": props.handin==true && selected==2 && qorder[2]==props.correctanswer? "Green":props.handin==true && selected==2 && qorder[2]!=props.correctanswer?"Red": props.handin==true&&qorder[2]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(2)} onMouseDown={qorder[2]==props.correctanswer? props.handleClick:console.log()}>{qorder[2]}</button>}
    {qorder[3]!=null && <button className="b14" style={{background:selected==3 && props.handin==false?"DarkGrey": props.handin==true && selected==3 && qorder[3]==props.correctanswer? "Green":props.handin==true && selected==3 && qorder[3]!=props.correctanswer?"Red": props.handin==true&&qorder[3]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(3)} onMouseDown={qorder[3]==props.correctanswer? props.handleClick:console.log()}>{qorder[3]}</button>}
    </div>
    <hr></hr>
    </>
    

)


}