import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import GameOver from './components/GameOver';

function App() {
  let arrrayOfImages = [
    {
      num: 1,
      img: "https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_brown.jpg?v=1622860193",
      isMatch:false

    },

    {
      num:2,
      img:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_cony.jpg?v=1622860501",
      isMatch:false
    },

    {
      num:3,
      img:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_sally.jpg?v=1622860258",
      isMatch:false

    },

    {
      num:4,
      img:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_choco.jpg?v=1622860559",
      isMatch:false

    },

    {
      num:5,
      img:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_leonard.jpg?v=1622860324",
      isMatch:false
    },
    {
      num:6,
      img:"https://cdn.shopify.com/s/files/1/0231/6137/2752/files/bf_pangyo_1c8f4577-ddf9-49fe-afea-f77a35383bdd.jpg?v=1629430864",
      isMatch:false
    }


  ]

  const [cards, setCards]=useState([])
  const [selectedCards, setSelectedCards]=useState([])
  const [score,setScore]=useState(0)
  const [tries,setTries]=useState(0)
  const [gameOver, setGameOver]=useState(false)

  const shuffleImages = ()=>{
    let shuffledArray = [...arrrayOfImages, ...arrrayOfImages]

    //id ekle
    .map((item, index)=>({...item, id:index+1}))

    //karıştır
    .sort((a,b)=>.5 -Math.random())

  

    setCards(shuffledArray)
  }

  // console.log(cards)

  useEffect(()=>{
    shuffleImages()

  },[])

  useEffect(()=>{

    console.log(selectedCards)
    if(selectedCards.length===2){
      setSelectedCards([])
      checkMatch()
    }
  },[selectedCards])

  const checkMatch = ()=>{
    if(selectedCards[0].num ===selectedCards[1].num){

      setScore((prev)=>prev+1)
   
      let updatedCards= cards.map((card)=>{
        if(card.num===selectedCards[0].num){
          return {...card, isMatch:true}
        }
        return card
      })

      setCards(updatedCards)
    }else{
      console.log("dont match")
      setTries((prev)=>prev+1)
    }
  }

  // console.log(cards)
  

  //restart game

  useEffect(()=>{
    if(score===arrrayOfImages.length){
      console.log("game over")

      setGameOver(true)
    }
  }, [score])
  return (
    <>
    {gameOver && <GameOver tries={tries} setGameOver={setGameOver} />}
    <div className="container">
      <div className='score-container'>
        <div className='score'>Score: {score}</div>
        <div className='trie'>Tries:{tries}</div>

      </div>
      <div className='cards-container'>
        {cards.map((card)=>(
          <Card key={card.id} card={card} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>

        ))}
      </div>

    </div>
    
    </>
    
  );
}

export default App;
