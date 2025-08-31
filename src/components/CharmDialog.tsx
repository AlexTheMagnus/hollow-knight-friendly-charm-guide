import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { Charm } from "./Charm";
import { CharmDialogContent } from "./CharmDialogContent";

interface CharmDialogProps {
    charm: CharmType;
}

export function CharmDialog({
    charm: { description, location, name, notches, sprite, video_url },
}: CharmDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Charm name={name} sprite={sprite} />
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white p-12 w-[80%] h-[90%]">
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
