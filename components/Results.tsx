import React from 'react';

import { Button, Heading } from './ui';

type TResult = {
  id: string;
  title: string;
  winner?: string[];
  date?: Date;
};
const RESULTS: TResult[] = [
  { id: '1', title: 'Japan Autumn Doubles Open 2021', winner: ['吉谷 優介'] },
  {
    id: '2',
    title: 'Japan Autumn Doubles Open Doubles Open 2021',
    winner: ['吉谷 優介', '吉谷 優介'],
  },
  { id: '3', title: 'Japan Autumn Doubles Open 2021' },
];

const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

function Results() {
  return (
    <div className={'mx-auto max-w-5xl py-12'}>
      <div className={'mx-12'}>
        <div className={'mb-8 text-center'}>
          <Heading text={'試合結果'} />
        </div>
        <table className="mx-auto mb-4 w-full table-auto text-left font-notoSans text-sm sm:text-base md:w-3/4">
          <thead>
            <tr>
              <th>#</th>
              <th>大会名</th>
              <th className={'hidden md:table-header-group'}>優勝者</th>
              <th className={'w-8 text-center sm:w-auto'}>詳細</th>
            </tr>
          </thead>
          {RESULTS.map((result, i) => (
            <tbody key={i}>
              <tr>
                <td className={'py-2 font-kiwi'}>{result.id}.</td>
                <td className={'py-2'}>{result.title}</td>
                <td className={'hidden py-2 md:table-cell'}>
                  {result.winner ? result.winner?.join(', ') : '-'}
                </td>
                <td className={'py-2'}>
                  <a href="#">
                    <DocumentIcon />
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={'w-full text-center'}>
        <Button text={'More'} />
      </div>
    </div>
  );
}

export default Results;
