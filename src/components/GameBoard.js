import React, { useEffect, useState } from "react";

const GameBoard = () => {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver ] = useState(false)
  const [draw , setDraw] = useState(false)
  const game = ["Rock", "Paper", "Scissors"];
  const handleComputer = () => {
    setComputerChoice(game.sort(() => Math.random() - 0.5)[0]);
   
  };
  const handleChoice = (e) => {
    setChoice(e);
    handleComputer();
  };

  useEffect(() => {
    if (choice !== "" && computerChoice !== "") {
      if (choice === computerChoice) {
        setGameOver(true);
        
      } else if (choice === "Rock" && computerChoice === "Scissors") {
        setScore(prev => prev +1 );
        setGameOver(true);
      } else if (choice === "Paper" && computerChoice === "Rock") {
        setScore(prev => prev +1 );
        setGameOver(true);
      } else if (choice === "Scissors" && computerChoice === "Paper") {
        setScore(prev => prev +1 );
        setGameOver(true);
      } else if (choice === "Rock" && computerChoice === "Paper") {
        setScore(prev => prev - 1);
        setGameOver(true);
      } else if (choice === "Paper" && computerChoice === "Scissors") {
        setScore(prev => prev - 1);
        setGameOver(true);
      } else if (choice === "Scissors" && computerChoice === "Rock") {
        setScore(prev => prev - 1);
        setGameOver(true);
      }
     
    }
  }, [choice, computerChoice]);

  useEffect(() => {
    if(score === 3 || score === -3){
        if(score === 3){
            setResult("You Win");
            setGameOver(true);
        } else {
            setResult("You Lose");
            setGameOver(true);
        }
    }
      
  }, [score])

  const resetGame = () => {
    setGameOver("")
    setChoice("")
    setComputerChoice("")
    if(score === 3 || score === -3) {
        setScore(0);
    } 
  }

  
  console.log(choice);
  console.log(computerChoice);
  return (
    <div>
      <h4> Score:  {score}</h4>
        {result !== "" && <h4>{result}</h4>}
      <h2>Machine chose : {computerChoice}</h2>
      <button disabled={gameOver} onClick={() => handleChoice("Rock")}>
        <img src="https://image.pngaaa.com/783/3313783-middle.png" alt="" />
      </button>
      <button disabled={gameOver} onClick={() => handleChoice("Paper")}>
        <img
          src="https://flyclipart.com/thumb2/play-rock-paper-scissors-with-us-246506.png"
          alt=""
        />
      </button>
      <button disabled={gameOver} onClick={() => handleChoice("Scissors")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dX4HHIrxJl-1sXviVjxA36tkJ1cJYrDrYyBGqCN69WYllsvtI6mUyVzM_Mfmz4l_v9o&usqp=CAU"
          alt=""
        />
      </button>
      <button className="gameOver" onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default GameBoard;
