import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Transtions from "@/components/ui/transition";

import NavbarComponent from "@/components/NavbarComponent";
import { CardProject, CardTemplate } from "@/components/card-component";
import { Reveal } from "@/components/reveal";

import { BackgroundBeams } from "@/components/ui/background-beams";

import { HeroHighlight, Highlight } from "@/components/ui/highlight-text";

import { MdOutlineWavingHand } from "react-icons/md";
import { LuHandMetal } from "react-icons/lu";
import { IoArrowUpOutline, IoLogoGithub } from "react-icons/io5";

const Homepage = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateJam = () => {
            const thisDay = new Date();
            const jam = String(thisDay.getHours()).padStart(2, "0");
            const minute = String(thisDay.getMinutes()).padStart(2, "0");
            const second = String(thisDay.getSeconds()).padStart(2, "0");

            const timeString = `${jam}:${minute}:${second}`;
            setTime(timeString);
        };

        const intervalId = setInterval(updateJam, 1000);

        updateJam();
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <main className="mt-28 p-5 md:p-8 z-50  ">
                <Transtions>
                    <section className="max-w-lg md:mx-auto">
                        <div className="w-full text-center">
                            <p className="text-2xl leading-normal font-roobertReguler">
                                Yoo , I'm Rafi -{" "}
                                <Highlight
                                    delay={0.5}
                                    className="text-black dark:text-white"
                                >
                                    Front-end Developer based in indonesia.
                                </Highlight>{" "}
                                This is my little corner on the internet, where
                                you can learn more about me and my work.{" "}
                                <Highlight delay={3}>
                                    Have a project in mind you're excited about
                                    ?
                                </Highlight>{" "}
                                Let's chat.
                            </p>
                        </div>
                    </section>
                    <section className="max-w-2xl md:container  mx-auto mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 mx-auto gap-y-4 sm:gap-3 md:gap-5 lg:gap-7">
                            <div className="md:col-span-12">
                                <Reveal>
                                    <CardTemplate className="rounded-3xl w-full md:h-full border border-neutral-400">
                                        <div className="text-center py-4 md:py-6 lg:py-8">
                                            <h1 className="text-center text-xl font-roobertBold md:text-2xl lg:text-3xl">
                                                Selected Project
                                            </h1>
                                            <p className="text-base text-neutral-500 md:text-xl">
                                                Selected Personal or in-House
                                                project
                                            </p>
                                        </div>
                                        <figure className="relative">
                                            <img
                                                src="/assets/project5.png"
                                                alt="..."
                                                className="w-72 mx-auto md:w-80 lg:w-96"
                                            />
                                            <Button
                                                className="absolute bottom-5 right-10 z-20 rounded-full rotate-45 "
                                                asChild
                                                size="icon"
                                            >
                                                <Link to="/project">
                                                    <IoArrowUpOutline className="text-lg md:text-2xl" />
                                                </Link>
                                            </Button>
                                        </figure>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <CardTemplate className="w-full rounded-3xl p-2 border border-neutral-400 ">
                                        <figure className="relative">
                                            <img
                                                src="/assets/maps.jpg"
                                                alt="maps"
                                                loading="lazy"
                                                className="w-96 aspect-video object-cover mx-auto rounded-2xl md:aspect-auto md:h-[28rem] lg:h-[h-32]"
                                            />
                                            <Button
                                                className="absolute bottom-5 right-10 z-20 rounded-full rotate-45 "
                                                asChild
                                                size="icon"
                                            >
                                                <Link to="/">
                                                    <IoArrowUpOutline className="text-lg md:text-2xl" />
                                                </Link>
                                            </Button>
                                        </figure>
                                        <div className="text-center pt-2">
                                            <h2 className="font-roobertBold tracking-normal text-xl md:text-2xl">
                                                Muncar, indonesia
                                            </h2>
                                            <p className="text-base text-neutral-400 md:text-xl">
                                                {time}
                                            </p>
                                        </div>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <CardTemplate className="w-full rounded-3xl h-full mb-7 border border-neutral-400 overflow-hidden">
                                        <div className="text-center pb-2 pt-5">
                                            <h1 className="text-xl font-roobertBold md:text-2xl">
                                                Tech Stack
                                            </h1>
                                            <p className="text-neutral-400 text-base md:text-xl">
                                                Design to code
                                            </p>
                                        </div>
                                        <figure className="relative">
                                            <img
                                                src="/assets/test2.png"
                                                alt="..."
                                                loading="lazy"
                                                className="w-full mx-auto mt-3"
                                            />
                                            <Button
                                                className="absolute bottom-5 right-10 z-20 rounded-full rotate-45 "
                                                asChild
                                                size="icon"
                                            >
                                                <Link to="/">
                                                    <IoArrowUpOutline className="text-lg md:text-2xl" />
                                                </Link>
                                            </Button>
                                        </figure>
                                    </CardTemplate>
                                </Reveal>
                                <Reveal>
                                    <CardTemplate className="w-full h-full rounded-3xl border border-neutral-400 overflow-hidden md:h-64">
                                        <div className="text-center py-3">
                                            <h1 className="text-xl font-roobertBold md:text-2xl">
                                                My Hobbies
                                            </h1>
                                            <p className="text-base text-neutral-400 md:text-xl">
                                                Hobbies that i love so much
                                            </p>
                                        </div>
                                        <figure className="mt-10">
                                            <img
                                                src="/assets/controler.webp"
                                                alt="..."
                                                loading="lazy"
                                                className="-rotate-45"
                                            />
                                        </figure>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <CardTemplate className="rounded-3xl w-full h-full  overflow-hidden">
                                        <figure className="relative">
                                            <img
                                                src="/assets/sarongan.jpg"
                                                alt="..?"
                                                className="w-full h-full rounded-3xl aspect-square object-cover  "
                                            />
                                            <div className="absolute inset-x-0 bottom-0 text-center bg-gradient-to-t from-black/70 to-transparent h-full ">
                                                <article className="absolute inset-x-0 bottom-0 py-5">
                                                    <h3 className="text-xl font-roobertBold md:text-2xl text-white">
                                                        Sarongan
                                                    </h3>
                                                    <p className="text-base md:text-xl text-neutral-400 px-2">
                                                        Favorite spot on Earth [
                                                        so far ]{" "}
                                                    </p>
                                                </article>
                                            </div>
                                        </figure>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <CardTemplate className="w-full h-full rounded-3xl border border-neutral-400 ">
                                        <figure className="relative p-2">
                                            <img
                                                src="/assets/IMG_1477.jpg"
                                                alt="Me"
                                                loading="lazy"
                                                className="w-full h-72 object-cover aspect-square rounded-3xl dark:brightness-75 md:h-full"
                                            />
                                            <Button
                                                className="absolute bottom-5 right-10 z-20 rounded-full rotate-45 "
                                                asChild
                                                size="icon"
                                            >
                                                <Link to="/aboutme">
                                                    <IoArrowUpOutline className="text-lg md:text-2xl" />
                                                </Link>
                                            </Button>
                                        </figure>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-12">
                                <Reveal>
                                    <CardTemplate className="w-full h-full rounded-3xl bg-gradient-to-r from-rose-300/40 via-orange-300/50 to-lime-200/40 relative">
                                        <h1 className="text-center text-xl font-roobertBold md:text-2xl py-3">
                                            Foundation Of My Work
                                        </h1>
                                        <div className="w-full h-full md:flex md:justify-around md:items-center">
                                            <figure>
                                                <img
                                                    src="/assets/bubble.png"
                                                    alt="..."
                                                    loading="lazy"
                                                    className="w-40 mx-auto md:w-56 md:pb-5 md:px-5 lg:w-full"
                                                />
                                            </figure>
                                            <div className="px-6 leading-4 my-4">
                                                <article>
                                                    <h4 className="font-roobertSemi md:text-lg lg:text-xl">
                                                        Functionality
                                                    </h4>
                                                    <p className="text-base text-neutral-400 md:text-xl">
                                                        Project that serve a
                                                        purpose
                                                    </p>
                                                </article>
                                                <article className="my-3">
                                                    <h4 className="font-roobertSemi md:text-lg md:text-xl">
                                                        Simplicity
                                                    </h4>
                                                    <p className="text-base text-neutral-400 md:text-xl">
                                                        Complexity surfaced only
                                                        when necessary
                                                    </p>
                                                </article>
                                                <article>
                                                    <h4 className="font-roobertSemi md:text-lg md:text-xl">
                                                        Clean code
                                                    </h4>
                                                    <p className="text-base text-neutral-400 md:text-xl">
                                                        when i write some line
                                                        of code, the code is
                                                        clean code an
                                                        maintainable
                                                    </p>
                                                </article>
                                            </div>
                                        </div>
                                        <Button
                                            className="absolute bottom-5 right-10 z-20 rounded-full rotate-45 "
                                            asChild
                                            size="icon"
                                        >
                                            <Link to="/">
                                                <IoArrowUpOutline className="text-lg md:text-2xl" />
                                            </Link>
                                        </Button>
                                    </CardTemplate>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <Link to="https://github.com/Raffyshira">
                                        <CardTemplate className="rounded-3xl w-full h-64  bg-rose-400/30 relative">
                                            <div className="flex flex-col justify-center items-center h-full">
                                                <IoLogoGithub className="w-32 text-6xl mb-3" />
                                                <h3 className="text-xl font-roobertBold md:text-2xl">
                                                    Github
                                                </h3>
                                                <p className="text-base text-neutral-400 md:text-lg">
                                                    see other my repository at
                                                    github
                                                </p>
                                            </div>
                                        </CardTemplate>
                                    </Link>
                                </Reveal>
                            </div>
                            <div className="md:col-span-6">
                                <Reveal>
                                    <Link to="https://www.instagram.com/raffyshira?igsh=MXhja28zbTZ1MHFyOQ==">
                                        <CardTemplate className="rounded-3xl w-full h-64  bg-violet-400/40">
                                            <div className="flex flex-col justify-center items-center h-full">
                                                <MdOutlineWavingHand className="w-32 text-6xl mb-3" />
                                                <h3 className="text-xl font-roobertBold md:text-2xl">
                                                    Say Hello
                                                </h3>
                                                <p className="text-base text-neutral-400 md:text-lg  text-center">
                                                    For project inquiries or
                                                    just connecting
                                                </p>
                                            </div>
                                        </CardTemplate>
                                    </Link>
                                </Reveal>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-2xl mx-auto md:container mt-10 border-t">
                        <Reveal>
                            <div className="flex flex-col justify-center items-center h-full mt-5">
                                <h1 className="font-caveat text-5xl">
                                    Thanks for visiting
                                </h1>
                                <div className="flex flex-col justify-center items-center mt-12 gap-y-5 text-neutral-400">
                                    <Link className="text-base sm:text-xl md:text-2xl ">
                                        About me
                                    </Link>
                                    <Link className="text-base sm:text-xl md:text-2xl ">
                                        Projects
                                    </Link>
                                    <Link className="text-base sm:text-xl md:text-2xl ">
                                        Contact
                                    </Link>
                                    <p className="text-base md:text-xl">
                                        All rights reserved • 2024
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </section>
                </Transtions>
            </main>
        </>
    );
};

export default Homepage;
