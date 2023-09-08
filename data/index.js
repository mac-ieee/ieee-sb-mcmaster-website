import { IconBolt, IconCell, IconCpu, IconHome2 } from "@tabler/icons";

export const chapterInfo = {
  // ieee: {
  //   name: "IEEE McMaster Student Branch",
  //   emoji: "🏠",
  // },
  "main-branch": {
    name: "Main Branch",
    emoji: "🏠",
    icon: IconHome2,
    logo: "/assets/ieee-sb-mcmaster-logo.png",
  },
  computer: {
    name: "Computer",
    emoji: "💻",
    icon: IconCpu,
    logo: "/assets/CSLogo.png",
  },
  "power-and-energy-society": {
    name: "Power and Energy Society",
    emoji: "⚡",
    icon: IconBolt,
    logo: "/assets/PESLogo.png",
    data: {
      meetingTimes: "Fridays at 5:30PM-6:00PM EST at ITB-141 and on Discord",
    },
  },
  "engineering-in-medicine-and-biology-society": {
    name: "Engineering In Medicine & Biology Society",
    emoji: "⚕️",
    icon: IconCell,
    logo: "/assets/EMBSLogo.png",
    data: {
      meetingTimes: "Sundays at 7pm on Discord",
    },
  },
};

export const servicesData = {
  soldering: {
    title: "Soldering",
    bg: "/assets/services-soldering.jpg",
    desc: "",
  },
  "pcb-milling": {
    title: "PCB Milling",
    bg: "/assets/services-pcb-milling.jpg",
  },
  "digikey-ordering": {
    title: "DigiKey Ordering",
    bg: "/assets/services-digikey.jpg",
  },
};

export const execData = {
  "main-branch": {
    "Branch Chair": "Tina Ismail",
    // @ts-ignore
    "Branch Vice Co-Chair": "Justin Lin",
    "Branch Vice Co-Chair­": "Parth Mistry",
    "Branch Mentor": "Aron Markandaier",
    "Branch Treasurer": "Venkat Kanagarajamuthaly",
    //"Branch Webmaster": "TBD",
    "Public Relations Head": "Yixin Wang",
    "Branch Secretary": "Muhammad Faisal",
  },
  computer: {
    "Computer Chair": "Isaac Thomas",
    "Branch Vice Co-Chair": "Aum Patel",
    // @ts-ignore (kind of a cheat to have duplicate using https://unicode-table.com/en/00AD/)
    "Branch Vice Co-Chair­": "Marryam Kamal",
    "Computer Secretary": "Manvendra",
  },
  "power-and-energy-society": {
    "PES Chair": "Evan Tanudjaja",
    "PES Vice-Chair": "Ioannis Papaspyridis",
    "PES Secretary": "Rehan Abbasi",
  },
  "engineering-in-medicine-and-biology-society": {
    "EMBS Co-Chair": "Chris George",
    "EMBS Co-Chair­": "Nishckria Nataraja Babu",
    "EMBS Vice-Chair": "Alaa",
    //"EMBS Secretary": "Allister Ashwal",
  },
};
export const contactInfo = {
  Office: {
    label: "ITB 141",
    href: "https://www.mcmaster.ca/uts/maps/itb1.html",
  },
  Email: { label: "sb.mcmaster@ieee.org", href: "mailto:sb.mcmaster@ieee.org" },
};

export const socialInfo = {
  facebook: "https://www.facebook.com/mcmasterIEEE/",
  insta: "https://www.instagram.com/mcmaster_ieee/",
  linkedin: "https://www.linkedin.com/company/mcmasterieee",
  github: "https://github.com/mac-ieee",
  discord: "https://discord.gg/5S5pBy46dW",
};
