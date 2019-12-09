/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: InstructionRowInstruction
// ====================================================

export interface InstructionRowInstruction_text {
  text: string;
  locale: LanguageCode;
}

export interface InstructionRowInstruction {
  step: number;
  text: InstructionRowInstruction_text[];
}
