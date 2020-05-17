/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: PublicProfileScreenQuery
// ====================================================

export interface PublicProfileScreenQuery_user_avatar {
  url: string;
}

export interface PublicProfileScreenQuery_user_socialNetworks {
  instagram: string | null;
  pinterest: string | null;
  twitter: string | null;
  website: string | null;
}

export interface PublicProfileScreenQuery_user {
  id: string;
  role: Role;
  bio: string | null;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: PublicProfileScreenQuery_user_avatar | null;
  socialNetworks: PublicProfileScreenQuery_user_socialNetworks | null;
}

export interface PublicProfileScreenQuery {
  user: PublicProfileScreenQuery_user;
}

export interface PublicProfileScreenQueryVariables {
  username?: string | null;
  userId?: any | null;
}
