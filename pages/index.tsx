import type { NextPage } from 'next';

import Hero from '../components/Hero';
import Results from '../components/Results';
import Videos from '../components/Videos';

const Home: NextPage = () => {
  return (
    <div className={'mx-auto h-full w-full'}>
      <Hero />
      <Videos />
      <Results />
    </div>
  );
};

export default Home;
