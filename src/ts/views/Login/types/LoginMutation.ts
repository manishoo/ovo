/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Gender, Role } from "./../../../models/global-types";

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

export interface LoginMutation_loginUser_user {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  avatar: LoginMutation_loginUser_user_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: LoginMutation_loginUser_user_weight | null;
  height: LoginMutation_loginUser_user_height | null;
  caloriesPerDay: number | null;
  socialNetworks: LoginMutation_loginUser_user_socialNetworks | null;
  role: Role;
}

export interface LoginMutation_loginUser {
  user: LoginMutation_loginUser_user;
  session: string;
}

export interface LoginMutation {
  loginUser: LoginMutation_loginUser;
}

export interface LoginMutationVariables {
  username: string;
  password: string;
}
