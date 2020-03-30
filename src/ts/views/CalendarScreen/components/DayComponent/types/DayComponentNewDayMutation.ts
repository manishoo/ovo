/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DayInput, LanguageCode, MealAvailableTime, MealSize, RecipeStatus } from './../../../../../models/global-types'

// ====================================================
// GraphQL mutation operation: DayComponentNewDayMutation
// ====================================================

export interface DayComponentNewDayMutation_newDay_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_customUnit {
  gramWeight: number | null;
  name: DayComponentNewDayMutation_newDay_meals_items_customUnit_name[];
}

export interface DayComponentNewDayMutation_newDay_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentNewDayMutation_newDay_meals_items_unit_Weight_name[];
}

export interface DayComponentNewDayMutation_newDay_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: DayComponentNewDayMutation_newDay_meals_items_unit_CustomUnit_name[];
}

export type DayComponentNewDayMutation_newDay_meals_items_unit =
  DayComponentNewDayMutation_newDay_meals_items_unit_Weight
  | DayComponentNewDayMutation_newDay_meals_items_unit_CustomUnit;

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentNewDayMutation_newDay_meals_items_item_Food_weights_name[];
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_thumbnail {
  url: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition {
  calories: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fats | null;
  proteins: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_proteins | null;
  fiber: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_potassium | null;
  sugar: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sugar | null;
  sucrose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_sucrose | null;
  glucose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glucose | null;
  fructose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fructose | null;
  lactose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lactose | null;
  maltose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_maltose | null;
  galactose: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_galactose | null;
  starch: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_transFats | null;
  omega3: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_omega3 | null;
  omega6: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_omega6 | null;
  ALA: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_ALA | null;
  DHA: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_DHA | null;
  EPA: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_EPA | null;
  DPA: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_DPA | null;
  caffeine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_theobromine | null;
  calcium: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_calcium | null;
  choline: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_choline | null;
  copper: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_copper | null;
  fluoride: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_fluoride | null;
  folate: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_folate | null;
  iron: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_iron | null;
  lycopene: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_magnesium | null;
  manganese: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_manganese | null;
  niacin: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_selenium | null;
  thiamine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitC | null;
  vitD: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD | null;
  vitD2: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitE | null;
  vitK: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_vitK | null;
  zinc: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_leucine | null;
  lysine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_lysine | null;
  methionine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_methionine | null;
  cystine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_tyrosine | null;
  valine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_valine | null;
  arginine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_arginine | null;
  histidine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_histidine | null;
  alanine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_glycine | null;
  proline: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_proline | null;
  serine: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Food {
  id: string;
  name: DayComponentNewDayMutation_newDay_meals_items_item_Food_name[];
  description: DayComponentNewDayMutation_newDay_meals_items_item_Food_description[] | null;
  weights: DayComponentNewDayMutation_newDay_meals_items_item_Food_weights[];
  thumbnail: DayComponentNewDayMutation_newDay_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: DayComponentNewDayMutation_newDay_meals_items_item_Food_nutrition;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_timing {
  totalTime: number | null;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_author_avatar | null;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition {
  calories: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fats | null;
  proteins: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_galactose | null;
  starch: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_calcium | null;
  choline: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_choline | null;
  copper: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_folate | null;
  iron: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_valine | null;
  arginine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_glycine | null;
  proline: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_proline | null;
  serine: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface DayComponentNewDayMutation_newDay_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_title[];
  timing: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_thumbnail | null;
  author: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_author;
  nutrition: DayComponentNewDayMutation_newDay_meals_items_item_Recipe_nutrition;
}

export type DayComponentNewDayMutation_newDay_meals_items_item =
  DayComponentNewDayMutation_newDay_meals_items_item_Food
  | DayComponentNewDayMutation_newDay_meals_items_item_Recipe;

export interface DayComponentNewDayMutation_newDay_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayComponentNewDayMutation_newDay_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayComponentNewDayMutation_newDay_meals_items_description[] | null;
  amount: number | null;
  customUnit: DayComponentNewDayMutation_newDay_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayComponentNewDayMutation_newDay_meals_items_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: DayComponentNewDayMutation_newDay_meals_items_item | null;
}

export interface DayComponentNewDayMutation_newDay_meals {
  id: any;
  time: any | null;
  /**
   * if this DayMeal was associated with a Meal, this is its id
   */
  mealId: any | null;
  ate: boolean | null;
  userMeal: DayComponentNewDayMutation_newDay_meals_userMeal;
  items: DayComponentNewDayMutation_newDay_meals_items[];
}

export interface DayComponentNewDayMutation_newDay {
  id: any;
  date: any;
  meals: DayComponentNewDayMutation_newDay_meals[];
}

export interface DayComponentNewDayMutation {
  newDay: DayComponentNewDayMutation_newDay;
}

export interface DayComponentNewDayMutationVariables {
  day: DayInput;
  generate?: boolean | null;
}
