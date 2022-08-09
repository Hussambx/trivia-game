import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from "./components/StartScreen"
import Questions from "./components/Questions"
import React from "React"
function App() {
  const [count, setCount] = useState(0)
  const [isShown, SetShow] = React.useState(true)

  function toggle(){
    SetShow(prevState => !prevState)
  }
 
  return (
    <div className="App">
       {isShown &&<Start handleClick ={toggle}/>}
       {isShown==false && <Questions/>}
    </div>
  )
}

export default App
