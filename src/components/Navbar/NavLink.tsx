import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
  link: string;
  setInPageTransition: Dispatch<SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkProps> = ({ text, link, setInPageTransition }) => {
  const navigate = useNavigate();
  const changePage = () => {
    setInPageTransition(true);
    setTimeout(() => navigate(link), 2300)
  };

  return (
    <p
      
      onClick={changePage}
      className="font-medium text-[18px] xl:text-[21px] hover:cursor-pointer"
    >
      {text}
    </p>
  );
};

export default NavLink;
