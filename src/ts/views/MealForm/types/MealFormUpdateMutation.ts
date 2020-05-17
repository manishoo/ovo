/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, MealInput, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: MealFormUpdateMutation
// ====================================================

export interface MealFormUpdateMutation_updateMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_unit = MealFormUpdateMutation_updateMeal_items_unit_Weight | MealFormUpdateMutation_updateMeal_items_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fats | null;
  proteins: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_galactose | null;
  starch: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calcium | null;
  choline: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_choline | null;
  copper: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_folate | null;
  iron: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_valine | null;
  arginine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_glycine | null;
  proline: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proline | null;
  serine: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_item_Food_weights[];
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups[][];
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit =
  MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight
  | MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item =
  MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food
  | MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealFormUpdateMutation_updateMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_item_Recipe_title[];
  servingName: MealFormUpdateMutation_updateMeal_items_item_Recipe_servingName[] | null;
  timing: MealFormUpdateMutation_updateMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients[];
  author: MealFormUpdateMutation_updateMeal_items_item_Recipe_author;
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_item = MealFormUpdateMutation_updateMeal_items_item_Food | MealFormUpdateMutation_updateMeal_items_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights[];
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit =
  MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight
  | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item =
  MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food
  | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_title[];
  servingName: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_servingName[] | null;
  timing: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description[] | null;
  isOptional: boolean | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_description[] | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_customUnit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_item | null;
  alternativeMealItems: MealFormUpdateMutation_updateMeal_items_alternativeMealItems[];
}

export interface MealFormUpdateMutation_updateMeal_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_timing {
  totalTime: number | null;
}

export interface MealFormUpdateMutation_updateMeal {
  id: string;
  name: MealFormUpdateMutation_updateMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormUpdateMutation_updateMeal_items[];
  hasPermutations: boolean | null;
  author: MealFormUpdateMutation_updateMeal_author;
  timing: MealFormUpdateMutation_updateMeal_timing;
  instanceOf: any | null;
}

export interface MealFormUpdateMutation {
  updateMeal: MealFormUpdateMutation_updateMeal;
}

export interface MealFormUpdateMutationVariables {
  id: any;
  meal: MealInput;
}
