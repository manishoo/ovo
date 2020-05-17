/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: RecipeQuery
// ====================================================

export interface RecipeQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_author_avatar {
  url: string;
}

export interface RecipeQuery_recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeQuery_recipe_author_avatar | null;
}

export interface RecipeQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface RecipeQuery_recipe_origin {
  url: string | null;
  sourceUrl: string | null;
}

export interface RecipeQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_customUnit_name[];
}

export interface RecipeQuery_recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeQuery_recipe_ingredients_unit_Weight_name[];
}

export interface RecipeQuery_recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeQuery_recipe_ingredients_unit = RecipeQuery_recipe_ingredients_unit_Weight | RecipeQuery_recipe_ingredients_unit_CustomUnit;

export interface RecipeQuery_recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeQuery_recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Food {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Food_name[];
  description: RecipeQuery_recipe_ingredients_item_Food_description[] | null;
  weights: RecipeQuery_recipe_ingredients_item_Food_weights[];
  thumbnail: RecipeQuery_recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: RecipeQuery_recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit =
  RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight
  | RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
}

export type RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item =
  RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food
  | RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: RecipeQuery_recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeQuery_recipe_ingredients_item_Recipe_title[];
  servingName: RecipeQuery_recipe_ingredients_item_Recipe_servingName[] | null;
  timing: RecipeQuery_recipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: RecipeQuery_recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeQuery_recipe_ingredients_item_Recipe_ingredients[];
  author: RecipeQuery_recipe_ingredients_item_Recipe_author;
}

export type RecipeQuery_recipe_ingredients_item = RecipeQuery_recipe_ingredients_item_Food | RecipeQuery_recipe_ingredients_item_Recipe;

export interface RecipeQuery_recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeQuery_recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeQuery_recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeQuery_recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeQuery_recipe_ingredients_item | null;
}

export interface RecipeQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_instructions {
  step: number;
  text: RecipeQuery_recipe_instructions_text[];
}

