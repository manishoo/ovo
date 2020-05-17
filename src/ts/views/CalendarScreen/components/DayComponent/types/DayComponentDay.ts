/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, MealAvailableTime, MealSize, RecipeStatus } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: DayComponentDay
// ====================================================

export interface DayComponentDay_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayComponentDay_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_customUnit {
  gramWeight: number | null;
  name: DayComponentDay_meals_items_customUnit_name[];
}

export interface DayComponentDay_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentDay_meals_items_unit_Weight_name[];
}

export interface DayComponentDay_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: DayComponentDay_meals_items_unit_CustomUnit_name[];
}

export type DayComponentDay_meals_items_unit =
  DayComponentDay_meals_items_unit_Weight
  | DayComponentDay_meals_items_unit_CustomUnit;

export interface DayComponentDay_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentDay_meals_items_item_Food_weights_name[];
}

export interface DayComponentDay_meals_items_item_Food_thumbnail {
  url: string;
}

export interface DayComponentDay_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Food_origFoodGroups {
  id: string;
  name: DayComponentDay_meals_items_item_Food_origFoodGroups_name[];
}

export interface DayComponentDay_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Food_nutrition {
  calories: DayComponentDay_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: DayComponentDay_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: DayComponentDay_meals_items_item_Food_nutrition_fats | null;
  proteins: DayComponentDay_meals_items_item_Food_nutrition_proteins | null;
  fiber: DayComponentDay_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: DayComponentDay_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: DayComponentDay_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: DayComponentDay_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: DayComponentDay_meals_items_item_Food_nutrition_potassium | null;
  sugar: DayComponentDay_meals_items_item_Food_nutrition_sugar | null;
  sucrose: DayComponentDay_meals_items_item_Food_nutrition_sucrose | null;
  glucose: DayComponentDay_meals_items_item_Food_nutrition_glucose | null;
  fructose: DayComponentDay_meals_items_item_Food_nutrition_fructose | null;
  lactose: DayComponentDay_meals_items_item_Food_nutrition_lactose | null;
  maltose: DayComponentDay_meals_items_item_Food_nutrition_maltose | null;
  galactose: DayComponentDay_meals_items_item_Food_nutrition_galactose | null;
  starch: DayComponentDay_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: DayComponentDay_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: DayComponentDay_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayComponentDay_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: DayComponentDay_meals_items_item_Food_nutrition_transFats | null;
  omega3: DayComponentDay_meals_items_item_Food_nutrition_omega3 | null;
  omega6: DayComponentDay_meals_items_item_Food_nutrition_omega6 | null;
  ALA: DayComponentDay_meals_items_item_Food_nutrition_ALA | null;
  DHA: DayComponentDay_meals_items_item_Food_nutrition_DHA | null;
  EPA: DayComponentDay_meals_items_item_Food_nutrition_EPA | null;
  DPA: DayComponentDay_meals_items_item_Food_nutrition_DPA | null;
  caffeine: DayComponentDay_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: DayComponentDay_meals_items_item_Food_nutrition_theobromine | null;
  calcium: DayComponentDay_meals_items_item_Food_nutrition_calcium | null;
  choline: DayComponentDay_meals_items_item_Food_nutrition_choline | null;
  copper: DayComponentDay_meals_items_item_Food_nutrition_copper | null;
  fluoride: DayComponentDay_meals_items_item_Food_nutrition_fluoride | null;
  folate: DayComponentDay_meals_items_item_Food_nutrition_folate | null;
  iron: DayComponentDay_meals_items_item_Food_nutrition_iron | null;
  lycopene: DayComponentDay_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: DayComponentDay_meals_items_item_Food_nutrition_magnesium | null;
  manganese: DayComponentDay_meals_items_item_Food_nutrition_manganese | null;
  niacin: DayComponentDay_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: DayComponentDay_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: DayComponentDay_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: DayComponentDay_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: DayComponentDay_meals_items_item_Food_nutrition_selenium | null;
  thiamine: DayComponentDay_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: DayComponentDay_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: DayComponentDay_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: DayComponentDay_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: DayComponentDay_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: DayComponentDay_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: DayComponentDay_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: DayComponentDay_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: DayComponentDay_meals_items_item_Food_nutrition_vitC | null;
  vitD: DayComponentDay_meals_items_item_Food_nutrition_vitD | null;
  vitD2: DayComponentDay_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: DayComponentDay_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: DayComponentDay_meals_items_item_Food_nutrition_vitE | null;
  vitK: DayComponentDay_meals_items_item_Food_nutrition_vitK | null;
  zinc: DayComponentDay_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: DayComponentDay_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: DayComponentDay_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: DayComponentDay_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: DayComponentDay_meals_items_item_Food_nutrition_leucine | null;
  lysine: DayComponentDay_meals_items_item_Food_nutrition_lysine | null;
  methionine: DayComponentDay_meals_items_item_Food_nutrition_methionine | null;
  cystine: DayComponentDay_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: DayComponentDay_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: DayComponentDay_meals_items_item_Food_nutrition_tyrosine | null;
  valine: DayComponentDay_meals_items_item_Food_nutrition_valine | null;
  arginine: DayComponentDay_meals_items_item_Food_nutrition_arginine | null;
  histidine: DayComponentDay_meals_items_item_Food_nutrition_histidine | null;
  alanine: DayComponentDay_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: DayComponentDay_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: DayComponentDay_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: DayComponentDay_meals_items_item_Food_nutrition_glycine | null;
  proline: DayComponentDay_meals_items_item_Food_nutrition_proline | null;
  serine: DayComponentDay_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: DayComponentDay_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface DayComponentDay_meals_items_item_Food {
  id: string;
  name: DayComponentDay_meals_items_item_Food_name[];
  description: DayComponentDay_meals_items_item_Food_description[] | null;
  weights: DayComponentDay_meals_items_item_Food_weights[];
  thumbnail: DayComponentDay_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: DayComponentDay_meals_items_item_Food_origFoodGroups[][];
  nutrition: DayComponentDay_meals_items_item_Food_nutrition | null;
}

export interface DayComponentDay_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface DayComponentDay_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type DayComponentDay_meals_items_item_Recipe_ingredients_unit =
  DayComponentDay_meals_items_item_Recipe_ingredients_unit_Weight
  | DayComponentDay_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: DayComponentDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentDay_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: DayComponentDay_meals_items_item_Recipe_ingredients_item_Recipe_title[];
}

