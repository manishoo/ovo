/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, PlanInput } from './../../../../../models/global-types'

// ====================================================
// GraphQL mutation operation: PlanEditUpdateMutation
// ====================================================

export interface PlanEditUpdateMutation_updatePlan_name {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditUpdateMutation_updatePlan_description {
  text: string;
  locale: LanguageCode;
}

export interface PlanEditUpdateMutation_updatePlan_coverImage {
  url: string;
}

export interface PlanEditUpdateMutation_updatePlan {
  id: any;
  name: PlanEditUpdateMutation_updatePlan_name[] | null;
  description: PlanEditUpdateMutation_updatePlan_description[] | null;
  coverImage: PlanEditUpdateMutation_updatePlan_coverImage | null;
}

export interface PlanEditUpdateMutation {
  updatePlan: PlanEditUpdateMutation_updatePlan;
}

export interface PlanEditUpdateMutationVariables {
  id: any;
  input: PlanInput;
}
