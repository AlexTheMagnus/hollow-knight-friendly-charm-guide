"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Charm = {
    id: number;
    name: string;
    image: string;
};

const charms: Charm[] = [
    { id: 1, name: "Fragile Heart", image: "/charms/fragile-heart.png" },
    { id: 2, name: "Fragile Greed", image: "/charms/fragile-greed.png" },
    { id: 3, name: "Fragile Strength", image: "/charms/fragile-strength.png" },
    // 👉 Aquí luego metemos TODOS los charms del JSON
];

export default function HomePage() {
    const [selectedCharm, setSelectedCharm] = useState<Charm | null>(null);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Hollow Knight Friendly Charm Guide
            </h2>

            {/* Grid de charms */}
            <div className="grid grid-cols-5 gap-6">
                {charms.map((charm) => (
                    <Dialog key={charm.id}>
                        <DialogTrigger asChild>
                            <button
                                onClick={() => setSelectedCharm(charm)}
                                className="rounded-full border-2 border-gray-500 hover:border-white hover:scale-110 transition p-2 bg-black"
                            >
                                <Image
                                    src={charm.image}
                                    alt={charm.name}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                            </button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 text-white max-w-lg">
                            <DialogHeader>
                                <DialogTitle className="text-2xl">
                                    {selectedCharm?.name}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                                <p>Aquí irá la descripción del charm.</p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Y aquí su ubicación.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
