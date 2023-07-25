import { motion } from "framer-motion";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

interface HomeProjectProps {
  text: string;
  image: string;
  showing: boolean;
  type: string;
  link: string;
}

const HomeProject: React.FC<HomeProjectProps> = ({
  text,
  image,
  showing,
  type,
  link
}) => {
  const [isZooming, setIsZooming] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <motion.figure
        style={{ zIndex: showing ? 8 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showing ? 1 : 0, transition: { duration: 1.6 } }}
        className="w-full h-full absolute -z-10 overflow-hidden bg-gray-400"
      >
        <motion.div
          animate={{
            scale: isZooming ? 1.1 : 1,
            transition: { duration: 5 },
          }}
          className=""
        >
          <LazyLoadImage  width={"100%"} height={"100vh"} effect="blur" wrapperClassName="lazyLoadImageContainer" src={image} />
        </motion.div>
      </motion.figure>
      <motion.div
        style={{ zIndex: showing ? 8 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showing ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 w-full h-full flex items-center lg:pl-[140px] px-[20px]"
      >
        <div
          onClick={() => navigate(link)}
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          className="cursor-pointer text-[32px] md:text-[40px] lg:text-[60px] font-bold max-w-[625px] text-white leading-[32px] md:leading-[40px] lg:leading-[60px]"
        >
          <div className="flex flex-wrap gap-x-[18px]">
            {text.split(" ").map((word, index) => {
              return (
                <div key={index} className="overflow-hidden flex">
                  {word.split("").map((letter: string, index: number) => {
                    return (
                      <motion.div
                        initial={{ y: 70, scale: 0.9 }}
                        animate={
                          showing
                            ? {
                                y: 0,
                                transition: {
                                  duration: 0.8,
                                  ease: [0.43, 0.13, 0.23, 0.96],
                                  delay: 0.2 + 0.05 * index,
                                },
                                scale: 1,
                              }
                            : { y: 70, scale: 0.9, opacity: 0 }
                        }
                      >
                        {letter}
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="min-w-[20px] text-[18px] md:text-[20px] lg:text-[25px] relative bottom-[5px] md:bottom-[10px] font-medium flex overflow-hidden">
            <motion.div
              initial={{ y: 70, scale: 0.9 }}
              animate={
                showing
                  ? {
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                        delay: 0.2,
                      },
                      scale: 1,
                    }
                  : { y: 40, scale: 0.9 }
              }
            >
              {type}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default HomeProject;
