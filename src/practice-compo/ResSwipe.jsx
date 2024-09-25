import "./ResSwipe.css";

const images = [
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+2",
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+3",
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+4",
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+5",
];

const ImageSlider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        {images.map((image, i) => (
          <div key={i} className="slide">
            <img src={image} alt={`slide ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
