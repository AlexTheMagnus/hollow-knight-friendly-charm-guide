"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { mergeClasses } from "@/lib/utils";

const Dialog = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => (
    <DialogPrimitive.Root data-slot="dialog" {...props} />
);

const DialogTrigger = (
    props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) => <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;

const DialogPortal = (
    props: React.ComponentProps<typeof DialogPrimitive.Portal>
) => <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;

const DialogClose = (
    props: React.ComponentProps<typeof DialogPrimitive.Close>
) => <DialogPrimitive.Close data-slot="dialog-close" {...props} />;

const dialogAnimation = `
    data-[state=open]:animate-in data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
`;

const DialogOverlay = ({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
    <DialogPrimitive.Overlay
        data-slot="dialog-overlay"
        className={mergeClasses(
            dialogAnimation,
            `fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm`,
            className
        )}
        {...props}
    />
);

const DialogContent = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => {
    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay />
            <DialogPrimitive.Close>
                <DialogPrimitive.Content
                    data-slot="dialog-content"
                    className={mergeClasses(
                        dialogAnimation,
                        `data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
                        fixed top-[50%] left-[50%] z-50
                        w-full max-h-[95vh] min-h-[50vh]
                        translate-x-[-50%] translate-y-[-50%]
                        duration-200 overflow-y-auto overflow-x-hidden
                        
                        text-white`,
                        className
                    )}
                    {...props}
                >
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Close>
        </DialogPortal>
    );
};

const DialogHeader = (props: React.ComponentProps<"div">) => (
    <div
        data-slot="dialog-header"
        className={`flex justify-center text-center h-fit pb-10`}
        {...props}
    />
);

const DialogTitle = (
    props: React.ComponentProps<typeof DialogPrimitive.Title>
) => <DialogPrimitive.Title className="text-lg font-semibold" {...props} />;

const DialogDescription = (
    props: React.ComponentProps<typeof DialogPrimitive.Description>
) => (
    <DialogPrimitive.Description
        data-slot="dialog-description"
        className="text-muted-foreground text-sm"
        {...props}
    />
);

const DialogColumn = ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
        className={mergeClasses(
            `flex flex-col gap-6 justify-center align-center grow`,
            className
        )}
        {...props}
    />
);

export {
    Dialog,
    DialogClose,
    DialogColumn,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
};
