import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import bannee1 from"../assets/img/banner 1.png";
import bannee2 from"../assets/img/banner 2.png";

const bannees =[bannee1, bannee2];

const Carrosel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? bannees.length -1 : prev -1 ));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === bannees.length - 1 ? 0 : prev +1));
    };

  return (
    <>
    <div
      className="relative  w-[1194px] max-w-full h-[300px] sm:h-[250px] md:h-[300px] mx-auto overflow-hidden rounded-lg group mt-10"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
        <div className=" flex w-full h-full transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {bannees.map((src, index) =>(
                <img key={index} src={src} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' />
            ) )}
        </div>
        {showArrows && (
        <>
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-laranjap text-white p-2 rounded-full hover:bg-opacity-80 transition">
            <HiChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-laranjap text-white p-2 rounded-full hover:bg-opacity-80 transition">
            <HiChevronRight size={24} />
          </button>
        </>
      )}
    </div>
    </>
  )
}

export default Carrosel