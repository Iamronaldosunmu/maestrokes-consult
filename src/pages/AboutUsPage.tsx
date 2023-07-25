import PersonCard from "../components/PersonCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUsPage = () => {
  const largeImageRef = useRef(null);
  const largeImageInView = useInView(largeImageRef, { once: true });
  const aboutUsParagraphs = [
    "At Maestrokes, we believe in achieving perfection through unwavering dedication, maximum effort, and an unwavering attention to detail. From the initial concept to the final touches, we meticulously craft every project, pushing boundaries to create architectural masterpieces that inspire and transform spaces. ",
    "With a relentless pursuit of excellence, we ensure that every design element is meticulously curated, every line purposeful, and every detail meticulously executed. Trust us to turn your vision into a flawlessly realized reality, where innovation meets precision, and every project becomes a testament to our unwavering commitment to perfection.",
    "At Maestrokes, we're all about pushing the boundaries of design, fueled by an unrelenting passion for perfection. Our secret ingredient? Maximum effort and an unwavering focus on the tiniest of details. We don't settle for the ordinary; we're here to create thought-evoking and introspective architectural experiences. From the spark of inspiration to the final stroke of genius, we infuse each project with our youthful perspective and an old soul's wisdom. ",
    "With us, you're not just acquiring a building; you're embarking on a collaborative journey where we transform your vision into a utilitarian marvel that seamlessly blends functionality, style, and a timeless essence. Welcome to the world of Master-Strokes, where we craft architectural excellence with a vibrant spirit and an enduring touch.",
    "At Maestrokes, we're dedicated to pushing the boundaries of architectural design, blending the artistry of our strokes with a youthful perspective and an old soul's wisdom. With unwavering attention to detail, we infuse each project with a vibrant spirit and timeless essence. From the spark of inspiration to the final stroke of genius, our team crafts thought-evoking and introspective architectural experiences that transcend the ordinary.",
    "With maximum effort and a meticulous touch, we transform your vision into utilitarian marvels that seamlessly blend functionality, style, and a hint of our maestros' mastery. Welcome to the world of Maestrokes, where architectural excellence takes center stage, orchestrated with a hip twist and strokes of brilliance.",
  ];
  const whoAreWeParagraphs = [
    "At Maestrokes, we are a team of passionate architects and designers who are captivated by the beauty of lines, forms, and the transformative power of design. With an unwavering commitment to architectural excellence, we push the boundaries of creativity and innovation to craft remarkable spaces.",
    `"Our philosophy is rooted in the belief that every line holds the potential to shape a vision, and every form has the ability to inspire emotions. With a meticulous eye for detail, we approach each project, utilizing industry-standard software, including the Autodesk Design Suite of products. Our commitment to excellence extends beyond design; we embrace the power of Building Information Modeling (BIM) as a cornerstone of our practice.`,
    "Through BIM, we create comprehensive digital representations of projects, integrating architecture, structure, and MEP (mechanical, electrical, and plumbing) systems. This collaborative approach enables us to optimize coordination, enhance efficiency, and minimize errors during the design, construction, and facility management stages. By leveraging the power of BIM, we deliver projects with increased accuracy, improved sustainability, and streamlined project delivery.",
    `With our expertise in utilizing BIM and the Autodesk Design Suite, we transform architectural visions into tangible realities, where precision, functionality, and creativity seamlessly intersect. At Maestrokes, we are committed to embracing innovative technologies that enhance our ability to create remarkable spaces that stand the test of time."`,
    "Collaboration lies at the core of our process. We engage in open and meaningful conversations with our clients, listening attentively to their aspirations and understanding their unique perspectives. By blending our expertise with their vision, we co-create spaces that are tailored to their needs, reflecting their personality, values, and aspirations.",
    "From residential havens to awe-inspiring commercial structures, our portfolio showcases a diverse range of projects that highlight our mastery of lines, forms, and design. We take pride in our ability to seamlessly integrate functionality, aesthetics, and a touch of our creative brilliance into every project we undertake.",
    "Welcome to Maestrokes, where lines come alive, forms take shape, and design transcends boundaries. Join us on this journey as we bring your vision to life, using our expertise, passion, and dedication to transform spaces into captivating works of art.",
  ];

  return (
    <motion.main exit={{ opacity: 0 }}>
      <article className="mt-[110px] max-w-[1440px] mx-auto px-[20px]">
        <div
          data-aos="fade-in"
          className="text-[16px] md:text-[18px] lg:text-[22px] font-bold overflow-hidden"
        >
          {/* <motion.div
            initial={{ y: 30 }}
            animate={{
              y: 0,
              transition: {
                duration: 1.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          >
            ABOUT US
          </motion.div> */}
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
                        animate={{
                          y: 0,
                          transition: {
                            duration: 2,
                            ease: [0.43, 0.13, 0.23, 0.96],
                            delay: 0.2 + 0.05 * index,
                          },
                          scale: 1,
                        }}
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
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 2, duration: 1.4 },
          }}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px]"
          src="/Homepage/highcourt.webp"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 2.1, duration: 1.4 },
          }}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative -top-[40px] md:-top-[50px] lg:-top-[120px]"
          src="/Homepage/homeremodel1.jpg"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 2.2, duration: 1.4 },
          }}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative md:-bottom-[10px] lg:-bottom-[120px]"
          src="/Homepage/oduyale.jpg"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 2.3, duration: 1.4 },
          }}
          className="w-full h-[200px] md:h-[450px] object-cover rounded-[10px] relative -top-[40px]"
          src="/Homepage/admiraltytowers.png"
        />
      </figure>
      <article className="xl:grid grid-cols-[400px_auto] gap-[100px] mt-[80px] md:mt-[120px] lg:mt-[298px] max-w-[1440px] px-[20px] mx-auto">
        <h1
          data-aos="fade-in"
          className="text-[32px] text-center xl:text-left md:text-[38px] lg:text-[50px] font-bold mb-[20px]"
        >
          About Us
        </h1>

        <article className="font-medium text-center xl:text-left md:text-[18px] lg:text-[22px] flex flex-col gap-[25px]">
          {aboutUsParagraphs.map((paragraph, index) => (
            <p
              key={index}
              data-aos="fade-up-in"
              data-aos-duration="2000"
              data-aos-once={true}
            >
              {paragraph}
            </p>
          ))}
        </article>
      </article>
      <article className="xl:grid grid-cols-[400px_auto] gap-[100px] mt-[80px] md:mt-[120px] lg:mt-[298px] max-w-[1440px] px-[20px] mx-auto">
        <h1
          data-aos="fade-in"
          className="text-[32px] text-center xl:text-left md:text-[38px] lg:text-[50px] font-bold mb-[20px]"
        >
          Who Are We?
        </h1>

        <article className="font-medium text-center xl:text-left md:text-[20px] lg:text-[24px] flex flex-col gap-[25px]">
          {whoAreWeParagraphs.map((paragraph, index) => (
            <p
              key={index}
              data-aos="fade-up-in"
              data-aos-duration="2000"
              data-aos-once={true}
            >
              {paragraph}
            </p>
          ))}
        </article>
      </article>
      <figure className="max-w-[1440px] mx-auto md:px-[20px] w-full mt-[80px] md:mt-[150px] overflow-hidden">
        <motion.img
          ref={largeImageRef}
          animate={
            largeImageInView
              ? { scale: 1.1, transition: { duration: 3, delay: 0.2 } }
              : { scale: 1 }
          }
          src="/Homepage/brandcowarehouse.webp"
          className="w-full object-cover min-h-[230px] max-h-[450px] md:rounded-[10px]"
        />
      </figure>
      <header className="max-w-[1440px] mx-auto px-[20px] mt-[80px] md:mt-[110px] flex justify-between">
        <h1
          data-aos="fade-in"
          data-aos-duration="2000"
          className="text-center lg:text-left text-[32px] md:text-[50px] lg:max-w-[600px]  font-semibold xl:max-w-[823px]"
        >
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
        <p
          data-aos="fade-in"
          data-aos-duration="2000"
          className=" max-w-[725px] text-[16px] text-center lg:text-left md:text-[20px] lg:text-[22px] mt-[18px] leading-[27px]"
        >
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
    </motion.main>
  );
};

export default AboutUsPage;
