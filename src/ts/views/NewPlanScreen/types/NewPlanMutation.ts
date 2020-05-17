/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, PlanInput } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: NewPlanMutation
// ====================================================

export interface NewPlanMutation_newPlan_name {
  text: string;
  locale: LanguageCode;
}

export interface NewPlanMutation_newPlan_description {
  text: string;
  locale: LanguageCode;
}

export interface NewPlanMutation_newPlan_thumbnailImage {
  url: string;
}

export interface NewPlanMutation_newPlan {
  name: NewPlanMutation_newPlan_name[] | null;
  description: NewPlanMutation_newPlan_description[] | null;
  thumbnailImage: NewPlanMutation_newPlan_thumbnailImage | null;
  id: any;
}

export interface NewPlanMutation {
  newPlan: NewPlanMutation_newPlan;
}

export interface NewPlanMutationVariables {
  planInput: PlanInput;
}
