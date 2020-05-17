/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: RecipeFormQuery
// ====================================================

export interface RecipeFormQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_author_avatar {
  url: string;
}

export interface RecipeFormQuery_recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormQuery_recipe_author_avatar | null;
}

export interface RecipeFormQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface RecipeFormQuery_recipe_origin {
  url: string | null;
  sourceUrl: string | null;
}

export interface RecipeFormQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_customUnit_name[];
}

export interface RecipeFormQuery_recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormQuery_recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormQuery_recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormQuery_recipe_ingredients_unit = RecipeFormQuery_recipe_ingredients_unit_Weight | RecipeFormQuery_recipe_ingredients_unit_CustomUnit;

export interface RecipeFormQuery_recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormQuery_recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Food_name[];
  description: RecipeFormQuery_recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormQuery_recipe_ingredients_item_Food_weights[];
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit =
  RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight
  | RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
}

export type RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item =
  RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food
  | RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: RecipeFormQuery_recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormQuery_recipe_ingredients_item_Recipe_title[];
  servingName: RecipeFormQuery_recipe_ingredients_item_Recipe_servingName[] | null;
  timing: RecipeFormQuery_recipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients[];
  author: RecipeFormQuery_recipe_ingredients_item_Recipe_author;
}

export type RecipeFormQuery_recipe_ingredients_item = RecipeFormQuery_recipe_ingredients_item_Food | RecipeFormQuery_recipe_ingredients_item_Recipe;

export interface RecipeFormQuery_recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormQuery_recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormQuery_recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormQuery_recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormQuery_recipe_ingredients_item | null;
}

export interface RecipeFormQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_instructions {
  step: number;
  text: RecipeFormQuery_recipe_instructions_text[];
}

