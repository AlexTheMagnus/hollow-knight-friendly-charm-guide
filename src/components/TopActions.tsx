"use client";

import { useTranslation } from "@/lib/TranslationProvider";
import { Settings } from "lucide-react";
import { SettingsDialog } from "./SettingsDialog";

export const TopActions = () => {
    const t = useTranslation();

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            <SettingsDialog>
                <button
                    aria-label={t("settings.open")}
                    className="p-2 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 transition-opacity cursor-pointer opacity-60 hover:opacity-100"
                >
                    <Settings className="w-5 h-5 text-white" />
                </button>
            </SettingsDialog>
        </div>
    );
};