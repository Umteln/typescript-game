import { useCallback, useState,  useEffect } from "react"
import Drawing from "./components/Drawing";
import GameWord from "./components/GameWord";
import ImageGrid from "./components/ImageGrid";
import Keyboard from "./components/Keyboard";
import words from './utils/wordList.json'


const getWord = () => {
  return  words[Math.floor(Math.random() * words.length )]
}


function App() {
   const [wordToGuess, setWordToGuess] = useState(getWord);
   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
   
   const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
   

   const isLoser  = incorrectLetters.length >= 6
   const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter)) 
    
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if(guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters( currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isLoser, isWinner],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== 'Enter') return
       
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord()) 
    }
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  },[])
  
  //using actual keyboard
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    const key = e.key;

    if (!key.match(/^[a-z]$/)) return
     
    e.preventDefault()
    addGuessedLetter(key)
  }
  document.addEventListener('keypress', handler)

  return () => {
    document.removeEventListener('keypress', handler)
  }
}, [guessedLetters])







  return (
    <div style={{ maxWidth:'800px', display:'flex', flexDirection:'column', gap:'2rem', margin:'0 auto', alignItems:'center',}}>
       <div style={{textAlign:'center', fontSize:'2rem'}}>
        <h1> Word Filler</h1>
        <p>Guess a letter and try to complete the word without completing the picture.</p>
       </div>




        <div style={{textAlign:'center', fontSize:'1rem', color: 'red'}}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Oh No...You Lost - Refresh to try again"}
        </div>
        <ImageGrid  numberOfGuesses={incorrectLetters.length} />
        <GameWord revealWord={isLoser} wordsToGuess={wordToGuess} guessedLetters={guessedLetters}/>
        <div style={{alignSelf:'stretch'}}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
        </div>
        
    </div>
  )
}

export default App