export interface RecipeFormQuery_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition {
  calories: RecipeFormQuery_recipe_nutrition_calories | null;
  totalCarbs: RecipeFormQuery_recipe_nutrition_totalCarbs | null;
  fats: RecipeFormQuery_recipe_nutrition_fats | null;
  proteins: RecipeFormQuery_recipe_nutrition_proteins | null;
  fiber: RecipeFormQuery_recipe_nutrition_fiber | null;
  totalAvailableCarbs: RecipeFormQuery_recipe_nutrition_totalAvailableCarbs | null;
  sodium: RecipeFormQuery_recipe_nutrition_sodium | null;
  cholesterol: RecipeFormQuery_recipe_nutrition_cholesterol | null;
  potassium: RecipeFormQuery_recipe_nutrition_potassium | null;
  sugar: RecipeFormQuery_recipe_nutrition_sugar | null;
  sucrose: RecipeFormQuery_recipe_nutrition_sucrose | null;
  glucose: RecipeFormQuery_recipe_nutrition_glucose | null;
  fructose: RecipeFormQuery_recipe_nutrition_fructose | null;
  lactose: RecipeFormQuery_recipe_nutrition_lactose | null;
  maltose: RecipeFormQuery_recipe_nutrition_maltose | null;
  galactose: RecipeFormQuery_recipe_nutrition_galactose | null;
  starch: RecipeFormQuery_recipe_nutrition_starch | null;
  saturatedFats: RecipeFormQuery_recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeFormQuery_recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeFormQuery_recipe_nutrition_polyunsaturatedFats | null;
  transFats: RecipeFormQuery_recipe_nutrition_transFats | null;
  omega3: RecipeFormQuery_recipe_nutrition_omega3 | null;
  omega6: RecipeFormQuery_recipe_nutrition_omega6 | null;
  ALA: RecipeFormQuery_recipe_nutrition_ALA | null;
  DHA: RecipeFormQuery_recipe_nutrition_DHA | null;
  EPA: RecipeFormQuery_recipe_nutrition_EPA | null;
  DPA: RecipeFormQuery_recipe_nutrition_DPA | null;
  caffeine: RecipeFormQuery_recipe_nutrition_caffeine | null;
  theobromine: RecipeFormQuery_recipe_nutrition_theobromine | null;
  calcium: RecipeFormQuery_recipe_nutrition_calcium | null;
  choline: RecipeFormQuery_recipe_nutrition_choline | null;
  copper: RecipeFormQuery_recipe_nutrition_copper | null;
  fluoride: RecipeFormQuery_recipe_nutrition_fluoride | null;
  folate: RecipeFormQuery_recipe_nutrition_folate | null;
  iron: RecipeFormQuery_recipe_nutrition_iron | null;
  lycopene: RecipeFormQuery_recipe_nutrition_lycopene | null;
  magnesium: RecipeFormQuery_recipe_nutrition_magnesium | null;
  manganese: RecipeFormQuery_recipe_nutrition_manganese | null;
  niacin: RecipeFormQuery_recipe_nutrition_niacin | null;
  phosphorus: RecipeFormQuery_recipe_nutrition_phosphorus | null;
  retinol: RecipeFormQuery_recipe_nutrition_retinol | null;
  riboflavin: RecipeFormQuery_recipe_nutrition_riboflavin | null;
  selenium: RecipeFormQuery_recipe_nutrition_selenium | null;
  thiamine: RecipeFormQuery_recipe_nutrition_thiamine | null;
  alphaCarotene: RecipeFormQuery_recipe_nutrition_alphaCarotene | null;
  betaCarotene: RecipeFormQuery_recipe_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeFormQuery_recipe_nutrition_pantothenicAcid | null;
  vitA: RecipeFormQuery_recipe_nutrition_vitA | null;
  vitAIU: RecipeFormQuery_recipe_nutrition_vitAIU | null;
  vitB6: RecipeFormQuery_recipe_nutrition_vitB6 | null;
  vitB12: RecipeFormQuery_recipe_nutrition_vitB12 | null;
  vitC: RecipeFormQuery_recipe_nutrition_vitC | null;
  vitD: RecipeFormQuery_recipe_nutrition_vitD | null;
  vitD2: RecipeFormQuery_recipe_nutrition_vitD2 | null;
  vitD3: RecipeFormQuery_recipe_nutrition_vitD3 | null;
  vitE: RecipeFormQuery_recipe_nutrition_vitE | null;
  vitK: RecipeFormQuery_recipe_nutrition_vitK | null;
  zinc: RecipeFormQuery_recipe_nutrition_zinc | null;
  tryptophan: RecipeFormQuery_recipe_nutrition_tryptophan | null;
  threonine: RecipeFormQuery_recipe_nutrition_threonine | null;
  isoleucine: RecipeFormQuery_recipe_nutrition_isoleucine | null;
  leucine: RecipeFormQuery_recipe_nutrition_leucine | null;
  lysine: RecipeFormQuery_recipe_nutrition_lysine | null;
  methionine: RecipeFormQuery_recipe_nutrition_methionine | null;
  cystine: RecipeFormQuery_recipe_nutrition_cystine | null;
  phenylalanine: RecipeFormQuery_recipe_nutrition_phenylalanine | null;
  tyrosine: RecipeFormQuery_recipe_nutrition_tyrosine | null;
  valine: RecipeFormQuery_recipe_nutrition_valine | null;
  arginine: RecipeFormQuery_recipe_nutrition_arginine | null;
  histidine: RecipeFormQuery_recipe_nutrition_histidine | null;
  alanine: RecipeFormQuery_recipe_nutrition_alanine | null;
  asparticAcid: RecipeFormQuery_recipe_nutrition_asparticAcid | null;
  glutamicAcid: RecipeFormQuery_recipe_nutrition_glutamicAcid | null;
  glycine: RecipeFormQuery_recipe_nutrition_glycine | null;
  proline: RecipeFormQuery_recipe_nutrition_proline | null;
  serine: RecipeFormQuery_recipe_nutrition_serine | null;
  hydroxyproline: RecipeFormQuery_recipe_nutrition_hydroxyproline | null;
}

export interface RecipeFormQuery_recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_image {
  url: string;
}

export interface RecipeFormQuery_recipe {
  id: string;
  title: RecipeFormQuery_recipe_title[];
  serving: number;
  servingName: RecipeFormQuery_recipe_servingName[] | null;
  slug: string;
  status: RecipeStatus;
  author: RecipeFormQuery_recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormQuery_recipe_timing;
  origin: RecipeFormQuery_recipe_origin | null;
  ingredients: RecipeFormQuery_recipe_ingredients[];
  instructions: RecipeFormQuery_recipe_instructions[];
  nutrition: RecipeFormQuery_recipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormQuery_recipe_description[] | null;
  image: RecipeFormQuery_recipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}

export interface RecipeFormQuery {
  recipe: RecipeFormQuery_recipe;
}

export interface RecipeFormQueryVariables {
  slug: string;
}
