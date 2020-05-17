/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../models/global-types'

// ====================================================
// GraphQL query operation: PlansListPlansQuery
// ====================================================

export interface PlansListPlansQuery_plans_name {
  text: string;
  locale: LanguageCode;
}

export interface PlansListPlansQuery_plans_description {
  text: string;
  locale: LanguageCode;
}

export interface PlansListPlansQuery_plans_thumbnailImage {
  url: string;
}

export interface PlansListPlansQuery_plans {
  name: PlansListPlansQuery_plans_name[] | null;
  description: PlansListPlansQuery_plans_description[] | null;
  thumbnailImage: PlansListPlansQuery_plans_thumbnailImage | null;
  id: any;
}

export interface PlansListPlansQuery {
  plans: PlansListPlansQuery_plans[];
}

export interface PlansListPlansQueryVariables {
  userId?: string | null;
}
