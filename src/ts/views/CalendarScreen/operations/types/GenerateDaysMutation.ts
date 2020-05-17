/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, MealAvailableTime, MealSize, RecipeStatus } from './../../../../models/global-types'

// ====================================================
// GraphQL mutation operation: GenerateDaysMutation
// ====================================================

export interface GenerateDaysMutation_generateDays_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_customUnit {
  gramWeight: number | null;
  name: GenerateDaysMutation_generateDays_meals_items_customUnit_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GenerateDaysMutation_generateDays_meals_items_unit_Weight_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: GenerateDaysMutation_generateDays_meals_items_unit_CustomUnit_name[];
}

export type GenerateDaysMutation_generateDays_meals_items_unit =
  GenerateDaysMutation_generateDays_meals_items_unit_Weight
  | GenerateDaysMutation_generateDays_meals_items_unit_CustomUnit;

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GenerateDaysMutation_generateDays_meals_items_item_Food_weights_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_thumbnail {
  url: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_origFoodGroups {
  id: string;
  name: GenerateDaysMutation_generateDays_meals_items_item_Food_origFoodGroups_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition {
  calories: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fats | null;
  proteins: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_proteins | null;
  fiber: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_potassium | null;
  sugar: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sugar | null;
  sucrose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_sucrose | null;
  glucose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glucose | null;
  fructose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fructose | null;
  lactose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lactose | null;
  maltose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_maltose | null;
  galactose: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_galactose | null;
  starch: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_transFats | null;
  omega3: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_omega3 | null;
  omega6: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_omega6 | null;
  ALA: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_ALA | null;
  DHA: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_DHA | null;
  EPA: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_EPA | null;
  DPA: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_DPA | null;
  caffeine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_theobromine | null;
  calcium: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_calcium | null;
  choline: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_choline | null;
  copper: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_copper | null;
  fluoride: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_fluoride | null;
  folate: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_folate | null;
  iron: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_iron | null;
  lycopene: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_magnesium | null;
  manganese: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_manganese | null;
  niacin: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_selenium | null;
  thiamine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitC | null;
  vitD: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD | null;
  vitD2: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitE | null;
  vitK: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_vitK | null;
  zinc: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_leucine | null;
  lysine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_lysine | null;
  methionine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_methionine | null;
  cystine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_tyrosine | null;
  valine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_valine | null;
  arginine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_arginine | null;
  histidine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_histidine | null;
  alanine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_glycine | null;
  proline: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_proline | null;
  serine: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Food {
  id: string;
  name: GenerateDaysMutation_generateDays_meals_items_item_Food_name[];
  description: GenerateDaysMutation_generateDays_meals_items_item_Food_description[] | null;
  weights: GenerateDaysMutation_generateDays_meals_items_item_Food_weights[];
  thumbnail: GenerateDaysMutation_generateDays_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: GenerateDaysMutation_generateDays_meals_items_item_Food_origFoodGroups[][];
  nutrition: GenerateDaysMutation_generateDays_meals_items_item_Food_nutrition | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit =
  GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_Weight
  | GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Recipe_title[];
}

export type GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item =
  GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Food
  | GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item_Recipe;

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_unit | null;
  item: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients_item | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: GenerateDaysMutation_generateDays_meals_items_item_Recipe_author_avatar | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition {
  calories: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fats | null;
  proteins: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_galactose | null;
  starch: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_calcium | null;
  choline: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_choline | null;
  copper: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_folate | null;
  iron: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_valine | null;
  arginine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_glycine | null;
  proline: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_proline | null;
  serine: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface GenerateDaysMutation_generateDays_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: GenerateDaysMutation_generateDays_meals_items_item_Recipe_title[];
  servingName: GenerateDaysMutation_generateDays_meals_items_item_Recipe_servingName[] | null;
  timing: GenerateDaysMutation_generateDays_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: GenerateDaysMutation_generateDays_meals_items_item_Recipe_thumbnail | null;
  ingredients: GenerateDaysMutation_generateDays_meals_items_item_Recipe_ingredients[];
  author: GenerateDaysMutation_generateDays_meals_items_item_Recipe_author;
  nutrition: GenerateDaysMutation_generateDays_meals_items_item_Recipe_nutrition | null;
}

export type GenerateDaysMutation_generateDays_meals_items_item =
  GenerateDaysMutation_generateDays_meals_items_item_Food
  | GenerateDaysMutation_generateDays_meals_items_item_Recipe;

export interface GenerateDaysMutation_generateDays_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: GenerateDaysMutation_generateDays_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: GenerateDaysMutation_generateDays_meals_items_description[] | null;
  amount: number | null;
  customUnit: GenerateDaysMutation_generateDays_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: GenerateDaysMutation_generateDays_meals_items_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: GenerateDaysMutation_generateDays_meals_items_item | null;
}

export interface GenerateDaysMutation_generateDays_meals {
  id: any;
  time: any | null;
  /**
   * if this DayMeal was associated with a Meal, this is its id
   */
  mealId: any | null;
  ate: boolean | null;
  userMeal: GenerateDaysMutation_generateDays_meals_userMeal;
  items: GenerateDaysMutation_generateDays_meals_items[];
}

export interface GenerateDaysMutation_generateDays {
  id: any;
  date: any | null;
  meals: GenerateDaysMutation_generateDays_meals[];
}

export interface GenerateDaysMutation {
  generateDays: GenerateDaysMutation_generateDays[];
}

export interface GenerateDaysMutationVariables {
  dates: any[];
}
