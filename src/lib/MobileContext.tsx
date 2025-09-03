"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

const MobileContext = createContext(false);

export function MobileProvider({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerHeight > window.innerWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    );
}

export function useMobile() {
    return useContext(MobileContext);
}
