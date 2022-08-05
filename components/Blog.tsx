import React from 'react';

import { Button, Heading } from './ui';

const placeholderImg =
  'https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

function BlogCard({ src, title, content }: TBlog) {
  return (
    <a
      href="#"
      className="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100  md:max-w-xl md:flex-row"
    >
      <img
        className="h-32 w-full rounded-t-lg object-cover md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        src={src || placeholderImg}
        alt={title}
      />
      <div className="flex w-96 flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{content}</p>
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
    content: '自転車行きたい',
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
    <div className={'w-full bg-slate-100 py-8'}>
      <div className={'mx-auto mb-4 max-w-5xl'}>
        <div className={'mb-8 text-center'}>
          <Heading text={'ブログ'} />
        </div>
        <div
          className={'flex w-full flex-col items-center gap-4 font-notoSans'}
        >
          {EXAMPLE_BLOGS.map((blog) => (
            <BlogCard
              src={blog.src}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
      <div className={'text-center'}>
        <Button text={'More'} />
      </div>
    </div>
  );
}

export default Blog;
