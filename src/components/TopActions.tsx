"use client";

import { FeatureFlag, useFeatureFlag } from "@/lib/featureFlags";
import { useTranslation } from "@/lib/TranslationProvider";
import { Settings } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { SettingsDialog } from "./SettingsDialog";
import { IconButton } from "./ui/IconButton";

export const TopActions = () => {
    const t = useTranslation();
    const showLanguageSelector = useFeatureFlag(FeatureFlag.LanguageSelector);

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            {showLanguageSelector && <LanguageSelector />}
            <SettingsDialog>
                <IconButton
                    icon={<Settings className="w-5 h-5 text-white" />}
                    label={t("settings.open")}
                />
            </SettingsDialog>
        </div>
    );
};