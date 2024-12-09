import "./Carousel.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchPlaylist, fetchAvailableGenres } from "../../utils/SpotifyAPi";


function Carousel({selectedMood}) {
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const getPlaylist = async () => {
      if (!selectedMood) return;
      
      setLoading(true);
      try {
        const tracks = await fetchPlaylist(selectedMood);
        console.log(`Selected mood: ${selectedMood}`);
        
        setPlaylist(tracks);
      } catch(error) {
        console.error(`There was an error ${error}`)
      } finally {
        setLoading(false)
      }
    };
    getPlaylist();
   }, [selectedMood]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <div className="slider-container">
        {loading ? (
          <p>Loading...</p>
        ) : playlist.length > 0 ? (
          <Slider {...settings}>
            {playlist.map((track, index) => (
              <div key={index} className="carousel__item">
                <img
                  src={track.album.images[0]?.url}
                  alt={track.name}
                  className="carousel__image"
                />
                <h3>{track.name}</h3>
                <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No tracks available for this mood.</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
