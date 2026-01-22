import React from "react";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full ${className}`}>
      <div className="flex items-center gap-4 w-full max-w-md">

        <div className="flex-1 h-0.5 bg-(--text-color)" />

        <div className="relative">
          <svg
            viewBox="0 0 60 30"
            className="w-16 h-8 fill-current text-(--text-color)">

            <circle cx="30" cy="15" r="4" />

            <path
              d="M 15 15 Q 20 10, 25 15 Q 20 20, 15 15"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 8 15 Q 11 12, 14 15 Q 11 18, 8 15"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />

            <path
              d="M 45 15 Q 40 10, 35 15 Q 40 20, 45 15"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 52 15 Q 49 12, 46 15 Q 49 18, 52 15"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="flex-1 h-0.5 bg-(--text-color)" />
      </div>
    </div>
  );
}
