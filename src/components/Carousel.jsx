import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel()  {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="main">
      <ArrowBackIosIcon className="arrow" onClick={handlePrev} />
      <div
        className="secondcon"
        style={{
          backgroundImage: `url(${images[index].img})`,
          height: "750px",
          width: "500px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>{images[index].title}</h1>
        <h2>{images[index].subtitle}</h2>
      </div>
      <ArrowForwardIosIcon className="arrow" onClick={handleNext} />
    </div>
  );
};

export default Carousel;
