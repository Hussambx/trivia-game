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
            console.log(data.results[0]);
        }
        getQuestions()
    }, [])
    
 
  return (
    <div className="App">
       {isShown &&<Start handleClick ={toggle}/>}
       {isShown==false && <Questions/>}
    </div>
  )
}

export default App
