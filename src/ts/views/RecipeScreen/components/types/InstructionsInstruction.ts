/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: InstructionsInstruction
// ====================================================

export interface InstructionsInstruction_text {
  text: string;
  locale: LanguageCode;
}

export interface InstructionsInstruction {
  step: number;
  text: InstructionsInstruction_text[];
}
