import { useState } from "react"
import Drawing from "./Drawing";
import GameWord from "./GameWord";
import Keyboard from "./Keyboard";
import words from './wordList.json'


function App() {
   const [wordsToGuess, setWordsToGuess] = useState(() => {return words[Math.floor(Math.random() * words.length )]});
    
   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


  return (
    <div style={{ maxWidth:'800px', display:'flex', flexDirection:'column', gap:'2rem', margin:'0 auto', alignItems:'center',}}>
        <div style={{textAlign:'center', fontSize:'2rem'}}>
           Lose  Win
        </div>
        <Drawing />
        <GameWord />
        <Keyboard />
    </div>
  )
}

export default App
