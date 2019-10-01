/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PublicProfileScreenQuery
// ====================================================

export interface PublicProfileScreenQuery_user_imageUrl {
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
  bio: string | null;
  username: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: PublicProfileScreenQuery_user_imageUrl | null;
  socialNetworks: PublicProfileScreenQuery_user_socialNetworks | null;
}

export interface PublicProfileScreenQuery {
  user: PublicProfileScreenQuery_user;
}

export interface PublicProfileScreenQueryVariables {
  username?: string | null;
  userId?: string | null;
}
