// src/components/ThemeToggle.jsx
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-16 right-4 p-3 bg-blue-600 text-white rounded-full shadow-md"
    >
      {darkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
