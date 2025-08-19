import en from "@/locales/en.json";
import es from "@/locales/es.json";

export function getBrowserLang(): typeof en {
    if (typeof window === "undefined") return en;
    const lang = window.navigator.language.split("-")[0];
    switch (lang) {
        case "es":
            return es;
        default:
            return en;
    }
}
