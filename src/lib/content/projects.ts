import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'My Projects',
    projects: [
    {
        id: getId(),
        name: 'Resume Generator',
        url: 'https://www.resume.permamotive.com',
        repo: 'https://github.com/Harismehmoodulhaq/Resume-Generator',
        img: '/Resumebuilder.png',
        year: 2023,
        tags: ['ReactJs', 'Mantine-Ui', 'Redux', 'Redux Toolkit'],
    },
    ],
};