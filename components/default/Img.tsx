import Image from "next/image";
import { FC } from "react";

interface ImgProps {
  className?: string;
  src: any;
  alt: string;
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  dataScroll?: boolean;
  dataScrollSpeed?: number;
  ref?: any;
}

const Img: FC<ImgProps> = ({
  className,
  src,
  alt,
  fit,
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
      <Image fill={true} priority={true} src={src} alt={alt} objectFit={fit} />
    </div>
  );
};

export default Img;
