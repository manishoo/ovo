/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../../../../../../models/global-types'

// ====================================================
// GraphQL fragment: MealItemComponentMealItem
// ====================================================

export interface MealItemComponentMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemComponentMealItem_customUnit_name[];
}

export interface MealItemComponentMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMealItem_unit_Weight_name[];
}

export interface MealItemComponentMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentMealItem_unit_CustomUnit_name[];
}

export type MealItemComponentMealItem_unit =
  MealItemComponentMealItem_unit_Weight
  | MealItemComponentMealItem_unit_CustomUnit;

export interface MealItemComponentMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMealItem_item_Food_weights_name[];
}

export interface MealItemComponentMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentMealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Food_origFoodGroups {
  id: string;
  name: MealItemComponentMealItem_item_Food_origFoodGroups_name[];
}

export interface MealItemComponentMealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Food_nutrition {
  calories: MealItemComponentMealItem_item_Food_nutrition_calories | null;
  totalCarbs: MealItemComponentMealItem_item_Food_nutrition_totalCarbs | null;
  fats: MealItemComponentMealItem_item_Food_nutrition_fats | null;
  proteins: MealItemComponentMealItem_item_Food_nutrition_proteins | null;
  fiber: MealItemComponentMealItem_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemComponentMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemComponentMealItem_item_Food_nutrition_sodium | null;
  cholesterol: MealItemComponentMealItem_item_Food_nutrition_cholesterol | null;
  potassium: MealItemComponentMealItem_item_Food_nutrition_potassium | null;
  sugar: MealItemComponentMealItem_item_Food_nutrition_sugar | null;
  sucrose: MealItemComponentMealItem_item_Food_nutrition_sucrose | null;
  glucose: MealItemComponentMealItem_item_Food_nutrition_glucose | null;
  fructose: MealItemComponentMealItem_item_Food_nutrition_fructose | null;
  lactose: MealItemComponentMealItem_item_Food_nutrition_lactose | null;
  maltose: MealItemComponentMealItem_item_Food_nutrition_maltose | null;
  galactose: MealItemComponentMealItem_item_Food_nutrition_galactose | null;
  starch: MealItemComponentMealItem_item_Food_nutrition_starch | null;
  saturatedFats: MealItemComponentMealItem_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemComponentMealItem_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemComponentMealItem_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemComponentMealItem_item_Food_nutrition_transFats | null;
  omega3: MealItemComponentMealItem_item_Food_nutrition_omega3 | null;
  omega6: MealItemComponentMealItem_item_Food_nutrition_omega6 | null;
  ALA: MealItemComponentMealItem_item_Food_nutrition_ALA | null;
  DHA: MealItemComponentMealItem_item_Food_nutrition_DHA | null;
  EPA: MealItemComponentMealItem_item_Food_nutrition_EPA | null;
  DPA: MealItemComponentMealItem_item_Food_nutrition_DPA | null;
  caffeine: MealItemComponentMealItem_item_Food_nutrition_caffeine | null;
  theobromine: MealItemComponentMealItem_item_Food_nutrition_theobromine | null;
  calcium: MealItemComponentMealItem_item_Food_nutrition_calcium | null;
  choline: MealItemComponentMealItem_item_Food_nutrition_choline | null;
  copper: MealItemComponentMealItem_item_Food_nutrition_copper | null;
  fluoride: MealItemComponentMealItem_item_Food_nutrition_fluoride | null;
  folate: MealItemComponentMealItem_item_Food_nutrition_folate | null;
  iron: MealItemComponentMealItem_item_Food_nutrition_iron | null;
  lycopene: MealItemComponentMealItem_item_Food_nutrition_lycopene | null;
  magnesium: MealItemComponentMealItem_item_Food_nutrition_magnesium | null;
  manganese: MealItemComponentMealItem_item_Food_nutrition_manganese | null;
  niacin: MealItemComponentMealItem_item_Food_nutrition_niacin | null;
  phosphorus: MealItemComponentMealItem_item_Food_nutrition_phosphorus | null;
  retinol: MealItemComponentMealItem_item_Food_nutrition_retinol | null;
  riboflavin: MealItemComponentMealItem_item_Food_nutrition_riboflavin | null;
  selenium: MealItemComponentMealItem_item_Food_nutrition_selenium | null;
  thiamine: MealItemComponentMealItem_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemComponentMealItem_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemComponentMealItem_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemComponentMealItem_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemComponentMealItem_item_Food_nutrition_vitA | null;
  vitAIU: MealItemComponentMealItem_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemComponentMealItem_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemComponentMealItem_item_Food_nutrition_vitB12 | null;
  vitC: MealItemComponentMealItem_item_Food_nutrition_vitC | null;
  vitD: MealItemComponentMealItem_item_Food_nutrition_vitD | null;
  vitD2: MealItemComponentMealItem_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemComponentMealItem_item_Food_nutrition_vitD3 | null;
  vitE: MealItemComponentMealItem_item_Food_nutrition_vitE | null;
  vitK: MealItemComponentMealItem_item_Food_nutrition_vitK | null;
  zinc: MealItemComponentMealItem_item_Food_nutrition_zinc | null;
  tryptophan: MealItemComponentMealItem_item_Food_nutrition_tryptophan | null;
  threonine: MealItemComponentMealItem_item_Food_nutrition_threonine | null;
  isoleucine: MealItemComponentMealItem_item_Food_nutrition_isoleucine | null;
  leucine: MealItemComponentMealItem_item_Food_nutrition_leucine | null;
  lysine: MealItemComponentMealItem_item_Food_nutrition_lysine | null;
  methionine: MealItemComponentMealItem_item_Food_nutrition_methionine | null;
  cystine: MealItemComponentMealItem_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemComponentMealItem_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemComponentMealItem_item_Food_nutrition_tyrosine | null;
  valine: MealItemComponentMealItem_item_Food_nutrition_valine | null;
  arginine: MealItemComponentMealItem_item_Food_nutrition_arginine | null;
  histidine: MealItemComponentMealItem_item_Food_nutrition_histidine | null;
  alanine: MealItemComponentMealItem_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemComponentMealItem_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemComponentMealItem_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemComponentMealItem_item_Food_nutrition_glycine | null;
  proline: MealItemComponentMealItem_item_Food_nutrition_proline | null;
  serine: MealItemComponentMealItem_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemComponentMealItem_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemComponentMealItem_item_Food {
  id: string;
  name: MealItemComponentMealItem_item_Food_name[];
  description: MealItemComponentMealItem_item_Food_description[] | null;
  weights: MealItemComponentMealItem_item_Food_weights[];
  thumbnail: MealItemComponentMealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealItemComponentMealItem_item_Food_origFoodGroups[][];
  nutrition: MealItemComponentMealItem_item_Food_nutrition | null;
}

export interface MealItemComponentMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealItemComponentMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemComponentMealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentMealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemComponentMealItem_item_Recipe_ingredients_unit =
  MealItemComponentMealItem_item_Recipe_ingredients_unit_Weight
  | MealItemComponentMealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_name[];
  description: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_weights[];
  thumbnail: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: MealItemComponentMealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentMealItem_item_Recipe_ingredients_item_Recipe_title[];
}

