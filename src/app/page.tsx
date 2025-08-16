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
            <Image
                src="/title.png"
                alt="Hollow Knight Title"
                width={500}
                height={190}
                priority
                className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-8 text-center text-white font-trajan">
                Friendly Charm Guide
            </h2>
            <div className="grid grid-cols-10 gap-4 p-4">
                {charms.map((charm, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="rounded-full charm-halo inline-block">
                                <Image
                                    onClick={() => setSelectedCharm(charm)}
                                    src={`/charms/${charm.sprite}.png`}
                                    alt={charm.name}
                                    width={96}
                                    height={96}
                                    className="hover:scale-110 transition rounded-full"
                                />
                            </div>
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
