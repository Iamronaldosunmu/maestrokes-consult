import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [textSHowing, setTextShowing] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="absolute top-0 right-0 left-0 bottom-0   flex items-center justify-center z-40">
      <motion.div
        className="absolute top-0 right-0 left-0 bottom-0 bg-black"
        onAnimationComplete={() => {
          console.log("Animation FInished");
          navigate("/home");
        }}
        initial={{ height: "100%" }}
        animate={{
          height: 0,

          transition: {
            delay: 5,
            ease: [0.43, 0.23, 0.23, 0.96],
            duration: 0.7,
          },
        }}
      ></motion.div>
      <div className=" relative py-[7px]  md:py-[15px] md:px-[20px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: textSHowing ? 1 : 0 }}
          className=" text-[18px] text-white xl:text-[28px] z-20"
        >
          <span className="font-bold">MAESTROKES</span> CONSULT
        </motion.p>
        <motion.div
          style={textSHowing ? { right: 0 } : { left: 0 }}
          className="bg-white w-full h-full absolute top-0 rounded-[5px]"
          initial={{ width: 0 }}
          animate={
            textSHowing
              ? {
                  width: 0,
                  transition: {
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.43, 0.23, 0.23, 0.96],
                  },
                }
              : {
                  width: "100%",
                  transition: {
                    duration: 1.7,
                    delay: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }
          }
          onAnimationComplete={() => setTextShowing(true)}
        ></motion.div>
      </div>
    </main>
  );
};

export default Loader;
