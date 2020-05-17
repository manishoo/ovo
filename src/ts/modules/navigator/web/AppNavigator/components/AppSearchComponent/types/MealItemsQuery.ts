/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../../../../models/global-types'

// ====================================================
// GraphQL query operation: MealItemsQuery
// ====================================================

export interface MealItemsQuery_mealItems_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_customUnit {
  gramWeight: number | null;
  name: MealItemsQuery_mealItems_items_customUnit_name[];
}

export interface MealItemsQuery_mealItems_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemsQuery_mealItems_items_unit_Weight_name[];
}

export interface MealItemsQuery_mealItems_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemsQuery_mealItems_items_unit_CustomUnit_name[];
}

export type MealItemsQuery_mealItems_items_unit =
  MealItemsQuery_mealItems_items_unit_Weight
  | MealItemsQuery_mealItems_items_unit_CustomUnit;

export interface MealItemsQuery_mealItems_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemsQuery_mealItems_items_item_Food_weights_name[];
}

export interface MealItemsQuery_mealItems_items_item_Food_thumbnail {
  url: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Food_origFoodGroups {
  id: string;
  name: MealItemsQuery_mealItems_items_item_Food_origFoodGroups_name[];
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Food_nutrition {
  calories: MealItemsQuery_mealItems_items_item_Food_nutrition_calories | null;
  totalCarbs: MealItemsQuery_mealItems_items_item_Food_nutrition_totalCarbs | null;
  fats: MealItemsQuery_mealItems_items_item_Food_nutrition_fats | null;
  proteins: MealItemsQuery_mealItems_items_item_Food_nutrition_proteins | null;
  fiber: MealItemsQuery_mealItems_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemsQuery_mealItems_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemsQuery_mealItems_items_item_Food_nutrition_sodium | null;
  cholesterol: MealItemsQuery_mealItems_items_item_Food_nutrition_cholesterol | null;
  potassium: MealItemsQuery_mealItems_items_item_Food_nutrition_potassium | null;
  sugar: MealItemsQuery_mealItems_items_item_Food_nutrition_sugar | null;
  sucrose: MealItemsQuery_mealItems_items_item_Food_nutrition_sucrose | null;
  glucose: MealItemsQuery_mealItems_items_item_Food_nutrition_glucose | null;
  fructose: MealItemsQuery_mealItems_items_item_Food_nutrition_fructose | null;
  lactose: MealItemsQuery_mealItems_items_item_Food_nutrition_lactose | null;
  maltose: MealItemsQuery_mealItems_items_item_Food_nutrition_maltose | null;
  galactose: MealItemsQuery_mealItems_items_item_Food_nutrition_galactose | null;
  starch: MealItemsQuery_mealItems_items_item_Food_nutrition_starch | null;
  saturatedFats: MealItemsQuery_mealItems_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemsQuery_mealItems_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemsQuery_mealItems_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemsQuery_mealItems_items_item_Food_nutrition_transFats | null;
  omega3: MealItemsQuery_mealItems_items_item_Food_nutrition_omega3 | null;
  omega6: MealItemsQuery_mealItems_items_item_Food_nutrition_omega6 | null;
  ALA: MealItemsQuery_mealItems_items_item_Food_nutrition_ALA | null;
  DHA: MealItemsQuery_mealItems_items_item_Food_nutrition_DHA | null;
  EPA: MealItemsQuery_mealItems_items_item_Food_nutrition_EPA | null;
  DPA: MealItemsQuery_mealItems_items_item_Food_nutrition_DPA | null;
  caffeine: MealItemsQuery_mealItems_items_item_Food_nutrition_caffeine | null;
  theobromine: MealItemsQuery_mealItems_items_item_Food_nutrition_theobromine | null;
  calcium: MealItemsQuery_mealItems_items_item_Food_nutrition_calcium | null;
  choline: MealItemsQuery_mealItems_items_item_Food_nutrition_choline | null;
  copper: MealItemsQuery_mealItems_items_item_Food_nutrition_copper | null;
  fluoride: MealItemsQuery_mealItems_items_item_Food_nutrition_fluoride | null;
  folate: MealItemsQuery_mealItems_items_item_Food_nutrition_folate | null;
  iron: MealItemsQuery_mealItems_items_item_Food_nutrition_iron | null;
  lycopene: MealItemsQuery_mealItems_items_item_Food_nutrition_lycopene | null;
  magnesium: MealItemsQuery_mealItems_items_item_Food_nutrition_magnesium | null;
  manganese: MealItemsQuery_mealItems_items_item_Food_nutrition_manganese | null;
  niacin: MealItemsQuery_mealItems_items_item_Food_nutrition_niacin | null;
  phosphorus: MealItemsQuery_mealItems_items_item_Food_nutrition_phosphorus | null;
  retinol: MealItemsQuery_mealItems_items_item_Food_nutrition_retinol | null;
  riboflavin: MealItemsQuery_mealItems_items_item_Food_nutrition_riboflavin | null;
  selenium: MealItemsQuery_mealItems_items_item_Food_nutrition_selenium | null;
  thiamine: MealItemsQuery_mealItems_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemsQuery_mealItems_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemsQuery_mealItems_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemsQuery_mealItems_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemsQuery_mealItems_items_item_Food_nutrition_vitA | null;
  vitAIU: MealItemsQuery_mealItems_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemsQuery_mealItems_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemsQuery_mealItems_items_item_Food_nutrition_vitB12 | null;
  vitC: MealItemsQuery_mealItems_items_item_Food_nutrition_vitC | null;
  vitD: MealItemsQuery_mealItems_items_item_Food_nutrition_vitD | null;
  vitD2: MealItemsQuery_mealItems_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemsQuery_mealItems_items_item_Food_nutrition_vitD3 | null;
  vitE: MealItemsQuery_mealItems_items_item_Food_nutrition_vitE | null;
  vitK: MealItemsQuery_mealItems_items_item_Food_nutrition_vitK | null;
  zinc: MealItemsQuery_mealItems_items_item_Food_nutrition_zinc | null;
  tryptophan: MealItemsQuery_mealItems_items_item_Food_nutrition_tryptophan | null;
  threonine: MealItemsQuery_mealItems_items_item_Food_nutrition_threonine | null;
  isoleucine: MealItemsQuery_mealItems_items_item_Food_nutrition_isoleucine | null;
  leucine: MealItemsQuery_mealItems_items_item_Food_nutrition_leucine | null;
  lysine: MealItemsQuery_mealItems_items_item_Food_nutrition_lysine | null;
  methionine: MealItemsQuery_mealItems_items_item_Food_nutrition_methionine | null;
  cystine: MealItemsQuery_mealItems_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemsQuery_mealItems_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemsQuery_mealItems_items_item_Food_nutrition_tyrosine | null;
  valine: MealItemsQuery_mealItems_items_item_Food_nutrition_valine | null;
  arginine: MealItemsQuery_mealItems_items_item_Food_nutrition_arginine | null;
  histidine: MealItemsQuery_mealItems_items_item_Food_nutrition_histidine | null;
  alanine: MealItemsQuery_mealItems_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemsQuery_mealItems_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemsQuery_mealItems_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemsQuery_mealItems_items_item_Food_nutrition_glycine | null;
  proline: MealItemsQuery_mealItems_items_item_Food_nutrition_proline | null;
  serine: MealItemsQuery_mealItems_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemsQuery_mealItems_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemsQuery_mealItems_items_item_Food {
  id: string;
  name: MealItemsQuery_mealItems_items_item_Food_name[];
  description: MealItemsQuery_mealItems_items_item_Food_description[] | null;
  weights: MealItemsQuery_mealItems_items_item_Food_weights[];
  thumbnail: MealItemsQuery_mealItems_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealItemsQuery_mealItems_items_item_Food_origFoodGroups[][];
  nutrition: MealItemsQuery_mealItems_items_item_Food_nutrition | null;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit =
  MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_Weight
  | MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_name[];
  description: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealItemsQuery_mealItems_items_item_Recipe_ingredients_item =
  MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Food
  | MealItemsQuery_mealItems_items_item_Recipe_ingredients_item_Recipe;

export interface MealItemsQuery_mealItems_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemsQuery_mealItems_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemsQuery_mealItems_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemsQuery_mealItems_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemsQuery_mealItems_items_item_Recipe_ingredients_unit | null;
  item: MealItemsQuery_mealItems_items_item_Recipe_ingredients_item | null;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealItemsQuery_mealItems_items_item_Recipe_author_avatar | null;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemsQuery_mealItems_items_item_Recipe_nutrition {
  calories: MealItemsQuery_mealItems_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemsQuery_mealItems_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemsQuery_mealItems_items_item_Recipe_nutrition_fats | null;
  proteins: MealItemsQuery_mealItems_items_item_Recipe_nutrition_proteins | null;
  fiber: MealItemsQuery_mealItems_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemsQuery_mealItems_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemsQuery_mealItems_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemsQuery_mealItems_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemsQuery_mealItems_items_item_Recipe_nutrition_potassium | null;
  sugar: MealItemsQuery_mealItems_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_glucose | null;
  fructose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_fructose | null;
  lactose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_lactose | null;
  maltose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_maltose | null;
  galactose: MealItemsQuery_mealItems_items_item_Recipe_nutrition_galactose | null;
  starch: MealItemsQuery_mealItems_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemsQuery_mealItems_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemsQuery_mealItems_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemsQuery_mealItems_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemsQuery_mealItems_items_item_Recipe_nutrition_transFats | null;
  omega3: MealItemsQuery_mealItems_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemsQuery_mealItems_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemsQuery_mealItems_items_item_Recipe_nutrition_ALA | null;
  DHA: MealItemsQuery_mealItems_items_item_Recipe_nutrition_DHA | null;
  EPA: MealItemsQuery_mealItems_items_item_Recipe_nutrition_EPA | null;
  DPA: MealItemsQuery_mealItems_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemsQuery_mealItems_items_item_Recipe_nutrition_calcium | null;
  choline: MealItemsQuery_mealItems_items_item_Recipe_nutrition_choline | null;
  copper: MealItemsQuery_mealItems_items_item_Recipe_nutrition_copper | null;
  fluoride: MealItemsQuery_mealItems_items_item_Recipe_nutrition_fluoride | null;
  folate: MealItemsQuery_mealItems_items_item_Recipe_nutrition_folate | null;
  iron: MealItemsQuery_mealItems_items_item_Recipe_nutrition_iron | null;
  lycopene: MealItemsQuery_mealItems_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemsQuery_mealItems_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemsQuery_mealItems_items_item_Recipe_nutrition_manganese | null;
  niacin: MealItemsQuery_mealItems_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemsQuery_mealItems_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemsQuery_mealItems_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemsQuery_mealItems_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemsQuery_mealItems_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemsQuery_mealItems_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemsQuery_mealItems_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemsQuery_mealItems_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitC | null;
  vitD: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitE | null;
  vitK: MealItemsQuery_mealItems_items_item_Recipe_nutrition_vitK | null;
  zinc: MealItemsQuery_mealItems_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemsQuery_mealItems_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_leucine | null;
  lysine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_lysine | null;
  methionine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_methionine | null;
  cystine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_valine | null;
  arginine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_arginine | null;
  histidine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_histidine | null;
  alanine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemsQuery_mealItems_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemsQuery_mealItems_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_glycine | null;
  proline: MealItemsQuery_mealItems_items_item_Recipe_nutrition_proline | null;
  serine: MealItemsQuery_mealItems_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemsQuery_mealItems_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemsQuery_mealItems_items_item_Recipe {
  id: string;
  slug: string;
  title: MealItemsQuery_mealItems_items_item_Recipe_title[];
  servingName: MealItemsQuery_mealItems_items_item_Recipe_servingName[] | null;
  timing: MealItemsQuery_mealItems_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemsQuery_mealItems_items_item_Recipe_thumbnail | null;
  ingredients: MealItemsQuery_mealItems_items_item_Recipe_ingredients[];
  author: MealItemsQuery_mealItems_items_item_Recipe_author;
  nutrition: MealItemsQuery_mealItems_items_item_Recipe_nutrition | null;
}

export type MealItemsQuery_mealItems_items_item =
  MealItemsQuery_mealItems_items_item_Food
  | MealItemsQuery_mealItems_items_item_Recipe;

export interface MealItemsQuery_mealItems_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemsQuery_mealItems_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemsQuery_mealItems_items_description[] | null;
  amount: number | null;
  customUnit: MealItemsQuery_mealItems_items_customUnit | null;
  isOptional: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemsQuery_mealItems_items_unit | null;
  item: MealItemsQuery_mealItems_items_item | null;
}

export interface MealItemsQuery_mealItems_pagination {
  page: number;
  hasNext: boolean;
}

export interface MealItemsQuery_mealItems {
  items: MealItemsQuery_mealItems_items[];
  pagination: MealItemsQuery_mealItems_pagination;
}

export interface MealItemsQuery {
  mealItems: MealItemsQuery_mealItems;
}

export interface MealItemsQueryVariables {
  nameSearchQuery: string;
  page: number;
  size: number;
}
