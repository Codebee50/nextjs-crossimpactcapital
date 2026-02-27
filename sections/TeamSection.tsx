"use client"

import TeamMemberCard from '@/components/TeamMemberCard';
import { client } from '@/sanity/lib/client';
import { TeamMember } from '@/types/global';
import React, { useEffect, useState } from 'react'


const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Harsh Patel",
        role: "Co-Founder & CEO",
        bio: "I co-founded Cross Impact Capital to back category-defining founders closing critical access gaps across wealth and health.",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        roleHighlighted: true,
        socials: [
            {
                platform: "twitter",
                url: "#"
            },
            {
                platform: "linkedin",
                url: "#"
            },
            {
                platform: "instagram",
                url: "#"
            }
        ],
    },
    {
        id: 2,
        name: "Alexa Kimberly",
        role: "Partner, Healthcare",
        bio: "I lead our healthcare services investments, identifying tech-enabled solutions that expand access in overlooked communities.",
        image:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        roleHighlighted: false,
        socials: [
            {
                platform: "twitter",
                url: "#"
            },
            {
                platform: "linkedin",
                url: "#"
            },
            {
                platform: "instagram",
                url: "#"
            }
        ],
    },
    {
        id: 3,
        name: "Marcus Reed",
        role: "Partner, Financial Services",
        bio: "I focus on pre-seed and seed stage fintech companies building recurring revenue models that close the wealth opportunity gap.",
        image:
            "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        roleHighlighted: false,
        socials: [
            {
                platform: "twitter",
                url: "#"
            },
            {
                platform: "linkedin",
                url: "#"
            },
            {
                platform: "instagram",
                url: "#"
            }
        ],
    },
    {
        id: 4,
        name: "Sofia Mendes",
        role: "Head of Portfolio & Impact",
        bio: "I work closely with our portfolio founders to unlock strategic partnerships and ensure we're creating measurable, lasting change.",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        roleHighlighted: false,
        socials: [
            {
                platform: "twitter",
                url: "#"
            },
            {
                platform: "linkedin",
                url: "#"
            },
            {
                platform: "instagram",
                url: "#"
            }
        ],
    },
];




const TeamSection = () => {
    const [teamMemberList, setTeamMemberList] = useState<TeamMember[]>([])

    const fetchTamMembers = async () => {
        const teamMembers = await client.fetch("*[_type == 'teamMember']")
        setTeamMemberList(teamMembers as TeamMember[])
    }


    useEffect(() => {
        fetchTamMembers()
    }, [])

    return (
        <div className='w-full padding-x section-con'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-2xl capitalize font-semibold'>Meet the team</h1>
                <p className='text-gray-500 max-w-[500px] text-center text-base'>Experienced investors and operators united by a shared commitment to closing the opportunity gap.</p>

            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-20 mt-[40px] sm:mt-[90px] items-center md:overflow-x-scroll no-scrollbar'>

                {
                    teamMemberList.map((member) => (
                        <TeamMemberCard member={member} key={`team-member-${member.id}`} />
                    ))
                }

            </div>

        </div>
    )
}

export default TeamSection