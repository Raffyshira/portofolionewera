import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal.jsx";
import { IoArrowUpOutline } from "react-icons/io5";

export const CardProject = ({ className, data, ratio }) => {
    return (
        <>
            <div className="max-w-full w-full h-fit border-b border-neutral-600 pb-10 my-5">
                <div className="w-full h-full flex flex-col md:flex-row md:items-center md:gap-x-10">
                    <figure className="shrink">
                        <img
                            className="md:w-60 rounded-3xl aspect-square object-cover"
                            src={data.image}
                            alt="..."
                            loading="lazy"
                        />
                    </figure>
                    <article className="mt-3 px-3">
                        <h1 className="text-2xl lg:text-3xl font-bold text-black dark:text-neutral-300">
                            {data.title}
                        </h1>
                        <div className="mt-3 md:mt-6">
                            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-400">
                                {data.subTitle}
                            </p>
                            <div className="flex items-center space-x-7 mt-2 md:mt-5">
                                <p className="bg-indigo-600 h-10 px-4 py-2 rounded-md text-white">
                                    {data.kategori}
                                </p>
                                <Button asChild className="">
                                    <Link to={data.link}>Kunjungi</Link>
                                </Button>
                                <p className="border-2  px-4 py-2 rounded-md md:h-10">
                                    {data.year}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export const CardTemplate = ({ children, className }) => {
    return (
        <>
            <div className="max-w-full">
                <Card className={className}>{children}</Card>
            </div>
        </>
    );
};
