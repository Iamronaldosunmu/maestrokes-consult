import PersonCard from "../components/PersonCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const AboutUsPage = () => {
  const largeImageRef = useRef(null)
  const largeImageInView = useInView(largeImageRef, { once: true })

  return (
    <main>
      <article className="mt-[110px] max-w-[1440px] mx-auto px-[20px]">
        <div data-aos="fade-in" className="text-[16px] md:text-[18px] lg:text-[22px] font-bold overflow-hidden">
          <motion.div initial={{y: 30}} animate={{y: 0, transition: {
                                duration: 1.2,
                                ease: [0.43, 0.13, 0.23, 0.96],
                                
                              },}}>ABOUT US</motion.div>
        </div>
        <div className="flex flex-wrap gap-x-[16px] lg:gap-x-[18px] mt-[10px] md:mt-0 font-semibold text-[36px] md:text-[42px] lg:text-[56px] leading-[42px] md:leading-[50px] lg:leading-[68px] max-w-[500px] md:max-w-[580px] lg:max-w-[805px]">

        {"Our desire to attain perfection guarantees our maximum effort in every endeavor"
          .split(" ")
          .map((word, index) => {
            return (
              <div key={index} className="overflow-hidden flex ">
                {word.split("").map((letter: string, index: number) => {
                  return (
                    <motion.div
                      initial={{ y: 70, scale: 0.9 }}
                      animate={
                         {
                              y: 0,
                              transition: {
                                duration: 2,
                                ease: [0.43, 0.13, 0.23, 0.96],
                                delay: 0.2 + 0.05 * index,
                              },
                              scale: 1,
                            }
                     
                      }
                    >
                      {letter}
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </article>
      <figure className="mt-[90px] md:mt-[183px] max-w-[1440px] mx-auto px-[20px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[35px] lg:gap-[30px] xl:gap-[47px]">
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{opacity: 1, scale: 1, y: 0, transition: {delay: 2, duration: 1.4}}}
        className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px]"
        src="/Homepage/highcourt.webp"
        />
        <motion.img
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{opacity: 1, scale: 1, y: 0, transition: {delay: 2.1, duration: 1.4}}}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative -top-[40px] md:-top-[50px] lg:-top-[120px]"
          src="/Homepage/homeremodel1.jpg"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{opacity: 1, scale: 1, y: 0, transition: {delay: 2.2, duration: 1.4}}}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative md:-bottom-[10px] lg:-bottom-[120px]"
          src="/Homepage/oduyale.jpg"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{opacity: 1, scale: 1, y: 0, transition: {delay: 2.3, duration: 1.4}}}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative -top-[40px]"
          src="/Homepage/admiraltytowers.png"
        />
      </figure>
      <article className="xl:grid grid-cols-[400px_auto] gap-[100px] mt-[80px] md:mt-[120px] lg:mt-[298px] max-w-[1440px] px-[20px] mx-auto">
        <h1 data-aos="fade-in" className="text-[32px] text-center xl:text-left md:text-[38px] lg:text-[50px] font-bold mb-[20px]">
          Who Are We?
        </h1>
        <article className="font-medium text-center xl:text-left md:text-[20px] lg:text-[24px] flex flex-col gap-[25px]">
          <p data-aos="fade-in" data-aos-duration="2000" data-aos-once={true}>
            We are a promising firm of architects and creative designers driven
            by a dynamic team that shares a potent vision easily distinguished
            in our design.
          </p>
          <p data-aos="fade-in" data-aos-duration="2000" data-aos-once={true}>
            This, paired with both an innovative and dedicated approach to the
            design, documentation and execution of projects, has positioned
            Maestrokes become an internationally sought-after brand.
          </p>
          <p data-aos="fade-in" data-aos-duration="2000" data-aos-once={true}>
            Maestrokes is also focused on using the most current computer
            technology in its design process, both to understand the design and
            to communicate the design to our clients.
          </p>
          <p data-aos="fade-in" data-aos-duration="2000" data-aos-once={true}>
            To this end we are on par with world leaders in the use of Revit and
            have also developed virtual reality tools for use in our process.
          </p>
        </article>
      </article>
      <figure className="max-w-[1440px] mx-auto md:px-[20px] w-full mt-[80px] md:mt-[150px] overflow-hidden">
        <motion.img
          ref={largeImageRef}
          animate={largeImageInView ? {scale: 1.1, transition: {duration: 3, delay: 0.2}} : {scale: 1}}
          src="/Homepage/brandcowarehouse.webp"
          className="w-full object-cover min-h-[230px] max-h-[450px] md:rounded-[10px]"
        />
      </figure>
      <header className="max-w-[1440px] mx-auto px-[20px] mt-[80px] md:mt-[110px] flex justify-between">
        <h1 data-aos="fade-in" data-aos-duration="2000"  className="text-center lg:text-left text-[32px] md:text-[50px] lg:max-w-[600px]  font-semibold xl:max-w-[823px]">
          Meet our team of world-class{" "}
          <span className="font-bold italic">architects</span> and{" "}
          <span className="font-bold italic">creative designers</span>
        </h1>
        <motion.img
          className="relative right-[80px] hidden lg:block"
          src="/AboutUsPage/arrow.png"
        />
      </header>
      <article className="max-w-[1440px] mx-auto px-[20px] w-full">
        <p data-aos="fade-in" data-aos-duration="2000" className=" max-w-[725px] text-[16px] text-center lg:text-left md:text-[20px] lg:text-[22px] mt-[18px] leading-[27px]">
          Experience innovation, excellence and precision in every design.{" "}
          <br /> Our talented team of architects and designers deliver
          exceptional solutions that bring your vision to life.
        </p>
      </article>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-[20px] max-w-[400px] md:max-w-[1440px] mx-auto gap-[40px] md:gap-[40px] lg:gap-[50px] xl:gap-[105px] mt-[58px]">
        <PersonCard
          image="/AboutUsPage/TeamMembers/timeyin.png"
          name="Timeyin Ekoko"
          role="Founder"
        />
        <PersonCard
          image="/AboutUsPage/TeamMembers/adebogun.png"
          name="Adebodun Adetugbobo"
          role="Architectural Designer & Project Manager"
        />
        <PersonCard
          image="/AboutUsPage/TeamMembers/akinjobi.png"
          name="Akinjobi Samuel"
          role="Professional Architect"
        />
        <PersonCard
          image="/AboutUsPage/TeamMembers/ifedolapo.png"
          name="Ifedolapo Adesope"
          role="Architectural Designer"
        />
        <PersonCard
          image="/AboutUsPage/TeamMembers/bolaji.png"
          name="Bolaji Aderemi-Lateefe"
          role="Project Manager & Product Designer"
        />
        <PersonCard
          image="/AboutUsPage/TeamMembers/damilola.png"
          name="Damilola Dowole"
          role="Architectural Designer & Project Designer"
        />
      </section>
      <section className="mt-[80px] md:mt-[125px] flex flex-col items-center mb-[80px] md:mb-[130px] px-[20px]">
        <p className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-center">
          Interested In Working With Us?
        </p>
        <button className="w-[230px] md:w-[440px] h-[60px] md:h-[110px] bg-black rounded-[5px] md:rounded-[10px] text-white text-[20px] md:text-[32px] font-bold mt-[30px]">
          CONTACT US
        </button>
      </section>
    </main>
  );
};

export default AboutUsPage;
