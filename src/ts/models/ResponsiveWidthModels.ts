/*
 * ResponsiveWidthModels.ts
 * Copyright: Ouranos Studio 2019
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
	tiny: 451,
	small: 800,
	medium: 1280
}
