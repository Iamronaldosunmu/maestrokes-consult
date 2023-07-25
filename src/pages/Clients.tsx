import { motion } from "framer-motion";
import { useState } from "react";

const ClientsPage = () => {
  const [images, setImages] = useState([
    "/ClientsPage/scolmoregrouplogo.png",
      "/ClientsPage/aritseventureslogo.jpg",
      "/ClientsPage/ndalogo.png",
    "/ClientsPage/jandtdesigns.png",
    "/ClientsPage/structuracasalogo.jpg",
    "/ClientsPage/daughtersofdestinylogo.png",
    "/ClientsPage/federalhighcourtlogo.jpg",
    "/ClientsPage/everystreetlogo.png",
    "/ClientsPage/buildersstopcenterlogo.png",
  ]);
  return (
    <motion.main exit={{opacity: 0}} >
      <section className="max-w-[1000px] mx-auto ">
        <header className="px-[20px] gap-[] mt-[110px] lg:mt-[137px] text-[40px] md:text-[64px] lg:text-[84px] lg:leading-[90px] lg:mb-[20px] font-bold lg:font-semibold flex gap-x-[16px] lg:gap-x-[18px] justify-center">
          {"Our Clients".split(" ").map((word, index) => {
            return (
              <div key={index} className="overflow-hidden flex ">
                {word.split("").map((letter: string, index: number) => {
                  return (
                    <motion.div
                      initial={{ y: 90, scale: 0.9 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 1,
                          ease: [0.43, 0.13, 0.23, 0.96],
                          delay: 0.2 + 0.05 * index,
                        },
                        scale: 1,
                      }}
                    >
                      {letter}
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </header>
        <div className="w-full grid grid-cols-4 grid-rows-[200px_200px] gap-[50px] mt-[120px] mb-[150px] ">
          {images.map((image, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 2,
                    transition: { delay: 1 + 0.15 * index, duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96]},
                }}
                className="w-full flex items-center justify-center"
              >
                <img className="w-full max-h-[175px]" src={image} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
};

export default ClientsPage;
