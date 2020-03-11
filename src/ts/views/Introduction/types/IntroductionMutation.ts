/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  AssistantExpectations,
  Gender,
  MealAvailableTime,
  MealSize,
  MessageSender,
  MessageType,
  NutritionProfileMode,
  Role
} from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: IntroductionMutation
// ====================================================

export interface IntroductionMutation_setup_messages_data_mealPlanSettings {
  carbs: number | null;
  fat: number | null;
  protein: number | null;
  tdee: number | null;
}

export interface IntroductionMutation_setup_messages_data_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface IntroductionMutation_setup_messages_data_user_avatar {
  url: string;
}

export interface IntroductionMutation_setup_messages_data_user_weight {
  value: number;
  unit: string;
}

export interface IntroductionMutation_setup_messages_data_user_height {
  value: number;
  unit: string;
}

export interface IntroductionMutation_setup_messages_data_user_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface IntroductionMutation_setup_messages_data_user_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface IntroductionMutation_setup_messages_data_user_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface IntroductionMutation_setup_messages_data_user_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface IntroductionMutation_setup_messages_data_user_nutritionProfile {
  id: any;
  calories: number;
  carbs: IntroductionMutation_setup_messages_data_user_nutritionProfile_carbs;
  fat: IntroductionMutation_setup_messages_data_user_nutritionProfile_fat;
  protein: IntroductionMutation_setup_messages_data_user_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface IntroductionMutation_setup_messages_data_user_membership {
  type: string;
}

export interface IntroductionMutation_setup_messages_data_user_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface IntroductionMutation_setup_messages_data_user {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: IntroductionMutation_setup_messages_data_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: IntroductionMutation_setup_messages_data_user_weight | null;
  height: IntroductionMutation_setup_messages_data_user_height | null;
  socialNetworks: IntroductionMutation_setup_messages_data_user_socialNetworks | null;
  nutritionProfile: IntroductionMutation_setup_messages_data_user_nutritionProfile;
  membership: IntroductionMutation_setup_messages_data_user_membership | null;
  role: Role;
  meals: IntroductionMutation_setup_messages_data_user_meals[];
}

export interface IntroductionMutation_setup_messages_data_items {
  text: string;
  value: string;
}

export interface IntroductionMutation_setup_messages_data {
  expect: AssistantExpectations | null;
  skip: boolean | null;
  mealPlanSettings: IntroductionMutation_setup_messages_data_mealPlanSettings | null;
  meals: IntroductionMutation_setup_messages_data_meals[] | null;
  user: IntroductionMutation_setup_messages_data_user | null;
  items: IntroductionMutation_setup_messages_data_items[] | null;
}

export interface IntroductionMutation_setup_messages {
  id: string;
  text: string;
  timestamp: string;
  sender: MessageSender;
  type: MessageType;
  data: IntroductionMutation_setup_messages_data | null;
}

export interface IntroductionMutation_setup {
  token: string | null;
  messages: IntroductionMutation_setup_messages[];
}

export interface IntroductionMutation {
  setup: IntroductionMutation_setup;
}

export interface IntroductionMutationVariables {
  token?: string | null;
  message?: string | null;
  data?: string | null;
}
