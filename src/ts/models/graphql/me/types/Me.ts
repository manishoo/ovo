/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender, MealAvailableTime, MealSize, NutritionProfileMode, Role } from './../../../global-types'

// ====================================================
// GraphQL fragment: Me
// ====================================================

export interface Me_avatar {
  url: string;
}

export interface Me_weight {
  value: number;
  unit: string;
}

export interface Me_height {
  value: number;
  unit: string;
}

export interface Me_socialNetworks {
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  pinterest: string | null;
}

export interface Me_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Me_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Me_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Me_nutritionProfile {
  id: any;
  calories: number;
  carbs: Me_nutritionProfile_carbs;
  fat: Me_nutritionProfile_fat;
  protein: Me_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface Me_membership {
  type: string;
}

export interface Me_achievements {
  finishedSetup: boolean | null;
}

export interface Me_meals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface Me {
  id: string;
  username: string;
  session: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: Me_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: Me_weight | null;
  height: Me_height | null;
  socialNetworks: Me_socialNetworks | null;
  nutritionProfile: Me_nutritionProfile;
  membership: Me_membership | null;
  role: Role;
  achievements: Me_achievements;
  meals: Me_meals[];
  plan: any;
}
