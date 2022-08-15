import { useTheme } from 'next-themes';

const MENUS: { title: string }[] = [
  {
    title: 'クロスミントンとは',
  },
  {
    title: 'ブログ',
  },
  {
    title: '試合結果',
  },
  {
    title: 'お問い合わせ',
  },
];

function ColorToggleBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={
        'btn btn-circle btn-outline btn-sm text-neutral hover:bg-yellow-400 dark:text-neutral-content dark:hover:bg-orange-400 dark:hover:text-neutral'
      }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

function Header({ children }: any) {
  return (
    <div className="drawer drawer-end bg-slate-50 text-neutral dark:bg-slate-800 dark:text-primary-content">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar mx-auto max-w-5xl">
          <h1 className={'flex-1 font-notoSans text-3xl font-black'}>
            Crossminton!!🏸
          </h1>
          <div>
            <ColorToggleBtn />
          </div>
          <div className="hidden flex-none items-end lg:block">
            <ul className="menu menu-horizontal font-kiwi font-bold">
              {MENUS.map((menu) => (
                <li key={menu.title}>
                  <a href="#">{menu.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="navbar-drawer" className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-slate-50 p-4 dark:bg-slate-700 dark:text-primary-content">
          {MENUS.map((menu) => (
            <li key={menu.title}>
              <a href="#" className="dark:hover:bg-opacity-60">
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
