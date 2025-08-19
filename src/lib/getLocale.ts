import en from "@/locales/en.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";
import pl from "@/locales/pl.json";
import it from "@/locales/it.json";
import pt from "@/locales/pt.json";
import fr from "@/locales/fr.json";
import ja from "@/locales/ja.json";
import ko from "@/locales/ko.json";
import zh from "@/locales/zh.json";
import ru from "@/locales/ru.json";

const locales: Record<string, typeof en> = {
    en,
    es,
    de,
    pl,
    it,
    pt,
    fr,
    ja,
    ko,
    zh,
    ru,
};

export function getLocale(): typeof en {
    if (typeof window === "undefined") return en;
    const lang = window.navigator.language.split("-")[0];
    return locales[lang] || en;
}
