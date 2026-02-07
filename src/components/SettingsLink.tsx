"use client";

interface SettingsLinkProps {
  href: string;
  text: string;
}

export function SettingsLink({ href, text }: SettingsLinkProps) {
  return (
    <div className="flex justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-white/80 transition-colors font-trajan cursor-pointer"
      >
        {text}
      </a>
    </div>
  );
}