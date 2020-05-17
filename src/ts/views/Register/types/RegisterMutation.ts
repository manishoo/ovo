/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  Gender,
  MealAvailableTime,
  MealSize,
  NutritionProfileMode,
  Role,
  UserRegistrationInput
} from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_registerUser_user_avatar {
  url: string;
}

export interface RegisterMutation_registerUser_user_weight {
  value: number;
  unit: string;
}

export interface RegisterMutation_registerUser_user_height {
  value: number;
  unit: string;
}

export interface RegisterMutation_registerUser_user_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface RegisterMutation_registerUser_user_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface RegisterMutation_registerUser_user_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface RegisterMutation_registerUser_user_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface RegisterMutation_registerUser_user_nutritionProfile {
  id: any;
  calories: number;
  carbs: RegisterMutation_registerUser_user_nutritionProfile_carbs;
  fat: RegisterMutation_registerUser_user_nutritionProfile_fat;
  protein: RegisterMutation_registerUser_user_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface RegisterMutation_registerUser_user_membership {
  type: string;
}

export interface RegisterMutation_registerUser_user_achievements {
  finishedSetup: boolean | null;
}

export interface RegisterMutation_registerUser_user_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface RegisterMutation_registerUser_user {
  id: string;
  username: string;
  session: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: RegisterMutation_registerUser_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: RegisterMutation_registerUser_user_weight | null;
  height: RegisterMutation_registerUser_user_height | null;
  socialNetworks: RegisterMutation_registerUser_user_socialNetworks | null;
  nutritionProfile: RegisterMutation_registerUser_user_nutritionProfile;
  membership: RegisterMutation_registerUser_user_membership | null;
  role: Role;
  achievements: RegisterMutation_registerUser_user_achievements;
  meals: RegisterMutation_registerUser_user_meals[];
  plan: any;
}

export interface RegisterMutation_registerUser {
  user: RegisterMutation_registerUser_user;
  session: string;
}

export interface RegisterMutation {
  registerUser: RegisterMutation_registerUser;
}

export interface RegisterMutationVariables {
  user: UserRegistrationInput;
}
