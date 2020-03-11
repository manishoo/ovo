/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  Gender,
  MealAvailableTime,
  MealSize,
  NutritionProfileMode,
  Role,
  UserUpdateInput
} from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: SettingsMutation
// ====================================================

export interface SettingsMutation_updateUser_avatar {
  url: string;
}

export interface SettingsMutation_updateUser_weight {
  value: number;
  unit: string;
}

export interface SettingsMutation_updateUser_height {
  value: number;
  unit: string;
}

export interface SettingsMutation_updateUser_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface SettingsMutation_updateUser_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface SettingsMutation_updateUser_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface SettingsMutation_updateUser_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface SettingsMutation_updateUser_nutritionProfile {
  id: any;
  calories: number;
  carbs: SettingsMutation_updateUser_nutritionProfile_carbs;
  fat: SettingsMutation_updateUser_nutritionProfile_fat;
  protein: SettingsMutation_updateUser_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface SettingsMutation_updateUser_membership {
  type: string;
}

export interface SettingsMutation_updateUser_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface SettingsMutation_updateUser {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: SettingsMutation_updateUser_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: SettingsMutation_updateUser_weight | null;
  height: SettingsMutation_updateUser_height | null;
  socialNetworks: SettingsMutation_updateUser_socialNetworks | null;
  nutritionProfile: SettingsMutation_updateUser_nutritionProfile;
  membership: SettingsMutation_updateUser_membership | null;
  role: Role;
  meals: SettingsMutation_updateUser_meals[];
}

export interface SettingsMutation {
  updateUser: SettingsMutation_updateUser;
}

export interface SettingsMutationVariables {
  id: any;
  user: UserUpdateInput;
}
