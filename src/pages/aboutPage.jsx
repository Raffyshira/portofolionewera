import React from "react";

import { Reveal } from "@/components/reveal";
import { Highlight } from "@/components/ui/highlight-text";
import { BackgroundBeams } from "../components/ui/background-beams";

const AboutPage = () => {
    return (
        <>
            <main className="mt-28 p-5 md:p-8 z-40">
                <section>
                    <div className="max-w-lg mx-auto">
                        <article>
                            <Reveal>
                                <h1 className="text-6xl my-5">
                                    a little things about me
                                </h1>
                            </Reveal>

                            <p className="md:text-lg lg:text-xl">
                                Yooo, my name is{" "}
                                <Highlight delay={1}>
                                    rafi ahsira prayoga
                                </Highlight>{" "}
                                but everyone calls me Rapii. I live in Muncar,
                                Banyuwangi, Indonesia. I'm 21 years old. While
                                I'm not that old, at this age,I have a
                                <Highlight delay={2}>
                                    high sense of enthusiasm and curiosity about
                                    current technology
                                </Highlight>
                                , such as AI, web development, and much more..
                            </p>
                            <Reveal>
                                <h1 className="my-5 text-6xl">
                                    let's more deep dive about me, shall we ??
                                </h1>
                            </Reveal>
                            <p className="md:text-lg lg:text-xl">
                                This journey started when I graduated from high
                                school. I studied at MAN 3 Banyuwangi for 3
                                years. While scrolling through Instagram Reels
                                on the Explore page, I came across a video that
                                piqued my interest in web development. My
                                curiosity grew even more as I explored numerous
                                websites on godly.com, many of which I found
                                really cool.
                            </p>
                            <p className="my-5 md:text-lg lg:text-xl ">
                                Before I went into web development, I was a
                                barista at a cafe for 4 months. Yeah, if we ever
                                meet, I'll make a cup of latte for you :) Back
                                to the previous topic, I learned web development
                                self-taught via YouTube and Chrome. The first
                                time I studied web development,
                                <Highlight delay={3}>
                                    I made a personal portfolio about myself{" "}
                                </Highlight>{" "}
                                using HTML, CSS, and Bootstrap. At that time, I
                                didn't know what React.js, JavaScript, Tailwind
                                CSS, and others were
                            </p>

                            <p className="md:text-lg lg:text-xl">
                                I learned React.js through the YouTube platform,
                                specifically from the FreeCodeCamp channel,
                                where Bob Ziroll, the head of education at
                                Scrimba, explains it. I learned a lot about
                                React.js and am really grateful to that teacher.
                                He explained everything in detail and clearly,
                                ngl
                            </p>
                            <p className="my-5 md:text-lg lg:text-xl">
                                If you are interested in React.js, I recommend
                                watching that video or searching for tutorials
                                on freecodecamp.org. You can find tutorials on
                                various topics on that channel, including
                                Python, C++, C, and many more.
                            </p>
                            <Reveal>
                                <h1 className="text-6xl my-5">
                                    fun facts about me, let's goo
                                </h1>
                            </Reveal>
                            <p className="md:text-lg lg:text-xl">
                                I have created several websites from personal
                                portfolios, websites for schools, and several
                                others, you can see some of my projects on my
                                github.
                            </p>
                            <p className="my-5 md:text-lg lg:text-xl">
                                A unique fact about me is that{" "}
                                <Highlight delay={6}>
                                    when I make a project, people usually think
                                    I used a laptop. But actually, I made the
                                    website using a cellphone.
                                </Highlight>{" "}
                                Well, don't be too surprised. Many people still
                                think you need a laptop to learn web
                                development, but I think that's a misconception.
                                You can learn about it without having to buy a
                                laptop
                            </p>
                            <p className="md:text-lg lg:text-xl">
                                There are several reasons why I don't use a
                                laptop, one of which is that I didn't have
                                enough money to buy one. At that time, I thought
                                I needed a laptop to learn web development, so I
                                looked for ways to learn without one. I remember
                                a quote that said,
                                <Highlight delay={6}>
                                    'Where there's a will, there's a way
                                </Highlight>
                            </p>
                            <Reveal>
                                <h1 className="text-6xl my-5">conclusion</h1>
                            </Reveal>

                            <p className="md:text-lg lg:text-xl">
                                Up to this point, my learning progress has gone
                                from knowing nothing to knowing a lot about web
                                development. I've learned many things, and I
                                hope my journey doesn't end here . I will
                                continue to explore web development until I
                                reach my dream. Speaking of my dream,{" "}
                                <Highlight delay={7}>
                                    I hope to work as a software engineer at
                                    Tokopedia Indonesia
                                </Highlight>
                                . Amen
                            </p>

                            <p className="my-5 md:text-lg lg:text-xl ">
                                I am thankful to my parents and my best friends
                                for supporting me up to this day
                            </p>
                            <h1 className="italic md:text-lg lg:text-xl font-bold">
                                Thank You for everything
                            </h1>

                            <div className="mt-10 italic">
                                <p className="md:text-lg lg:text-xl font-bold">
                                    Your beloved friend
                                </p>
                                <p className="md:text-lg lg:text-xl font-bold">
                                    Rapiii
                                </p>
                            </div>
                        </article>
                        
                    </div>
                </section>
                <BackgroundBeams className="h-min-[80vh]" />
            </main>
        </>
    );
};

export default AboutPage;
