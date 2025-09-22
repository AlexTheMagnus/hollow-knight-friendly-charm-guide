import { useMobile } from "@/lib/MobileContext";
import { Charm } from "./Charm";
import { CharmDialogContent } from "./CharmDialogContent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";

interface CharmDialogProps {
    charm: CharmType;
}

export function CharmDialog({
    charm: { description, location, name, notches, sprite, video_url },
}: CharmDialogProps) {
    const isMobile = useMobile();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Charm name={name} sprite={sprite} />
            </DialogTrigger>
            <DialogContent
                className={`py-10 px-10 ${isMobile ? "" : "sm:px-20 xl:px-30"}`}
            >
                <CharmDialogContent
                    description={description}
                    location={location}
                    name={name}
                    notches={notches}
                    sprite={sprite}
                    video_url={video_url}
                />
            </DialogContent>
        </Dialog>
    );
}
