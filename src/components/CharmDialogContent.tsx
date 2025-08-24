import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useTranslation } from "../lib/TranslationProvider";

interface CharmDialogContentProps {
    description: CharmType["description"];
    location: CharmType["location"];
    name: CharmType["name"];
    notches: CharmType["notches"];
}

export function CharmDialogContent({
    description,
    location,
    name,
    notches,
}: CharmDialogContentProps) {
    const t = useTranslation();

    return (
        <div className="bg-gray-900 text-white">
            <DialogHeader>
                <DialogTitle className="text-2xl">{t(name)}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-3">
                <p className="text-yellow-400">
                    {t("notches_label")}: {notches}
                </p>
                <p className="italic text-gray-300">{t(description)}</p>
                <p className="text-sm text-gray-400">{t(location)}</p>
            </div>
        </div>
    );
}
