import { useState } from 'react'
import './App.css'
import { DropDown } from './shared/components/DropDown/DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DropDown />
    </>
  )
}

export default App
