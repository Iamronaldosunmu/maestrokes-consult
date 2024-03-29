import { useState } from "react";
import InputGroup from "../components/InputGroup";
import { motion } from "framer-motion";
import TextAnimation from "../components/TextAnimation";
import { useForm, ValidationError } from "@formspree/react";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [state, handleSubmit] = useForm("xdorvwyr");

  return (
    <motion.main exit={{ opacity: 0 }}>
      <section className="max-w-[1440px] mx-auto">
        <header className="px-[20px] gap-[] mt-[110px] lg:mt-[137px] text-[40px] md:text-[64px] lg:text-[84px] lg:leading-[90px] lg:mb-[20px] font-bold lg:font-semibold flex gap-x-[16px] lg:gap-x-[18px]">
          {"Contact Us".split(" ").map((word, index) => {
            return (
              <div key={index} className="overflow-hidden flex ">
                {word.split("").map((letter: string, index: number) => {
                  return (
                    <motion.div
                      initial={{ y: 90, scale: 0.9 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 1,
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
        </header>
        <article className="px-[20px] text-[15px] md:text-[21px] lg:text-[24px] flex flex-col gap-[9px]">
          <TextAnimation
            text="28 Montgomery Road, Yaba. Lagos, Nigeria."
            lineHeight={27}
            delay={1.2}
          />
          <TextAnimation
            text="info.maestrokes@gmail.com"
            lineHeight={27}
            delay={1.3}
          />
          <TextAnimation
            text="timeyinekoko@maestrokesconsult.com"
            lineHeight={27}
            delay={1.4}
          />
          <TextAnimation
            text="+234-(0)-8130214937"
            lineHeight={27}
            delay={1.5}
          />
        </article>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
          className="px-[20px] text-[25px] lg:text-[35px] font-semibold mt-[60px]"
        >
          Let us know how we can help you.
        </motion.p>

        {state.succeeded && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[26px] text-center py-[200px] font-medium"
          >
            Thanks For Reaching Out!
            <br />
            We'll get back to you shortly
          </motion.p>
        )}
        {!state.succeeded && (
          <form
            onSubmit={handleSubmit}
            className="px-[20px] mt-[70px] flex flex-col gap-[50px] lg:gap-[68px]"
          >
            <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
              <InputGroup
                id="name"
                name="name"
                value={name}
                setValue={setName}
                placeholder="Name"
                errors={state.errors}
              />
              <InputGroup
                id="email"
                name="email"
                type="email"
                value={email}
                setValue={setEmail}
                placeholder="Email"
                errors={state.errors}
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
              <InputGroup
                name="phone-number"
                id="phone-number"
                value={phoneNumber}
                setValue={setPhoneNumber}
                placeholder="Phone Number"
                errors={state.errors}
              />
              <InputGroup
                name="subject"
                id="subject"
                value={subject}
                setValue={setSubject}
                placeholder="Subject"
                errors={state.errors}
              />
            </div>
            <div className="lg:mb-[30px] ">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="h-[120px] lg:h-[194px] resize-none w-full placeholder:text-[16px] md:text-[21px] md:placeholder:text-[21px] lg:placeholder:text-[24px] focus:outline-none text-[16px] lg:text-[24px] font-medium"
              />
              <div className="w-full bg-black h-[2px]  bg-opacity-50 "></div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-[180px] lg:w-[321px] h-[50px] lg:h-[89px] -mt-[9px] bg-black text-white text-[16px] lg:text-[24px] font-medium mb-[100px] lg:mb-[124px] disabled:opacity-50"
            >
              {state.submitting ? "Loading..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
      <img
        className="w-full min-h-[220px] max-h-[600px] object-cover"
        src="/ContactUsPage/contactUsImage.png"
      />
    </motion.main>
  );
};

export default ContactUsPage;
