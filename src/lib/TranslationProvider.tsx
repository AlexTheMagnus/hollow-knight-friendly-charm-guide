"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { getBrowserLang } from "@/lib/getBroserLang";

const TranslationContext = createContext(getBrowserLang());

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [texts, setTexts] = useState(getBrowserLang());

    useEffect(() => {
        setTexts(getBrowserLang());
    }, []);

    return (
        <TranslationContext.Provider value={texts}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}
