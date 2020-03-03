/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealInput, LanguageCode, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealFormCreateMutation
// ====================================================

export interface MealFormCreateMutation_createMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_unit = MealFormCreateMutation_createMeal_items_unit_Weight | MealFormCreateMutation_createMeal_items_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_item_Food_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_item_Food_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_item_Food_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_item_Food_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_item_Food_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_item_Food_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormCreateMutation_createMeal_items_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit = MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight | MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item = MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food | MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_item_Recipe_title[];
  image: MealFormCreateMutation_createMeal_items_item_Recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_item_Recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_item = MealFormCreateMutation_createMeal_items_item_Food | MealFormCreateMutation_createMeal_items_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_unit = MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight | MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems {
  id: any;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit | null;
  item: MealFormCreateMutation_createMeal_items_alternativeMealItems_item | null;
}

export interface MealFormCreateMutation_createMeal_items {
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_unit | null;
  item: MealFormCreateMutation_createMeal_items_item | null;
  alternativeMealItems: MealFormCreateMutation_createMeal_items_alternativeMealItems[];
}

export interface MealFormCreateMutation_createMeal_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_timing {
  totalTime: number | null;
}

export interface MealFormCreateMutation_createMeal {
  id: string;
  name: MealFormCreateMutation_createMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormCreateMutation_createMeal_items[];
  instanceOf: any | null;
  author: MealFormCreateMutation_createMeal_author;
  timing: MealFormCreateMutation_createMeal_timing;
}

export interface MealFormCreateMutation {
  createMeal: MealFormCreateMutation_createMeal[];
}

export interface MealFormCreateMutationVariables {
  meal: MealInput;
  bulkCreate?: boolean | null;
}
