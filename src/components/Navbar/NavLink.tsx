import { useNavigate } from "react-router-dom";

interface NavLinkProps {
  text: string;
  link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <p onClick={() => navigate(link)} className="font-medium text-[18px] xl:text-[21px] hover:cursor-pointer">
      {text}
    </p>
  );
};

export default NavLink;
