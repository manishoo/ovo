/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Gender
 */
export enum Gender {
  female = "female",
  male = "male",
}

/**
 * Language codes
 */
export enum LanguageCode {
  en = "en",
  fa = "fa",
}

/**
 * Recipe difficulty
 */
export enum RecipeDifficulty {
  easy = "easy",
  expert = "expert",
  hard = "hard",
  medium = "medium",
}

/**
 * Tag types
 */
export enum TagType {
  cuisine = "cuisine",
  diet = "diet",
  ingredient = "ingredient",
  meal = "meal",
  occasion = "occasion",
  other = "other",
  recipe = "recipe",
}

/**
 * User roles
 */
export enum UserRole {
  operator = "operator",
  user = "user",
}

export interface IngredientInput {
  food?: string | null;
  amount: number;
  customUnit?: string | null;
  gramWeight?: number | null;
  name?: TranslationInput[] | null;
  weight?: string | null;
  description?: TranslationInput[] | null;
  thumbnail?: any | null;
}

export interface InstructionInput {
  step: number;
  text: TranslationInput[];
  note?: TranslationInput[] | null;
  image?: any | null;
}

export interface RecipeInput {
  title: TranslationInput[];
  ingredients: IngredientInput[];
  instructions: InstructionInput[];
  serving: number;
  timing: RecipeTimingInput;
  difficulty?: RecipeDifficulty | null;
  slug?: string | null;
  description?: TranslationInput[] | null;
  coverImage?: any | null;
  thumbnail?: any | null;
  tags?: string[] | null;
}

export interface RecipeTimingInput {
  prepTime?: number | null;
  cookTime?: number | null;
  totalTime: number;
}

export interface SocialNetworksInput {
  instagram?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
  website?: string | null;
}

export interface TagInput {
  slug?: string | null;
  title: TranslationInput[];
  info?: TranslationInput[] | null;
  type: TagType;
}

export interface TranslationInput {
  locale: LanguageCode;
  text: string;
  verified?: boolean | null;
}

export interface UserRegistrationInput {
  username: string;
  password: string;
  email: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
}

export interface UserUpdateInput {
  username: string;
  email: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  imageUrl?: any | null;
  socialNetworks: SocialNetworksInput;
  bio?: string | null;
  phoneNumber?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
