const HomePage = () => {
  return (
    <main>
      <div className="w-full h-screen">
        <figure className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/Homepage/courtofappeal.jpeg"
          />
        </figure>
      </div>
      <footer className="px-[75px] pt-[50px] pb-[80px] bg-[#1C1C1C] flex justify-between items-end">
        <p className="text-[32px] text-white">
          <span className="font-bold">MAESTROKES</span> <br /> CONSULT
        </p>
        <div className="text-white text-[20px]">
          <p>+234-(0)-8130214937</p>
          <p>info.maestrokes@gmail.com</p>
        </div>
        <div className="text-white text-[20px]">
          <p>28 Montgomery Road, Yaba. </p>
          <p>Lagos, Nigeria.</p>
        </div>
        <div className="text-white text-[20px] flex" >
          <p>Twitter</p>
          <p>Instagram </p>
          <p>Youtube </p>
        </div>
      </footer>
    </main>
  );
};
export default HomePage;
