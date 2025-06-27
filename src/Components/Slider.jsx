import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white bg-black/50 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white bg-black/50 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

function ImageSlider() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    pauseOnHover: true,
  };

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      caption: "Tropical Escapes Await 🌴",
      subtext: "Relax in paradise with our handpicked beach destinations.",
    },
    {
      url: "https://images.unsplash.com/photo-1571949175662-2ea97d85ccad?q=80&w=1170&auto=format&fit=crop",
      caption: "Snowy Mountain Trails 🏔️",
      subtext: "Breathe the alpine air and conquer the peaks.",
    },
    {
      url: "https://images.unsplash.com/photo-1657047211843-2d7fa44553b0?q=80&w=1170&auto=format&fit=crop",
      caption: "Desert Safari Adventures 🐫",
      subtext: "Feel the golden heat of the sands and thrill of the dunes.",
    },
    {
      url: "https://images.unsplash.com/photo-1723137316762-768c03bb6e61?q=80&w=1074&auto=format&fit=crop",
      caption: "Stormy Shores 🌊",
      subtext: "Where thunder meets the tide — wild and unforgettable.",
    },
  ];

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            
            <img
              src={`${slide.url}?auto=format&fit=crop&w=1920&q=80`}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover transition-transform duration-1000 hover:scale-105"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

            
            <motion.div
              className="absolute bottom-24 left-10 z-20 text-white max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                {slide.caption}
              </h2>
              <p className="mt-3 text-lg md:text-xl text-zinc-300 drop-shadow-sm">
                {slide.subtext}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition shadow-md"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
