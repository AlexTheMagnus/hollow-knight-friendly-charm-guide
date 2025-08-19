"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { getLocale } from "@/lib/getLocale";

const TranslationContext = createContext<(key: string) => string>((key) => key);

function getNestedValue(obj: Record<string, unknown>, key: string): string {
    const value = key.split(".").reduce<unknown>((acc, part) => {
        if (acc && typeof acc === "object" && part in acc) {
            return (acc as Record<string, unknown>)[part];
        }
        return undefined;
    }, obj);
    return typeof value === "string" ? value : key;
}

export function TranslationProvider({ children }: { children: ReactNode }) {
    const texts = useMemo(() => getLocale(), []);

    const t = (key: string) => {
        return getNestedValue(texts, key);
    };

    return (
        <TranslationContext.Provider value={t}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}
