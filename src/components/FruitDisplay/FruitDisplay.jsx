import "./FruitDisplay.css";
import React from "react";
import { useEffect, useState } from "react";

import mango from "../../assets/mango.jpg";
import blueberry from "../../assets/blueberry.jpg";
import lemon from "../../assets/lemon.jpg";
import strawberry from "../../assets/strawberry.jpg";
import banana from "../../assets/banana.jpg";
import apple from "../../assets/apple.jpg";
import cherry from "../../assets/cherry.jpg";
import grape from "../../assets/grape.jpg";
import orange from "../../assets/orange.jpg";
import pear from "../../assets/pear.jpg";
import pineapple from "../../assets/pineapple.jpg";
import kiwi from "../../assets/kiwi.jpg";

function FruitDisplay({ selectedFruit }) {
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    if (selectedFruit) {
      setFruit(selectedFruit);
    }
  }, [selectedFruit]);

  const fruitImages = {
    Mango: mango,
    Blueberry: blueberry,
    Lemon: lemon,
    Strawberry: strawberry,
    Banana: banana,
    Apple: apple,
    Cherry: cherry,
    Grape: grape,
    Orange: orange,
    Pear: pear,
    Pineapple: pineapple,
    Kiwi: kiwi,
  };

  const funFacts = {
    mango: "Mangoes are the king of fruits!",
    blueberry: "Blueberries are rich in antioxidants.",
    lemon: "Lemons were once so rare they were gifts to kings!",
    strawberry: "Strawberries are the only fruit with seeds on the outside.",
    banana: "Bananas grow from flowers and contain seeds, which makes them technically berries.",
    apple: "The star-shaped bottom of an apple is called its calyx.",
    cherry: "The word cherry comes from the Turkish town of Cerasus.",
    grape: "Grapes grow on vines that can produce up to 20 pounds of fruit each year.",
    orange: "The orange production capital in the world is Brazil.",
    pear: "The most expensive pear in the world is a Buddha-shaped pear.",
    pineapple: "Pineapples do not ripen after they have been picked." ,
    kiwi: "They were originally from China: Known as Chinese gooseberries before New Zealand popularized them."
  };

  return (
    <>
      <div className="fruit__display">
        {fruit ? (
          <>
            <img
              className="fruit__display-image"
              src={fruitImages[fruit.name]}
              alt={fruit.name}
            ></img>
            <p className="fruit__display_text">
              {funFacts[fruit.name.toLowerCase()] } 
            </p>
          </>
        ) : (
          <p>please select a fruit to display!</p>
        )}
      </div>
    </>
  );
}

export default FruitDisplay;
