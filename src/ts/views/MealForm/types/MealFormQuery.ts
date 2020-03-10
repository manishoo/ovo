/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: MealFormQuery
// ====================================================

export interface MealFormQuery_meal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_customUnit_name[];
}

export interface MealFormQuery_meal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_unit = MealFormQuery_meal_items_unit_Weight | MealFormQuery_meal_items_unit_CustomUnit;

export interface MealFormQuery_meal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition {
  calories: MealFormQuery_meal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_item_Food_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_item_Food_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_item_Food_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_item_Food_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_item_Food_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_item_Food_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_item_Food_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_item_Food_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_item_Food_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_item_Food_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_item_Food_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_item_Food_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_item_Food_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_item_Food_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_item_Food_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_item_Food_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_item_Food_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_item_Food_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_item_Food_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_item_Food_nutrition_choline | null;
  copper: MealFormQuery_meal_items_item_Food_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_item_Food_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_item_Food_nutrition_folate | null;
  iron: MealFormQuery_meal_items_item_Food_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_item_Food_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_item_Food_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_item_Food_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_item_Food_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_item_Food_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_item_Food_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_item_Food_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_item_Food_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_item_Food_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_item_Food_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_item_Food_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_item_Food_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_item_Food_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_item_Food_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_item_Food_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_item_Food_nutrition_proline | null;
  serine: MealFormQuery_meal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_item_Food {
  id: string;
  name: MealFormQuery_meal_items_item_Food_name[];
  description: MealFormQuery_meal_items_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_item_Food_weights[];
  image: MealFormQuery_meal_items_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormQuery_meal_items_item_Food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormQuery_meal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_item_Recipe_ingredients_unit = MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight | MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormQuery_meal_items_item_Recipe_ingredients_item = MealFormQuery_meal_items_item_Recipe_ingredients_item_Food | MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormQuery_meal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_item_Recipe_ingredients_unit | null;
  item: MealFormQuery_meal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormQuery_meal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_item_Recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_item_Recipe_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_item_Recipe_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_item_Recipe_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_item_Recipe_nutrition_choline | null;
  copper: MealFormQuery_meal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_item_Recipe_nutrition_folate | null;
  iron: MealFormQuery_meal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_item_Recipe_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_item_Recipe_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_item_Recipe_nutrition_proline | null;
  serine: MealFormQuery_meal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_item_Recipe_title[];
  image: MealFormQuery_meal_items_item_Recipe_image | null;
  timing: MealFormQuery_meal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_item_Recipe_ingredients[];
  author: MealFormQuery_meal_items_item_Recipe_author;
  nutrition: MealFormQuery_meal_items_item_Recipe_nutrition;
}

export type MealFormQuery_meal_items_item = MealFormQuery_meal_items_item_Food | MealFormQuery_meal_items_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_alternativeMealItems_unit = MealFormQuery_meal_items_alternativeMealItems_unit_Weight | MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition;
}

export type MealFormQuery_meal_items_alternativeMealItems_item = MealFormQuery_meal_items_alternativeMealItems_item_Food | MealFormQuery_meal_items_alternativeMealItems_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems {
  id: any;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_alternativeMealItems_unit | null;
  item: MealFormQuery_meal_items_alternativeMealItems_item | null;
}

export interface MealFormQuery_meal_items {
  id: any;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_unit | null;
  item: MealFormQuery_meal_items_item | null;
  alternativeMealItems: MealFormQuery_meal_items_alternativeMealItems[];
}

export interface MealFormQuery_meal_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_author_avatar | null;
}

export interface MealFormQuery_meal_timing {
  totalTime: number | null;
}

export interface MealFormQuery_meal {
  id: string;
  name: MealFormQuery_meal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormQuery_meal_items[];
  instanceOf: any | null;
  author: MealFormQuery_meal_author;
  timing: MealFormQuery_meal_timing;
}

export interface MealFormQuery {
  meal: MealFormQuery_meal;
}

export interface MealFormQueryVariables {
  id: any;
}
