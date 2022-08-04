function Header() {
  return (
    <nav className={'h-16'}>
      <div className={'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'}>
        <div className={'relative flex h-16 items-center justify-between'}>
          <h1
            className={
              'flex items-center justify-center font-notoSans text-3xl font-black'
            }
          >
            Crossminton🏸
          </h1>
          <div className={'items-end'}>
            <div className={'flex space-x-4 font-kiwi font-bold'}>
              <a href="#">クロスミントンとは</a>
              <a href="#">ブログ</a>
              <a href="#">試合結果</a>
              <a href="#">お問い合わせ</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
