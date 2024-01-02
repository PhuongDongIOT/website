interface AvatarsProps {
  srcImage: string;
  size?: number;
  isRounder?: boolean,
  refSpan?: React.RefObject<HTMLTextAreaElement>;
}

const Avatars = ({ size = 8, srcImage, isRounder = false, ...props }: AvatarsProps) => {

  const sizeAvatars: string = `h-${size} w-${size}`;
  const variableClassName: string = `inline-block ${sizeAvatars} ${isRounder ? 'rounded-full' : ''} ring-2 ring-white`;

  return (
    <img
      className={variableClassName}
      src={srcImage}
      alt=""
      {...props}
    />
  )
}

export {
  Avatars
}
