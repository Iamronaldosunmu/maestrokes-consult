import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
  const [firstTime, setFirstTime] = useState(true);
  const navigate = useNavigate();
  const [inPageTransition, setInPageTransition] = useState(false);

  const changePage = (route: string) => {
    setTimeout(() => navigate(route), 2000)
    setInPageTransition(true);
    setTimeout(() => {
      setMobileNavOpen(false);
    }, 500);
  };

  useEffect(() => {
    setFirstTime(false);
  }, []);

  return (
    <>
      {inPageTransition && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 2.4, duration: 0.4 } }}
          className="fixed top-0 left-0 right-0 bottom-0 z-50"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%", transition: { duration: 0.7 } }}
            className="h-full bg-black flex items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                transition: { delay: 0.8, duration: 1.8 },
              }}
              className=" text-[18px] text-white xl:text-[28px] z-20"
            >
              <span className="font-bold">MAESTROKES</span> CONSULT
            </motion.p>
          </motion.div>
          <motion.div
            onAnimationComplete={() => setInPageTransition(false)}
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: { duration: 0.7, delay: 1.8 },
            }}
            className="fixed top-0 h-full  bg-white flex items-center justify-center"
          ></motion.div>
        </motion.div>
      )}
      {pathname != "/" && (
        <div
          style={pathname !== "/home" ? { backgroundColor: "white" } : {}}
          className="top-0 fixed left-0 right-0 z-30"
        >
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            className="text-[#252525] text-opacity-[0.92] max-w-[1440px] px-[20px]  mx-auto pt-[20px] lg:pt-[10px] flex items-center justify-between"
          >
            <p onClick={() => navigate("/home")} className=" text-[18px] xl:text-[28px] z-20 cursor-pointer">
              <span className="font-bold">MAESTROKES</span> CONSULT
            </p>
            <div className="gap-[40px] hidden lg:flex">
              <NavLink
                setInPageTransition={setInPageTransition}
                text="ABOUT US"
                link="/about-us"
              />
              <NavLink
                setInPageTransition={setInPageTransition}
                text="OUR WORK"
                link="/our-work"
              />
              <NavLink
                setInPageTransition={setInPageTransition}
                text="CLIENTS"
                link="/clients"
              />
              <NavLink
                setInPageTransition={setInPageTransition}
                text="CONTACT US"
                link="/contact-us"
              />
            </div>
            <div className="relative block lg:hidden">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={
                  mobileNavOpen
                    ? {
                        opacity: 1,
                        width: "100vw",
                        height: "100vh",
                        x: 20,
                        y: -20,
                        borderRadius: 0,
                      }
                    : {
                        opacity: firstTime ? 0 : 1,
                        width: 40,
                        height: 40,
                        borderRadius: "50vh",
                        x: [20, 0],
                        y: [-20, 0],
                        transition: {
                          delay: firstTime ? 0 : 0.3,
                          duration: firstTime ? 0 : 0.4,
                        },
                      }
                }
                className=" bg-white  top-0 right-0 absolute"
              >
                <div className="pl-[20px] font-bold text-[40px] w-full h-full flex flex-col justify-center gap-[15px]">
                  <div className="overflow-hidden z-40">
                    <motion.div
                      onClick={() => changePage("/home")}
                      initial={{ y: 45, opacity: 0 }}
                      animate={
                        mobileNavOpen
                          ? {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4, delay: 0.6 },
                            }
                          : { y: 45, transition: { duration: 0.3 } }
                      }
                    >
                      HOME
                    </motion.div>
                  </div>
                  <div className="overflow-hidden z-40">
                    <motion.div
                      onClick={() => changePage("/about-us")}
                      initial={{ y: 45, opacity: 0 }}
                      animate={
                        mobileNavOpen
                          ? {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4, delay: 0.75 },
                            }
                          : { y: 45, transition: { duration: 0.3 } }
                      }
                    >
                      ABOUT US
                    </motion.div>
                  </div>
                  <div className="overflow-hidden z-40">
                    <motion.div
                      onClick={() => changePage("/our-work")}
                      initial={{ y: 45, opacity: 0 }}
                      animate={
                        mobileNavOpen
                          ? {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4, delay: 0.9 },
                            }
                          : { y: 45, transition: { duration: 0.3 } }
                      }
                    >
                      OUR WORK
                    </motion.div>
                  </div>
                  <div className="overflow-hidden z-40">
                    <motion.div
                      initial={{ y: 45, opacity: 0 }}
                      animate={
                        mobileNavOpen
                          ? {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4, delay: 1.05 },
                            }
                          : { y: 45, transition: { duration: 0.3 } }
                      }
                    >
                      CLIENTS
                    </motion.div>
                  </div>
                  <div className="overflow-hidden z-40">
                    <motion.div
                      onClick={() => changePage("/contact-us")}
                      initial={{ y: 45, opacity: 0 }}
                      animate={
                        mobileNavOpen
                          ? {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.4, delay: 1.2 },
                            }
                          : { y: 45, transition: { duration: 0.3 } }
                      }
                    >
                      CONTACT US
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                whileTap={{ scale: 0.85 }}
                className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center gap-[4px] flex-col shadow-sm "
              >
                <motion.div
                  animate={
                    mobileNavOpen
                      ? { width: 25, height: 1.5, rotateZ: 45, y: 5.2 }
                      : { width: 13, height: 1.5, transition: { delay: 0.6 } }
                  }
                  className="w-[13px] h-[1px] bg-black z-10"
                ></motion.div>
                <motion.div
                  animate={{
                    width: mobileNavOpen ? 25 : 13,
                    height: 1.5,
                    opacity: mobileNavOpen ? 0 : 1,
                    transition: { duration: 0.1 },
                  }}
                  className="w-[13px] h-[1px] bg-black z-10"
                ></motion.div>
                <motion.div
                  animate={
                    mobileNavOpen
                      ? { width: 25, height: 1.5, rotateZ: -45, y: -5.2 }
                      : { width: 13, height: 1.5, transition: { delay: 0.6 } }
                  }
                  className="w-[13px] h-[1px] bg-black z-10"
                ></motion.div>
              </motion.div>
            </div>
          </motion.nav>
          {pathname !== "/home" && (
            <motion.div
              animate={
                mobileNavOpen
                  ? { opacity: 0, transition: { duration: 0.1 } }
                  : { opacity: 1, transition: { delay: 0.4 } }
              }
              className="w-full h-[1px] bg-black mt-[10px]"
            ></motion.div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
