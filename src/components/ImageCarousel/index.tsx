import { useState } from "react";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel : React.FC<ImageCarouselProps> = ({images}) => {

  const [currentImagePosition, setCurrentImagePosition] = useState(0);
  const onHandleLeftClick = () => {
    if (currentImagePosition > 0)
      setCurrentImagePosition(currentImagePosition - 1);
    else setCurrentImagePosition(images.length - 1);
  };

  const onHandleRightClick = () => {
      if (currentImagePosition < images.length - 1)
          setCurrentImagePosition(currentImagePosition + 1);
      else setCurrentImagePosition(0);
    };


  return (
    <div className="w-full">
      <div className="w-full flex relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.96 }}
          onClick={onHandleLeftClick}
          className="absolute left-0 top-[calc(50%-46px)] cursor-pointer z-10 hidden lg:block"
          src="/ProjectPage/blackLeftArrow.svg"
        />
        <motion.img
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.96 }}
          onClick={onHandleLeftClick}
          className="absolute left-0 top-[calc(50%-25px)]  md:top-[calc(50%-46px)] cursor-pointer block lg:hidden z-10 w-[96px] max-w-[50px]"
          src="/ProjectPage/blackLeftArrowMobile.svg"
        />
        <motion.div
          animate={{
            x: `-${currentImagePosition}00%`,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="w-full flex "
        >
          {images.map((image) => (
            <div className="min-w-full flex justify-center">
              <img
                className="h-[280px] md:h-[400px] md:max-w-[calc(100vw-160px)] object-cover lg:h-[520px] rounded-[10px] cursor-pointer"
                src={image}
              />
            </div>
          ))}
        </motion.div>
        <motion.img
          onClick={onHandleRightClick}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.96 }}
          className="absolute right-0 top-[calc(50%-46px)] cursor-pointer hidden lg:block"
          src="/ProjectPage/blackRightArrow.svg"
        />
        <motion.img
          onClick={onHandleRightClick}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.96 }}
          className="absolute right-0 top-[calc(50%-25px)] max-w-[50px] md:max-w-none md:top-[calc(50%-46px)] cursor-pointer block lg:hidden z-10 w-[96px]"
          src="/ProjectPage/blackRightArrowMobile.svg"
        />
      </div>
      <div className="w-full flex mt-[30px] md:mt-[40px] lg:mt-[65px] gap-[4px] md:gap-[15px] lg:gap-[21px] justify-center ">
        {images.map((image, index) => (
          <div className="flex justify-center">
            <div
              onClick={() => setCurrentImagePosition(index)}
              style={{
                backgroundColor:
                  index == currentImagePosition ? "black" : "white",
              }}
              className="p-[3.5px] md:p-[5px] transition duration-200 rounded-[15px]"
            >
              <img
                className="h-[50px] w-[50px] md:w-max md:h-[75px] lg:h-[93px] rounded-[10px] cursor-pointer"
                src={image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
