import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
    SheetTrigger,
    SheetContent,
    Sheet,
    SheetHeader
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ModeToggle from "./toggle-dark-mode";

import { LuAlignJustify, LuHome, LuUser, LuPhone } from "react-icons/lu";
import {
    IoReorderThreeOutline,
    IoLogoGithub,
    IoLogoInstagram,
    IoFolderOpenOutline
} from "react-icons/io5";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function NavbarComponent() {
    const [isBlured, setIsBlured] = useState(true);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setIsBlured(true);
        } else {
            setIsBlured(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const listNav = [
        { id: 1, name: "Home", link: "/", icon: <LuHome className="mr-3" /> },
        {
            id: 2,
            name: "About Me",
            link: "/aboutme",
            icon: <LuUser className="mr-3" />
        },
        {
            id: 3,
            name: "Project",
            link: "/project",
            icon: <IoFolderOpenOutline className="mr-3" />
        },
        {
            id: 4,
            name: "Contact Me",
            link: "#!",
            icon: <LuPhone className="mr-3" />
        }
    ];
    return (
        <>
            <motion.header
                variants={container}
                initial="hidden"
                animate="visible"
                className="w-full flex justify-center items-center h-12 p-10 fixed top-0 md:top-10 md:fixed z-50 "
            >
                <nav
                    className={`w-fit flex justify-center items-center space-x-1 h-12 p-3 rounded-full border border-neutral-500 md:w-60 md:h-16 lg:w-60  ${
                        isBlured
                            ? "background_blur_white text-white"
                            : "bg-transparent"
                    }`}
                >
                    <motion.div
                        variants={item}
                        className="flex items-center space-x-1.5 md:space-x-3"
                    >
                        <Avatar className="md:h-12 md:w-12">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/158991786?v=4" />
                            <AvatarFallback>RF</AvatarFallback>
                        </Avatar>
                        <p className="font-bold text-base sm:text-xl md:text-2xl lg:text-2xl ">
                            Rapi
                        </p>
                    </motion.div>
                    <motion.div variants={item}>
                        <ModeToggle />
                    </motion.div>
                    <motion.div variants={item}>
                        <Sheet>
                            <SheetTrigger asChild>
                                <IoReorderThreeOutline className="text-2xl md:text-4xl lg:text-5xl" />
                            </SheetTrigger>
                            <SheetContent
                                className="rounded-md md:w-56 mx-auto"
                                side="top"
                            >
                                <div className="w-fit grid grid-cols-2 gap-3 mt-10 md:grid-cols-1  mx-auto">
                                    {listNav.map(item => (
                                        <Button
                                            className="border-neutral-500 md:text-xl"
                                            variant="outline"
                                            asChild
                                        >
                                            <Link to={item.link}>
                                                {item.icon} {item.name}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </motion.div>
                </nav>
            </motion.header>
        </>
    );
}
