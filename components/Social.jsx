import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ren-fau29" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/renaldi-fauzi-adnan-a4898831a/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/renaldi.fauzi29_/" },
  { icon: <FaTwitter />, path: "https://x.com/renfau29" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
