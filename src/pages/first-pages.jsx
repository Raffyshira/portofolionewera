import React from "react";
import { Link } from "react-router-dom";
import {
    TypewriterEffect,
    TypewriterEffectSmooth
} from "@/components/ui/typewriter";

import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button.jsx";
import { MdOutlineWavingHand } from "react-icons/md";

import ModeToggle from "@/components/toggle-dark-mode";

const FirstPages = () => {
    const words = [
        {
            text: "Yoo,",
            className: "font-roobertLight"
        },
        {
            text: "what's up ?",
            className: "font-roobertLight"
        },
        {
            text: "wanna adventure with me ?",
            className: "font-roobertLight"
        }
    ];
    return (
        <>
            <main>
                <section className="z-50 max-w-full p-10">
                    <div className="h-full flex flex-col ">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl">
                            Yoo ...
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl md:w-96 lg:text-2xl">
                            Honestly I don't have any ide for this page but that
                            background is really cool, right ?
                        </p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                            forget about the background, you wanna visiting my
                            portfolio, right ?
                        </p>
                        <Button className="w-fit mt-4 z-50" asChild>
                            <Link to="/main">Click me</Link>
                        </Button>
                    </div>
                </section>
                <BackgroundBeams />
            </main>
        </>
    );
};

export default FirstPages;
