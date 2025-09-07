import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ import translations

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { t } = useTranslation(); // ✅ translation hook

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-[360px] h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex-important justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex-important justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <br />

        <div className="mt-5">
          {/* ✅ Translate project name & description */}
          <h3 className="text-white font-bold text-[24px]">{t(name)}</h3>
          <br />
          <p className="mt-2 text-secondary text-[14px]">{t(description)}</p>
          <br />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* ✅ Translations for section headers */}
        <p className={`${styles.sectionSubText}`} style={{ fontSize: "20px" }}>
          {t("projects_section")}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projects")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]"
          style={{ margin: "40px 0" }}
        >
          {t("projects_intro")}
        </motion.p>
      </div>

      <div className="sm:pl-[0px]! mt-20 pl-[47px]! flex-important flex-wrap gap-[36px]!">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;
