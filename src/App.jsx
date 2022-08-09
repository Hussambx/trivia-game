import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from "./components/StartScreen"
import Questions from "./components/Questions"
import React from "React"
function App() {
  const [count, setCount] = useState(0)
  const [isShown, SetShow] = React.useState(true)
  const [apidata, SetData] = React.useState([])
  function toggle(){
    SetShow(prevState => !prevState)
  }

  React.useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5")
            const data = await res.json()
            console.log(data.results);
            SetData(data.results);
        }
        getQuestions()
    }, [isShown])
    
    const questionsdata = apidata.map(travel=>{
      console.log(travel.correct_answer);
      return(
        <Questions
        mainquestion = {travel.question}
        correctanswer = {travel.correct_answer}
        questiona = {travel.incorrect_answers[0]}
        questionb = {travel.incorrect_answers[1]}
        questionc = {travel.incorrect_answers[2]}
      />
      )
      
    
     })
 
  return (
    <div className="App">
       {isShown &&<Start handleClick ={toggle}/>}
        {questionsdata}
    </div>
  )
}

export default App
