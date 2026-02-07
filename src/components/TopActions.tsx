"use client";

import { FeatureFlag, useFeatureFlag } from "@/lib/featureFlags";
import { useTranslation } from "@/lib/TranslationProvider";
import { Globe, Settings } from "lucide-react";
import { LanguageDialog } from "./LanguageDialog";
import { SettingsDialog } from "./SettingsDialog";
import { IconButton } from "./ui/IconButton";

export const TopActions = () => {
    const t = useTranslation();
    const showLanguageSelector = useFeatureFlag(FeatureFlag.LanguageSelector);

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            {showLanguageSelector && (
                <LanguageDialog>
                    <IconButton
                        icon={<Globe className="w-5 h-5 text-white" />}
                        label={t("language_selector.change_language")}
                    />
                </LanguageDialog>
            )}
            <SettingsDialog>
                <IconButton
                    icon={<Settings className="w-5 h-5 text-white" />}
                    label={t("settings.open")}
                />
            </SettingsDialog>
        </div>
    );
};