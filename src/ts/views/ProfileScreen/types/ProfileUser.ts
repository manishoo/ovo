/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: ProfileUser
// ====================================================

export interface ProfileUser_avatar {
  url: string;
}

export interface ProfileUser_socialNetworks {
  instagram: string | null;
  pinterest: string | null;
  twitter: string | null;
  website: string | null;
}

export interface ProfileUser {
  id: string;
  role: Role;
  bio: string | null;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileUser_avatar | null;
  socialNetworks: ProfileUser_socialNetworks | null;
}
