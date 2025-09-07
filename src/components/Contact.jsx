import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next"; // 1. Import the hook

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const { t } = useTranslation(); // 2. Initialize the hook
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Formspree hook
  const [state, handleSubmit] = useForm("xanbvaqa");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* 3. Replace hardcoded text with keys */}
        <p className={styles.sectionSubText}>{t("contact.getInTouch")}</p>
        <h3 className={styles.sectionHeadText}>{t("nav.contact")}</h3>

        {state.succeeded ? (
          <p className="text-green-400 mt-8">{t("contact.successMessage")}</p>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.nameLabel")}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.form.namePlaceholder")}
                className="bg-tertiary py-4! px-6! placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <ValidationError
                prefix={t("contact.form.nameLabel")}
                field="name"
                errors={state.errors}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.emailLabel")}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.form.emailPlaceholder")}
                className="bg-tertiary py-4! px-6! placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <ValidationError
                prefix={t("contact.form.emailLabel")}
                field="email"
                errors={state.errors}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {t("contact.form.messageLabel")}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.form.messagePlaceholder")}
                className="bg-tertiary py-4! px-6! placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              <ValidationError
                prefix={t("contact.form.messageLabel")}
                field="message"
                errors={state.errors}
              />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px]! focus:outline-none"
            >
              <span className="absolute inset-[-1000%]! animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                {/* 4. Translate button states */}
                {state.submitting
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
                {!state.submitting && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                )}
              </span>
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
