type TagProps = {
  text: string;
  textColor: string;
  size: 'badge-xs' | 'badge-sm' | 'badge-md' | 'badge-lg';
  variant: 'badge' | 'badge-outline';
  bgColor?: string;
  leftIcon?: any;
};
export function Tag(props: TagProps) {
  const { text, bgColor, textColor, size, variant } = props;
  return (
    <div
      className={`${
        variant !== 'badge' && 'badge'
      } ${size} ${bgColor} ${textColor} ${variant}`}
    >
      {text}
    </div>
  );
}

export default Tag;
