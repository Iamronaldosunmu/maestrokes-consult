import Project from "../Project";

interface MobileLayoutAllProps {
  projectData: { projectName: string; image: string, link: string }[];
}

const MobileLayoutAll: React.FC<MobileLayoutAllProps> = ({ projectData }) => {
  return (
    <div className="pt-[153px] w-full max-w-[1440px] mx-auto px-[20px] flex flex-col gap-[25px] mb-[20px] lg:hidden">
      {projectData.map((project, index: number) => (
        <Project
          key={index}
          height={250}
          projectName={project.projectName}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default MobileLayoutAll;
