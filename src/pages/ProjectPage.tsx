import { useEffect, useRef, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import Project from "../components/Project";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import ProjectData from "../components/data/ProjectInformation";
import ScrollIntoView from 'react-scroll-into-view'


const ProjectPage = () => {
  const navigate = useNavigate();
  const [viewProjects, setViewProjects] = useState(false);
  const { projectId } = useParams();
  const [learnMoreButtonHovered, setLearnMoreButtonHovered] = useState(false);
  const projectDetails = useRef(null);
  const [project, setProject] = useState(
    ProjectData.find((project) => project.id == projectId)
      ? ProjectData.find((project) => project.id == projectId)
      : {
          id: "",
          projectName: "",
          buildingType: "",
          client: "",
          location: "",
          year: "",
          paragraphs: [],
          images: [],
        }
  );
  useEffect(() => {
    console.log(project);
    if (!project!.id) navigate("/our-work");
  }, []);

  return (
    <main className="pt-[110px] md:pt-[143px] ">
      <div className="flex justify-between flex-col lg:flex-row   items-start lg:items-center gap-[20px] md:gap-[30px] w-full max-w-[1440px] mx-auto px-[20px]">
        <h1 className="text-[28px] md:text-[44px] lg:text-[55px] font-bold max-w-[657px]">
          {project?.projectName}
        </h1>
        <ScrollIntoView selector="#projectDetails">

        <motion.button
          onMouseEnter={() => setLearnMoreButtonHovered(true)}
          onMouseLeave={() => setLearnMoreButtonHovered(false)}
          whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
          className="flex justify-between px-[15px] lg:px-[29px] gap-[17px] lg:gap-[21px] bg-black rounded-[10px] py-[15px] md:py-[20px] h-[50px] md:h-[69px] items-center text-white text-[16px] md:text-[22px] lg:text-[24px] font-bold"
        >
          {" "}
          Learn More{" "}
          <motion.img
            animate={{ y: learnMoreButtonHovered ? 4 : 0, transition: {duration: 0.4} }}
            className="max-w-[32px] md:max-w-none"
            src="/ProjectPage/downArrow.png"
          />
        </motion.button>
        </ScrollIntoView>
      </div>
      <div className="mt-[50px] flex items-center gap-[10px] md:gap-[44px] w-full max-w-[1440px] mx-auto px-[20px]">
        <p className="font-medium text-[15px] md:text-[23px] lg:text-[26px]">
          PROJECT TYPE:{" "}
        </p>
        <div className="px-[16px] lg:px-[23px] py-[8px] lg:py-[12px] border border-black text-[17px] md:text-[26px] lg:text-[30px] rounded-[5px] font-medium">
          {project?.buildingType}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto lg:px-[20px] mt-[80px] lg:mt-[100px]">
        <ImageCarousel images={project!.images} />
      </div>
      <div id="projectDetails" className="flex flex-col-reverse gap-[40px] lg:gap-[10px] lg:grid grid-cols-2 w-full max-w-[1440px] mx-auto px-[20px] mt-[90px] md:mt-[120px]">
        <div className="text-center lg:text-left">
          <h1 className="text-[30px] md:text-[40px] font-bold">
            Project Summary
          </h1>
          <div className="max-w-[550px] mx-auto md:mx-0 md:text-[20px] flex flex-col gap-[10px] mt-[20px]">
            {project?.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div >
          <div  className=" py-[30px] md:py-[60px] bg-[#F5F5F5] max-w-[600px] lg:max-w-none mx-auto border border-black rounded-[10px] px-[34px] flex flex-col gap-[27px]">
            <div className="grid grid-cols-1 md:grid-cols-[176px_auto] text-[16px] md:text-[18px]">
              <p className="font-semibold">PROJECT</p>
              <p>{project?.projectName}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[176px_auto] text-[16px] md:text-[18px]">
              <p className="font-semibold">PROJECT TYPE</p>
              <p>
                {project!.buildingType[0] +
                  project?.buildingType.slice(1).toLowerCase()}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[176px_auto] text-[16px] md:text-[18px]">
              <p className="font-semibold">LOCATION</p>
              <p>{project?.location}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[176px_auto] text-[16px] md:text-[18px]">
              <p className="font-semibold">YEAR</p>
              <p>{project?.year}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[176px_auto] text-[16px] md:text-[18px]">
              <p className="font-semibold">CLIENT</p>
              <p>{project?.client}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] md:mt-[120px] lg:mt-[150px] w-full max-w-[1440px] mx-auto px-[20px]">
        <motion.p
          onMouseEnter={() => setViewProjects(true)}
          onMouseLeave={() => setViewProjects(false)}
          className="text-[25px] md:text-[34px] lg:text-[40px] whitespace-nowrap font-bold flex items-center gap-[5px] md:gap-[55px] moreProjects cursor-pointer"
        >
          View More Projects
          <motion.img
            animate={{
              x: viewProjects ? 30 : 0,
              transition: { duration: 0.3 },
            }}
            className=" max-w-[30px] md:max-w-[50px] lg:max-w-none arrowHoverRight"
            src="/rightArrow.svg"
          />
        </motion.p>
      </div>
      <div className="w-full ">
        <div className="no-scrollbar min-w-full overflow-x-scroll overflow-y-visible py-[20px] md:py-[60px] flex gap-x-[38px] max-w-[1440px] mx-auto px-[20px] lg:px-[calc(((100vw-1440px)/2)+20px)]">
          <div className="min-w-[300px] md:min-w-[480px]">
            <Project
              height={window.innerWidth > 768 ? 360 : 200}
              projectName={"JUACHI OBI"}
              image={"/Homepage/admiraltytowers.png"}
            />
          </div>
          <div className="min-w-[300px] md:min-w-[480px]">
            <Project
              height={window.innerWidth > 768 ? 360 : 200}
              projectName={"JUACHI OBI"}
              image={"/Homepage/admiraltytowers.png"}
            />
          </div>
          <div className="min-w-[300px] md:min-w-[480px]">
            <Project
              height={window.innerWidth > 768 ? 360 : 200}
              projectName={"JUACHI OBI"}
              image={"/Homepage/admiraltytowers.png"}
            />
          </div>
          <div className="min-w-[300px] md:min-w-[480px]">
            <Project
              height={window.innerWidth > 768 ? 360 : 200}
              projectName={"JUACHI OBI"}
              image={"/Homepage/admiraltytowers.png"}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[20px] mt-[50px]">
        <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-center">
          Want To Build Something Amazing?
        </p>
        <div className="flex justify-center mt-[40px] lg:mt-[63px] mb-[90px] lg:mb-[120px] w-full">
          <button className="text-[19px] md:text-[22px] lg:text-[26px] font-bold bg-black text-white w-[250px] md:w-[300px] lg:w-[362px] h-[60px] md:h-[80px] lg:h-[89px] rounded-[10px]">
            CONTACT US
          </button>
        </div>
      </div>
    </main>
  );
};
export default ProjectPage;
