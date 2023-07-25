interface FadeInParagraphProps {
  text: string;
}

const FadeInParagraph: React.FC<FadeInParagraphProps> = ({ text }) => {
  return (
    <p
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-once={false}
    >
      {text}
    </p>
  );
};

export default FadeInParagraph;
