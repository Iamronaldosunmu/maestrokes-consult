import { motion } from "framer-motion";

interface TextAnimationProps {
  text: string;
    lineHeight: number;
    delay: number
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, lineHeight, delay }) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ y: lineHeight}}
        animate={{
          y: 0,
          transition: {
            duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay
          },
          scale: 1,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
