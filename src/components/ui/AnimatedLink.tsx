import React from "react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <a
      href={href}
      className="group relative inline-block py-2 text-(--text-color) no-underline">
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-0.5 flex items-center justify-center">
 
        <span className="absolute left-0 right-[calc(50%+8px)] h-full bg-(--text-color) origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

 
        <span className="absolute w-1 h-1 bg-(--text-color) rounded-full opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100" />


        <span className="absolute right-0 left-[calc(50%+8px)] h-full bg-(--text-color) origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </a>
  );
}
