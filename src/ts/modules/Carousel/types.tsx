/*
 * types.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

export interface CarouselProps {
  style?: any,
  children: any,

  onChange?: (slide: number) => void,
  onSwipe?: (swipeDirection: 'left' | 'right') => void,

  adaptiveHeight?: boolean,
  slidesToShow?: number,
  slidesToScroll?: number,
  slidesPerRow?: number,
  initialSlide?: number,
  speed?: number,
}
