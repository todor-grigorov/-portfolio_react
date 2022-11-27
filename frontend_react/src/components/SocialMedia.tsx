import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className={'app__social'}>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
