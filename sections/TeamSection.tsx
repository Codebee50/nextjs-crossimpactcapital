"use client"

import TeamMemberCard from '@/components/TeamMemberCard';
import { client } from '@/sanity/lib/client';
import { TeamMember } from '@/types/global';
import React, { useEffect, useState } from 'react'


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