import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid"

function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())

    const diceElements = dice.map(dieObj => 
        <Die 
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
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

    function rollDice() {
        setDice(generateAllNewDice())
    }


    return (
        <>
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
        </>
    ) 
}

export default App



//Steps:
//7. Add conditional styling to the Die component so that when its held, its background color changes 
//8. Make it so that the die selection is held. Create a function 'hold' that takes 'id' as a parameter
//9. Update the isHeld property to true on the correct die in an array
//10. Make it so when we click the roll button we dont lose the hold dice but only re-roll the dice that are not being held
//11. Check if the game is won (We can derive the game won status based on the conditions of the current dice state on every render)
//    Winning conditions are 1. all the dice are being held, and 2. all the dice have the same value
