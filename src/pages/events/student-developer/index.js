import React from 'react';

import Layout from '../../../components/Layout';
import SocialMeta from '../../../components/SocialMeta';

import Banner from './Banner';
import Experience from './Experience';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

function StudentDeveloper() {
  return (
    <Layout>
      <SocialMeta
        image="/static/images/shared.png"
        title="Student Developer"
        url="https://www.reactnextboilerplate.com/events/student-developer"
        description="We want to contribute to the need to provide tools to university students."
        keywords="react-next-boilerplate, react, nextjs, boilerplate, javascript, redux, redux-saga, immer, event"
      />

      <Banner />
      <Experience />
      <Speakers />
      <Sponsors />
    </Layout>
  );
}

export default StudentDeveloper;
