import Project from "../Project";

interface DesktopLayoutALlProps {
  projectData: { projectName: string; image: string, link: string }[];
}

const DesktopLayoutAll: React.FC<DesktopLayoutALlProps> = ({ projectData }) => {
  return (
    <div className="pt-[173px] w-full max-w-[1440px] mx-auto px-[20px] flex-col gap-[34px] mb-[34px] hidden lg:flex">
      {projectData.length >= 2 && <div className="grid grid-cols-2 gap-[34px] relative">
        {projectData.slice(0, 2)?.map((project, index: number) => (
          <Project
            key={index}
            height={500}
            projectName={project.projectName}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>}
      {projectData.length >= 2 && <div className="grid grid-cols-3 gap-[34px] ">
        {projectData.slice(2, 5)?.map((project, index: number) => (
          <Project
            key={index}
            height={270}
            projectName={project.projectName}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>}
      {projectData.length >= 5 && <div className="grid grid-cols-2 gap-[34px]">
        <Project
          height={500}
          projectName={projectData[5].projectName}
          image={projectData[5].image}
          link={projectData[5].link}
        />
        <div className="grid grid-rows-[233px_233px] gap-[34px] w-full h-full">
          {projectData.slice(6, 8)?.map((project, index: number) => (
            <Project
              key={index}
              height={233}
              projectName={project.projectName}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>}
      {projectData.length >= 8 && <div className="grid grid-cols-3 gap-[34px]">
        {projectData.slice(8, 11)?.map((project, index: number) => (
          <Project
            key={index}
            height={618}
            projectName={project.projectName}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>}
      {projectData.length >= 11 && <div className="grid grid-cols-2 gap-[34px]">
        {projectData.slice(11, 13)?.map((project, index: number) => (
          <Project
            key={index}
            height={400}
            projectName={project.projectName}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>}
    </div>
  );
};

export default DesktopLayoutAll;
