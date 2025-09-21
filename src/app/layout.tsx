import type { Metadata } from "next";
import { Crimson_Text, Cinzel } from "next/font/google";

import "./globals.css";
import { MobileProvider } from "@/lib/MobileContext";
import { TranslationProvider } from "@/lib/TranslationProvider";

const crimsonFont = Crimson_Text({
    variable: "--font-crimson",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const cinzelFont = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Hollow Knight friendly charm guide",
    description: "A complete user-friendly charm guide for Hollow Knight.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                    ${crimsonFont.variable}
                    ${cinzelFont.variable}
                    antialiased
                    bg-black
                    text-styles`}
            >
                <TranslationProvider>
                    <MobileProvider>{children}</MobileProvider>
                </TranslationProvider>
            </body>
        </html>
    );
}
