import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { BackgroundBeams } from "../components/ui/background-beams";

const listProject = [
    {
        id: 1,
        img: "/assets/project1.jpg",
        name: "Website School",
        subName: "A website for SMP Negeri 04 Muncar Satu Atap",
        link: "https://smpn4muncarsatuatap.sch.id/",
        kategori: "Website",
        year: 2023
    },
    {
        id: 2,
        img: "/assets/project2.jpg",
        name: "Tokopedia Clone",
        subName: "A simple e-commerce inspiring Tokopedia",
        link: "/",
        kategori: "E-commerce",
        year: 2024
    },
    {
        id: 3,
        img: "/assets/project3.jpg",
        name: "Netflix Clone",
        subName: "A cloning from netflix.com",
        link: "/",
        kategori: "Web App",
        year: 2024
    }
];

const ProjectPage = () => {
    return (
        <>
            <main className="mt-28 p-5 md:p-8 z-40">
                <section className="max-w-2xl w-full h-full mx-auto">
                    <article className="text-center w-full">
                        <h1 className="text-5xl">Selected Project</h1>
                        <p className="text-neutral-400">
                            Selected personal or in-house projects
                        </p>
                    </article>

                    <div className="mt-10 md:flex md:flex-col md:justify-between md:items-center w-full h-full space-y-10">
                        {listProject.map(item => (
                            <Reveal>
                                <div className="w-full h-full md:inline-flex items-start space-x-5">
                                    <figure>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            loading="lazy"
                                            className="w-full sm:w-32 md:w-44 aspect-square object-cover rounded-3xl z-50"
                                        />
                                    </figure>
                                    <div>
                                        <article className="mt-5">
                                            <h1 className="text-3xl lg:text-4xl">
                                                {item.name}
                                            </h1>
                                            <p className="text-base md:text-xl lg:text-xl text-neutral-400">
                                                {item.subName}
                                            </p>
                                        </article>
                                        <div className="mt-5 flex items-center space-x-2">
                                            <p className="bg-amber-700 w-fit rounded-3xl px-4 py-2 sm:text-xl md:text-xl text-white">
                                                {item.kategori}
                                            </p>
                                            <Button
                                                className="rounded-3xl md:text-xl"
                                                size="default"
                                                asChild
                                            >
                                                <Link to={item.link}>
                                                    Visit
                                                </Link>
                                            </Button>
                                            <p className="border py-2 px-4 rounded-3xl border-white sm:text-xl md:text-xl">
                                                {item.year}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProjectPage;
