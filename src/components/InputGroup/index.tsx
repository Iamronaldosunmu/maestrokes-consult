import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface InputGroupProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <motion.div initial={{scale: 0.95, y: 20, opacity: 0}} animate={{scale: 1, y: 0, opacity: 1, transition: {delay: 1.4}}} className="w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="text-[16px] md:text-[21px] lg:text-[24px] placeholder:text-[16px] md:placeholder:text-[21px] lg:placeholder:text-[24px] font-medium placeholder:text-black placeholder:opacity-50 pb-[10px] lg:pb-[27px] focus:outline-none w-full"
      />
      <div className="w-full bg-black h-[1px] lg:h-[2px]  bg-opacity-50 "></div>
    </motion.div>
  );
};

export default InputGroup;
