type Props = {
  text: string;
};
export const Button = ({ text }: Props) => {
  return (
    <button
      className={
        'rounded bg-cyan-500 py-2 px-4 font-bold text-white hover:bg-cyan-700 dark:bg-primary dark:hover:bg-primary-focus'
      }
    >
      {text}
    </button>
  );
};
