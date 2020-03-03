/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserMealInput, NutritionProfileInput, MealAvailableTime, MealSize, LanguageCode, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: GeneratorSampleMutation
// ====================================================

export interface GeneratorSampleMutation_suggestDayGuest_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_description {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_customUnit {
  gramWeight: number | null;
  name: GeneratorSampleMutation_suggestDayGuest_items_customUnit_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GeneratorSampleMutation_suggestDayGuest_items_unit_Weight_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_unit_CustomUnit {
  gramWeight: number | null;
  name: GeneratorSampleMutation_suggestDayGuest_items_unit_CustomUnit_name[];
}

export type GeneratorSampleMutation_suggestDayGuest_items_unit = GeneratorSampleMutation_suggestDayGuest_items_unit_Weight | GeneratorSampleMutation_suggestDayGuest_items_unit_CustomUnit;

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Food_weights_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_image {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_thumbnail {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition {
  calories: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_calories | null;
  totalCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_totalCarbs | null;
  fats: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fats | null;
  proteins: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_proteins | null;
  fiber: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sodium | null;
  cholesterol: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_cholesterol | null;
  potassium: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_potassium | null;
  sugar: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sugar | null;
  sucrose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_sucrose | null;
  glucose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glucose | null;
  fructose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fructose | null;
  lactose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lactose | null;
  maltose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_maltose | null;
  galactose: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_galactose | null;
  starch: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_starch | null;
  saturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_transFats | null;
  omega3: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_omega3 | null;
  omega6: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_omega6 | null;
  ALA: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_ALA | null;
  DHA: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_DHA | null;
  EPA: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_EPA | null;
  DPA: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_DPA | null;
  caffeine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_caffeine | null;
  theobromine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_theobromine | null;
  calcium: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_calcium | null;
  choline: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_choline | null;
  copper: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_copper | null;
  fluoride: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_fluoride | null;
  folate: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_folate | null;
  iron: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_iron | null;
  lycopene: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lycopene | null;
  magnesium: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_magnesium | null;
  manganese: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_manganese | null;
  niacin: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_niacin | null;
  phosphorus: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_phosphorus | null;
  retinol: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_retinol | null;
  riboflavin: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_riboflavin | null;
  selenium: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_selenium | null;
  thiamine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitA | null;
  vitAIU: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitAIU | null;
  vitB6: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitB6 | null;
  vitB12: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitB12 | null;
  vitC: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitC | null;
  vitD: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD | null;
  vitD2: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD2 | null;
  vitD3: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitD3 | null;
  vitE: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitE | null;
  vitK: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_vitK | null;
  zinc: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_zinc | null;
  tryptophan: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_tryptophan | null;
  threonine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_threonine | null;
  isoleucine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_isoleucine | null;
  leucine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_leucine | null;
  lysine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_lysine | null;
  methionine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_methionine | null;
  cystine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_cystine | null;
  phenylalanine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_tyrosine | null;
  valine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_valine | null;
  arginine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_arginine | null;
  histidine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_histidine | null;
  alanine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_alanine | null;
  asparticAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glutamicAcid | null;
  glycine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_glycine | null;
  proline: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_proline | null;
  serine: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_serine | null;
  hydroxyproline: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition_hydroxyproline | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food_origFoodGroups {
  id: string;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Food_origFoodGroups_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Food {
  id: string;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Food_name[];
  description: GeneratorSampleMutation_suggestDayGuest_items_item_Food_description[] | null;
  weights: GeneratorSampleMutation_suggestDayGuest_items_item_Food_weights[];
  image: GeneratorSampleMutation_suggestDayGuest_items_item_Food_image | null;
  thumbnail: GeneratorSampleMutation_suggestDayGuest_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: GeneratorSampleMutation_suggestDayGuest_items_item_Food_nutrition;
  origFoodGroups: GeneratorSampleMutation_suggestDayGuest_items_item_Food_origFoodGroups[][];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_image {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_thumbnail {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_customUnit_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit = GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_Weight | GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit_CustomUnit;

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_name[];
  description: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_weights[];
  image: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item = GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Food | GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item_Recipe;

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_unit | null;
  item: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients_item | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_author_avatar {
  url: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_author_avatar | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition {
  calories: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_calories | null;
  totalCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_totalCarbs | null;
  fats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fats | null;
  proteins: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_proteins | null;
  fiber: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sodium | null;
  cholesterol: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_cholesterol | null;
  potassium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_potassium | null;
  sugar: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sugar | null;
  sucrose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_sucrose | null;
  glucose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glucose | null;
  fructose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fructose | null;
  lactose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lactose | null;
  maltose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_maltose | null;
  galactose: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_galactose | null;
  starch: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_starch | null;
  saturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_transFats | null;
  omega3: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_omega3 | null;
  omega6: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_omega6 | null;
  ALA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_ALA | null;
  DHA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_DHA | null;
  EPA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_EPA | null;
  DPA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_DPA | null;
  caffeine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_caffeine | null;
  theobromine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_theobromine | null;
  calcium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_calcium | null;
  choline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_choline | null;
  copper: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_copper | null;
  fluoride: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_fluoride | null;
  folate: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_folate | null;
  iron: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_iron | null;
  lycopene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lycopene | null;
  magnesium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_magnesium | null;
  manganese: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_manganese | null;
  niacin: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_niacin | null;
  phosphorus: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_phosphorus | null;
  retinol: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_retinol | null;
  riboflavin: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_riboflavin | null;
  selenium: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_selenium | null;
  thiamine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitA | null;
  vitAIU: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitB12 | null;
  vitC: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitC | null;
  vitD: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD | null;
  vitD2: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitD3 | null;
  vitE: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitE | null;
  vitK: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_vitK | null;
  zinc: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_zinc | null;
  tryptophan: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_tryptophan | null;
  threonine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_threonine | null;
  isoleucine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_isoleucine | null;
  leucine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_leucine | null;
  lysine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_lysine | null;
  methionine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_methionine | null;
  cystine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_tyrosine | null;
  valine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_valine | null;
  arginine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_arginine | null;
  histidine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_histidine | null;
  alanine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_glycine | null;
  proline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_proline | null;
  serine: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface GeneratorSampleMutation_suggestDayGuest_items_item_Recipe {
  id: string;
  slug: string;
  title: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_title[];
  image: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_image | null;
  timing: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_thumbnail | null;
  ingredients: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_ingredients[];
  author: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_author;
  nutrition: GeneratorSampleMutation_suggestDayGuest_items_item_Recipe_nutrition;
}

export type GeneratorSampleMutation_suggestDayGuest_items_item = GeneratorSampleMutation_suggestDayGuest_items_item_Food | GeneratorSampleMutation_suggestDayGuest_items_item_Recipe;

export interface GeneratorSampleMutation_suggestDayGuest_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: GeneratorSampleMutation_suggestDayGuest_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: GeneratorSampleMutation_suggestDayGuest_items_description[] | null;
  amount: number | null;
  customUnit: GeneratorSampleMutation_suggestDayGuest_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: GeneratorSampleMutation_suggestDayGuest_items_unit | null;
  isOptional: boolean | null;
  item: GeneratorSampleMutation_suggestDayGuest_items_item | null;
}

export interface GeneratorSampleMutation_suggestDayGuest {
  id: any;
  userMeal: GeneratorSampleMutation_suggestDayGuest_userMeal;
  time: any | null;
  items: GeneratorSampleMutation_suggestDayGuest_items[];
}

export interface GeneratorSampleMutation {
  suggestDayGuest: GeneratorSampleMutation_suggestDayGuest[];
}

export interface GeneratorSampleMutationVariables {
  userMeals: UserMealInput[];
  dietId?: any | null;
  nutritionProfile: NutritionProfileInput;
}
