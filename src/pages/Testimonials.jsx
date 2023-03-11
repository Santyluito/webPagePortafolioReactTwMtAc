import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  const testimonialStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADERs */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-RobotoSlab font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
          </p>
          <LineGradient width="w-3/5" className="mx-auto" />
          <p className="mt-10 font-OpenSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore
            eius accusantium provident! Esse dolorem perferendis dicta, natus
            illo repudiandae?
          </p>
        </motion.div>

        {/* TESTIMONIAL SECTION */}
      </div>
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyle} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-RobotoSlab text-6xl">"</p>
          <p className="text-center text-xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyle} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-RobotoSlab text-6xl">"</p>
          <p className="text-center text-xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyle} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-RobotoSlab text-6xl">"</p>
          <p className="text-center text-xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
