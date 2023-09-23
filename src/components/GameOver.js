import React from 'react'

function GameOver({tries, setGameOver}) {

    const handleClick =()=>{
        setGameOver(false)
    }
  return (
    <div className='game-over'>
        <div className='box'>
        <div className='tries'>Game Over After {tries} tries</div>
        <button onClick={handleClick}>Play Again</button>
        </div>
        
      
    </div>
  )
}

export default GameOver
