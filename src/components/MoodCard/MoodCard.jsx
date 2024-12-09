import "./MoodCard.css";

function MoodCard({onMoodSelect}) {
  const moods = [
    "Happy",
    "Sad",
    "Rage",
    "Playful",
    "Studious",
    "Chill",
    "Pop",
    "Dreamy",
    "Hopeful",
    "Depressed",
    "Nostalgic",
    "Uplifting",
  ];

  return (
    <>
      <ul className="moodcards">
        {moods.map((mood) => (
          <li key={mood} className="moodcard" onClick={() => onMoodSelect(mood.toLowerCase())}> 
            {mood}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoodCard;
