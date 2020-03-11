/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  LanguageCode,
  MealAvailableTime,
  MealSize,
  NutritionProfileMode,
  RecipeStatus
} from './../../../../models/global-types'

// ====================================================
// GraphQL fragment: Day
// ====================================================

export interface Day_nutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Day_nutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Day_nutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface Day_nutritionProfile {
  id: any;
  calories: number;
  carbs: Day_nutritionProfile_carbs;
  fat: Day_nutritionProfile_fat;
  protein: Day_nutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface Day_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface Day_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_customUnit {
  gramWeight: number | null;
  name: Day_meals_items_customUnit_name[];
}

export interface Day_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_unit_Weight_name[];
}

export interface Day_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: Day_meals_items_unit_CustomUnit_name[];
}

export type Day_meals_items_unit = Day_meals_items_unit_Weight | Day_meals_items_unit_CustomUnit;

export interface Day_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Food_weights_name[];
}

export interface Day_meals_items_item_Food_image {
  url: string;
}

export interface Day_meals_items_item_Food_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition {
  calories: Day_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: Day_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: Day_meals_items_item_Food_nutrition_fats | null;
  proteins: Day_meals_items_item_Food_nutrition_proteins | null;
  fiber: Day_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Day_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Day_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: Day_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: Day_meals_items_item_Food_nutrition_potassium | null;
  sugar: Day_meals_items_item_Food_nutrition_sugar | null;
  sucrose: Day_meals_items_item_Food_nutrition_sucrose | null;
  glucose: Day_meals_items_item_Food_nutrition_glucose | null;
  fructose: Day_meals_items_item_Food_nutrition_fructose | null;
  lactose: Day_meals_items_item_Food_nutrition_lactose | null;
  maltose: Day_meals_items_item_Food_nutrition_maltose | null;
  galactose: Day_meals_items_item_Food_nutrition_galactose | null;
  starch: Day_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: Day_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Day_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Day_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Day_meals_items_item_Food_nutrition_transFats | null;
  omega3: Day_meals_items_item_Food_nutrition_omega3 | null;
  omega6: Day_meals_items_item_Food_nutrition_omega6 | null;
  ALA: Day_meals_items_item_Food_nutrition_ALA | null;
  DHA: Day_meals_items_item_Food_nutrition_DHA | null;
  EPA: Day_meals_items_item_Food_nutrition_EPA | null;
  DPA: Day_meals_items_item_Food_nutrition_DPA | null;
  caffeine: Day_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: Day_meals_items_item_Food_nutrition_theobromine | null;
  calcium: Day_meals_items_item_Food_nutrition_calcium | null;
  choline: Day_meals_items_item_Food_nutrition_choline | null;
  copper: Day_meals_items_item_Food_nutrition_copper | null;
  fluoride: Day_meals_items_item_Food_nutrition_fluoride | null;
  folate: Day_meals_items_item_Food_nutrition_folate | null;
  iron: Day_meals_items_item_Food_nutrition_iron | null;
  lycopene: Day_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: Day_meals_items_item_Food_nutrition_magnesium | null;
  manganese: Day_meals_items_item_Food_nutrition_manganese | null;
  niacin: Day_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: Day_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: Day_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: Day_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: Day_meals_items_item_Food_nutrition_selenium | null;
  thiamine: Day_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: Day_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Day_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Day_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: Day_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: Day_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: Day_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: Day_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: Day_meals_items_item_Food_nutrition_vitC | null;
  vitD: Day_meals_items_item_Food_nutrition_vitD | null;
  vitD2: Day_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: Day_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: Day_meals_items_item_Food_nutrition_vitE | null;
  vitK: Day_meals_items_item_Food_nutrition_vitK | null;
  zinc: Day_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: Day_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: Day_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: Day_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: Day_meals_items_item_Food_nutrition_leucine | null;
  lysine: Day_meals_items_item_Food_nutrition_lysine | null;
  methionine: Day_meals_items_item_Food_nutrition_methionine | null;
  cystine: Day_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: Day_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: Day_meals_items_item_Food_nutrition_tyrosine | null;
  valine: Day_meals_items_item_Food_nutrition_valine | null;
  arginine: Day_meals_items_item_Food_nutrition_arginine | null;
  histidine: Day_meals_items_item_Food_nutrition_histidine | null;
  alanine: Day_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: Day_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Day_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: Day_meals_items_item_Food_nutrition_glycine | null;
  proline: Day_meals_items_item_Food_nutrition_proline | null;
  serine: Day_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: Day_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface Day_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_origFoodGroups {
  id: string;
  name: Day_meals_items_item_Food_origFoodGroups_name[];
}

export interface Day_meals_items_item_Food {
  id: string;
  name: Day_meals_items_item_Food_name[];
  description: Day_meals_items_item_Food_description[] | null;
  weights: Day_meals_items_item_Food_weights[];
  image: Day_meals_items_item_Food_image | null;
  thumbnail: Day_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Day_meals_items_item_Food_nutrition;
  origFoodGroups: Day_meals_items_item_Food_origFoodGroups[][];
}

export interface Day_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_image {
  url: string;
}

export interface Day_meals_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface Day_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Day_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Day_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type Day_meals_items_item_Recipe_ingredients_unit = Day_meals_items_item_Recipe_ingredients_unit_Weight | Day_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface Day_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: Day_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: Day_meals_items_item_Recipe_ingredients_item_Food_weights[];
  image: Day_meals_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: Day_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Day_meals_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type Day_meals_items_item_Recipe_ingredients_item = Day_meals_items_item_Recipe_ingredients_item_Food | Day_meals_items_item_Recipe_ingredients_item_Recipe;

export interface Day_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Day_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Day_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Day_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Day_meals_items_item_Recipe_ingredients_unit | null;
  item: Day_meals_items_item_Recipe_ingredients_item | null;
}

