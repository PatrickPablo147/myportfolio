import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-2 max-w-[1200px] mx-auto relative flex items-center justify-start min-h-screen pl-16">
      <div className="flex flex-col items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4 font-bold"
          >
            Hi, I am <br />
            <span className="text-orange-500">Patrick G. Pablo</span>
          </motion.p>

          <TypeAnimation
            sequence={["Web Dev", 1000, "Mobile Dev", 1000, "Game Dev", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[1000px] md:max-w-[500px] md:text-xl text-lg mb-6"
          >
            I’m a passionate recent graduate specializing in creating stunning
            websites, games, and mobile apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-12 my-4 md:mb-0"
          >
            <motion.a
              href="/myportfolio/public/Resume.pdf"
              download={"pablo_resume.pdf"}
              target="_blank"
              whileHover={{
                scale: 1.25,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-7 py-3 border
                                     border-orange-400 flex items-center gap-2"
            >
              Get in touch <AiOutlineArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
