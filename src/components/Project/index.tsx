import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectProps {
  projectName: string;
  image: string;
  height: number;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  image,
  height,
  link,
}) => {
  const [projectHovered, setProjectHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(link)}>
      <motion.div
        onMouseEnter={() => setProjectHovered(true)}
        onMouseLeave={() => setProjectHovered(false)}
        whileTap={{ scale: 0.99, transition: { duration: 0.4 } }}
        style={{ height }}
        animate={{
          scale: projectHovered ? 1.015 : 1,
          transition: { duration: 0.4 },
        }}
        className={`w-full rounded-[10px] overflow-hidden relative`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: projectHovered ? 0.5 : 0,
            transition: { duration: 0.4 },
          }}
          className="w-full h-full bg-black absolute cursor-pointer z-10"
        ></motion.div>
        <p className="text-white absolute bottom-[65px] md:bottom-[80px] lg:bottom-[95px] left-[20px] md:left-[30px] font-bold text-[28px] md:text-[30px] lg:text-[37px] leading-[34px] lg:leading-[45px] max-w-[300px] lg:max-w-[410px] z-10 cursor-pointer">
          {projectName}
        </p>
        <motion.p
          animate={{
            opacity: projectHovered ? 1 : 0,
            transition: { duration: 0.4 },
          }}
          className="text-white absolute bottom-[10px] md:bottom-[20px] left-[20px] md:left-[30px] font-bold text-[20px] md:text-[25px] max-w-[420px] z-10 flex items-center cursor-pointer"
        >
          VIEW PROJECT{" "}
          <motion.img
            animate={{
              rotateZ: projectHovered ? 0 : 45,
              transition: { duration: 0.4 },
            }}
            className="max-w-[45px] md:max-w-none"
            src="/rightArrow.png"
          />
        </motion.p>
        <motion.figure
          className="w-full h-full"
          animate={{
            scale: projectHovered ? 1.1 : 1,
            transition: { duration: projectHovered ? 4 : 0.4 },
          }}
        >
          <LazyLoadImage
            width={"100%"}
            height={"100%"}
            effect="blur"
            wrapperClassName="lazyLoadImageContainer"
            src={image}
          />
        </motion.figure>
      </motion.div>
    </div>
  );
};

export default Project;
