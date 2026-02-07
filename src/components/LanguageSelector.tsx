"use client";

import { useTranslation } from "@/lib/TranslationProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="relative inline-flex items-center">
            <select
                id="language-select"
                value={currentLang}
                onChange={handleLanguageChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                className="appearance-none bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5 pr-7 text-white focus:outline-none cursor-pointer opacity-60 hover:opacity-100 transition-opacity uppercase text-sm font-medium"
            >
                {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-black text-white normal-case">
                        {lang.name}
                    </option>
                ))}
            </select>
            <div
                className="pointer-events-none absolute right-2 transition-transform duration-200 ease-in-out"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </div>
        </div>
    );
}