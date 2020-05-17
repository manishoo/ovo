/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * AssistantExpectations
 */
export enum AssistantExpectations {
  activity = "activity",
  age = "age",
  allergy = "allergy",
  chooseDiet = "chooseDiet",
  diet = "diet",
  dislikedFoods = "dislikedFoods",
  gender = "gender",
  goal = "goal",
  height = "height",
  meal = "meal",
  meals = "meals",
  nickname = "nickname",
  normalRoutine = "normalRoutine",
  plan = 'plan',
  planSettings = 'planSettings',
  register = "register",
  weight = "weight",
}

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
  ar = 'ar',
  de = 'de',
  en = "en",
  es = 'es',
  fa = "fa",
  fr = 'fr',
  it = 'it',
}

/**
 * Meal Available Time
 */
export enum MealAvailableTime {
  littleTime = "littleTime",
  lotsOfTime = "lotsOfTime",
  moreTime = "moreTime",
  noLimit = "noLimit",
  noTime = "noTime",
  someTime = "someTime",
}

/**
 * Meal Size
 */
export enum MealSize {
  big = "big",
  huge = "huge",
  normal = "normal",
  small = "small",
  tiny = "tiny",
}

/**
 * Message Senders
 */
export enum MessageSender {
  assistant = "assistant",
  user = "user",
}

/**
 * Message Type
 */
export enum MessageType {
  ack = 'ack',
  email = "email",
  food = "food",
  form = "form",
  height = "height",
  meals = "meals",
  number = "number",
  password = "password",
  plan = 'plan',
  planSettings = 'planSettings',
  select = "select",
  text = "text",
  weight = "weight",
}

/**
 * Nutrition Profile Mode
 */
export enum NutritionProfileMode {
  percentage = "percentage",
  range = "range",
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
 * Recipe Status
 */
export enum RecipeStatus {
  reviewing = 'reviewing',
  unverified = 'unverified',
  verified = 'verified',
}

/**
 * User Roles
 */
export enum Role {
  admin = "admin",
  operator = "operator",
  user = "user",
}

/**
 * Tag types
 */
export enum TagType {
  cuisine = "cuisine",
  diet = "diet",
  imported = "imported",
  ingredient = "ingredient",
  meal = "meal",
  occasion = "occasion",
  other = "other",
  recipe = "recipe",
}

export interface CustomUnitInput {
  name: TranslationInput[];
  gramWeight?: number | null;
}

export interface DayInput {
  id?: any | null;
  date?: any | null;
  planId: any;
  meals: DayMealInput[];
}

export interface DayMealInput {
  id?: any | null;
  userMeal: UserMealInput;
  time?: any | null;
  items?: MealItemInput[] | null;
  ate?: boolean | null;
}

export interface IngredientInput {
  id?: any | null;
  name?: TranslationInput[] | null;
  amount?: number | null;
  unit: string;
  food?: any | null;
  recipe?: any | null;
  isOptional?: boolean | null;
  customUnit?: CustomUnitInput | null;
  description?: TranslationInput[] | null;
}

export interface InstructionInput {
  step: number;
  text: TranslationInput[];
  note?: TranslationInput[] | null;
  image?: any | null;
}

export interface MealInput {
  name?: TranslationInput[] | null;
  description?: TranslationInput[] | null;
  items: MealItemInput[];
}

export interface MealItemInput {
  id?: any | null;
  name?: TranslationInput[] | null;
  amount?: number | null;
  unit: string;
  food?: any | null;
  recipe?: any | null;
  isOptional?: boolean | null;
  customUnit?: CustomUnitInput | null;
  description?: TranslationInput[] | null;
  alternativeMealItems: IngredientInput[];
}

export interface NutritionProfileInput {
  id?: any | null;
  calories: number;
  protein: TargetNutritionInput;
  carbs: TargetNutritionInput;
  fat: TargetNutritionInput;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface PlanInput {
  name?: TranslationInput[] | null;
  description?: TranslationInput[] | null;
  coverImage?: any | null;
  thumbnailImage?: any | null;
}

export interface RecipeInput {
  title: TranslationInput[];
  ingredients: IngredientInput[];
  instructions: InstructionInput[];
  serving: number;
  servingName?: TranslationInput[] | null;
  timing: TimingInput;
  difficulty?: RecipeDifficulty | null;
  slug?: string | null;
  description?: TranslationInput[] | null;
  image?: any | null;
  thumbnail?: any | null;
  tags?: string[] | null;
  status?: RecipeStatus | null;
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

export interface TargetNutritionInput {
  percentage?: number | null;
  min: number;
  max: number;
}

export interface TimingInput {
  prepTime?: number | null;
  cookTime?: number | null;
  totalTime?: number | null;
}

export interface TranslationInput {
  locale: LanguageCode;
  text: string;
  verified?: boolean | null;
}

export interface UserMealInput {
  id: string;
  name: string;
  time: string;
  size: MealSize;
  availableTime: MealAvailableTime;
  cook?: boolean | null;
}

export interface UserRegistrationInput {
  username: string;
  password: string;
  email: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dietId?: any | null;
}

export interface UserUpdateInput {
  username: string;
  email: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  avatar?: any | null;
  socialNetworks: SocialNetworksInput;
  bio?: string | null;
  phoneNumber?: string | null;
  dietId?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
