import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import MotionWrap from '../../wrapper/MotionWrap';
import './Work.scss';

export interface WorkDataProps {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
  videoUrl: string;
}

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [works, setWorks] = useState<WorkDataProps[]>([]);
  const [filterWork, setFilterWork] = useState<WorkDataProps[]>([]);
  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data: WorkDataProps[]) => {
      const worksWithoutVideoUrl = data.filter((work) => !work.videoUrl);
      const worksWithVideoUrl = data.filter((work) => work.videoUrl);
      setWorks([...worksWithoutVideoUrl, ...worksWithVideoUrl]);
      setFilterWork([...worksWithoutVideoUrl, ...worksWithVideoUrl]);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
      </h2>
      <div className="app__work-filter">
        {[
          'UI/UX',
          'Web App',
          'Mobile App',
          'React JS',
          'Angular',
          'Redux',
          'MaterialUI',
          'Dashboard',
          'Video Demo',
          'All',
        ].map((item, index) => (
          <div
            key={index}
            role={'button'}
            tabIndex={0}
            onClick={() => handleWorkFilter(item)}
            onKeyDown={() => {
              console.log('Key pressed');
            }}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard.length ? animateCard[0] : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={'app__work-portfolio'}
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {work.videoUrl ? (
                <iframe
                  width="250"
                  height="100"
                  src={work.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  {work.imgUrl ? (
                    <img src={urlFor(work.imgUrl).url()} alt="" />
                  ) : null}

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeInOut',
                      staggerChildren: 0.5,
                    }}
                    className={'app__work-hover app__flex'}
                  >
                    <a
                      href={work.projectLink}
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={'app__flex'}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a
                      href={work.codeLink}
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={'app__flex'}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </>
              )}
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">
                  {work.tags && work.tags.length ? work.tags[0] : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
