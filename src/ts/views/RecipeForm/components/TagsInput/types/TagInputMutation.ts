/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TagInput, LanguageCode, TagType } from "./../../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: TagInputMutation
// ====================================================

export interface TagInputMutation_addTag_title {
  locale: LanguageCode;
  text: string;
}

export interface TagInputMutation_addTag_info {
  locale: LanguageCode;
  text: string;
}

export interface TagInputMutation_addTag {
  slug: string | null;
  title: TagInputMutation_addTag_title[] | null;
  info: TagInputMutation_addTag_info[] | null;
  type: TagType;
}

export interface TagInputMutation {
  addTag: TagInputMutation_addTag;
}

export interface TagInputMutationVariables {
  tag: TagInput;
}
