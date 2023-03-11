import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import contactImg from "../assets/contact-image.jpeg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* headings */}
      <motion.div
      className="flex justify-end w-full"
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
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" className="mx-auto" />
          </div>
        </div>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImg} alt="contact man front in cpu" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/l-matamoros@itctrol.com"
            method="POST"
          >
            <input
              type="text"
              className="text-deep-blue w-full font-semibold placeholder-opaque-black p-3 rounded-sm"
              placeholder="NOMBRE"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <span className="text-red mt-1">
                {errors.name.type === "required" && "Este campo es requerido"}
                {errors.name.type === "maxLength" &&
                  "Maximo de caracteres es de 100"}
              </span>
            )}

            <input
              type="text"
              className="text-deep-blue w-full font-semibold placeholder-opaque-black p-3 rounded-sm mt-5"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span className="text-red mt-1">
                {errors.email.type === "required" && "Este campo es requerido"}
                {errors.email.type === "pattern" && "Email no valido"}
              </span>
            )}

            <textarea
              rows={4}
              cols={40}
              type="text"
              className="text-deep-blue w-full font-semibold placeholder-opaque-black p-3 rounded-sm mt-5"
              placeholder="MESSAGE"
              {...register("msg", { required: true, maxLength: 2000 })}
            />
            {errors.msg && (
              <span className="text-red mt-1">
                {errors.msg.type === "required" && "Este campo es requerido"}
                {errors.msg.type === "maxLength" &&
                  "Maximo de caracteres es de 2000"}
              </span>
            )}
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              ENVIAR EL MENSAJE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
