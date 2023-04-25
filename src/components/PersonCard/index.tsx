interface PersonCardProps {
  image: string;
  name: string;
  role: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, role }) => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-full">
      <img src={image} className="w-full max-w-[300px] mx-auto md:max-w-none" />
      <p className="font-bold interFont text-[28px] md:text-[30px] lg:text-[31px] mt-[5px] md:mt-[10px] text-center lg:text-left">{name}</p>
      <p className="timesNewRomanFont text-[20px] md:text-[24px] italic text-center lg:text-left">{role}</p>
    </div>
  );
};

export default PersonCard;
