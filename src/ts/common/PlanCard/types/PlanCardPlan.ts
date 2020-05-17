/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: PlanCardPlan
// ====================================================

export interface PlanCardPlan_name {
  text: string;
  locale: LanguageCode;
}

export interface PlanCardPlan_description {
  text: string;
  locale: LanguageCode;
}

export interface PlanCardPlan_thumbnailImage {
  url: string;
}

export interface PlanCardPlan {
  name: PlanCardPlan_name[] | null;
  description: PlanCardPlan_description[] | null;
  thumbnailImage: PlanCardPlan_thumbnailImage | null;
  id: any;
}