export type DayComponentDay_meals_items_item_Recipe_ingredients_item =
  DayComponentDay_meals_items_item_Recipe_ingredients_item_Food
  | DayComponentDay_meals_items_item_Recipe_ingredients_item_Recipe;

export interface DayComponentDay_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayComponentDay_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayComponentDay_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: DayComponentDay_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayComponentDay_meals_items_item_Recipe_ingredients_unit | null;
  item: DayComponentDay_meals_items_item_Recipe_ingredients_item | null;
}

export interface DayComponentDay_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface DayComponentDay_meals_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: DayComponentDay_meals_items_item_Recipe_author_avatar | null;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayComponentDay_meals_items_item_Recipe_nutrition {
  calories: DayComponentDay_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: DayComponentDay_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: DayComponentDay_meals_items_item_Recipe_nutrition_fats | null;
  proteins: DayComponentDay_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: DayComponentDay_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: DayComponentDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: DayComponentDay_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: DayComponentDay_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: DayComponentDay_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: DayComponentDay_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: DayComponentDay_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: DayComponentDay_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: DayComponentDay_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: DayComponentDay_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: DayComponentDay_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: DayComponentDay_meals_items_item_Recipe_nutrition_galactose | null;
  starch: DayComponentDay_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: DayComponentDay_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: DayComponentDay_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayComponentDay_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: DayComponentDay_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: DayComponentDay_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: DayComponentDay_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: DayComponentDay_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: DayComponentDay_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: DayComponentDay_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: DayComponentDay_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: DayComponentDay_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: DayComponentDay_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: DayComponentDay_meals_items_item_Recipe_nutrition_calcium | null;
  choline: DayComponentDay_meals_items_item_Recipe_nutrition_choline | null;
  copper: DayComponentDay_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: DayComponentDay_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: DayComponentDay_meals_items_item_Recipe_nutrition_folate | null;
  iron: DayComponentDay_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: DayComponentDay_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: DayComponentDay_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: DayComponentDay_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: DayComponentDay_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: DayComponentDay_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: DayComponentDay_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: DayComponentDay_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: DayComponentDay_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: DayComponentDay_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: DayComponentDay_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: DayComponentDay_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: DayComponentDay_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: DayComponentDay_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: DayComponentDay_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: DayComponentDay_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: DayComponentDay_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: DayComponentDay_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: DayComponentDay_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: DayComponentDay_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: DayComponentDay_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: DayComponentDay_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: DayComponentDay_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: DayComponentDay_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: DayComponentDay_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: DayComponentDay_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: DayComponentDay_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: DayComponentDay_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: DayComponentDay_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: DayComponentDay_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: DayComponentDay_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: DayComponentDay_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: DayComponentDay_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: DayComponentDay_meals_items_item_Recipe_nutrition_valine | null;
  arginine: DayComponentDay_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: DayComponentDay_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: DayComponentDay_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: DayComponentDay_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: DayComponentDay_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: DayComponentDay_meals_items_item_Recipe_nutrition_glycine | null;
  proline: DayComponentDay_meals_items_item_Recipe_nutrition_proline | null;
  serine: DayComponentDay_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: DayComponentDay_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface DayComponentDay_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: DayComponentDay_meals_items_item_Recipe_title[];
  servingName: DayComponentDay_meals_items_item_Recipe_servingName[] | null;
  timing: DayComponentDay_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: DayComponentDay_meals_items_item_Recipe_thumbnail | null;
  ingredients: DayComponentDay_meals_items_item_Recipe_ingredients[];
  author: DayComponentDay_meals_items_item_Recipe_author;
  nutrition: DayComponentDay_meals_items_item_Recipe_nutrition | null;
}

export type DayComponentDay_meals_items_item =
  DayComponentDay_meals_items_item_Food
  | DayComponentDay_meals_items_item_Recipe;

export interface DayComponentDay_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayComponentDay_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayComponentDay_meals_items_description[] | null;
  amount: number | null;
  customUnit: DayComponentDay_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayComponentDay_meals_items_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: DayComponentDay_meals_items_item | null;
}

export interface DayComponentDay_meals {
  id: any;
  time: any | null;
  /**
   * if this DayMeal was associated with a Meal, this is its id
   */
  mealId: any | null;
  ate: boolean | null;
  userMeal: DayComponentDay_meals_userMeal;
  items: DayComponentDay_meals_items[];
}

export interface DayComponentDay {
  id: any;
  date: any | null;
  meals: DayComponentDay_meals[];
}
