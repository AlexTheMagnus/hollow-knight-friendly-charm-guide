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

import charms from "@/data/charms.json";

type Charm = {
    notches: number;
    name: string;
    description: string;
    location: string;
};

export default function HomePage() {
    const [selectedCharm, setSelectedCharm] = useState<Charm | null>(null);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Hollow Knight Friendly Charm Guide
            </h2>

            <div className="grid grid-cols-10 gap-4">
                {charms.map((charm, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <button
                                onClick={() => setSelectedCharm(charm)}
                                className="rounded-full border-2 border-gray-500 hover:border-white hover:scale-110 transition p-2 bg-black"
                            >
                                <Image
                                    src={`/charms/${charm.sprite}.png`}
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
                                    {charm.name}
                                </DialogTitle>
                            </DialogHeader>

                            <div className="mt-4 space-y-3">
                                <p className="text-yellow-400">
                                    Notches: {charm.notches}
                                </p>
                                <p className="italic text-gray-300">
                                    {charm.description}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {charm.location}
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
