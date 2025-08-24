import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useTranslation } from "../lib/TranslationProvider";
import { Charm } from "./Charm";

interface CharmDialogProps {
    charm: CharmType;
}

export function CharmDialog({
    charm: { description, location, name, notches, sprite },
}: CharmDialogProps) {
    const t = useTranslation();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Charm name={name} sprite={sprite} />
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white max-w-lg">
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
            </DialogContent>
        </Dialog>
    );
}
