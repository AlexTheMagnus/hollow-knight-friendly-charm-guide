import Image from "next/image";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useTranslation } from "../lib/TranslationProvider";

interface CharmProps {
    name: CharmType["name"];
    sprite: CharmType["sprite"];
    onClick?: () => void;
    className?: string;
}

export function Charm({ name, sprite, onClick, className = "" }: CharmProps) {
    const t = useTranslation();

    return (
        <div
            className={`rounded-full charm-halo inline-block ${className}`}
            onClick={onClick}
        >
            <Image
                src={`/charms/${sprite}.png`}
                alt={t(name)}
                width={96}
                height={96}
                className="hover:scale-110 transition"
            />
        </div>
    );
}
