import React from "react";

import Image from "react-bootstrap/Image";

export default function Links() {
  return (
    <div className="links d-flex flex-column">
      <a href="https://www.linkedin.com/in/derricklee91">
        <Image src={require("./../../assets/icons/linkedin.svg")} className="linkIcon" />
      </a>
      <a href="https://github.com/yummyblabla">
        <Image src={require("./../../assets/icons/github.svg")} className="linkIcon" />
      </a>
      <a href="mailto:derricklee91@gmail.com">
        <Image src={require("./../../assets/icons/gmail.svg")} className="linkIcon" />
      </a>
    </div>
  );
}
