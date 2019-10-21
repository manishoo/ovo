/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Gender, Role } from "./../../../models/global-types";

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

export interface Me {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  avatar: Me_avatar | null;
  gender: Gender | null;
  bodyFat: number | null;
  age: number | null;
  bio: string | null;
  weight: Me_weight | null;
  height: Me_height | null;
  caloriesPerDay: number | null;
  socialNetworks: Me_socialNetworks | null;
  role: Role;
}
