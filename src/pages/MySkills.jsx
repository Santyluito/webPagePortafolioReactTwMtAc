import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useMediaQuery } from "../hooks/useMediaQuery";
import skillImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-RobotoSlab font-semibold text-4xl mb-5">
            My <span className="text-red">skills</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-OpenSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
            nisi quia velit labore odio.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediaScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src={skillImage}
                alt="skills"
                className="z-10 hover:grayscale transition duration-500"
              />
            </div>
          ) : (
            <img src={skillImage} alt="profile" className="z-10" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPREIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-RobotoSlab font-semibold text-5xl">01</p>
              <p className="font-RobotoSlab font-semibold text-3xl mt-3">
                Experiencia
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-OpenSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perferendis tempore saepe ad, sunt aspernatur culpa. Numquam facere
            libero sint. Aperiam, officiis earum. Omnis quasi adipisci illum
            numquam repellendus a.
          </p>
        </motion.div>

        {/* INNOVATTIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-RobotoSlab font-semibold text-5xl">02</p>
              <p className="font-RobotoSlab font-semibold text-3xl mt-3">
                Innovacion
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-OpenSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perferendis tempore saepe ad, sunt aspernatur culpa. Numquam facere
            libero sint. Aperiam, officiis earum. Omnis quasi adipisci illum
            numquam repellendus a.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-RobotoSlab font-semibold text-5xl">03</p>
              <p className="font-RobotoSlab font-semibold text-3xl mt-3">
                Creativo
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-OpenSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perferendis tempore saepe ad, sunt aspernatur culpa. Numquam facere
            libero sint. Aperiam, officiis earum. Omnis quasi adipisci illum
            numquam repellendus a.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
