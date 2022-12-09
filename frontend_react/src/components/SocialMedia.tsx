import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className={'app__social'}>
      <a
        href={process.env.LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin name={'linkedin'} />
      </a>
      <a
        href={process.env.GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub name={'github'} />
      </a>
      <a>
        <BsTwitter name={'twitter'} />
      </a>
    </div>
  );
};

export default SocialMedia;
