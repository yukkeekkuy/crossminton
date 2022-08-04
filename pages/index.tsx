import type { NextPage } from 'next';

import Hero from '../components/Hero';
import Videos from '../components/Videos';

const Home: NextPage = () => {
  return (
    <div className={'mx-auto h-full w-full'}>
      <Hero />
      <Videos />
    </div>
  );
};

export default Home;
