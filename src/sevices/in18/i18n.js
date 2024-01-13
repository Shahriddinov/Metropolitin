import { initReactI18next } from "react-i18next";
import { resorce } from "./resorce";
import i18n from "i18next";

const i18 = i18n.use(initReactI18next).init({
    resources: resorce,
    lng: localStorage.getItem("language") || "uz",
    interpolation: {
        escapeValue: false,
    },
});

export default i18;
