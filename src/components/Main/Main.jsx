import './Main.css'
import FruitCard from '../FruitCard/FruitCard';
import FruitDisplay from '../FruitDisplay/FruitDisplay';
import React from 'react';

function Main({selectedFruit, onFruitSelect}) {
  return (
    <main className="main">
      <h1 className="main__text"> Choose a fruit: </h1>
      <FruitCard onFruitSelect={onFruitSelect} />
      { selectedFruit ? (<FruitDisplay selectedFruit={selectedFruit} />) : ( null )
  
}
    </main>
  );
}

export default Main;
