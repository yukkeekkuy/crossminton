import type { NextPage } from 'next';

import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className={'mx-auto h-full max-w-5xl'}>
      <Hero />
    </div>
  );
};

export default Home;
