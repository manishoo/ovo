/*
 * ResponsiveWidthModels.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

export enum ResponsiveWidth {
  // <= 450
  Tiny,
  // 451 - 799
  Small,
  // 800 - 1279
  Medium,
  // >= 1280
  Large
}

export const WidthBreakPoints = {
  tiny: 576,
  small: 768,
  medium: 992,
  large: 1200,
}
