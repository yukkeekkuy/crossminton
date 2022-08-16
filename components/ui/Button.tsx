export type ButtonProps = {
  text: string;
  onClick?: () => void;
};
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className={
        'rounded bg-sky-400 py-2 px-4 font-bold text-white hover:bg-sky-500 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
