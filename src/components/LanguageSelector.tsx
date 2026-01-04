"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/TranslationProvider";
import { useRouter } from "next/navigation";

const LANGUAGES = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
    { code: "pl", name: "Polski" },
    { code: "ru", name: "Русский" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "zh", name: "中文" },
];

export function LanguageSelector() {
    const t = useTranslation();
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        // Obtener el idioma actual del parámetro de URL o del navegador
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get("lang");
        
        if (urlLang && LANGUAGES.some(lang => lang.code === urlLang)) {
            setCurrentLang(urlLang);
        } else {
            const browserLang = window.navigator.language.split("-")[0];
            const supportedLang = LANGUAGES.find(lang => lang.code === browserLang);
            setCurrentLang(supportedLang ? browserLang : "en");
        }
    }, []);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        
        // Actualizar la URL con el nuevo parámetro de idioma
        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        
        // Actualizar la URL sin recargar la página completa
        window.history.pushState({}, "", url.toString());
        
        // Recargar la página para aplicar el nuevo idioma
        router.refresh();
    };

    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="language-select" className="text-white/80">
                {t("settings.select_language")}:
            </label>
            <select
                id="language-select"
                value={currentLang}
                onChange={handleLanguageChange}
                className="bg-black/50 border border-white/30 rounded px-3 py-1.5 text-white focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
            >
                {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}