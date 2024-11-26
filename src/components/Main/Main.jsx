import './Main.css'
import MoodCard from '../MoodCard/MoodCard';
import Carousel from '../Carousel/Carousel';


function Main() {
  return (
    <div className="main">
      <h1 className="main__text"> Today I feel:</h1>
      <MoodCard />
      <Carousel />
    </div>
  );
}

export default Main;
