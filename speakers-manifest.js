/* eslint-disable prettier/prettier */
/* eslint-disable max-len */

/*
    name: 'name',
    place: 'place',
    role: 'place',
    workplace: 'workplace',
    resume: 'resume',
    src: 'avatar',
    twitter: 'user',
*/

const wootsbot = {
  name: 'Jorge L. Calleja A.',
  place: 'México',
  role: 'Frontend UI',
  workplace: 'GBM',
  resume:
    'Doing this "n" that. I am a JavaScript developer, living in Mexico. I am a co-author of React Next Boilerplate and a builder of things. open source enthusiast. I am a passionate photographer.',
  src: '/static/images/speakers/wootsbot.jpg',
  twitter: 'wootsbot',
};

const afvalenciab = {
  name: 'Andres Valencia B.',
  place: 'México',
  role: ' Frontend developer',
  workplace: 'GBM',
  resume:
    'I am a system engineer. I love to create products and develop the skills to achieve it because the magic of the software is the easiness to transform any idea into a real product.',
  src: '/static/images/speakers/afvalenciab.jpg',
  twitter: 'afvalenciab',
};

const paulinagavilan = {
  name: 'Paulina Gavilán',
  place: 'France',
  role: ' Front-End developer',
  workplace: 'Prismic',
  resume:
    'Creativity must be an area of ​​life that must be kept in constant motion. Illustration and code are the tools I use to communicate with the world.',
  src: '/static/images/speakers/paulina.jpg',
  twitter: 'paulievpg',
};

export const mapping = { afvalenciab, paulinagavilan };

const speakers = Object.values(mapping);

export { wootsbot, speakers };
