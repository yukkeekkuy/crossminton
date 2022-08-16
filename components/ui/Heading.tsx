export function Heading({ text }: { text: string }) {
  return (
    <h1
      className={
        "relative z-0 inline-block font-notoSans text-2xl font-semibold text-stone-800 before:absolute before:bottom-0 before:-z-10 before:h-2 before:w-full before:bg-sky-300 before:content-[''] dark:text-stone-100 dark:before:bg-fuchsia-700"
      }
    >
      {text}
    </h1>
  );
}
