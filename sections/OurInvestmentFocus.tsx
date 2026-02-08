"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";


const OurInvestmentFocus = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const reasonsToChoose = [
        {
            intro: "What industries do we focus on?",
            description:
                "We are focused on tech-driven businesses within healthcare services and financial services.",
            color: "#ffffff",
            image: "https://images.unsplash.com/photo-1611329828782-deb11033016b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            intro: "What stages do we focus on?",
            description:
                "Pre-seed and seed companies that have product-market fit, revenue, or pilot traction with recurring revenue models.",
            color: "#ffffff",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            intro: "What check sizes do we write?",
            description:
                "Our average check size is $250K–$500K. We can lead. We do reserve capital for follow-on.",
            color: "#ffffff",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            intro: "Where do we invest?",
            description:
                "We invest in companies based in the U.S.",
            color: "#ffffff",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prev) =>
                prev === reasonsToChoose.length - 1 ? 0 : prev + 1
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="h-[500px] flex flex-row w-full bg-denary section-con">
            {reasonsToChoose.map((item, index) => {
                return (
                    <div
                        className={`bg-senary h-full border border-white cursor-pointer transition-all duration-300 ease-in-out`}
                        key={item.description}
                        onClick={() => setSelectedIndex(index)}
                        style={{
                            width:
                                selectedIndex === index
                                    ? "60%"
                                    : `${40 / (reasonsToChoose.length - 1)}%`,
                            backgroundColor: item.color,
                            // backgroundColor: selectedIndex === index ? "#181B20" : "#3366cc",
                        }}
                    >
                        {selectedIndex === index ? (
                            <div className="flex flex-col h-full justify-end p-5 sm:p-10 gap-5">
                                <h1 className="text-white text-3xl sm:text-6xl font-extrabold">
                                    {item.intro}
                                </h1>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full justify-center items-center py-10">
                                {/* <h1 className="text-white text-3xl sm:text-6xl font-extrabold writing-vertical-lr">
                                        {item.intro.split(" ")[0]}
                                    </h1> */}
                                <Image src={item.image} alt={item.intro} width={1000} height={1000} className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default OurInvestmentFocus