/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender, MealAvailableTime, MealSize, NutritionProfileMode, Role } from './../../../global-types'

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me_avatar {
  url: string;
}

export interface MeQuery_me_weight {
  value: number;
  unit: string;
}

export interface MeQuery_me_height {
  value: number;
  unit: string;
}

export interface MeQuery_me_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface MeQuery_me_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface MeQuery_me_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface MeQuery_me_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface MeQuery_me_nutritionProfile {
  id: any;
  calories: number;
  carbs: MeQuery_me_nutritionProfile_carbs;
  fat: MeQuery_me_nutritionProfile_fat;
  protein: MeQuery_me_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface MeQuery_me_membership {
  type: string;
}

export interface MeQuery_me_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MeQuery_me {
  id: string;
  username: string;
  session: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MeQuery_me_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: MeQuery_me_weight | null;
  height: MeQuery_me_height | null;
  socialNetworks: MeQuery_me_socialNetworks | null;
  nutritionProfile: MeQuery_me_nutritionProfile;
  membership: MeQuery_me_membership | null;
  role: Role;
  meals: MeQuery_me_meals[];
}

export interface MeQuery {
  me: MeQuery_me;
}
