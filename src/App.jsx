import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from "./components/StartScreen"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Start/>
      <h1>Test</h1>
    </div>
  )
}

export default App
