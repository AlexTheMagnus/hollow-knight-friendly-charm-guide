import { useMobile } from "@/lib/MobileContext";
import { Charm } from "./Charm";
import { CharmDialogContent } from "./CharmDialogContent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { useObtainedCharms } from "@/lib/CharmsContext";

interface CharmDialogProps {
    charm: CharmType;
}

export function CharmDialog({
    charm: { id, description, location, name, notches, sprite, video_url },
}: CharmDialogProps) {
    const { isCharmObtained } = useObtainedCharms();
    const isMobile = useMobile();

    const obtainedStyles = "opacity-30 transition-opacity hover:opacity-100";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Charm
                    name={name}
                    sprite={sprite}
                    className={isCharmObtained(id) ? obtainedStyles : undefined}
                />
            </DialogTrigger>
            <DialogContent
                className={`py-10 px-10 ${isMobile ? "" : "sm:px-20 xl:px-30"}`}
            >
                <CharmDialogContent
                    id={id}
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
