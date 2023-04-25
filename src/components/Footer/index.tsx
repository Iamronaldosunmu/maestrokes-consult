const Footer = () => {
  return (
    <div className="bg-[#1C1C1C]">

    <footer className="px-[20px] max-w-[1440px] mx-auto  pt-[50px] pb-[80px] bg-[#1C1C1C] flex flex-col lg:flex-row gap-[35px] lg:gap-0 justify-between lg:items-end">
      <p className="text-[22px] lg:text-[27px] xl:text-[32px] text-white">
        <span className="font-bold">MAESTROKES</span> <br /> CONSULT
      </p>
      <div className="text-white text-[15px] xl:text-[20px]">
        <p>+234-(0)-8130214937</p>
        <p>info.maestrokes@gmail.com</p>
      </div>
      <div className="text-white text-[15px] xl:text-[20px]">
        <p>28 Montgomery Road, Yaba. </p>
        <p>Lagos, Nigeria.</p>
      </div>
      <div className="text-white text-[15px] xl:text-[20px] flex gap-[10px] flex-col">
        <p>Twitter</p>
        <p>Instagram </p>
        <p>Youtube </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
