import React from 'react';

import { Button, Heading } from './ui';

const placeholderImg =
  'https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80';

function BlogCard({ src, title, content }: TBlog) {
  return (
    <a
      href="#"
      className="flex w-full flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-none dark:bg-slate-800 dark:hover:bg-slate-600 md:max-w-xl md:flex-row"
    >
      <img
        className="h-32 w-full rounded-t-lg object-cover md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        src={src || placeholderImg}
        alt={title}
      />
      <div className="flex w-full flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
          {title}
        </h5>
        <p className="mb-3 font-normal text-stone-800 line-clamp-3 dark:text-stone-100">
          {content}
        </p>
      </div>
    </a>
  );
}

type TBlog = {
  src?: string;
  title: string;
  content: string;
};
const EXAMPLE_BLOGS: TBlog[] = [
  {
    src: './images/bike.jpg',
    title: '自転車楽しい',
    content:
      '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。',
  },
  {
    src: './images/soccer.jpg',
    title: 'サッカー楽しい',
    content: 'サッカーしたい',
  },
  {
    src: './images/hockey.jpg',
    title: 'ホッケー楽しい',
    content: 'ホッケー見に行きたい',
  },
  {
    title: '画像なし',
    content: '画像なしポスト',
  },
];

function Blog() {
  return (
    <div className={'w-full bg-slate-100 px-4 py-8 dark:bg-slate-700'}>
      <div className={'mx-auto mb-4 max-w-5xl'}>
        <div className={'mb-8 text-center'}>
          <Heading text={'ブログ'} />
        </div>
        <div
          className={'flex w-full flex-col items-center gap-4 font-notoSans'}
        >
          {EXAMPLE_BLOGS.map((blog, i) => (
            <BlogCard
              key={i}
              src={blog.src}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
      <div className={'text-center'}>
        <Button text={'一覧を見る'} />
      </div>
    </div>
  );
}

export default Blog;
