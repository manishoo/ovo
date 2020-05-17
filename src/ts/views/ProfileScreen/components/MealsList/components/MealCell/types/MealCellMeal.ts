/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../../../../models/global-types'

// ====================================================
// GraphQL fragment: MealCellMeal
// ====================================================

export interface MealCellMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_customUnit_name[];
}

export interface MealCellMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_unit_Weight_name[];
}

export interface MealCellMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_unit_CustomUnit_name[];
}

export type MealCellMeal_items_unit = MealCellMeal_items_unit_Weight | MealCellMeal_items_unit_CustomUnit;

export interface MealCellMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_item_Food_weights_name[];
}

export interface MealCellMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition {
  calories: MealCellMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealCellMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealCellMeal_items_item_Food_nutrition_fats | null;
  proteins: MealCellMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealCellMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealCellMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealCellMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealCellMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealCellMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealCellMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealCellMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealCellMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealCellMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealCellMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealCellMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealCellMeal_items_item_Food_nutrition_galactose | null;
  starch: MealCellMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealCellMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealCellMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealCellMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealCellMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealCellMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealCellMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealCellMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealCellMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealCellMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealCellMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealCellMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealCellMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealCellMeal_items_item_Food_nutrition_calcium | null;
  choline: MealCellMeal_items_item_Food_nutrition_choline | null;
  copper: MealCellMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealCellMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealCellMeal_items_item_Food_nutrition_folate | null;
  iron: MealCellMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealCellMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealCellMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealCellMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealCellMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealCellMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealCellMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealCellMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealCellMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealCellMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealCellMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealCellMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealCellMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealCellMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealCellMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealCellMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealCellMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealCellMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealCellMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealCellMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealCellMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealCellMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealCellMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealCellMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealCellMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealCellMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealCellMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealCellMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealCellMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealCellMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealCellMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealCellMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealCellMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealCellMeal_items_item_Food_nutrition_valine | null;
  arginine: MealCellMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealCellMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealCellMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealCellMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealCellMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealCellMeal_items_item_Food_nutrition_glycine | null;
  proline: MealCellMeal_items_item_Food_nutrition_proline | null;
  serine: MealCellMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealCellMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealCellMeal_items_item_Food {
  id: string;
  name: MealCellMeal_items_item_Food_name[];
  description: MealCellMeal_items_item_Food_description[] | null;
  weights: MealCellMeal_items_item_Food_weights[];
  thumbnail: MealCellMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealCellMeal_items_item_Food_origFoodGroups[][];
  nutrition: MealCellMeal_items_item_Food_nutrition | null;
}

export interface MealCellMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealCellMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealCellMeal_items_item_Recipe_ingredients_unit =
  MealCellMeal_items_item_Recipe_ingredients_unit_Weight
  | MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealCellMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealCellMeal_items_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealCellMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealCellMeal_items_item_Recipe_ingredients_item =
  MealCellMeal_items_item_Recipe_ingredients_item_Food
  | MealCellMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealCellMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_item_Recipe_ingredients_unit | null;
  item: MealCellMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealCellMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealCellMeal_items_item_Recipe_author_avatar | null;
}

export interface MealCellMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition {
  calories: MealCellMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealCellMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealCellMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealCellMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealCellMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealCellMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealCellMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealCellMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealCellMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealCellMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealCellMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealCellMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealCellMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealCellMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealCellMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealCellMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealCellMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealCellMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealCellMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealCellMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealCellMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealCellMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealCellMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealCellMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealCellMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealCellMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealCellMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealCellMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealCellMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealCellMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealCellMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealCellMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealCellMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealCellMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealCellMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealCellMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealCellMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealCellMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealCellMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealCellMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealCellMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealCellMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealCellMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealCellMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealCellMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealCellMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealCellMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealCellMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealCellMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealCellMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealCellMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealCellMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealCellMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealCellMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealCellMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealCellMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealCellMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealCellMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealCellMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealCellMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealCellMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealCellMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealCellMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealCellMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealCellMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealCellMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealCellMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealCellMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealCellMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealCellMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealCellMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealCellMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealCellMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealCellMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealCellMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealCellMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealCellMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealCellMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_item_Recipe_title[];
  servingName: MealCellMeal_items_item_Recipe_servingName[] | null;
  timing: MealCellMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealCellMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealCellMeal_items_item_Recipe_ingredients[];
  author: MealCellMeal_items_item_Recipe_author;
  nutrition: MealCellMeal_items_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_item = MealCellMeal_items_item_Food | MealCellMeal_items_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealCellMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealCellMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealCellMeal_items_alternativeMealItems_unit =
  MealCellMeal_items_alternativeMealItems_unit_Weight
  | MealCellMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealCellMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Food_name[];
  description: MealCellMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealCellMeal_items_alternativeMealItems_item_Food_weights[];
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
  nutrition: MealCellMeal_items_alternativeMealItems_item_Food_nutrition | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit =
  MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight
  | MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item =
  MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food
  | MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealCellMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_alternativeMealItems_item_Recipe_title[];
  servingName: MealCellMeal_items_alternativeMealItems_item_Recipe_servingName[] | null;
  timing: MealCellMeal_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealCellMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_alternativeMealItems_item =
  MealCellMeal_items_alternativeMealItems_item_Food
  | MealCellMeal_items_alternativeMealItems_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_alternativeMealItems_description[] | null;
  isOptional: boolean | null;
  customUnit: MealCellMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_alternativeMealItems_unit | null;
  item: MealCellMeal_items_alternativeMealItems_item | null;
}

export interface MealCellMeal_items {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_description[] | null;
  customUnit: MealCellMeal_items_customUnit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_unit | null;
  item: MealCellMeal_items_item | null;
  alternativeMealItems: MealCellMeal_items_alternativeMealItems[];
}

export interface MealCellMeal_author_avatar {
  url: string;
}

export interface MealCellMeal_author {
  id: string;
  username: string;
  avatar: MealCellMeal_author_avatar | null;
}

export interface MealCellMeal_timing {
  totalTime: number | null;
}

export interface MealCellMeal {
  id: string;
  name: MealCellMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealCellMeal_items[];
  hasPermutations: boolean | null;
  author: MealCellMeal_author;
  timing: MealCellMeal_timing;
}
