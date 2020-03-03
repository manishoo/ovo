/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealItemInput, MealAvailableTime, MealSize, LanguageCode, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentLogMealMutation
// ====================================================

export interface MealComponentLogMealMutation_logMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentLogMealMutation_logMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_customUnit {
  gramWeight: number | null;
  name: MealComponentLogMealMutation_logMeal_items_customUnit_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentLogMealMutation_logMeal_items_unit_Weight_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentLogMealMutation_logMeal_items_unit_CustomUnit_name[];
}

export type MealComponentLogMealMutation_logMeal_items_unit = MealComponentLogMealMutation_logMeal_items_unit_Weight | MealComponentLogMealMutation_logMeal_items_unit_CustomUnit;

export interface MealComponentLogMealMutation_logMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentLogMealMutation_logMeal_items_item_Food_weights_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fats | null;
  proteins: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_galactose | null;
  starch: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_calcium | null;
  choline: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_choline | null;
  copper: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_folate | null;
  iron: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_valine | null;
  arginine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_glycine | null;
  proline: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_proline | null;
  serine: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Food {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_item_Food_name[];
  description: MealComponentLogMealMutation_logMeal_items_item_Food_description[] | null;
  weights: MealComponentLogMealMutation_logMeal_items_item_Food_weights[];
  image: MealComponentLogMealMutation_logMeal_items_item_Food_image | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealComponentLogMealMutation_logMeal_items_item_Food_nutrition;
  origFoodGroups: MealComponentLogMealMutation_logMeal_items_item_Food_origFoodGroups[][];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit = MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_Weight | MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item = MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Food | MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_unit | null;
  item: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealComponentLogMealMutation_logMeal_items_item_Recipe_author_avatar | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealComponentLogMealMutation_logMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentLogMealMutation_logMeal_items_item_Recipe_title[];
  image: MealComponentLogMealMutation_logMeal_items_item_Recipe_image | null;
  timing: MealComponentLogMealMutation_logMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealComponentLogMealMutation_logMeal_items_item_Recipe_ingredients[];
  author: MealComponentLogMealMutation_logMeal_items_item_Recipe_author;
  nutrition: MealComponentLogMealMutation_logMeal_items_item_Recipe_nutrition;
}

export type MealComponentLogMealMutation_logMeal_items_item = MealComponentLogMealMutation_logMeal_items_item_Food | MealComponentLogMealMutation_logMeal_items_item_Recipe;

export interface MealComponentLogMealMutation_logMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentLogMealMutation_logMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentLogMealMutation_logMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealComponentLogMealMutation_logMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentLogMealMutation_logMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealComponentLogMealMutation_logMeal_items_item | null;
}

export interface MealComponentLogMealMutation_logMeal {
  id: any;
  userMeal: MealComponentLogMealMutation_logMeal_userMeal;
  time: any | null;
  items: MealComponentLogMealMutation_logMeal_items[];
}

export interface MealComponentLogMealMutation {
  logMeal: MealComponentLogMealMutation_logMeal;
}

export interface MealComponentLogMealMutationVariables {
  date: any;
  userMealId: string;
  mealItems: MealItemInput[];
}
