import { useState } from "react";
import "./autoslide.css";

const images = [
  "https://via.placeholder.com/600x400/ff7f7f",
  "https://via.placeholder.com/600x400/7f7fff",
  "https://via.placeholder.com/600x400/7fff7f",
  "https://via.placeholder.com/600x400/ffff7f",
];

const AutoSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    console.log("prev", newIndex);
    setCurrentIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    console.log("next", newIndex);
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slider-container">
      <div className="slider">
        ``
        <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
      </div>
      <div className="slider-buttons">
        <button className="slider-button prev" onClick={handlePrev}>
          &lt; previous
        </button>
        <button className="slider-button next" onClick={handleNext}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};
export default AutoSlide;
