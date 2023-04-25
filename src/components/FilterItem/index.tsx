import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion"

interface FilterItemProps {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  
}

const FilterItem: React.FC<FilterItemProps> = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <div
      onClick={() => setSelected(text)}
      style={{ fontWeight: selected ? "bold" : "normal" }}
      className="cursor-pointer transition duration-300"
    >
      {text}
      <motion.div initial={{width: 0}} animate={selected ? {width: "100%", transition: {duration: 0.5}} : {width: 0}} className="w-full h-[2px] bg-black"></motion.div>
    </div>
  );
};

export default FilterItem;
