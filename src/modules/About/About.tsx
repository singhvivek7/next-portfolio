import Link from 'next/link';
import { Button, SectionHeader } from '@/components';
import { MY_SKILLS } from '@/utils/constant';

import './About.css';

export const About = () => {
  return (
    <section id="about" className="py-24 w-full">
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <SectionHeader
          title="About Me"
          description="A tech enthusiast and enjoy staying up-to-date with the latest trends and technologies in the industry. From exploring new frameworks to tinkering with code, I'm always looking for ways to expand my knowledge and improve my skills."
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-3xl mb-2 text-foreground">
              Get to know me!
            </h3>
            <p className="text-lg text-balance">
              Hey there! I&apos;m{' '}
              <span className="text-primary/90 font-bold italic">
                Vivek Kumar
              </span>
              , a passionate{' '}
              <span className="text-primary/90 font-bold italic">
                full stack developer
              </span>{' '}
              based in the picturesque town of{' '}
              <span className="text-primary/90 font-bold italic">
                Gopalganj, Bihar, India
              </span>
              . My journey in technology has been fueled by a deep-seated
              curiosity and a relentless drive to learn and grow. With a strong
              foundation in{' '}
              <span className="text-primary/90 font-bold italic">
                React.js, Next.js, Express.js, Nest.js, MongoDB, and SQL
              </span>
              , I thrive in dynamic and challenging environments, where I can
              apply my skills to deliver high-quality solutions.
            </p>
            <p className="text-lg text-balance">
              I believe that great things happen when talented people come
              together, and I&apos;m excited about the possibility of connecting
              with like-minded individuals to collaborate on{' '}
              <span className="text-primary/90 font-bold italic">
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
            <h3 className="font-bold text-3xl mb-2 text-foreground">
              My skills
            </h3>
            <div>
              <span className="inline-block mb-2 font-semibold">
                Languages:
              </span>
              <div className="flex gap-2 flex-wrap">
                {MY_SKILLS.languages.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`,
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block mb-2 font-semibold">
                Frameworks/Libraries:
              </span>
              <div className="flex gap-2 flex-wrap">
                {MY_SKILLS.frameworks.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`,
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block mb-2 font-semibold">Dev Ops:</span>
              <div className="flex gap-2 flex-wrap">
                {MY_SKILLS.devops.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`,
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block mb-2 font-semibold">
                Soft Skills:
              </span>
              <div className="flex gap-2 flex-wrap">
                {MY_SKILLS.softSkills.map(({ color, id, name }) => (
                  <span key={id} className="skill-tag">
                    {name}
                    <span
                      className="tag"
                      style={{
                        background: `linear-gradient(150deg, #eee, ${color})`,
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
