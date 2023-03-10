import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-deep-blue z-30 flex flex-col justify-center items-center text-center p-16 text-gray`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    
    <motion.div variants={projectVariant} className="relative ">
      <div className={overlayStyles}>
        <p className="text-2xl font-RobotoSlab">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          sapiente.
        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-RobotoSlab font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-OpenSans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          tenetur in aliquam nemo alias molestiae, distinctio quod minus numquam
          modi quia optio! Cupiditate amet totam nostrum ad adipisci labore
          dolores!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] font-RobotoSlab font-semibold">
            HERMOSA INTERFAS DE USUARIO
          </div>
          <Project title="Project-1" />
          <Project title="Project-2" />
          <Project title="Project-3" />
          <Project title="Project-4" />
          <Project title="Project-5" />
          <Project title="Project-6" />
          <Project title="Project-7" />

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] font-RobotoSlab font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
