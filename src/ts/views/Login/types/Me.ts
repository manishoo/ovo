/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Me
// ====================================================

export interface Me_imageUrl {
  __typename: "Image";
  url: string;
}

export interface Me_weight {
  __typename: "WeightUnit";
  value: number;
  unit: string;
}

export interface Me_height {
  __typename: "Height";
  value: number;
  unit: string;
}

export interface Me {
  __typename: "User";
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  imageUrl: Me_imageUrl | null;
  gender: string | null;
  bodyFat: number | null;
  age: number | null;
  weight: Me_weight | null;
  height: Me_height | null;
  caloriesPerDay: number | null;
}
