import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Charm as CharmType } from "@/lib/charmMapper";
import { Charm } from "./Charm";
import { CharmDialogContent } from "./CharmDialogContent";

interface CharmDialogProps {
    charm: CharmType;
}

export function CharmDialog({
    charm: { description, location, name, notches, sprite },
}: CharmDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Charm name={name} sprite={sprite} />
            </DialogTrigger>
            <DialogContent className="bg-gray-900 max-w-lg">
                <CharmDialogContent
                    description={description}
                    location={location}
                    name={name}
                    notches={notches}
                />
            </DialogContent>
        </Dialog>
    );
}
