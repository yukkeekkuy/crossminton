import { SocialIcon } from 'react-social-icons';

type TSocialIcons = {
  network: string;
  fgColor: string;
  url?: string;
};
const SOCIAL_ICONS: TSocialIcons[] = [
  {
    network: 'twitter',
    fgColor: 'white',
    url: 'https://www.example.com',
  },
  {
    network: 'facebook',
    fgColor: 'white',
    url: 'https://www.example.com',
  },
  {
    network: 'instagram',
    fgColor: 'white',
    url: 'https://www.example.com',
  },
  {
    network: 'youtube',
    fgColor: 'white',
    url: 'https://www.example.com',
  },
];

const SITEMAP_MENU: { text: string; href: string }[] = [
  {
    text: 'クロスミントンとは',
    href: '#',
  },
  {
    text: '試合動画',
    href: '#',
  },
  {
    text: '試合結果',
    href: '#',
  },
  {
    text: 'ブログ',
    href: '#',
  },
];

function Footer() {
  return (
    <footer className={'h-auto w-full bg-slate-900 py-8 dark:bg-base-300'}>
      <div
        id={'social-links'}
        className={'mb-8 flex w-auto flex-row justify-center gap-4'}
      >
        {SOCIAL_ICONS.map((icon) => (
          <SocialIcon
            key={icon.network}
            network={icon.network}
            fgColor={icon.fgColor}
            url={icon.url}
          />
        ))}
      </div>
      <div
        className={
          'mx-8 flex h-auto flex-col-reverse gap-8 text-slate-200 md:flex-row'
        }
      >
        <div className={'flex w-full md:w-1/2 md:items-center'}>
          &copy; 2022 Yusuke
        </div>
        <div className={'w-full md:w-1/2'}>
          <h2 className={'mb-2 font-notoSans text-lg'}>サイトマップ</h2>
          <ul>
            {SITEMAP_MENU.map((item) => (
              <li key={item.text} className={'mb-1'}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
