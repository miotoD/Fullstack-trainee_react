import React, { useEffect, useState } from "react";
import SingleCard from "../Component/SingleCard";

function Main() {
  const emojis = ["😂", "😊", "😍", "🎂", "🌹", "🐱‍🐉"];

  const [timer, setTimer] = useState(0);

  const [newgame, setNewgame] = useState(false);

  const [cards, setCards] = useState([]);

  const [choiceOne, setChoiceOne] = useState(null);

  const [choiceTwo, setChoiceTwo] = useState(null);

  const [turns, setTurns] = useState(0);

  function shuffleCards() {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ emoji: card, id: Math.random(), matched: false }));

    console.log(shuffledCards);
    setCards(shuffledCards);
    setNewgame(true);

    // setInterval(() => {
    //   setTimer((prevtime) => prevtime + 1);
    // }, 1000);
  }

  //handle choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.emoji === choiceTwo.emoji) {
        setCards((prevCards) => {
          return prevCards.map((emo) => {
            if (emo.emoji === choiceOne.emoji) {
              return { ...emo, matched: true };
            } else {
              return emo;
            }
          });
        });
        resetTurns();
      } else {
        console.log("Those cards dont match!");
        resetTurns();
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  //reset choices after turning two cards
  function resetTurns() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }
  return (
    <div className=" bg-gray-200 w-screen h-full ">
      <h1 className=" bg-black h-24 w-full font-bold text-2xl text-center text-white py-4">
        Card Memory Game{" "}
      </h1>
      <div className=" h-full w-full p-4 md:px-[410px] lg:px-[500px]">
        <h1 className=" text-black mb-2 font-semibold w-20 rounded-md p-2">
          Moves: {}
        </h1>
        <h1 className=" text-black mb-2 font-semibold w-40 rounded-md p-2">
          Time: {timer} sec
        </h1>

        <h1 className=" text-white font-bold flex justify-center  mb-4  w-full p-1">
          {" "}
          <button className=" bg-black w-28 p-1" onClick={shuffleCards}>
            New Game
          </button>
        </h1>

        <div className="bg-orange-200 h-[640px] w-full shadow-xl rounded-lg grid grid-cols-3 gap-2 px-2">
          {cards.map((items) => (
            <SingleCard
              key={items.id}
              emoji={items}
              handleChoice={handleChoice}
              flipped={
                items === choiceOne ||
                items == choiceTwo ||
                items == items.matched
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
