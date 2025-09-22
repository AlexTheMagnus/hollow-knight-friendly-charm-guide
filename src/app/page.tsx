"use client";

import Image from "next/image";

import { CharmDialog } from "@/components/CharmDialog";
import charmsData from "@/data/charms.json";
import { charmsMapper } from "@/lib/charmMapper";
import { useTranslation } from "@/lib/TranslationProvider";

const charms = charmsMapper(charmsData);

export default function HomePage() {
    const t = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
            <Image
                src="/title.png"
                alt={t("app_title")}
                width={500}
                height={190}
                priority
                className="mb-4 mt-10"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-center font-trajan mb-8">
                {t("guide_title")}
            </h2>
            <div className="grid grid-cols-10 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                {charms.map((charm, index) => (
                    <CharmDialog key={index} charm={charm} />
                ))}
            </div>
        </div>
    );
}
