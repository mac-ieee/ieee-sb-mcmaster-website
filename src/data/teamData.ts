import { Logo, PESLogo, CSLogo, EMBSLogo } from 'assets/logos/logos';

export const teamData = {
  'main-branch': {
    name: 'Main Branch',
    headline: '',
    logo: Logo,
    emoji: '🏠',
    execs: {
      'Isaiah Ngou': {
        role: 'Branch Co-Chair',
      },
      'Matteo Tullo': {
        role: 'Branch Co-Chair',
      },
      'Catherine Botros': {
        role: 'Branch Vice Chair',
      },
      'Eric Cao': {
        role: 'Branch Secretary',
      },
      'Daniel Wei': {
        role: 'Branch Treasurer',
      },
      'Faiza Haidry': {
        role: 'PR Internal',
      },
      'Chitra Nookala': {
        role: 'PR External',
      },
      'Aron Markandaier': {
        role: 'Branch Mentor',
      },
      'Felix Ha': {
        role: 'Webmaster',
      },
    },
  },
  computer: {
    name: 'Computer',
    headline:
      ' The Computer Chapter develops software and hardware technical workshops, providing opportunities for its members to learn and develop new skills, including working with Arduinos, Raspberry Pis, Python, JavaScript, C, APIs, Computer Vision, Web Development and more!',
    emoji: '💻',
    logo: CSLogo,
    execs: {
      'Calvin Suen': {
        role: 'Computer Chapter Chair',
      },
      'Corbin Jarrett': {
        role: 'Computer Chapter Co-Vice Chair',
      },
      'Edward Zhuang': {
        role: 'Computer Chapter Co-Vice Chair',
      },
      'Umang Rajkarnikar': {
        role: 'Computer Chapter Secretary',
      },
    },
  },
  'power-and-energy-society': {
    name: 'Power and Energy Society',
    headline:
      'The Power and Energy Society is a hub for students interested in the bulk electric system, energy generation, bulk equipment, power electronics, etc. We organize workshops aimed towards these interests and hope to network and create a social community!',
    logo: PESLogo,
    emoji: '⚡',
    execs: {
      'Edward Kang': {
        role: 'PES Chair',
      },
      'Evan Tanudjaja': {
        role: 'PES Vice-Chair',
      },
    },
  },
  'engineering-in-medicine-and-biology-society': {
    name: 'Engineering In Medicine & Biology Society',
    logo: EMBSLogo,
    emoji: '⚕️',
    execs: {
      'Namya Mehan': {
        role: 'EMBS Chair',
      },
      'Snigdha Majeti': {
        role: 'EMBS Vice-Chair',
      },
    },
  },
};
