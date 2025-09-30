"use client";

import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { motion } from "framer-motion";
import Image from "next/image";
import { useObtainedCharms } from "@/lib/CharmsContext";

interface CollectedCheckboxProps {
    charmId: string;
}

export default function CollectedCheckbox({ charmId }: CollectedCheckboxProps) {
    const { isCharmObtained, toggleCharm } = useObtainedCharms();
    const checked = isCharmObtained(charmId);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!checked) {
            setShouldAnimate(true);
            setTimeout(() => setShouldAnimate(false), 1200);
        }
        toggleCharm(charmId);
    };

    return (
        <div
            className="flex items-center justify-center gap-3 cursor-pointer group"
            onClick={handleClick}
        >
            <Checkbox.Root
                id={`obtained-checkbox-${charmId}`}
                checked={checked}
                className="w-8 h-8 flex items-center justify-center rounded-sm 
                           border-2 border-gray-700 bg-black shadow-inner
                           transition-all duration-200
                           group-hover:border-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]
                           relative"
            >
                {shouldAnimate && (
                    <motion.div
                        animate={
                            shouldAnimate
                                ? {
                                      scale: [0, 1.5, 1.2, 0],
                                      opacity: [0, 0.8, 0.3, 0],
                                  }
                                : { scale: 0, opacity: 0 }
                        }
                        transition={{
                            duration: 1.2,
                            times: [0, 0.3, 0.7, 1],
                            ease: ["easeOut", "easeInOut", "easeIn"],
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                               w-10 h-10 rounded-full bg-white blur-sm pointer-events-none"
                    />
                )}

                <Checkbox.Indicator asChild>
                    <div className="relative flex items-center justify-center w-full h-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                type: "tween",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <Image
                                src="/checkbox-mark.png"
                                alt="Obtained checkbox"
                                width={24}
                                height={24}
                            />
                        </motion.div>
                    </div>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label
                className="text-gray-300 font-mono text-lg select-none cursor-pointer 
                           transition-colors duration-200 group-hover:text-white"
            >
                {"Obtained" /* TODO: Add this key to the translation system */}
            </label>
        </div>
    );
}
