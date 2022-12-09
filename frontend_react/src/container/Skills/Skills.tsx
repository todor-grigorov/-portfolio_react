import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import MotionWrap from '../../wrapper/MotionWrap';
import ReactTooltip from 'react-tooltip';
import './Skills.scss';

export interface Skill {
  name: string;
  bgColor: string;
  icon: string;
}

export interface WorkExperience {
  name: string;
  company: string;
  desc: string;
}

export interface Experiences {
  year: string;
  works: WorkExperience[];
}

const Skills = () => {
  const [experience, setExperience] = useState<Experiences[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      data = data.sort(
        (a: Experiences, b: Experiences) => Number(a.year) - Number(b.year)
      );
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={'app__skills-item app__flex'}
              key={skill.name + skill.icon}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={'app__skills-exp'}>
          {experience?.map((exp) => (
            <motion.div
              className={'app__skills-exp-item'}
              key={exp.year + exp.works[0]?.company}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className={'app__skills-exp-works'}>
                {exp.works.map((work, index) => (
                  <React.Fragment key={work.company + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={'app__skills-exp-work app__flex'}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect={'solid'}
                      arrowColor={'#fff'}
                      className={'skills-tooltip'}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
