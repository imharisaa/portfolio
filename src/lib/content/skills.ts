import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'Front End Development',
        // animation lottie file: c
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
          { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'ReactNative', icon: 'skill-icons:react-light' },
        { name: 'ChakraUi', icon: 'simple-icons:chakraui' },
        { name: 'MantineUi', icon: 'logos:mantine-icon' },
        { name: 'MaterialUi', icon: 'skill-icons:materialui-light' },
        { name: 'BootStrap 5', icon: 'devicon:bootstrap-wordmark' },
        { name: 'Angular-Material', icon: 'devicon:angularmaterial' },
        { name: 'Figma/PSD to React, Figma/PSD to ReactNative, Figma/PSD to HTML', icon: 'skill-icons:figma-dark' },
        { name: "Hooks & Context API's", icon: 'mynaui:api' },



        ],
    },
    {
        id: getId(),
        title: 'Back End Development',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in developing backend solutions using Python, Node.js, NestJS, Express.js, and GraphQL',
        'Experience in architecting scalable and efficient backend systems',
        'Providing robust and maintainable backend solutions',
        ],
        softwareSkills: [
        { name: 'NodeJs', icon: 'skill-icons:nodejs-dark' },
        { name: 'NestJs', icon: 'logos:nestjs' },
        { name: 'Cypher', icon: 'logos:languagetool' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-dark' },
        { name: 'Graphql, Graphql with Neo4J', icon: 'logos:graphql' },
        { name: 'Apollo Graphql', icon: 'simple-icons:apollographql' },
        { name: 'Mikro-orm, Typeorm', icon: 'logos:typeorm' },
        { name: 'Stripe Payment Gateway', icon: 'logos:stripe' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'Redis Cache', icon: 'logos:redis' },
        { name: 'Helm Chart', icon: 'simple-icons:helm' },
        { name: 'Argocd', icon: 'devicon:argocd' },
        { name: 'Jenkins', icon: 'skill-icons:jenkins-light' },
        { name: 'GitOps, DevOps', icon: 'devicon:azuredevops' },
        { name: 'Kubernetes', icon: 'devicon:kubernetes' },
        { name: '( GitHub, GitLab ) CI/CD', icon: 'devicon:githubactions' },
        { name: 'PodMan', icon: 'simple-icons:podman' }
        ],
    },
    {
      id: getId(),
      title: 'Databases',
      lottie: {
      light: '/lotties/database-light.json',
      dark: '/lotties/database-light.json',
      },
      points: [
      'Experience in developing backend solutions using Neo4j, PostgreSQL, SQLite, PHPMyAdmin, MongoDB, and MySQL',
      'Experience in architecting scalable and efficient backend systems',
      'Providing robust and maintainable backend solutions',
      ],
      softwareSkills: [
      { name: 'PostgresQL', icon: 'logos:postgresql' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'PhpMyAdmin', icon: 'simple-icons:phpmyadmin' },
      { name: 'SQlite', icon: 'skill-icons:sqlite' },
      { name: 'Neo4J', icon: 'devicon:neo4j' },
      { name: 'MongoDB', icon: 'skill-icons:mongodb' },
      { name: 'MariaDB', icon: 'logos:mariadb-icon' }
      ],
  },
    ],
};
