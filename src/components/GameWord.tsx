import React from 'react'

type GameWordProps = {
  guessedLetters: string[]
  wordsToGuess: string
  revealWord?: Boolean
}


const GameWord = ({guessedLetters, wordsToGuess, revealWord=false}:GameWordProps) => {
    const word = 'test'
     
  return (
    <div style={{
        display:'flex', 
        gap:'.25em', 
        fontSize:'6rem', 
        fontWeight: 'bold', 
        textTransform:'uppercase', 
        fontFamily:'monospace',
        }}
    >
     {wordsToGuess.split('').map((letter, index) => (
        <span style={{borderBottom:'.1em solid black'}} key={index}>
          <span
           style={{
            visibility:
              guessedLetters.includes(letter) || revealWord 
              ? 'visible' 
              : 'hidden', 
            color: 
              !guessedLetters.includes(letter) && revealWord ? 'red' : 'black',
            }}
            > 
            {letter}
            </span>
        </span>
     ))}
    </div>
  )
}

export default GameWord