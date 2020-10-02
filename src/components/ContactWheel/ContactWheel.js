import React, { useState } from "react";

import {
  faFacebook,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
// import {} from "@fortawesome/fontawesome-svg-core";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import {
  Menu,
  Hub,
  LineOne,
  LineTwo,
  LineThree,
  Button,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  EmailIcon
} from "./ContactWheel.styled";

const ContactWheel = () => {
  const [isOpen, setOpen] = useState(false);

  const redirect = url => () => {
    window.open(url, "_blank");
  };

  return (
    <Menu>
      <Hub
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <LineOne isOpen={isOpen} />
        <LineTwo isOpen={isOpen} />
        <LineThree isOpen={isOpen} />
      </Hub>
      <Button
        isOpen={isOpen}
        onClick={redirect("https://www.facebook.com/amcconnnell/")}
      >
        <FacebookIcon icon={faFacebook} />
      </Button>
      <Button isOpen={isOpen} onClick={redirect("https://github.com/andrewjmcconnell")}>
        <GithubIcon icon={faGithub} />
      </Button>
      <Button isOpen={isOpen} onClick={redirect("https://www.linkedin.com/in/andrew-mcconnell-15b95468/")}>
        <LinkedInIcon icon={faLinkedin} />
      </Button>
      <Button isOpen={isOpen} onClick={redirect("mailto:andrewjmcconnell93@gmail.com")}>
        <EmailIcon icon={faMailBulk} />
      </Button>
    </Menu>
  );
};

export default ContactWheel;
