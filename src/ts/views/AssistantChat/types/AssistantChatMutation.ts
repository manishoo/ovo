/* tslint:disable */
/* eslint-disable */
// @generated
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
// GraphQL mutation operation: AssistantChatMutation
// ====================================================

export interface AssistantChatMutation_setup_messages_data_mealPlanSettings {
  carbs: number | null;
  fat: number | null;
  protein: number | null;
  tdee: number | null;
}

export interface AssistantChatMutation_setup_messages_data_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface AssistantChatMutation_setup_messages_data_user_avatar {
  url: string;
}

export interface AssistantChatMutation_setup_messages_data_user_weight {
  value: number;
  unit: string;
}

export interface AssistantChatMutation_setup_messages_data_user_height {
  value: number;
  unit: string;
}

export interface AssistantChatMutation_setup_messages_data_user_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface AssistantChatMutation_setup_messages_data_user_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface AssistantChatMutation_setup_messages_data_user_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface AssistantChatMutation_setup_messages_data_user_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface AssistantChatMutation_setup_messages_data_user_nutritionProfile {
  id: any;
  calories: number;
  carbs: AssistantChatMutation_setup_messages_data_user_nutritionProfile_carbs;
  fat: AssistantChatMutation_setup_messages_data_user_nutritionProfile_fat;
  protein: AssistantChatMutation_setup_messages_data_user_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface AssistantChatMutation_setup_messages_data_user_membership {
  type: string;
}

export interface AssistantChatMutation_setup_messages_data_user_achievements {
  finishedSetup: boolean | null;
}

export interface AssistantChatMutation_setup_messages_data_user_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface AssistantChatMutation_setup_messages_data_user {
  id: string;
  username: string;
  session: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: AssistantChatMutation_setup_messages_data_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: AssistantChatMutation_setup_messages_data_user_weight | null;
  height: AssistantChatMutation_setup_messages_data_user_height | null;
  socialNetworks: AssistantChatMutation_setup_messages_data_user_socialNetworks | null;
  nutritionProfile: AssistantChatMutation_setup_messages_data_user_nutritionProfile;
  membership: AssistantChatMutation_setup_messages_data_user_membership | null;
  role: Role;
  achievements: AssistantChatMutation_setup_messages_data_user_achievements;
  meals: AssistantChatMutation_setup_messages_data_user_meals[];
}

export interface AssistantChatMutation_setup_messages_data_items {
  text: string;
  value: string;
}

export interface AssistantChatMutation_setup_messages_data {
  expect: AssistantExpectations | null;
  skip: boolean | null;
  mealPlanSettings: AssistantChatMutation_setup_messages_data_mealPlanSettings | null;
  meals: AssistantChatMutation_setup_messages_data_meals[] | null;
  user: AssistantChatMutation_setup_messages_data_user | null;
  items: AssistantChatMutation_setup_messages_data_items[] | null;
}

export interface AssistantChatMutation_setup_messages {
  id: string;
  text: string;
  timestamp: string;
  sender: MessageSender;
  type: MessageType;
  data: AssistantChatMutation_setup_messages_data | null;
}

export interface AssistantChatMutation_setup {
  token: string | null;
  messages: AssistantChatMutation_setup_messages[];
}

export interface AssistantChatMutation {
  setup: AssistantChatMutation_setup;
}

export interface AssistantChatMutationVariables {
  token?: string | null;
  message?: string | null;
  data?: string | null;
}
