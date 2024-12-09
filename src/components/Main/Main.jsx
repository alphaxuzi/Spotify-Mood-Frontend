import './Main.css'
import MoodCard from '../MoodCard/MoodCard';
import Carousel from '../Carousel/Carousel';


function Main({selectedMood, onMoodSelect, isAuthenticated}) {
  return (
    <div className="main">
      <h1 className="main__text"> Today I feel:</h1>
      <MoodCard onMoodSelect={onMoodSelect} />
      <Carousel selectedMood={selectedMood}  />
    </div>
  );
}

export default Main;
