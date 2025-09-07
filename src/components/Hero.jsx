import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTranslation } from "react-i18next"; // ✅

const Hero = () => {
  const { t } = useTranslation(); // ✅

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 mt-[26px] mr-[250.4px] mb-0 ml-[250.4px] left-[160px] top-[150px] mx-auto ${styles.paddingX} flex-important flex-row items-start gap-5 max-[640px]:m-0! max-[640px]:left-[-22px]! max-[640px]:top-[175px]!`}
      >
        <div className="flex-important flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {/* ✅ Translate hero heading and subheading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.greeting")}{" "}
            <span className="text-[#915EFF]">Mustapha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.subtitle1")}
            <br className="sm:block hidden" />
            {t("hero.subtitle2")}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex-important justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
