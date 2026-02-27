

export type TeamMemberSocial = {
    platform: string;
    url: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    roleHighlighted?: boolean;
    socials: TeamMemberSocial[]
}
