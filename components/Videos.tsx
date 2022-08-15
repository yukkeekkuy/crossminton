import React from 'react';

import { Heading } from './ui';

type TVideo = {
  src: string;
};
const VIDEOS = [
  { src: 'https://www.youtube.com/embed/JD9VNoEVvZ8' },
  { src: 'https://www.youtube.com/embed/JD9VNoEVvZ8' },
];

function Video({ src }: TVideo) {
  return (
    <div className={'relative pt-48 sm:pt-64 md:pt-80'}>
      <iframe
        className={'absolute top-0 left-0 h-full w-full'}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Videos() {
  return (
    <div
      className={
        'w-full bg-slate-100 py-16 dark:bg-slate-700 dark:text-primary-content'
      }
    >
      <div className={'mx-auto h-auto max-w-5xl'}>
        <div className={'pb-8 text-center'}>
          <Heading text={'試合動画'} />
        </div>
        <div className={'grid-col-1 mx-12 grid gap-12 md:grid-cols-2'}>
          {VIDEOS.map((video, i) => (
            <Video src={video.src} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
