

function App() {
    return (
        <>
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </main>
        </>
    ) 
}

export default App



//Steps:
//2. Add empty buttons manually 
//3. Function to generate a random number. Create an array of 10 random numbers (from 1-6)
//4. Move those 10 random numbers to the page (from memory) using State (used map to assign the number to each button)
//5. Re-roll all 10 dice
//6. Change dice to objects so die can eventually hold the dice (added to generateAllNewDice)
//7. Add conditional styling to the Die component so that when its held, its background color changes 
//8. Make it so that the die selection is held. Create a function 'hold' that takes 'id' as a parameter
//9. Update the isHeld property to true on the correct die in an array
//10. Make it so when we click the roll button we dont lose the hold dice but only re-roll the dice that are not being held
//11. Check if the game is won (We can derive the game won status based on the conditions of the current dice state on every render)
//    Winning conditions are 1. all the dice are being held, and 2. all the dice have the same value
