import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import FilterItem from "../components/FilterItem";
import DesktopLayoutAll from "../components/ProjectsPage/DesktopLayoutAll";
import TabletLayoutAll from "../components/ProjectsPage/TabletLayoutAll";
import MobileLayoutAll from "../components/ProjectsPage/MobileLayoutAll";

const ProjectsPage = () => {
  const [projectHovered, setProjectHovered] = useState(false);
  useEffect(() => {
    console.log(projectHovered);
  }, [projectHovered]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [inFilterTransition, setInFilterTransition] = useState(false);
  useEffect(() => setIsFirstTime(false), []);
  const [projectData, setProjectData] = useState([
    {
      projectName: "CUSTOMARY COURT OF APPEAL ABUJA",
      image: "/Homepage/courtofappeal.webp",
      type: "INSTITUTIONAL",
      link: "/our-work/customary-court-of-appeal",
    },
    {
      projectName: "FCT HIGH COURT ABUJA",
      image: "/Homepage/highcourt.webp",
      type: "INSTITUTIONAL",
      link: "/our-work/fct-high-court",
    },

    {
      projectName: "FHC RESIDENCES",
      image: "/Homepage/fhcresidences.webp",
      type: "RESIDENTIAL",
      link: "/our-work/fhc-residences",
    },
    {
      projectName: "HILLSTAR RESIDENCES",
      image: "/Homepage/hillstarresidences.webp",
      type: "RESIDENTIAL",
      link: "/our-work/hillstar-residences",
    },
    {
      projectName: "JUACHI OBI",
      image: "/Homepage/juachiobi.webp",
      type: "RESIDENTIAL",
      link: "/our-work/juachi-obi",
    },
    {
      projectName: "OGUDU FORESHORE",
      image: "/Homepage/oguduforeshore.png",
      type: "RESIDENTIAL",
    },
    {
      projectName: "PURO RESTAURANT",
      image: "/Homepage/purorestaurant.png",
      type: "COMMERCIAL",
      link: "/our-work/puro-restaurant",
    },
    {
      projectName: "MAYAKI GUEST HOUSE",
      image: "/Homepage/mayakiguesthouse.png",
      type: "RESIDENTIAL",
    },
    {
      projectName: "HOME REMODEL 1",
      image: "/Homepage/homeremodel1.jpg",
      type: "RESIDENTIAL",
    },
    {
      projectName: "THE ODUYALE",
      image: "/Homepage/oduyale.jpg",
      type: "RESIDENTIAL",
    },
    {
      projectName: "ADMIRALTY TOWERS",
      image: "/Homepage/admiraltytowers.png",
      type: "RESIDENTIAL",
      link: "/our-work/admiralty-towers",
    },
    {
      projectName: "BRAND CO WAREHOUSE",
      image: "/Homepage/brandcowarehouse.webp",
      type: "COMMERCIAL",
    },
    {
      projectName: "EFOSA'S BEDROOM",
      image: "/Homepage/efosasbedroom.png",
      type: "RESIDENTIAL",
      link: "/our-work/efosas-bedroom",
    },
  ]);

  const [filteredData, setFilteredData] = useState(projectData);
  useEffect(() => {
    setTimeout(() => {
      setFilteredData(
        selectedFilter == "ALL"
          ? projectData
          : projectData.filter((project) => project.type == selectedFilter)
      );
    }, 300);
    setInFilterTransition(true);
    setTimeout(() => setInFilterTransition(false), 400);
  }, [selectedFilter]);

  return (
    <main>
      <nav className="fixed top-[71px] lg:top-[48px] xl:top-[63px] bg-white w-full flex border-b border-black z-20">
        <div className="w-full max-w-[1440px] mx-auto px-[20px] flex text-[18px] xl:text-[21px] gap-[41px] pt-[12px] lg:pt-[14px] xl:pt-[16px] pb-[8px] lg:pb-[10px] xl:pb-[12px] overflow-auto no-scrollbar lg:overflow-hidden">
          <FilterItem
            text={"ALL"}
            selected={selectedFilter == "ALL"}
            setSelected={setSelectedFilter}
          />
          <FilterItem
            text={"INSTITUTIONAL"}
            selected={selectedFilter == "INSTITUTIONAL"}
            setSelected={setSelectedFilter}
          />
          <FilterItem
            text={"RESIDENTIAL"}
            selected={selectedFilter == "RESIDENTIAL"}
            setSelected={setSelectedFilter}
          />
          <FilterItem
            text={"COMMERCIAL"}
            selected={selectedFilter == "COMMERCIAL"}
            setSelected={setSelectedFilter}
          />
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          inFilterTransition
            ? { opacity: 0, y: 20, transition: { duration: 0.3 } }
            : { opacity: isFirstTime ? 0 : 1, y: 0, transition: { duration: 0.3 } }
        }
        className="mb-[90px]"
      >
        <DesktopLayoutAll projectData={filteredData} />
        <TabletLayoutAll projectData={filteredData} />
        <MobileLayoutAll projectData={filteredData} />
      </motion.div>
    </main>
  );
};

export default ProjectsPage;
