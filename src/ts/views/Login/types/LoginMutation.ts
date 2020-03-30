/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender, MealAvailableTime, MealSize, NutritionProfileMode, Role } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_loginUser_user_avatar {
  url: string;
}

export interface LoginMutation_loginUser_user_weight {
  value: number;
  unit: string;
}

export interface LoginMutation_loginUser_user_height {
  value: number;
  unit: string;
}

export interface LoginMutation_loginUser_user_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface LoginMutation_loginUser_user_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface LoginMutation_loginUser_user_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface LoginMutation_loginUser_user_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface LoginMutation_loginUser_user_nutritionProfile {
  id: any;
  calories: number;
  carbs: LoginMutation_loginUser_user_nutritionProfile_carbs;
  fat: LoginMutation_loginUser_user_nutritionProfile_fat;
  protein: LoginMutation_loginUser_user_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface LoginMutation_loginUser_user_membership {
  type: string;
}

export interface LoginMutation_loginUser_user_achievements {
  finishedSetup: boolean | null;
}

export interface LoginMutation_loginUser_user_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface LoginMutation_loginUser_user {
  id: string;
  username: string;
  session: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: LoginMutation_loginUser_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: LoginMutation_loginUser_user_weight | null;
  height: LoginMutation_loginUser_user_height | null;
  socialNetworks: LoginMutation_loginUser_user_socialNetworks | null;
  nutritionProfile: LoginMutation_loginUser_user_nutritionProfile;
  membership: LoginMutation_loginUser_user_membership | null;
  role: Role;
  achievements: LoginMutation_loginUser_user_achievements;
  meals: LoginMutation_loginUser_user_meals[];
}

export interface LoginMutation_loginUser {
  user: LoginMutation_loginUser_user;
}

export interface LoginMutation {
  loginUser: LoginMutation_loginUser;
}

export interface LoginMutationVariables {
  username: string;
  password: string;
}
