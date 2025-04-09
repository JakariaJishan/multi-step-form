'use client';

import {useTheme} from "@/app/context/ThemeContext";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    const isDark = theme === 'dark';

    return (
        <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
            <button
                onClick={toggleTheme}
                className={`w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 ${
                    isDark ? 'justify-end' : 'justify-start'
                }`}
            >
                <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"/>
            </button>
        </div>
    );
}
