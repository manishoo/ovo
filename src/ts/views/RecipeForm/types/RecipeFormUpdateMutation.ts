/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeInput, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: RecipeFormUpdateMutation
// ====================================================

export interface RecipeFormUpdateMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_author_avatar {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormUpdateMutation_updateRecipe_author_avatar | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_origin {
  url: string | null;
  sourceUrl: string | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_unit = RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight | RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_name[];
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights[];
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_timing {
  totalTime: number | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_title[];
  timing: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail | null;
  author: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author;
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_item = RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food | RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormUpdateMutation_updateRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormUpdateMutation_updateRecipe_ingredients_item | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions {
  step: number;
  text: RecipeFormUpdateMutation_updateRecipe_instructions_text[];
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_nutrition_calories | null;
  totalCarbs: RecipeFormUpdateMutation_updateRecipe_nutrition_totalCarbs | null;
  fats: RecipeFormUpdateMutation_updateRecipe_nutrition_fats | null;
  proteins: RecipeFormUpdateMutation_updateRecipe_nutrition_proteins | null;
  fiber: RecipeFormUpdateMutation_updateRecipe_nutrition_fiber | null;
  totalAvailableCarbs: RecipeFormUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs | null;
  sodium: RecipeFormUpdateMutation_updateRecipe_nutrition_sodium | null;
  cholesterol: RecipeFormUpdateMutation_updateRecipe_nutrition_cholesterol | null;
  potassium: RecipeFormUpdateMutation_updateRecipe_nutrition_potassium | null;
  sugar: RecipeFormUpdateMutation_updateRecipe_nutrition_sugar | null;
  sucrose: RecipeFormUpdateMutation_updateRecipe_nutrition_sucrose | null;
  glucose: RecipeFormUpdateMutation_updateRecipe_nutrition_glucose | null;
  fructose: RecipeFormUpdateMutation_updateRecipe_nutrition_fructose | null;
  lactose: RecipeFormUpdateMutation_updateRecipe_nutrition_lactose | null;
  maltose: RecipeFormUpdateMutation_updateRecipe_nutrition_maltose | null;
  galactose: RecipeFormUpdateMutation_updateRecipe_nutrition_galactose | null;
  starch: RecipeFormUpdateMutation_updateRecipe_nutrition_starch | null;
  saturatedFats: RecipeFormUpdateMutation_updateRecipe_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeFormUpdateMutation_updateRecipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeFormUpdateMutation_updateRecipe_nutrition_polyunsaturatedFats | null;
  transFats: RecipeFormUpdateMutation_updateRecipe_nutrition_transFats | null;
  omega3: RecipeFormUpdateMutation_updateRecipe_nutrition_omega3 | null;
  omega6: RecipeFormUpdateMutation_updateRecipe_nutrition_omega6 | null;
  ALA: RecipeFormUpdateMutation_updateRecipe_nutrition_ALA | null;
  DHA: RecipeFormUpdateMutation_updateRecipe_nutrition_DHA | null;
  EPA: RecipeFormUpdateMutation_updateRecipe_nutrition_EPA | null;
  DPA: RecipeFormUpdateMutation_updateRecipe_nutrition_DPA | null;
  caffeine: RecipeFormUpdateMutation_updateRecipe_nutrition_caffeine | null;
  theobromine: RecipeFormUpdateMutation_updateRecipe_nutrition_theobromine | null;
  calcium: RecipeFormUpdateMutation_updateRecipe_nutrition_calcium | null;
  choline: RecipeFormUpdateMutation_updateRecipe_nutrition_choline | null;
  copper: RecipeFormUpdateMutation_updateRecipe_nutrition_copper | null;
  fluoride: RecipeFormUpdateMutation_updateRecipe_nutrition_fluoride | null;
  folate: RecipeFormUpdateMutation_updateRecipe_nutrition_folate | null;
  iron: RecipeFormUpdateMutation_updateRecipe_nutrition_iron | null;
  lycopene: RecipeFormUpdateMutation_updateRecipe_nutrition_lycopene | null;
  magnesium: RecipeFormUpdateMutation_updateRecipe_nutrition_magnesium | null;
  manganese: RecipeFormUpdateMutation_updateRecipe_nutrition_manganese | null;
  niacin: RecipeFormUpdateMutation_updateRecipe_nutrition_niacin | null;
  phosphorus: RecipeFormUpdateMutation_updateRecipe_nutrition_phosphorus | null;
  retinol: RecipeFormUpdateMutation_updateRecipe_nutrition_retinol | null;
  riboflavin: RecipeFormUpdateMutation_updateRecipe_nutrition_riboflavin | null;
  selenium: RecipeFormUpdateMutation_updateRecipe_nutrition_selenium | null;
  thiamine: RecipeFormUpdateMutation_updateRecipe_nutrition_thiamine | null;
  alphaCarotene: RecipeFormUpdateMutation_updateRecipe_nutrition_alphaCarotene | null;
  betaCarotene: RecipeFormUpdateMutation_updateRecipe_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeFormUpdateMutation_updateRecipe_nutrition_pantothenicAcid | null;
  vitA: RecipeFormUpdateMutation_updateRecipe_nutrition_vitA | null;
  vitAIU: RecipeFormUpdateMutation_updateRecipe_nutrition_vitAIU | null;
  vitB6: RecipeFormUpdateMutation_updateRecipe_nutrition_vitB6 | null;
  vitB12: RecipeFormUpdateMutation_updateRecipe_nutrition_vitB12 | null;
  vitC: RecipeFormUpdateMutation_updateRecipe_nutrition_vitC | null;
  vitD: RecipeFormUpdateMutation_updateRecipe_nutrition_vitD | null;
  vitD2: RecipeFormUpdateMutation_updateRecipe_nutrition_vitD2 | null;
  vitD3: RecipeFormUpdateMutation_updateRecipe_nutrition_vitD3 | null;
  vitE: RecipeFormUpdateMutation_updateRecipe_nutrition_vitE | null;
  vitK: RecipeFormUpdateMutation_updateRecipe_nutrition_vitK | null;
  zinc: RecipeFormUpdateMutation_updateRecipe_nutrition_zinc | null;
  tryptophan: RecipeFormUpdateMutation_updateRecipe_nutrition_tryptophan | null;
  threonine: RecipeFormUpdateMutation_updateRecipe_nutrition_threonine | null;
  isoleucine: RecipeFormUpdateMutation_updateRecipe_nutrition_isoleucine | null;
  leucine: RecipeFormUpdateMutation_updateRecipe_nutrition_leucine | null;
  lysine: RecipeFormUpdateMutation_updateRecipe_nutrition_lysine | null;
  methionine: RecipeFormUpdateMutation_updateRecipe_nutrition_methionine | null;
  cystine: RecipeFormUpdateMutation_updateRecipe_nutrition_cystine | null;
  phenylalanine: RecipeFormUpdateMutation_updateRecipe_nutrition_phenylalanine | null;
  tyrosine: RecipeFormUpdateMutation_updateRecipe_nutrition_tyrosine | null;
  valine: RecipeFormUpdateMutation_updateRecipe_nutrition_valine | null;
  arginine: RecipeFormUpdateMutation_updateRecipe_nutrition_arginine | null;
  histidine: RecipeFormUpdateMutation_updateRecipe_nutrition_histidine | null;
  alanine: RecipeFormUpdateMutation_updateRecipe_nutrition_alanine | null;
  asparticAcid: RecipeFormUpdateMutation_updateRecipe_nutrition_asparticAcid | null;
  glutamicAcid: RecipeFormUpdateMutation_updateRecipe_nutrition_glutamicAcid | null;
  glycine: RecipeFormUpdateMutation_updateRecipe_nutrition_glycine | null;
  proline: RecipeFormUpdateMutation_updateRecipe_nutrition_proline | null;
  serine: RecipeFormUpdateMutation_updateRecipe_nutrition_serine | null;
  hydroxyproline: RecipeFormUpdateMutation_updateRecipe_nutrition_hydroxyproline | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe {
  id: string;
  title: RecipeFormUpdateMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  status: RecipeStatus;
  author: RecipeFormUpdateMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormUpdateMutation_updateRecipe_timing;
  origin: RecipeFormUpdateMutation_updateRecipe_origin | null;
  ingredients: RecipeFormUpdateMutation_updateRecipe_ingredients[];
  instructions: RecipeFormUpdateMutation_updateRecipe_instructions[];
  nutrition: RecipeFormUpdateMutation_updateRecipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormUpdateMutation_updateRecipe_description[] | null;
  image: RecipeFormUpdateMutation_updateRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}

export interface RecipeFormUpdateMutation {
  updateRecipe: RecipeFormUpdateMutation_updateRecipe;
}

export interface RecipeFormUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
