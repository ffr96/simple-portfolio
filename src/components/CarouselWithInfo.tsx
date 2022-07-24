import { AnimatedLink } from './AnimatedLink';
import { SimpleCarousel } from './SimpleCarousel';

export interface ICarousel {
  image: {
    link: string;
    alt: string;
  }[];
  description?: string;
  title: string;
  gblink?: string;
}

const height = 1080;
const width = 1920;

/**
 * Component for displaying a carousel of images with info below
 * @argument ICarousel {
 *  carousel: {
 *    image: {
 *      link: string;
 *      alt: string;
 *    }[];
 *    description?: JSX.Element;
 *    title: string;
 *  };
 *}
 * @returns JSX.Element
 */

const CarouselWithInfo = ({ image, description, title, gblink }: ICarousel) => {
  return (
    <div>
      {image && (
        <>
          <h2 className="w-full text-center text-4xl font-bold">{title}</h2>
          <SimpleCarousel height={height} width={width} image={image} />
          <div className="flex flex-col items-center justify-center py-6 font-sans text-lg font-normal">
            <p>{description}</p>
            <div>
              <AnimatedLink href={gblink || '/'}>GitHub Link</AnimatedLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { CarouselWithInfo };
