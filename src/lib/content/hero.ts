import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Muhammed Demirci.',
    tagline: 'I create visually pleasing interfaces for the web.',
    description:
    "I'm a passionate Full Stack Blockchain and Web developer having an experience of evm and solana chain, web applications with React.js & Next.js with TypeScript & TailwindCSS.",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};