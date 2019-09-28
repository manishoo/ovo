/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfileInfoUser
// ====================================================

export interface ProfileInfoUser_imageUrl {
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
  imageUrl: ProfileInfoUser_imageUrl | null;
  socialNetworks: ProfileInfoUser_socialNetworks | null;
}
