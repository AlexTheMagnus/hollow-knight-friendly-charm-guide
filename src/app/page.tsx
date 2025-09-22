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
        <div className="h-screen flex flex-col justify-center items-center">
            <Image
                src="/title.png"
                alt={t("app_title")}
                width={500}
                height={190}
                priority
                className="mb-4 mt-10"
            />
            <h2 className="text-2xl font-bold mb-8 text-center font-trajan">
                {t("guide_title")}
            </h2>
            <div className="grid grid-cols-10 gap-1 sm:gap-2 md:gap-3 lg:gap-4 p-4">
                {charms.map((charm, index) => (
                    <CharmDialog key={index} charm={charm} />
                ))}
            </div>
        </div>
    );
}