export type MealItemComponentMealItem_item_Recipe_ingredients_item =
  MealItemComponentMealItem_item_Recipe_ingredients_item_Food
  | MealItemComponentMealItem_item_Recipe_ingredients_item_Recipe;

export interface MealItemComponentMealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentMealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentMealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentMealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentMealItem_item_Recipe_ingredients_unit | null;
  item: MealItemComponentMealItem_item_Recipe_ingredients_item | null;
}

export interface MealItemComponentMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemComponentMealItem_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealItemComponentMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMealItem_item_Recipe_nutrition {
  calories: MealItemComponentMealItem_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemComponentMealItem_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemComponentMealItem_item_Recipe_nutrition_fats | null;
  proteins: MealItemComponentMealItem_item_Recipe_nutrition_proteins | null;
  fiber: MealItemComponentMealItem_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemComponentMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemComponentMealItem_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemComponentMealItem_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemComponentMealItem_item_Recipe_nutrition_potassium | null;
  sugar: MealItemComponentMealItem_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemComponentMealItem_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemComponentMealItem_item_Recipe_nutrition_glucose | null;
  fructose: MealItemComponentMealItem_item_Recipe_nutrition_fructose | null;
  lactose: MealItemComponentMealItem_item_Recipe_nutrition_lactose | null;
  maltose: MealItemComponentMealItem_item_Recipe_nutrition_maltose | null;
  galactose: MealItemComponentMealItem_item_Recipe_nutrition_galactose | null;
  starch: MealItemComponentMealItem_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemComponentMealItem_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemComponentMealItem_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemComponentMealItem_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemComponentMealItem_item_Recipe_nutrition_transFats | null;
  omega3: MealItemComponentMealItem_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemComponentMealItem_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemComponentMealItem_item_Recipe_nutrition_ALA | null;
  DHA: MealItemComponentMealItem_item_Recipe_nutrition_DHA | null;
  EPA: MealItemComponentMealItem_item_Recipe_nutrition_EPA | null;
  DPA: MealItemComponentMealItem_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemComponentMealItem_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemComponentMealItem_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemComponentMealItem_item_Recipe_nutrition_calcium | null;
  choline: MealItemComponentMealItem_item_Recipe_nutrition_choline | null;
  copper: MealItemComponentMealItem_item_Recipe_nutrition_copper | null;
  fluoride: MealItemComponentMealItem_item_Recipe_nutrition_fluoride | null;
  folate: MealItemComponentMealItem_item_Recipe_nutrition_folate | null;
  iron: MealItemComponentMealItem_item_Recipe_nutrition_iron | null;
  lycopene: MealItemComponentMealItem_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemComponentMealItem_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemComponentMealItem_item_Recipe_nutrition_manganese | null;
  niacin: MealItemComponentMealItem_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemComponentMealItem_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemComponentMealItem_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemComponentMealItem_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemComponentMealItem_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemComponentMealItem_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemComponentMealItem_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemComponentMealItem_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemComponentMealItem_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemComponentMealItem_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemComponentMealItem_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemComponentMealItem_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemComponentMealItem_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemComponentMealItem_item_Recipe_nutrition_vitC | null;
  vitD: MealItemComponentMealItem_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemComponentMealItem_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemComponentMealItem_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemComponentMealItem_item_Recipe_nutrition_vitE | null;
  vitK: MealItemComponentMealItem_item_Recipe_nutrition_vitK | null;
  zinc: MealItemComponentMealItem_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemComponentMealItem_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemComponentMealItem_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemComponentMealItem_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemComponentMealItem_item_Recipe_nutrition_leucine | null;
  lysine: MealItemComponentMealItem_item_Recipe_nutrition_lysine | null;
  methionine: MealItemComponentMealItem_item_Recipe_nutrition_methionine | null;
  cystine: MealItemComponentMealItem_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemComponentMealItem_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemComponentMealItem_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemComponentMealItem_item_Recipe_nutrition_valine | null;
  arginine: MealItemComponentMealItem_item_Recipe_nutrition_arginine | null;
  histidine: MealItemComponentMealItem_item_Recipe_nutrition_histidine | null;
  alanine: MealItemComponentMealItem_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemComponentMealItem_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemComponentMealItem_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemComponentMealItem_item_Recipe_nutrition_glycine | null;
  proline: MealItemComponentMealItem_item_Recipe_nutrition_proline | null;
  serine: MealItemComponentMealItem_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemComponentMealItem_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemComponentMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentMealItem_item_Recipe_title[];
  servingName: MealItemComponentMealItem_item_Recipe_servingName[] | null;
  timing: MealItemComponentMealItem_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemComponentMealItem_item_Recipe_thumbnail | null;
  ingredients: MealItemComponentMealItem_item_Recipe_ingredients[];
  author: MealItemComponentMealItem_item_Recipe_author;
  nutrition: MealItemComponentMealItem_item_Recipe_nutrition | null;
}

export type MealItemComponentMealItem_item =
  MealItemComponentMealItem_item_Food
  | MealItemComponentMealItem_item_Recipe;

export interface MealItemComponentMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentMealItem_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentMealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentMealItem_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: MealItemComponentMealItem_item | null;
}
