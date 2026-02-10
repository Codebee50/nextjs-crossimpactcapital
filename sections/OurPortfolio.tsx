"use client";

import React from "react";

interface Strategy {
    number: string;
    title: string;
    description: string;
    hasLink: boolean;
}

const strategies: Strategy[] = [
    {
        number: "01",
        title: "What industries do we focus on?",
        description:
            "We are focused on tech-driven businesses within healthcare services and financial services.",
        hasLink: true,
    },
    {
        number: "02",
        title: "What stage do we focus on?",
        description:
            "Pre-seed and seed companies that have product-market fit, revenue, or pilot traction with recurring revenue models.",
        hasLink: true,
    },
    {
        number: "03",
        title: "What check sizes do we write?",
        description:
            "Our average check size is $250K–$500K. We can lead. We do reserve capital for follow-on.",
        hasLink: true,
    },
    {
        number: "04",
        title: "Where do we invest?",
        description:
            "We invest in companies based in the U.S.",
        hasLink: true,
    },
    {
        number: "05",
        title: "Do we provide strategic support?",
        description:
            "Beyond capital, we help founders with access to strategic partnerships and industry expertise to accelerate growth.",
        hasLink: true,
    },
    {
        number: "06",
        title: "How do we measure impact?",
        description:
            "We prioritize investments that demonstrate measurable societal impact, with clear metrics and reporting structures in place.",
        hasLink: true,
    },
];

export default function OurPortfolio() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-3">
                {/* Horizontal divider between rows */}
                <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-300 z-0" />

                {/* Vertical dividers */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-300 z-0" />
                <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-gray-300 z-0" />

                {/* Cross/plus decorations at intersections */}
                <div className="hidden md:block absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <line x1="8" y1="0" x2="8" y2="16" stroke="#6366f1" strokeWidth="1.5" />
                        <line x1="0" y1="8" x2="16" y2="8" stroke="#6366f1" strokeWidth="1.5" />
                    </svg>
                </div>
                <div className="hidden md:block absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <line x1="8" y1="0" x2="8" y2="16" stroke="#6366f1" strokeWidth="1.5" />
                        <line x1="0" y1="8" x2="16" y2="8" stroke="#6366f1" strokeWidth="1.5" />
                    </svg>
                </div>

                {strategies.map((strategy, index) => (
                    <div
                        key={strategy.number}
                        className={`
              relative z-[1] bg-white
              p-6 sm:p-8 lg:p-10
              ${index < 3 ? "pb-10 md:pb-14" : "pt-10 md:pt-14"}
              ${index % 3 === 1 ? "md:px-10 lg:px-14" : ""}
              border-b border-gray-200 md:border-b-0
              last:border-b-0
            `}
                    >
                        {/* Number */}
                        <span className="block text-sm font-medium text-indigo-500 mb-4 tracking-wide">
                            {strategy.number}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-gray-900 leading-tight mb-4">
                            {strategy.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                            {strategy.description}
                        </p>

                        {/* View More Link */}
                        {strategy.hasLink && (
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-indigo-600 transition-colors duration-200 group"
                            >
                                View More
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}