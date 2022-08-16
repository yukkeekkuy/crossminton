const MAIN_TEXT = `ここになにかいい言葉を\n使ってそれっぽくします`;
const SUB_TEXT = `ここにも少し`;

function Hero() {
  return (
    <div
      className={
        'mx-auto h-[500px] max-w-5xl bg-slate-50 dark:bg-slate-800 dark:text-stone-100'
      }
    >
      <div className={'h-full p-2 md:flex'}>
        <div className={'h-40 w-full md:h-full md:w-1/2'}>
          <div className={'flex h-full w-full items-center'}>
            <div className={'mx-auto text-center md:mx-0 md:text-left'}>
              <h2
                className={
                  'whitespace-pre font-notoSans text-3xl font-bold md:text-4xl'
                }
              >
                {MAIN_TEXT}
              </h2>
              <span className={'inline-block w-full font-notoSans'}>
                {SUB_TEXT}
              </span>
            </div>
          </div>
        </div>
        <div className={'h-1/2 w-full md:h-full md:w-1/2'}>
          <img
            className={'block h-full w-full object-contain'}
            src="./images/blob.svg"
            alt="blob"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
