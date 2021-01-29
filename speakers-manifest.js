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

const jerolan = {
  name: 'Jerome Olvera',
  place: 'México',
  role: ' Front-End developer',
  workplace: 'GBM',
  resume:
    'Passionate about technology, culture, team building. Big fan of UX Design and Lean Thinking. I love to build products that people want to use.',
  src: '/static/images/speakers/jerolan.jpg',
  twitter: 'sediceyerom',
};

const vic = {
  name: 'Victor Aguilar C.',
  place: 'La Paz, Bolivia',
  role: 'Software Engineer',
  workplace: 'Parrot Software',
  resume:
    'I love programming and create products with technology, team building and mentoring. Technology is for me one of the biggest game changers in the life',
  src: '/static/images/speakers/vic.jpg',
  twitter: 'sediceyerom',
};

export const mapping = { afvalenciab, paulinagavilan, jerolan, vic };

const speakers = Object.values(mapping);

export { wootsbot, speakers };
