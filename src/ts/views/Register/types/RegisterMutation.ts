/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserRegistrationInput, Gender, Role, MealAvailableTime, MealSize } from "./../../../models/global-types";

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
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  avatar: RegisterMutation_registerUser_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: RegisterMutation_registerUser_user_weight | null;
  height: RegisterMutation_registerUser_user_height | null;
  caloriesPerDay: number | null;
  socialNetworks: RegisterMutation_registerUser_user_socialNetworks | null;
  role: Role;
  meals: RegisterMutation_registerUser_user_meals[];
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
