import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Haris Abdullah Ansari.',
    tagline: 'I create visually pleasing interfaces for the web.',
    description:
    "I'm a passionate Full-Stack web developer having an experience of web applications with React.js, React-Native & Next.js with TypeScript & TailwindCSS, Nativebase and UI/UX designing.",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};