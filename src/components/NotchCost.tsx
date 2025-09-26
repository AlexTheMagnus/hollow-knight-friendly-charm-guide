import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/TranslationProvider";

interface NotchCostProps {
    count: number;
}

export const NotchCost = ({ count }: NotchCostProps) => {
    const t = useTranslation();

    if (count <= 0) {
        return null;
    }

    return (
        <div className="flex justify-center items-center gap-2">
            <span className="text-gray-300 text-2xl font-semibold font-perpetua tracking-wide">
                {t("notches_label")}
            </span>
            {[...Array(count)].map((_, i) => (
                <Image
                    key={i}
                    src="/notch.png"
                    alt="notch image"
                    width={32}
                    height={32}
                />
            ))}
        </div>
    );
};
