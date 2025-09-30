"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CharmsStorageService } from "./localStorage";

interface ObtainedCharmsContextType {
    obtainedCharms: string[];
    isCharmObtained: (charmId: string) => boolean;
    toggleCharm: (charmId: string) => void;
    clearAllCharms: () => void;
}

const ObtainedCharmsContext = createContext<
    ObtainedCharmsContextType | undefined
>(undefined);

interface ObtainedCharmsProviderProps {
    children: React.ReactNode;
}

export function ObtainedCharmsProvider({
    children,
}: ObtainedCharmsProviderProps) {
    const [obtainedCharms, setObtainedCharms] = useState<string[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const stored = CharmsStorageService.getObtainedCharms();
        setObtainedCharms(stored);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            CharmsStorageService.saveObtainedCharms(obtainedCharms);
        }
    }, [obtainedCharms, isInitialized]);

    const isCharmObtained = (charmId: string): boolean => {
        return obtainedCharms.includes(charmId);
    };

    const toggleCharm = (charmId: string): void => {
        if (!charmId) return;
        console.log("Toggling charm:", charmId);

        setObtainedCharms((prev) => {
            if (prev.includes(charmId)) {
                return prev.filter((id) => id !== charmId);
            } else {
                return [...prev, charmId];
            }
        });
    };

    const clearAllCharms = (): void => {
        setObtainedCharms([]);
        CharmsStorageService.clearObtainedCharms();
    };

    const value: ObtainedCharmsContextType = {
        obtainedCharms,
        isCharmObtained,
        toggleCharm,
        clearAllCharms,
    };

    return (
        <ObtainedCharmsContext.Provider value={value}>
            {children}
        </ObtainedCharmsContext.Provider>
    );
}

export function useObtainedCharms(): ObtainedCharmsContextType {
    const context = useContext(ObtainedCharmsContext);
    if (context === undefined) {
        throw new Error("useCharms must be used within a CharmsProvider");
    }
    return context;
}
