import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import image0 from "@/public/image.jpg";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import image5 from "@/public/image5.jpg";

const images = [image0, image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        scrollBehavior: "smooth",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              transition: "opacity 0.6s ease-in-out",
              opacity: index === index ? 1 : 0,
            }}
          >
            <Image
              src={img}
              alt={`image-${index}`}
              className="block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute bottom-0 left-0 top-0 flex cursor-pointer items-center justify-center p-4"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute bottom-0 right-0 top-0 flex cursor-pointer items-center justify-center p-4"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
