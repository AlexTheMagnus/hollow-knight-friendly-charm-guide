import React, { Fragment, useState } from "react";
import Image from "next/image";

import {
    DialogColumn,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useMobile } from "@/lib/MobileContext";
import { useTranslation } from "../lib/TranslationProvider";
import { Loader } from "./ui/Loader";
import { NotchCost } from "./NotchCost";

interface CharmDialogContentProps {
    description: CharmType["description"];
    location: CharmType["location"];
    name: CharmType["name"];
    notches: CharmType["notches"];
    sprite: CharmType["sprite"];
    video_url: CharmType["video_url"];
}

function getYouTubeEmbedUrl(url: string): string {
    const regex =
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)(?:.*?&t=(\d+)s)?/;
    const match = url.match(regex);

    if (match) {
        const videoId = match[1];
        const startTime = match[2];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return startTime ? `${embedUrl}?start=${startTime}` : embedUrl;
    }

    return url;
}

export function CharmDialogContent({
    description,
    location,
    name,
    notches,
    sprite,
    video_url,
}: CharmDialogContentProps) {
    const t = useTranslation();
    const isMobile = useMobile();
    const embedUrl = getYouTubeEmbedUrl(video_url);
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <Fragment>
            <DialogHeader>
                <DialogTitle className="text-4xl sm:text-5xl font-bold font-trajan tracking-wide">
                    {t(name)}
                </DialogTitle>
            </DialogHeader>

            <div
                className={`flex w-full ${
                    isMobile
                        ? "flex-col gap-10 items-center"
                        : "h-full gap-10 2xl:gap-20"
                } `}
            >
                <DialogColumn>
                    <div className="flex justify-center">
                        <Image
                            src={`/charms/${sprite}.png`}
                            alt={t(name)}
                            width={128}
                            height={128}
                            className="w-32 h-32"
                        />
                    </div>
                    {!isMobile && (
                        <Fragment>
                            <p className="italic text-xl font-perpetua justify-center text-center leading-loose tracking-wide">
                                {t(description)}
                            </p>
                            <NotchCost count={notches} />
                        </Fragment>
                    )}
                </DialogColumn>

                <DialogColumn
                    className={`min-w-[50%] ${
                        isMobile ? "w-full" : "max-w-[60%]"
                    }`}
                >
                    <div className="aspect-video w-full relative">
                        {isLoading && <Loader />}
                        <iframe
                            src={embedUrl}
                            title={`${t(name)} - Hollow Knight Charm Guide`}
                            className="video-styles"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={handleIframeLoad}
                        />
                    </div>
                    <p className="text-lg font-perpetua leading-relaxed tracking-wide">
                        {t(location)}
                    </p>
                </DialogColumn>
            </div>
        </Fragment>
    );
}
