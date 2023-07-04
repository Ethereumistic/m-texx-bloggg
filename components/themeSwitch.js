"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="inline-flex items-center focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6 mr-2 mt-2" />
      ) : (
        <SunIcon className="w-6 h-6 mr-2 mt-2" />
      )}
      
    </button>
  );
};

export default ThemeSwitch;