export interface Day_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface Day_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: Day_meals_items_item_Recipe_author_avatar | null;
}

export interface Day_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition {
  calories: Day_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: Day_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: Day_meals_items_item_Recipe_nutrition_fats | null;
  proteins: Day_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: Day_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: Day_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: Day_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: Day_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: Day_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: Day_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: Day_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: Day_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: Day_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: Day_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: Day_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: Day_meals_items_item_Recipe_nutrition_galactose | null;
  starch: Day_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: Day_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: Day_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Day_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: Day_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: Day_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: Day_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: Day_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: Day_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: Day_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: Day_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: Day_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: Day_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: Day_meals_items_item_Recipe_nutrition_calcium | null;
  choline: Day_meals_items_item_Recipe_nutrition_choline | null;
  copper: Day_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: Day_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: Day_meals_items_item_Recipe_nutrition_folate | null;
  iron: Day_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: Day_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: Day_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: Day_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: Day_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: Day_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: Day_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: Day_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: Day_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: Day_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: Day_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: Day_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: Day_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: Day_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: Day_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: Day_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: Day_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: Day_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: Day_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: Day_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: Day_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: Day_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: Day_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: Day_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: Day_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: Day_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: Day_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: Day_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: Day_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: Day_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: Day_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: Day_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: Day_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: Day_meals_items_item_Recipe_nutrition_valine | null;
  arginine: Day_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: Day_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: Day_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: Day_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: Day_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: Day_meals_items_item_Recipe_nutrition_glycine | null;
  proline: Day_meals_items_item_Recipe_nutrition_proline | null;
  serine: Day_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: Day_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface Day_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: Day_meals_items_item_Recipe_title[];
  image: Day_meals_items_item_Recipe_image | null;
  timing: Day_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Day_meals_items_item_Recipe_thumbnail | null;
  ingredients: Day_meals_items_item_Recipe_ingredients[];
  author: Day_meals_items_item_Recipe_author;
  nutrition: Day_meals_items_item_Recipe_nutrition;
}

export type Day_meals_items_item = Day_meals_items_item_Food | Day_meals_items_item_Recipe;

export interface Day_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Day_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Day_meals_items_description[] | null;
  amount: number | null;
  customUnit: Day_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Day_meals_items_unit | null;
  isOptional: boolean | null;
  item: Day_meals_items_item | null;
}

export interface Day_meals {
  id: any;
  userMeal: Day_meals_userMeal;
  time: any | null;
  ate: boolean | null;
  items: Day_meals_items[];
}

export interface Day {
  id: string;
  date: any;
  nutritionProfile: Day_nutritionProfile;
  meals: Day_meals[];
}
