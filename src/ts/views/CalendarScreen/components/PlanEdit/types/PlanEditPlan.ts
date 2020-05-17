/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: PlanEditPlan
// ====================================================

export interface PlanEditPlan_name {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditPlan_description {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditPlan_coverImage {
  url: string;
}

export interface PlanEditPlan {
  id: any;
  name: PlanEditPlan_name[] | null;
  description: PlanEditPlan_description[] | null;
  coverImage: PlanEditPlan_coverImage | null;
}
