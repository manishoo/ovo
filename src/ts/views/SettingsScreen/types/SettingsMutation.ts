/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Gender, Role, UserUpdateInput } from './../../../models/global-types'

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

export interface SettingsMutation_updateUser {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  avatar: SettingsMutation_updateUser_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: SettingsMutation_updateUser_weight | null;
  height: SettingsMutation_updateUser_height | null;
  caloriesPerDay: number | null;
  socialNetworks: SettingsMutation_updateUser_socialNetworks | null;
  role: Role;
}

export interface SettingsMutation {
  updateUser: SettingsMutation_updateUser;
}

export interface SettingsMutationVariables {
  id: string;
  user: UserUpdateInput;
}