export interface RecipeQuery_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition {
  calories: RecipeQuery_recipe_nutrition_calories | null;
  totalCarbs: RecipeQuery_recipe_nutrition_totalCarbs | null;
  fats: RecipeQuery_recipe_nutrition_fats | null;
  proteins: RecipeQuery_recipe_nutrition_proteins | null;
  fiber: RecipeQuery_recipe_nutrition_fiber | null;
  totalAvailableCarbs: RecipeQuery_recipe_nutrition_totalAvailableCarbs | null;
  sodium: RecipeQuery_recipe_nutrition_sodium | null;
  cholesterol: RecipeQuery_recipe_nutrition_cholesterol | null;
  potassium: RecipeQuery_recipe_nutrition_potassium | null;
  sugar: RecipeQuery_recipe_nutrition_sugar | null;
  sucrose: RecipeQuery_recipe_nutrition_sucrose | null;
  glucose: RecipeQuery_recipe_nutrition_glucose | null;
  fructose: RecipeQuery_recipe_nutrition_fructose | null;
  lactose: RecipeQuery_recipe_nutrition_lactose | null;
  maltose: RecipeQuery_recipe_nutrition_maltose | null;
  galactose: RecipeQuery_recipe_nutrition_galactose | null;
  starch: RecipeQuery_recipe_nutrition_starch | null;
  saturatedFats: RecipeQuery_recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeQuery_recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeQuery_recipe_nutrition_polyunsaturatedFats | null;
  transFats: RecipeQuery_recipe_nutrition_transFats | null;
  omega3: RecipeQuery_recipe_nutrition_omega3 | null;
  omega6: RecipeQuery_recipe_nutrition_omega6 | null;
  ALA: RecipeQuery_recipe_nutrition_ALA | null;
  DHA: RecipeQuery_recipe_nutrition_DHA | null;
  EPA: RecipeQuery_recipe_nutrition_EPA | null;
  DPA: RecipeQuery_recipe_nutrition_DPA | null;
  caffeine: RecipeQuery_recipe_nutrition_caffeine | null;
  theobromine: RecipeQuery_recipe_nutrition_theobromine | null;
  calcium: RecipeQuery_recipe_nutrition_calcium | null;
  choline: RecipeQuery_recipe_nutrition_choline | null;
  copper: RecipeQuery_recipe_nutrition_copper | null;
  fluoride: RecipeQuery_recipe_nutrition_fluoride | null;
  folate: RecipeQuery_recipe_nutrition_folate | null;
  iron: RecipeQuery_recipe_nutrition_iron | null;
  lycopene: RecipeQuery_recipe_nutrition_lycopene | null;
  magnesium: RecipeQuery_recipe_nutrition_magnesium | null;
  manganese: RecipeQuery_recipe_nutrition_manganese | null;
  niacin: RecipeQuery_recipe_nutrition_niacin | null;
  phosphorus: RecipeQuery_recipe_nutrition_phosphorus | null;
  retinol: RecipeQuery_recipe_nutrition_retinol | null;
  riboflavin: RecipeQuery_recipe_nutrition_riboflavin | null;
  selenium: RecipeQuery_recipe_nutrition_selenium | null;
  thiamine: RecipeQuery_recipe_nutrition_thiamine | null;
  alphaCarotene: RecipeQuery_recipe_nutrition_alphaCarotene | null;
  betaCarotene: RecipeQuery_recipe_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeQuery_recipe_nutrition_pantothenicAcid | null;
  vitA: RecipeQuery_recipe_nutrition_vitA | null;
  vitAIU: RecipeQuery_recipe_nutrition_vitAIU | null;
  vitB6: RecipeQuery_recipe_nutrition_vitB6 | null;
  vitB12: RecipeQuery_recipe_nutrition_vitB12 | null;
  vitC: RecipeQuery_recipe_nutrition_vitC | null;
  vitD: RecipeQuery_recipe_nutrition_vitD | null;
  vitD2: RecipeQuery_recipe_nutrition_vitD2 | null;
  vitD3: RecipeQuery_recipe_nutrition_vitD3 | null;
  vitE: RecipeQuery_recipe_nutrition_vitE | null;
  vitK: RecipeQuery_recipe_nutrition_vitK | null;
  zinc: RecipeQuery_recipe_nutrition_zinc | null;
  tryptophan: RecipeQuery_recipe_nutrition_tryptophan | null;
  threonine: RecipeQuery_recipe_nutrition_threonine | null;
  isoleucine: RecipeQuery_recipe_nutrition_isoleucine | null;
  leucine: RecipeQuery_recipe_nutrition_leucine | null;
  lysine: RecipeQuery_recipe_nutrition_lysine | null;
  methionine: RecipeQuery_recipe_nutrition_methionine | null;
  cystine: RecipeQuery_recipe_nutrition_cystine | null;
  phenylalanine: RecipeQuery_recipe_nutrition_phenylalanine | null;
  tyrosine: RecipeQuery_recipe_nutrition_tyrosine | null;
  valine: RecipeQuery_recipe_nutrition_valine | null;
  arginine: RecipeQuery_recipe_nutrition_arginine | null;
  histidine: RecipeQuery_recipe_nutrition_histidine | null;
  alanine: RecipeQuery_recipe_nutrition_alanine | null;
  asparticAcid: RecipeQuery_recipe_nutrition_asparticAcid | null;
  glutamicAcid: RecipeQuery_recipe_nutrition_glutamicAcid | null;
  glycine: RecipeQuery_recipe_nutrition_glycine | null;
  proline: RecipeQuery_recipe_nutrition_proline | null;
  serine: RecipeQuery_recipe_nutrition_serine | null;
  hydroxyproline: RecipeQuery_recipe_nutrition_hydroxyproline | null;
}

export interface RecipeQuery_recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_image {
  url: string;
}

export interface RecipeQuery_recipe {
  id: string;
  title: RecipeQuery_recipe_title[];
  serving: number;
  servingName: RecipeQuery_recipe_servingName[] | null;
  slug: string;
  status: RecipeStatus;
  author: RecipeQuery_recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeQuery_recipe_timing;
  origin: RecipeQuery_recipe_origin | null;
  ingredients: RecipeQuery_recipe_ingredients[];
  instructions: RecipeQuery_recipe_instructions[];
  nutrition: RecipeQuery_recipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeQuery_recipe_description[] | null;
  image: RecipeQuery_recipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}

export interface RecipeQuery {
  recipe: RecipeQuery_recipe;
}

export interface RecipeQueryVariables {
  slug: string;
}
