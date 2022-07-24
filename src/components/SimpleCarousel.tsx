import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import ArrowL from '@/public/assets/arrowLeft.png';
import ArrowR from '@/public/assets/arrowRight.png';

const timeoutTimer = 500;

export interface CarouselProps {
  image: {
    link: string;
    alt: string;
  }[];
  height: number;
  width: number;
}
type CarouselImage = {
  link: string;
  alt: string;
};
type Direction = {
  direction: 'left' | 'right';
};

/**
 * Carousel component
 * @argument0 Image: Array <{ link: string, alt: string} >
 * @argument1 Height: Number - Height of carousel
 * @argument2 Width: Number - Width of carousel
 * @argument3 Expandable: Boolean - defaults to true
 */

const SimpleCarousel = ({ image, height, width }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState<undefined | CarouselImage>(
    undefined
  );
  const [slideImage, setSlideImage] = useState<
    undefined | (CarouselImage & Direction)
  >(undefined);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (image[imageIndex] !== undefined) {
      setCurrentImage(image[imageIndex]);
    }
  }, [image, imageIndex]);

  /**
   * Memoize these functions
   */

  const handlePrevious = useCallback(() => {
    let newIndex: number;
    if (imageIndex === 0) {
      newIndex = image.length - 1;
    } else {
      newIndex = imageIndex - 1;
    }

    const slide: CarouselImage & Direction = {
      alt: (image[newIndex] as CarouselImage).alt,
      link: (image[newIndex] as CarouselImage).link,
      direction: 'right',
    };

    setSlideImage(slide);
    setTimeout(() => {
      setSlideImage(undefined);
      setImageIndex(newIndex);
    }, timeoutTimer);

    setTimeout(() => {
      setImageIndex(newIndex);
    }, timeoutTimer - 50);
  }, [image, imageIndex]);

  const handleNext = useCallback(() => {
    let newIndex: number;
    if (imageIndex === image.length - 1) {
      newIndex = 0;
    } else {
      newIndex = imageIndex + 1;
    }
    const slide: CarouselImage & Direction = {
      alt: (image[newIndex] as CarouselImage).alt,
      link: (image[newIndex] as CarouselImage).link,
      direction: 'left',
    };

    setSlideImage(slide);
    setTimeout(() => {
      setSlideImage(undefined);
    }, timeoutTimer);

    setTimeout(() => {
      setImageIndex(newIndex);
    }, timeoutTimer - 50);
  }, [imageIndex, image]);

  return (
    <>
      {currentImage && (
        <div className="relative h-full w-full select-none">
          {slideImage && (
            <div className="absolute overflow-x-hidden">
              <Image
                src={slideImage.link}
                alt={slideImage.alt}
                width={width}
                height={height}
                quality={100}
                className={`z-10 ${
                  slideImage.direction === 'left'
                    ? 'animate-swipeleft'
                    : 'animate-swiperight'
                }`}
              />
            </div>
          )}
          <Image
            src={currentImage.link}
            alt={currentImage.alt}
            width={width}
            height={height}
            quality={100}
            className={`cursor-pointer`}
          />
          <div
            className="absolute inset-y-0 left-0 z-30 h-full w-1/12 cursor-pointer
            bg-orange-300/50 hover:animate-[fadeIn_0.4s_ease-out] hover:opacity-100 lg:opacity-0"
            onClick={handlePrevious}
          >
            <div className="absolute bottom-[45%] right-[50%] w-1/5">
              <Image alt="arrow left" src={ArrowL} />
            </div>
          </div>
          <div
            className={`absolute z-30 inset-y-0 right-0 h-full w-1/12 hover:animate-[fadeIn_0.4s_ease-out]
            cursor-pointer bg-orange-300/50 lg:opacity-0 hover:opacity-100`}
            onClick={handleNext}
          >
            <div className={`absolute bottom-[45%] left-[50%] w-1/5`}>
              <Image alt="arrow right" src={ArrowR} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { SimpleCarousel };
