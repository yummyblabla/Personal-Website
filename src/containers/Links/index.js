import React, { useEffect, useState } from 'react';
import { ReactComponent as LinkedInSvg } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GitHubSvg } from '../../assets/icons/github.svg';
import { ReactComponent as GmailSvg } from '../../assets/icons/gmail.svg';

const withFill = '#102a4c';
const withoutFill = '#ffffff';

export default function Links() {
  const [fillColour, setFillColour] = useState(withoutFill);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 475;
      if (scrollCheck) {
        setFillColour(withoutFill);
      } else {
        setFillColour(withFill);
      }
    });
  });

  return (
    <div className="links d-flex flex-column">
      <a href="https://www.linkedin.com/in/derricklee91" className="linkIcon">
        <LinkedInSvg fill={fillColour} />
      </a>
      <a href="https://github.com/yummyblabla" className="linkIcon">
        <GitHubSvg fill={fillColour} />
      </a>
      <a href="mailto:derricklee91@gmail.com" className="linkIcon">
        <GmailSvg fill={fillColour} />
      </a>
    </div>
  );
}
