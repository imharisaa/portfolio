import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'about', url: '/#about'},
        { name: 'skills', url: '/#skills'},
        { name: 'experience', url: '/#experience' },
        { name: 'blogs', url: '/#blogs' },
        { name: 'contact', url: '/#contact' },
    ],
    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
    },
}