import { Charm } from "./Charm";
import { CharmDialogContent } from "./CharmDialogContent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useMobile } from "@/lib/MobileContext";

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
                className={`bg-gray-900 text-white ${
                    isMobile ? "p-10 w-[90%] h-[100%]" : "p-30 w-[80%] h-[90%]"
                }`}
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
