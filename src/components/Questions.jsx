import React from "react";

export default function Questions(props){
    let answer = props.correctanswer; //This just saves the correct answer 
    let nomore = false
   const [selected, SetSelected] = React.useState(5); //This state tracks the selected user option
    const[qorder,SetOrder] = React.useState(props.questions); //This state saves the randomized order of each question passed by app.jsx 



    //This useeffect fires everytime that props.handin is changed, props.handin indicated that the check answers button had been pressed
    //It then proceeds to check if the current selected option is correct, and if it is it updates the props.trackstats array state 
   React.useEffect(() => {
   props.handin == true ? nomore = true:nomore = false;
   
   if (props.handin==true){
    if(qorder[selected]==answer){

        props.trackstats[props.id]=true
    }else{
        props.trackstats[props.id]=false;
    }}
}, [props.handin])

//This useEffect fires everytime that props.questions is updated it makes sure that qorder (the array that saves the random order of each set of questions)
//updates accordingly when a new set of questionsdata is passed into cards.jsx
React.useEffect(() => {
    if(props.handin==false){
        SetOrder(prevState=> props.questions.slice())
    }
}, [props.questions])
      
//This fires everytime that props.newgame is changed, this just sets the current selected option to -1 (which means nothing has been selected yet)
React.useEffect(() => {
    SetSelected(-1);
}, [props.newgame])



   
    //this function fires everytime there is a onClick event, what it does it it checks if the selected option is the answer or not
    //if it is the answer it then updatest he prop.trackstats array accordingly using the id(key) passed from .jsx 
    //it also updates the setselected state, which keeps track of the selected option 
    function picked(num){
        if(nomore==false){
            SetSelected(num);
            qorder[num] == answer?  props.trackstats[props.id]=true:props.trackstats[props.id]=false;
        }
    }
   

  //Found within the return is each button, there is a total of 4 buttons
  //it first checks to see if the question actually exists, it makes sure the qorder[num] is not null as sometimes there might be a true or false question
  //after which is then using tenrary statements to check what color backgrounds should each button be 
  //each button also has a onClick which fires picked()
return(
    <>
    <h2>{props.mainquestion}</h2>
    <div className="options">
    {qorder[0]!=null && <button className="b11" style={{background:selected==0 && props.handin==false?"DarkGrey": props.handin==true && selected==0 && qorder[0]==props.correctanswer? "Green":props.handin==true && selected==0 && qorder[0]!=props.correctanswer?"Red": props.handin==true&&qorder[0]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(0)}  >{qorder[0]}</button>}
    {qorder[1]!=null &&  <button className="b12" style={{background:selected==1 && props.handin==false?"DarkGrey": props.handin==true && selected==1 && qorder[1]==props.correctanswer? "Green":props.handin==true && selected==1 && qorder[1]!=props.correctanswer?"Red": props.handin==true&&qorder[1]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(1)} >{qorder[1]}</button>}
    {qorder[2]!=null && <button className="b13" style={{background:selected==2 && props.handin==false?"DarkGrey": props.handin==true && selected==2 && qorder[2]==props.correctanswer? "Green":props.handin==true && selected==2 && qorder[2]!=props.correctanswer?"Red": props.handin==true&&qorder[2]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(2)} >{qorder[2]}</button>}
    {qorder[3]!=null && <button className="b14" style={{background:selected==3 && props.handin==false?"DarkGrey": props.handin==true && selected==3 && qorder[3]==props.correctanswer? "Green":props.handin==true && selected==3 && qorder[3]!=props.correctanswer?"Red": props.handin==true&&qorder[3]==props.correctanswer?"Green":"LightGrey "}} onClick={() => picked(3)} >{qorder[3]}</button>}
    </div>
    <hr></hr>
    </>
    
)


}