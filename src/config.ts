import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://dottlabs.io/",
  author: "Zoheir Chine",
  desc: "Sharing exeriences.",
  title: "Dottlabs",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dottlabs",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://dottlabs.io",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
];
