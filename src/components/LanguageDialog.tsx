"use client";

import { useTranslation } from "@/lib/TranslationProvider";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface LanguageDialogProps {
  children: ReactNode;
}

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "pl", name: "Polski" },
  { code: "ru", name: "Русский" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
];

export function LanguageDialog({ children }: LanguageDialogProps) {
  const t = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", langCode);
    window.history.pushState({}, "", url.toString());
    setIsOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-black/90 border border-white/20 max-w-lg mx-auto">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={t("language_selector.close")}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <DialogHeader>
          <DialogTitle className="text-3xl font-trajan text-center">
            {t("language_selector.change_language")}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto px-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="py-2 px-4 text-white hover:text-white/80 transition-colors font-trajan text-lg text-center cursor-pointer"
              >
                {lang.name}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <button
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 text-white hover:text-red-500 transition-colors font-trajan cursor-pointer"
            >
              {t("language_selector.close")}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}