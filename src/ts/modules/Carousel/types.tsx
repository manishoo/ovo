/*
 * types.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

export interface CarouselProps {
  style?: any,
  children: any,

  adaptiveHeight?: boolean,
  slidesToShow?: number,
  slidesToScroll?: number,
  slidesPerRow?: number,
  initialSlide?: number,
  speed?: number,
}
