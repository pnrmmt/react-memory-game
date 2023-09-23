import React, { useEffect, useState } from 'react'

function Card({card, selectedCards, setSelectedCards}) {

    // console.log(card)

    const [isFlipped,setIsFlipped]=useState(false)

    const handleClick =()=>{
      console.log("clicked")

      setSelectedCards([...selectedCards,card])
    }

    useEffect(()=>{
      if(selectedCards[0]===card || selectedCards[1]===card || card.isMatch){
        setIsFlipped(true);

      }else{
        setIsFlipped(false)
      }


    },[selectedCards])


  return (
    <div className={isFlipped?"card open":"card"} onClick={handleClick}>
        <div className='front'>
            <img src={card.img} alt=""/>
        </div>
        <div className='back'>
            
        </div>
      
    </div>
  )
}

export default Card
