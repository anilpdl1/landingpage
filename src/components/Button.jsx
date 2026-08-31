
import React from "react";
function Button({text}) {
  return (
    <button
      className="
        group relative overflow-hidden
        rounded-xl
        bg-accent
        px-6 py-2
        font-semibold text-white
        shadow-md shadow-accent/20
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-[1.03]
        hover:shadow-xl hover:shadow-accent/30

        active:translate-y-0
        active:scale-[0.98]

        focus:outline-none
        focus:ring-2 focus:ring-accent/50
        focus:ring-offset-2
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>

      {/* Subtle shine effect */}
      <span
        className="
          absolute inset-y-0 -left-full w-1/2
          skew-x-[-20deg]
          bg-white/20
          transition-all duration-500
          group-hover:left-[120%]
        "
      />
    </button>
  );
}

export default Button;

