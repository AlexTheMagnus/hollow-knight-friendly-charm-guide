import React from "react";
import Image from "next/image";

const LOADER_ICON = "/save-icon.png";

export const Loader = () => {
    const dontCloseDialog = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={dontCloseDialog}
            className="absolute inset-0 flex items-center justify-center bg-black z-10 video-styles"
        >
            <Image
                src={LOADER_ICON}
                alt="Loading..."
                width={500}
                height={500}
                className="animate-pulsate w-auto max-w-full max-h-full object-contain"
            />
        </div>
    );
};
