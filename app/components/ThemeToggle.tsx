"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-between gap-3">
      {/* <span className="text-sm font-medium">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span> */}

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        onClick={() =>
          setTheme(isDark ? "light" : "dark")
        }
        className={`
          relative flex h-8 w-15 items-center
          rounded-full cursor-pointer
          transition-colors duration-300
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-secondary
          ${
            isDark
              ? "bg-secondary"
              : "bg-slate-300"
          }
        `}
      >
        <span
          className={`
            flex h-6 w-6 items-center justify-center
            rounded-full bg-white shadow-md
            transition-transform duration-1000 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]
            ${
              isDark
                ? "translate-x-8"
                : "translate-x-1"
            }
          `}
        >
          {isDark ? (
            <Moon size={15} className="text-indigo-600" />
          ) : (
            <Sun size={15} className="text-amber-500" />
          )}
        </span>
      </button>
    </div>
  );
}