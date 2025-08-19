"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { getLocale } from "@/lib/getLocale";

const TranslationContext = createContext(getLocale());

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [texts, setTexts] = useState(getLocale());

    useEffect(() => {
        setTexts(getLocale());
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
