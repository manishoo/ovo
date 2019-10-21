/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, TagType } from "./../../../../../models/global-types";

// ====================================================
// GraphQL query operation: TagsInputQuery
// ====================================================

export interface TagsInputQuery_tags_title {
  locale: LanguageCode;
  text: string;
}

export interface TagsInputQuery_tags_info {
  locale: LanguageCode;
  text: string;
}

export interface TagsInputQuery_tags {
  slug: string | null;
  title: TagsInputQuery_tags_title[] | null;
  info: TagsInputQuery_tags_info[] | null;
  type: TagType;
  user: string | null;
}

export interface TagsInputQuery {
  tags: TagsInputQuery_tags[];
}
