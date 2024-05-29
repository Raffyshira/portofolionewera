import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
    // split text inside of words into array of characters
    const wordsArray = words.map(word => {
        return {
            ...word,
            text: word.text.split("")
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                "h1",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content"
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut"
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.h1
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={clsx(
                                        `dark:text-white text-black opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.h1>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={clsx(
                "text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.h1
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 0
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className={clsx(
                    "inline-block rounded-sm w-[2px] h-4 md:h-6 lg:h-10 bg-white",
                    cursorClassName
                )}
            ></motion.h1>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map(word => {
        return {
            ...word,
            text: word.text.split("")
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={clsx(
                                        `dark:text-white text-black `,
                                        word.className
                                    )}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={clsx("flex  space-x-1", className)}>
            <motion.div
                className="overflow-x-hidden pb-1 "
                initial={{
                    width: "0%"
                }}
                whileInView={{
                    width: "fit-content"
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1
                }}
            >
                <div
                    className="text-sm sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap"
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className={clsx(
                    "block rounded-sm w-[2px] h-5 sm:h-6 xl:h-12 bg-black dark:bg-white",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
