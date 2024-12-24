"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        setIsChecked(savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        setIsChecked(true);
        document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    // تطبيق الثيم بناء على التغيير في `theme`
    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // دالة التبديل بين الوضع الليلي والنهاري
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setIsChecked(!isChecked);
        document.documentElement.setAttribute("data-theme", newTheme);
    };



    return (
        <header className="px-6 py-4 bg-transparent text-white">
            <nav className="space-x-6 flex flex-row justify-around items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <Link
                    href="#"
                    className="transition duration-300 ease-in-out text-primaryDark font-bold dark:text-primaryLight"
                >
                    Contact
                </Link>
                <Link
                    href="#"
                    className="transition duration-300 ease-in-out text-primaryDark font-bold dark:text-primaryLight"
                >
                    Shop
                </Link>
                <Link href="/">
                    <div className="text-2xl flex flex-row font-bold">
                        <Image
                            src={theme === "dark" ? "/logo_dark.svg" : "/logo_light.svg"}
                            width={100}
                            height={50}
                            alt={`MotorX Logo ${theme === "dark" ? "Dark" : "Light"}`}
                            className="h-10 inline-block mr-2"
                        />
                    </div>
                </Link>
                <Link
                    href="#"
                    className="transition duration-300 ease-in-out text-primaryDark font-bold dark:text-primaryLight"
                >
                    Sign Up
                </Link>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </nav>
        </header>
    );
};

export default Header;
