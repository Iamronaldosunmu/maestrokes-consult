import { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VideoPlayer from "../VideoPlayer";
import useGetDeviceWidth from "../../hooks/useGetDeviceWidth";

interface VideoDetails {
  thumbnail: string;
  src: string;
}

interface ImageCarouselProps {
  images?: string[];
  videos?: VideoDetails[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, videos }) => {
  const [currentImagePosition, setCurrentImagePosition] = useState(0);
  const deviceWidth = useGetDeviceWidth();
  const getVideoHeight = (width : number) => {
    if (width > 1024) return 520;
    else if (width > 768) return 400;
    else return 280;
  }
  const onHandleLeftClick = () => {
    if (currentImagePosition > 0)
      setCurrentImagePosition(currentImagePosition - 1);
    else
      setCurrentImagePosition(
        (images?.length ? images.length : 0) +
          (videos?.length ? videos.length : 0) -
          1
      );
  };

  const onHandleRightClick = () => {
    if (
      currentImagePosition <
      (images?.length ? images.length : 0) +
        (videos?.length ? videos.length : 0) -
        1
    )
      setCurrentImagePosition(currentImagePosition + 1);
    else setCurrentImagePosition(0);
  };
  return (
    <div className="w-full">
      <div className="w-full flex relative overflow-hidden">
        {(images?.length || 0) + (videos?.length || 0) !== 1 && (
          <>
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
          </>
        )}
        <motion.div
          animate={{
            x: `-${currentImagePosition}00%`,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="w-full flex "
        >
          {images?.map((image) => (
            <div className="min-w-full flex justify-center">
              <LazyLoadImage
                effect="blur"
                className="h-[280px] md:h-[400px] md:max-w-[calc(100vw-160px)] object-cover lg:h-[520px] sm:rounded-[10px] cursor-pointer"
                src={image}
              />
            </div>
          ))}
          {videos?.map((video) => (
            <div className="min-w-full flex justify-center">
              <div className="h-[280px] md:h-[400px] md:max-w-[calc(100vw-160px)] object-cover lg:h-[520px] sm:rounded-[10px] cursor-pointer overflow-hidden"></div>
              <VideoPlayer height={getVideoHeight(deviceWidth)} src={video.src} thumbnail={video.thumbnail} />
            </div>
          ))}
        </motion.div>
        {(images?.length || 0) + (videos?.length || 0) !== 1 && (
          <>
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
          </>
        )}
      </div>
      <div className="w-full flex mt-[30px] md:mt-[40px] lg:mt-[65px] gap-[4px] md:gap-[15px] lg:gap-[21px] justify-center overflow-scroll no-scrollbar">
        {images?.map((image, index) => (
          <div className="flex justify-center bg-gray-400 rounded-[17px]">
            <div
              onClick={() => setCurrentImagePosition(index)}
              style={{
                backgroundColor:
                  index == currentImagePosition ? "black" : "white",
              }}
              className="p-[3.5px] md:p-[5px] min-w-[53.5px] min-h-[53.5px] h-[20px] md:min-w-max md:h-[78.5px] lg:h-[96.5px] transition duration-200 rounded-[15px]"
            >
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                effect="blur"
                wrapperClassName="lazyLoadImageContainer rounded-[10px]  overflow-hidden cursor-pointer"
                src={image}
              />
            </div>
          </div>
        ))}
        {videos?.map((video, index) => (
          <div className="flex justify-center ">
            <div
              onClick={() => setCurrentImagePosition(index)}
              style={{
                backgroundColor:
                  index == currentImagePosition - (images ? images.length : 0)
                    ? "black"
                    : "white",
              }}
              className="p-[3.5px] md:p-[5px] min-w-[53.5px] min-h-[53.5px] md:min-w-max h-[20px] md:h-[78.5px] lg:h-[96.5px] transition duration-200 rounded-[15px]"
            >
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                effect="blur"
                wrapperClassName="lazyLoadImageContainer rounded-[10px] overflow-hidden cursor-pointer"
                src={video.thumbnail}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
