"use client"
import React, { useRef } from 'react'
import { clientList } from '@/constants'
import Image from 'next/image'

const PortfolioSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const amount = containerRef.current.offsetWidth / 1.5;
            containerRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="w-full bg-[#f7f6f4] py-20 md:py-28">
            <div id="portfolio" className="w-full padding-x section-con scroll-mt-[100px]">

                {/* Header */}
                <div className="flex items-end justify-between border-b border-[#d0cfc9] pb-8 mb-16">
                    <div>
                        <p className="text-[11px] tracking-[0.18em] uppercase text-[#9e9d98] mb-3 font-normal">
                            Portfolio
                        </p>
                        <h2 className="font-serif text-[38px] leading-[1.1] text-[#1a1917] font-normal">
                            Companies We&apos;ve{' '}
                            <em className="italic text-[#7a7872]">Backed</em>
                        </h2>
                        <p className="text-[13px] text-[#9e9d98] mt-2.5 font-light tracking-[0.01em]">
                            We proudly serve as an extension of the management teams we invest in.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2.5">
                        {(['left', 'right'] as const).map((dir) => (
                            <button
                                key={dir}
                                onClick={() => handleScroll(dir)}
                                className="w-11 h-11 rounded-full border border-[#c8c7c1] bg-white flex items-center justify-center transition-all duration-200 hover:bg-[#1a1917] hover:border-[#1a1917] group"
                            >
                                {dir === 'left' ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#1a1917] group-hover:stroke-white transition-colors">
                                        <path d="M19 12H5M12 5l-7 7 7 7" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#1a1917] group-hover:stroke-white transition-colors">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div
                    ref={containerRef}
                    className="flex flex-col md:flex-row gap-[1px] bg-[#d0cfc9] overflow-x-scroll no-scrollbar scroll-smooth"
                >
                    {clientList.map((client, i) => (
                        <div
                            key={client.name}
                            className="relative group bg-white min-w-[280px] flex-1 p-8 flex flex-col overflow-hidden transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5"
                        >
                            {/* Index */}
                            <p className="text-[11px] tracking-[0.14em] text-[#c8c7c1] mb-7 font-normal">
                                {String(i + 1).padStart(2, '0')}
                            </p>

                            {/* Logo */}
                            <div className="w-[110px] h-[42px] flex items-center mb-7">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    width={110}
                                    height={42}
                                    className="object-contain object-left"
                                />
                            </div>

                            {/* Rule */}
                            <div className="w-6 h-px bg-[#d0cfc9] mb-6" />

                            {/* Description */}
                            <p className="text-[13px] text-[#7a7872] leading-[1.65] font-light flex-1">
                                {client.description}
                            </p>

                            {/* Link */}
                            <a
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-7 text-[11px] tracking-[0.14em] uppercase text-[#1a1917] font-medium border-b border-[#d0cfc9] pb-1 w-fit transition-all duration-200 hover:border-[#1a1917] group/link"
                            >
                                View Company
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-0.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#1a1917] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-8">
                                <p className="text-[11px] tracking-[0.18em] uppercase text-[#7a7872] mb-2.5">
                                    Portfolio Company
                                </p>
                                <p className="font-serif text-xl text-[#f7f6f4] leading-[1.3] font-normal">
                                    {client.name}
                                </p>
                                <a
                                    href={client.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.14em] uppercase text-[#f7f6f4] border-b border-[#444] pb-1 w-fit"
                                >
                                    View Company →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;