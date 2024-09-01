import AboutImg from "/src/assets/react.svg";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      id="about"
      className="overflow-hidden md:flex-wrap md:justify-center mx-0 md:mx-20 rounded-lg p-12 
      text-white bg-black shadow-xl bg-opacity-30"
    >
      <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
      <div className="flex justify-center py-8">
        <div className="md:flex flex-col md:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:h-80 content-center "
            src={AboutImg}
            alt="About img"
          ></motion.img>

          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="ml-12"
          >
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-0" />

              <div className="max-w-md">
                <p className="leading-tight w-12/12">
                  <span className=" text-3xl font-bold">Graduated</span> a
                  Bachelor of Science in Computer Science from Eulogio Amang
                  Rodriguez Institute of Science and Technology. My expertise
                  spans designing and programming websites, games, and mobile
                  apps. I’ve developed several applications using Flutter for
                  personal projects and freelance work in the game industry,
                  focusing on performance optimization. My{" "}
                  <span className=" text-3xl font-bold">Experience</span> also
                  includes an internship with the game dev team at Go Crayons,
                  where I played a role in developing and designing game
                  mechanics to enhance the overall gaming experience. Outside of
                  work, My
                  {"  "}
                  <span className=" text-3xl font-bold">Hobbies</span> are about
                  designing and building, whether through programming or using
                  software tools like Figma and Aseprite.
                </p>
              </div>
            </div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
