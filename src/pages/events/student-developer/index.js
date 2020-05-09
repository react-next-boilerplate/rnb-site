import React from 'react';

import Layout from '../../../components/Layout';

import Banner from './Banner';
import Experience from './Experience';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

function StudentDeveloper() {
  return (
    <Layout>
      <Banner />
      <Experience />
      <Speakers />
      <Sponsors />
    </Layout>
  );
}

export default StudentDeveloper;
