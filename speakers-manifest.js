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
  workplace: 'Parrot Software',
  resume:
    'Doing this "n" that. I am a JavaScript developer, living in Mexico. I am a co-author of React Next Boilerplate and a builder of things. open source enthusiast. I am a passionate photographer.',
  src: '/static/images/speakers/wootsbot.jpg',
  twitter: 'wootsbot',
};

const afvalenciab = {
  name: 'Andres Valencia B.',
  place: 'México',
  role: 'Frontend developer',
  workplace: 'GBM',
  resume:
    'I am a system engineer. I love to create products and develop the skills to achieve it because the magic of the software is the easiness to transform any idea into a real product.',
  src: '/static/images/speakers/afvalenciab.jpg',
  twitter: 'afvalenciab',
};

const paulinagavilan = {
  name: 'Paulina Gavilán',
  place: 'France',
  role: 'Front-End developer',
  workplace: 'Prismic',
  resume:
    'Creativity must be an area of ​​life that must be kept in constant motion. Illustration and code are the tools I use to communicate with the world.',
  src: '/static/images/speakers/paulina.jpg',
  twitter: 'paulievpg',
};

const jerolan = {
  name: 'Jerome Olvera',
  place: 'México',
  role: 'Front-End developer',
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
  twitter: null,
};

const luisFer = {
  name: 'Luis F. Vazquez A.',
  place: 'México, CDMX',
  role: 'Deputy Director of BaaS/APIs',
  workplace: 'Banco Santander México',
  resume:
    'Professional with experience in the analysis and design of APIs oriented to an API design as a product in charge of the APIs area of ​​the Santander digital factory',
  src: '/static/images/speakers/luisFer.jpg',
  twitter: 'fercholml',
};

const dayra = {
  name: 'Dayra Arrieta',
  place: 'CDMX',
  role: 'UX/UI Designer',
  workplace: 'Parrot Software',
  resume:
    ' I am a multidisciplinary designer focused on UX / UI based in Mexico city. My daily challenge is to find the balance between aesthetics and functionality and trying to avoid that my dogs eat my charger. Also, I enjoy cooking, making Illustrations, and branding in my free time.',
  src: '/static/images/speakers/day.jpg',
  twitter: null,
  dribbble: 'dayraarrieta',
};

export const mapping = { afvalenciab, paulinagavilan, jerolan, vic, luisFer, dayra };

const speakers = Object.values(mapping);

export { wootsbot, speakers };
