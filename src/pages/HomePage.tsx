import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomeProject from "../components/HomeProject";

const HomePage = () => {
  const [imageHovered, setImageHovered] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [homeProjects, setHomeProjects] = useState([
    {
      title: "CUSTOMARY COURT OF APPEAL, ABUJA",
      image: "/Homepage/courtofappeal.webp",
      type: "INSTITUTIONAL",
    },
    {
      title: "FCT HIGH COURT, ABUJA",
      image: "/Homepage/highcourt.webp",
      type: "INSTITUTIONAL",
    },
    {
      title: "FHC RESIDENCES",
      image: "/Homepage/fhcresidences.webp",
      type: "RESIDENTIAL",
    },
    {
      title: "HILLSTAR RESIDENCES",
      image: "/Homepage/hillstarresidences.webp",
      type: "RESIDENTIAL",
    },
    {
      title: "JUACHI OBI",
      image: "/Homepage/juachiobi.webp",
      type: "RESIDENTIAL",
    },
    {
      title: "BRANDCO WAREHOUSE",
      image: "/Homepage/brandcowarehouse.webp",
      type: "COMMERCIAL",
    },
  ]);

  const onRightButtonClick = () => {
    if (currentProject < homeProjects.length - 1) {
      setCurrentProject(currentProject + 1);
    } else setCurrentProject(0);
  };
  const onLeftButtonClick = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
    else setCurrentProject(homeProjects.length - 1)
  }

  return (
    <main>
      <div className="w-full h-screen relative flex items-end lg:items-center">
        <AnimatePresence>
          {homeProjects.map((project, index) => {
            return (
              <HomeProject
                text={project.title}
                image={project.image}
                type={project.type}
                showing={currentProject == index}
              />
            );
          })}
          {/* <HomeProject showing={number == 1} text="CUSTOMARY COURT OF APPEAL, ABUJA" image={"/Homepage/courtofappeal.webp"} type="INSTITUTIONAL"/>
           <HomeProject showing={number == 2} text="FCT HIGH COURT, ABUJA" image={"/Homepage/highcourt.webp"} type="INSTITUTIONAL" /> */}
        </AnimatePresence>
        <div className="w-full px-[18px] md:px-[20px]   mx-auto flex justify-between relative pb-[30px]">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onRightButtonClick}
            whileHover={{ scale: 1.07 }}
            className="z-20 focus:outline-none"
          >
            <img
              className="max-w-[30px] md:max-w-[40px] lg:max-w-[60px]"
              src="/Homepage/leftArrow.svg"
            />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onLeftButtonClick}
            whileHover={{ scale: 1.07 }}
            className="z-20 focus:outline-none"
          >
            <img
              className="max-w-[30px] md:max-w-[40px] lg:max-w-[60px]"
              src="/Homepage/rightArrow.svg"
            />
          </motion.button>
        </div>
      </div>

    </main>
  );
};
export default HomePage;
