import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-bold mb-5">
                Let&#39;s <span>connect!</span>
              </h3>
              <p className="text-justify w-11/12 mx-auto">
                Looking to bring your website, game or mobile app project to
                life? Feel free to reach out by sending me a message or
                connecting through my social media links below. I’d love to hear
                from you!
              </p>

              <div className="ml-5 mt-4 flex justify-start gap-6 text-5xl md:text-4xl text-orange-500 z-20">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/PatrickPablo147"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/patrick-pablo-193b30268/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.facebook.com/profile.php?id=61551874291006"
                  target="_blank"
                >
                  <AiOutlineFacebook />
                </motion.a>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bvredrob"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Contact Me</p>
            <input
              type="text"
              id="name"
              placeholder="Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="6"
              placeholder="Leave a message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
