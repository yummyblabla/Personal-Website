import React from 'react';
import { ReactComponent as LinkedInSvg } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GitHubSvg } from '../../assets/icons/github.svg';
import { ReactComponent as GmailSvg } from '../../assets/icons/gmail.svg';

export default function Links() {
  return (
    <div className="links d-flex flex-column">
      <a href="https://www.linkedin.com/in/derricklee91" className="linkIcon">
        <LinkedInSvg fill="#102a4c" />
      </a>
      <a href="https://github.com/yummyblabla" className="linkIcon">
        <GitHubSvg fill="#102a4c" />
      </a>
      <a href="mailto:derricklee91@gmail.com" className="linkIcon">
        <GmailSvg fill="#102a4c" />
      </a>
    </div>
  );
}
