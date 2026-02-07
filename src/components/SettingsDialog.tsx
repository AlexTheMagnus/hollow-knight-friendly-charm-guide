"use client";

import { useTranslation } from "@/lib/TranslationProvider";
import { X } from "lucide-react";
import { ReactNode, useState } from "react";
import { SettingsLink } from "./SettingsLink";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface SettingsDialogProps {
    children: ReactNode;
}

export function SettingsDialog({ children }: SettingsDialogProps) {
    const t = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="bg-black/90 border border-white/20 max-w-lg mx-auto">
                <div className="absolute top-4 right-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full p-1 hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label={t("settings.close")}
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>
                <DialogHeader>
                    <DialogTitle className="text-3xl font-trajan text-center">
                        {t("settings.title")}
                    </DialogTitle>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                        <SettingsLink
                            href="https://github.com/AlexTheMagnus/hollow-knight-friendly-charm-guide"
                            text={t("settings.about_this_project")}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}