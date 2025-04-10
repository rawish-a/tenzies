import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid"

function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)

    const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

    const diceElements = dice.map(dieObj => 
        <Die 
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={hold}
        id={dieObj.id} />
    )


    function generateAllNewDice() {
        const newDice = []
        for (let i=0; i<10; i++) {
            const randomNum = {
                value: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id:nanoid()
        }
        newDice.push(randomNum)
    }
        return newDice
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => 
                die.id === id ? {...die, isHeld: !die.isHeld} : die
            )
        )
    }

    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6 + 1)}))
              
               //only change value of the buttons not held
               //dont roll those dice, roll other dice  
        } else {
            setDice(generateAllNewDice())
        }
          
    }


    return (
        <>
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll" }
            </button>
        </main>
        </>
    ) 
}

export default App
