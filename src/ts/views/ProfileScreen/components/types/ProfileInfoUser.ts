/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfileInfoUser
// ====================================================

export interface ProfileInfoUser_avatar {
  url: string;
}

export interface ProfileInfoUser_socialNetworks {
  instagram: string | null;
  pinterest: string | null;
  twitter: string | null;
  website: string | null;
}

export interface ProfileInfoUser {
  bio: string | null;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileInfoUser_avatar | null;
  socialNetworks: ProfileInfoUser_socialNetworks | null;
}
