"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import charmsData from "@/data/charms.json";
import { charmsMapper } from "@/lib/charmMapper";
import { useTranslation } from "@/lib/TranslationProvider";
import { CharmDialog } from "@/components/CharmDialog";

const charms = charmsMapper(charmsData);

export default function HomePage() {
    const [isMobile, setIsMobile] = useState(false);
    const texts = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerHeight > window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {isMobile && (
                <div className="text-center text-white bg-gray-800/80 rounded-lg px-4 py-2 mb-4">
                    {texts.rotate_phone_message}
                    <span className="text-2xl align-middle">📱🔄</span>
                </div>
            )}
            <Image
                src="/title.png"
                alt={texts.app_title}
                width={500}
                height={190}
                priority
                className="mb-4 mt-10"
            />
            <h2 className="text-2xl font-bold mb-8 text-center text-white font-trajan">
                {texts.guide_title}
            </h2>
            <div className="grid grid-cols-10 gap-4 p-4">
                {charms.map((charm, index) => (
                    <CharmDialog key={index} charm={charm} />
                ))}
            </div>
        </div>
    );
}
