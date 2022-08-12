import { useState } from 'react'
import Start from "./components/StartScreen"
import Questions from "./components/Questions"
import React from "react"

function App() {
  const [correctcount, setCount] = React.useState([false,false,false,false,false]) //This state is the array that keeps track of the amount of amount of selected correct answers 
  const [isShown, SetShow] = React.useState(true) //This state updates once the user hits startquiz it switchs the screens to the quiz screen
  const [apidata, SetData] = React.useState([]) //This state saves the api data fetched from the server
  const [checkanswers,SetAnswers] = React.useState(false);  //This state updates to true once the player selects "check answers"
  const[refresh,SetRefresh] =React.useState(false); //This state updates everytime the user hits "play again", causing new api data to be fetched
  const[finalscore,SetScore] =React.useState(0); //This state keeps track of the final score of the player 
  let keyx = 0;

  //This function switchs from startscreen to question screen 
  function toggle(){
    console.log("mandem");
    SetShow(prevState => !prevState)
  }

  //This function fetchs the data from the trivia api and places it into the apidata state
  React.useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5")
            const data = await res.json()
            console.log(data.results);
            SetData(data.results);
        }
        getQuestions()
    }, [refresh])
  

    
//This function triggers once the user has pressed on check answers, it then goes through the correct count array and totals the # of 
// correct answers and sets that amount into the setscore state for it to render 
    function done(){
      if(checkanswers==false){
        let a = 0;
        correctcount.forEach(element => {
          if(element==true){
            a++
            SetScore(prevState=>a);
          }
        });
        console.log(finalscore);
        SetAnswers(prevState=>!prevState);
      }
    
    }

    //This function triggers once the user clicks playagain, it resets the refresh state which then triggers the api fetch function and it sets the # of correct answers to zero
    function playagain(){
      SetAnswers(prevState=>false);
      SetRefresh(prevState => !prevState);
      SetScore(prevState=>0);
      setCount(prevState=>[false,false,false,false,false]);
    }
    
    //This function goes through each instance of api data, it randomly sorts the questions and then using props its sent to the questions.jsx 
    const questionsdata = apidata.map(travel=>{
      let questionsx = [travel.incorrect_answers[0],travel.incorrect_answers[1],travel.incorrect_answers[2],travel.correct_answer]
      
      //For statement below randomly sorts the questionsx array^
      //It basically loops through each instance of the array and basically sorts it using a random number within the array.length 
      for(let x =0; x<4; x++){
        let rando =[Math.floor(Math.random() * 4)]
        if(rando==x){
            rando =[Math.floor(Math.random() * 4)]
        }
        let first = questionsx[x];
        let picked = questionsx[rando];
        questionsx[rando] = first;
        questionsx[x] = picked;
    }

    //Returns the given data and sends it to questions.jsx 
      return(
        <Questions
        key = {keyx++}
        id = {keyx}
        mainquestion = {travel.question}
        correctanswer = {travel.correct_answer}
        questions = {questionsx}
        handin={checkanswers}
        newgame={refresh}
        trackstats={correctcount}
      />
      )
     })

 //div className "ba" contains the check answers button
 //div class results contains the playagain button as well as the total #of correct answers 
 //each of those are conditonally render 
  return (
    <div className="App">
       {isShown &&<Start handleClick ={toggle}/>}
         {!isShown&& questionsdata}


      <div className='ba'>
       {!checkanswers&& !isShown && <button type='submit' onClick={done} className="checkall"> Check Answers</button>} 
      </div>

      <div className='results'>
       {checkanswers && <h2>You Scored {finalscore}/5 answers correct!</h2>} 
        {checkanswers && <button type="submit" className="checkall" onClick={playagain}>Play Again?</button>}
      </div>
    </div>
  )
}

export default App
