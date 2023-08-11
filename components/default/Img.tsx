import Image from "next/image";
import { FC } from "react";

interface ImgProps {
  className?: string;
  src: any;
  alt: string;

  dataScroll?: boolean;
  dataScrollSpeed?: number;
  ref?: any;
}

const Img: FC<ImgProps> = ({
  className,
  src,
  alt,

  dataScroll,
  dataScrollSpeed,
  ref,
}) => {
  const defaultContainerClass = "img-container";
  const combinedContainerClass = className
    ? `${defaultContainerClass} ${className}`
    : defaultContainerClass;

  return (
    <div
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
      className={combinedContainerClass}
      ref={ref}
    >
      <Image sizes="100%" fill={true} priority={true} src={src} alt={alt} />
    </div>
  );
};

export default Img;
