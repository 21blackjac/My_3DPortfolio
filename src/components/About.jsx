import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // 1. Import the hook

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const { t } = useTranslation(); // 2. Use the hook inside the component
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex-important justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="Full-Stack Developer"
            className="w-16 h-16 object-contain"
          />
          {/* 3. Translate the service title */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {t(title)}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t } = useTranslation(); // 4. Use the hook in the main component

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* 5. Replace hardcoded text with keys */}
        <p className={styles.sectionSubText} style={{ fontSize: "22px" }}>
          {t("about.intro")}
        </p>
        <h2 className={styles.sectionHeadText}>{t("about.overview")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-4 text-secondary text-[22px] max-w-3xl leading-[30px]"
        style={{ margin: "40px 0" }}
      >
        {/* 6. Translate the long description */}
        {t("about.description")}
      </motion.p>

      <div className="mt-20 mb-[20px] flex gap-10" style={{ margin: "40px 0" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
