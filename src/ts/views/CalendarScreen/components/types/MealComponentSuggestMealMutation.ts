/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentSuggestMealMutation
// ====================================================

export interface MealComponentSuggestMealMutation_suggestMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_customUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_customUnit_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit_name[];
}

export type MealComponentSuggestMealMutation_suggestMeal_items_unit = MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight | MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fats | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_galactose | null;
  starch: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calcium | null;
  choline: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_choline | null;
  copper: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_folate | null;
  iron: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_valine | null;
  arginine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_glycine | null;
  proline: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proline | null;
  serine: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_description[] | null;
  weights: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups[][];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit = MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item = MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit | null;
  item: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author_avatar | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_title[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_image | null;
  timing: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients[];
  author: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition;
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item = MealComponentSuggestMealMutation_suggestMeal_items_item_Food | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe;

export interface MealComponentSuggestMealMutation_suggestMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentSuggestMealMutation_suggestMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentSuggestMealMutation_suggestMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealComponentSuggestMealMutation_suggestMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentSuggestMealMutation_suggestMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealComponentSuggestMealMutation_suggestMeal_items_item | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal {
  id: any;
  userMeal: MealComponentSuggestMealMutation_suggestMeal_userMeal;
  time: any | null;
  items: MealComponentSuggestMealMutation_suggestMeal_items[];
}

export interface MealComponentSuggestMealMutation {
  suggestMeal: MealComponentSuggestMealMutation_suggestMeal;
}

export interface MealComponentSuggestMealMutationVariables {
  userMealId: string;
  date: any;
}
