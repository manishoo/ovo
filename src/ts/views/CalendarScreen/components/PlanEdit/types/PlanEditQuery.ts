/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../models/global-types'

// ====================================================
// GraphQL query operation: PlanEditQuery
// ====================================================

export interface PlanEditQuery_plan_name {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditQuery_plan_description {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditQuery_plan_coverImage {
  url: string;
}

export interface PlanEditQuery_plan {
  id: any;
  name: PlanEditQuery_plan_name[] | null;
  description: PlanEditQuery_plan_description[] | null;
  coverImage: PlanEditQuery_plan_coverImage | null;
}

export interface PlanEditQuery {
  plan: PlanEditQuery_plan;
}

export interface PlanEditQueryVariables {
  id: any;
}
