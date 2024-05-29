import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

import { CardTemplate } from "./card-component.jsx";

export const WebSchoolCarousel = () => {
    return (
        <>
            <Carousel
                opts={{
                    align: "start"
                }}
                className="w-full "
            >
                <CarouselContent>
                    <CarouselItem className="">
                        <CardTemplate>
                            <img
                                src="/assets/satap1.jpg"
                                alt=".."
                                loading="lazy"
                                className="aspect-auto object-cover w-full h-full rounded-3xl"
                            />
                        </CardTemplate>
                    </CarouselItem>
                    <CarouselItem className="">
                        <CardTemplate>
                            <img
                                src="/assets/satap2.jpg"
                                alt=".."
                                loading="lazy"
                                className="aspect-auto object-cover w-full h-full rounded-3xl"
                            />
                        </CardTemplate>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </>
    );
};
