import Project from "../Project";

interface TableLayoutAllProps {
  projectData: { projectName: string; image: string }[];
}

const TabletLayoutAll: React.FC<TableLayoutAllProps> = ({ projectData }) => {
  return (
    <div className="pt-[173px] w-full max-w-[1440px] mx-auto px-[20px]  grid-cols-2 gap-[34px] mb-[20px] hidden mg:grid lg:hidden">
      {projectData.map((project, index: number) => (
        <Project
          key={index}
          height={350}
          projectName={project.projectName}
          image={project.image}
        />
      ))}
    </div>
  );
};
export default TabletLayoutAll;
