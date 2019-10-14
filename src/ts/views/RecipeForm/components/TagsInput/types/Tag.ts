/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, TagType } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: Tag
// ====================================================

export interface Tag_title {
  locale: LanguageCode;
  text: string;
}

export interface Tag_info {
  locale: LanguageCode;
  text: string;
}

export interface Tag {
  slug: string | null;
  title: Tag_title[] | null;
  info: Tag_info[] | null;
  type: TagType;
  user: string | null;
}
