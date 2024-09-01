import {
  FaCss3,
  FaUnity,
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiGodotengine } from "react-icons/si";
import AboutImg from "/src/assets/quiz_app.png";
import PlatGameImg from "/src/assets/platformer_game.png";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const IconCard = ({ icon: Icon, color, size = 50 }) => (
  <motion.div
    whileHover={{
      scale: 1.2,
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
    }}
    className="p-3 bg-zinc-950 flex items-center rounded-2xl"
  >
    <Icon color={color} size={size} />
  </motion.div>
);

const Skills = () => {
  const skillIcons = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3, color: "#1572B6" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: SiGodotengine, color: "#2E95FB" },
    { icon: FaUnity, color: "#BDBDBD" },
    { icon: RiFlutterFill, color: "#61DAFB" },
    { icon: FaGithub, color: "#F5F5F5" },
  ];

  const projects = [
    {
      link: "https://www.mediafire.com/file/5g84fh7w8ybn6h6/LearnSoftEng.apk/file",
      icon: (
        <img
          src={AboutImg}
          alt="Quiz App Image"
          className="w-72 h-auto object-contain"
        />
      ),
      title: "Quiz App",
      subtitle: "Developed using Flutter",
      responsibilities: [
        "A quiz application designed for software engineering enthusiasts, featuring user login and the ability to create personalized quizzes. It includes an admin panel for management. The app was designed in Figma and developed with Flutter, utilizing Firebase as the backend database.",
      ],
    },
    {
      link: "https://www.mediafire.com/file/2xrkqijwdona9ef/Apk.rar/file",
      icon: (
        <img
          src={PlatGameImg}
          alt="Quiz App Image"
          className="w-72 h-auto object-contain"
        />
      ),
      title: "Platformer Game",
      subtitle: "Created using godot",
      responsibilities: [
        "A platformer game developed during internship using the Godot game engine. The game features a star character with unique mechanics, navigating through platforms to reach objectives. It received high praise from senior team members for its stunning visuals and engaging gameplay.",
      ],
    },
  ];

  return (
    <div id="skills" className="p-10 md:p-24 items-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold pl-6">Skills</h1>
      <div className="flex flex-col items-center justify-around">
        <div className="flex flex-wrap md:w-4/4 gap-8 md:p-12 py-10">
          {skillIcons.map((skill, index) => (
            <IconCard key={index} icon={skill.icon} color={skill.color} />
          ))}
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`mt-4 p-4 w-full flex flex-col items-center gap-6 bg-slate-950 bg-opacity-45 rounded-lg ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse pl-16"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="pt-4 flex items-center"
              >
                {project.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-white pt-4 flex-grow"
              >
                <h2 className="leading-tight">{project.title}</h2>
                <div>
                  <p className="text-sm leading-tight font-thin">
                    {project.subtitle}
                  </p>
                  <ul className="text-base text-justify p-2 max-w-[1000px] md:max-w-[500px] pr-12">
                    {project.responsibilities.map((responsibility, i) => (
                      <li key={i}>- {responsibility}</li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.25,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                  }}
                  className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-7 py-3 bg-orange-500 items-center gap-2 mt-4"
                >
                  <a href={project.link} target="_blank">
                    Download
                  </a>
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
