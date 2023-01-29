import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "./data/Slide";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    if (newIndex === slides.length - 1) return;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    if (newIndex === 0) return;
    setCurrentIndex(newIndex);
  };

  // dot 클릭시 key에 맵핑되는 이미지 보여주는 함수
  const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex);

  return (
    <div className="max-w-full h-72 w-full py-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-48 rounded-2xl bg-center bg-contain duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer hover:opacity-30">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
