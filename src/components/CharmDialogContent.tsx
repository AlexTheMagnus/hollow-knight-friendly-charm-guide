import React, { Fragment } from "react";
import Image from "next/image";

import {
    DialogColumn,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useMobile } from "@/lib/MobileContext";
import { useTranslation } from "../lib/TranslationProvider";

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

    return (
        <Fragment>
            <DialogHeader>
                <DialogTitle className="text-4xl font-bold">
                    {t(name)}
                </DialogTitle>
            </DialogHeader>

            <div
                className={`flex w-full ${
                    isMobile ? "flex-col gap-10 items-center" : "h-full gap-10"
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
                            <p className="italic text-lg justify-center text-center leading-relaxed">
                                {t(description)}
                            </p>
                            <p className="text-gray-300 text-xl flex justify-center font-semibold">
                                {t("notches_label")}: {notches}
                            </p>
                        </Fragment>
                    )}
                </DialogColumn>

                <DialogColumn
                    className={`min-w-[50%] ${
                        isMobile ? "w-full" : "max-w-[60%]"
                    }`}
                >
                    <div className="aspect-video w-full">
                        <iframe
                            src={embedUrl}
                            title={`${t(name)} - Hollow Knight Charm Guide`}
                            className="w-full h-full rounded-xl aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="100%"
                        />
                    </div>
                    <p className="text-base">{t(location)}</p>
                </DialogColumn>
            </div>
        </Fragment>
    );
}
