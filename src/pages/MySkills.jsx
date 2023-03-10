import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useMediaQuery } from "../hooks/useMediaQuery";
import skillImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-20 pb-24">
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
          <p className="mt-10 mb-7">
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
                className="z-10"
              />
            </div>
          ) : (
            <img
              src={skillImage}
              alt="profile"
              className="z-10"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
