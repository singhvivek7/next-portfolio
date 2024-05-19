import Link from 'next/link';
import { Button, SectionHeader } from '@/components';
import { MY_SKILLS } from '@/utils/constant';

import './About.css';

export const About = () => {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto w-11/12 lg:w-3/4">
        <SectionHeader
          title="About Me"
          description="A tech enthusiast and enjoy staying up-to-date with the latest trends and technologies in the industry. From exploring new frameworks to tinkering with code, I'm always looking for ways to expand my knowledge and improve my skills."
        />
        <div className="mt-16 grid grid-cols-1 gap-10 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-3xl font-bold text-foreground">
              Get to know me!
            </h3>
            <p className="text-balance text-lg">
              Hey there! I&apos;m{' '}
              <span className="font-bold italic text-primary/90">
                Vivek Kumar
              </span>
              , a passionate{' '}
              <span className="font-bold italic text-primary/90">
                full stack developer
              </span>{' '}
              based in the picturesque town of{' '}
              <span className="font-bold italic text-primary/90">
                Gopalganj, Bihar, India
              </span>
              . My journey in technology has been fueled by a deep-seated
              curiosity and a relentless drive to learn and grow. With a strong
              foundation in{' '}
              <span className="font-bold italic text-primary/90">
                React.js, Next.js, Express.js, Nest.js, MongoDB, and SQL
              </span>
              , I thrive in dynamic and challenging environments, where I can
              apply my skills to deliver high-quality solutions.
            </p>
            <p className="text-balance text-lg">
              I believe that great things happen when talented people come
              together, and I&apos;m excited about the possibility of connecting
              with like-minded individuals to collaborate on{' '}
              <span className="font-bold italic text-primary/90">
                exciting projects
              </span>
              . So, if you&apos;re looking for a dedicated developer who is
              passionate about creating innovative solutions, I&apos;d love to
              chat!
            </p>
            <Link href="#contact" className="w-fit">
              <Button variant="secondary">Contact</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="mb-2 text-3xl font-bold text-foreground">
              My skills
            </h3>
            <div>
              <span className="mb-2 inline-block font-semibold">
                Languages:
              </span>
              <div className="flex flex-wrap gap-2">
                {MY_SKILLS.languages.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 inline-block font-semibold">
                Frameworks/Libraries:
              </span>
              <div className="flex flex-wrap gap-2">
                {MY_SKILLS.frameworks.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 inline-block font-semibold">Dev Ops:</span>
              <div className="flex flex-wrap gap-2">
                {MY_SKILLS.devops.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 inline-block font-semibold">
                Soft Skills:
              </span>
              <div className="flex flex-wrap gap-2">
                {MY_SKILLS.softSkills.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
