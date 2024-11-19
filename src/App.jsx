import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {
const [AppStart, setAppStart] = useState(false)
  return (
    
    <>
    {! AppStart ?
      (<button onClick={() => setAppStart(true)}>Start Pokemon App</button>):
    (<PokemonApplication/>)
    }
    </>
  )
}

export default App
