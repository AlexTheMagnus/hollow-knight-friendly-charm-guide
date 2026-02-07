"use client";

import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="p-2 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 transition-all cursor-pointer opacity-60 hover:opacity-100"
    >
      {icon}
    </button>
  );
}