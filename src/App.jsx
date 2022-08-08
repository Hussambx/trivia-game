import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from "./components/StartScreen"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Start/>
    </div>
  )
}

export default App
