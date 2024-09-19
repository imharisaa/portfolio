'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            As a Junior Full Stack Engineer, I bring nearly 3 years of hands-on
            experience in web application development and a strong passion for
            creating efficient and user-friendly digital experiences. My journey
            in the realm of technology has equipped me with a diverse skill set
            and an eagerness to contribute to innovative projects. Let me share
            my expertise in different areas: <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Front-end Expertise:
            </strong>{' '}
            In my role as a Junior Front End Developer at Queno (Private)
            Limited, I delved into crafting engaging user interfaces using
            cutting-edge technologies. Proficient in ReactJS, NextJS, and React
            Native, I've designed and developed responsive, pixel-perfect
            interfaces that seamlessly bridge design and functionality. I'm
            adept at translating Figma and PSD designs into interactive React
            components, ensuring a consistent and delightful user experience.
            With experience in Chakra UI, Mantine UI, and Material UI, I
            prioritize aesthetics and usability to enhance the end-user journey.{' '}
            <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Back-end Proficiency:
            </strong>{' '}
            As a Junior Full Stack Developer at SariDukan and currently as a
            Full Stack Developer at Propmotive, I've deepened my back-end
            skills. I've mastered GraphQL to optimize data retrieval and
            manipulation, leveraging Express.js and NestJs to build robust APIs
            that power seamless interactions between the front-end and the
            database. My AWS Lambda familiarity showcases my commitment to
            scalable and serverless architecture. Additionally, I've gained
            proficiency in working with databases like PostgreSQL, MongoDB, and
            Neo4j, ensuring efficient data management.
            <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Other Skills and Tools:
            </strong>{' '}
            In addition to my core development skills, I'm well-versed in
            various tools and methodologies that streamline collaboration and
            project management. My experience with Git, GitLab, GitHub, and
            version control practices ensures efficient team collaboration and
            code management. I've demonstrated adaptability in working with
            Agile methodologies, and I'm comfortable using project management
            tools like Trello and ClickUp to maintain a structured development
            process. My familiarity with Docker and AWS EC2 showcases my knack
            for deploying applications effectively. <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Language and Certification:
            </strong>{' '}
            I possess a strong command of English, enabling effective
            communication with cross-functional teams and stakeholders.
            Furthermore, I'm certified in D3.js from FreeCodeCamp, showcasing my
            commitment to continuous learning and data visualization expertise.
            I'm excited to contribute my skills and dedication to your team as a
            Junior Full Stack Engineer. Collaborating on dynamic projects,
            honing my craft, and delivering high-quality solutions are what
            drive me in the ever-evolving world of technology.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://nexnoor.com/"
              target="_blank"
              className="text-accent"
            >
              NexNoor
            </Link>
            .
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
