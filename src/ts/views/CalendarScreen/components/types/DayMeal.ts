/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: DayMeal
// ====================================================

export interface DayMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_customUnit {
  gramWeight: number | null;
  name: DayMeal_items_customUnit_name[];
}

export interface DayMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayMeal_items_unit_Weight_name[];
}

export interface DayMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: DayMeal_items_unit_CustomUnit_name[];
}

export type DayMeal_items_unit = DayMeal_items_unit_Weight | DayMeal_items_unit_CustomUnit;

export interface DayMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayMeal_items_item_Food_weights_name[];
}

export interface DayMeal_items_item_Food_image {
  url: string;
}

export interface DayMeal_items_item_Food_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition {
  calories: DayMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: DayMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: DayMeal_items_item_Food_nutrition_fats | null;
  proteins: DayMeal_items_item_Food_nutrition_proteins | null;
  fiber: DayMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: DayMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: DayMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: DayMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: DayMeal_items_item_Food_nutrition_potassium | null;
  sugar: DayMeal_items_item_Food_nutrition_sugar | null;
  sucrose: DayMeal_items_item_Food_nutrition_sucrose | null;
  glucose: DayMeal_items_item_Food_nutrition_glucose | null;
  fructose: DayMeal_items_item_Food_nutrition_fructose | null;
  lactose: DayMeal_items_item_Food_nutrition_lactose | null;
  maltose: DayMeal_items_item_Food_nutrition_maltose | null;
  galactose: DayMeal_items_item_Food_nutrition_galactose | null;
  starch: DayMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: DayMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: DayMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: DayMeal_items_item_Food_nutrition_transFats | null;
  omega3: DayMeal_items_item_Food_nutrition_omega3 | null;
  omega6: DayMeal_items_item_Food_nutrition_omega6 | null;
  ALA: DayMeal_items_item_Food_nutrition_ALA | null;
  DHA: DayMeal_items_item_Food_nutrition_DHA | null;
  EPA: DayMeal_items_item_Food_nutrition_EPA | null;
  DPA: DayMeal_items_item_Food_nutrition_DPA | null;
  caffeine: DayMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: DayMeal_items_item_Food_nutrition_theobromine | null;
  calcium: DayMeal_items_item_Food_nutrition_calcium | null;
  choline: DayMeal_items_item_Food_nutrition_choline | null;
  copper: DayMeal_items_item_Food_nutrition_copper | null;
  fluoride: DayMeal_items_item_Food_nutrition_fluoride | null;
  folate: DayMeal_items_item_Food_nutrition_folate | null;
  iron: DayMeal_items_item_Food_nutrition_iron | null;
  lycopene: DayMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: DayMeal_items_item_Food_nutrition_magnesium | null;
  manganese: DayMeal_items_item_Food_nutrition_manganese | null;
  niacin: DayMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: DayMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: DayMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: DayMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: DayMeal_items_item_Food_nutrition_selenium | null;
  thiamine: DayMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: DayMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: DayMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: DayMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: DayMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: DayMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: DayMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: DayMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: DayMeal_items_item_Food_nutrition_vitC | null;
  vitD: DayMeal_items_item_Food_nutrition_vitD | null;
  vitD2: DayMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: DayMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: DayMeal_items_item_Food_nutrition_vitE | null;
  vitK: DayMeal_items_item_Food_nutrition_vitK | null;
  zinc: DayMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: DayMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: DayMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: DayMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: DayMeal_items_item_Food_nutrition_leucine | null;
  lysine: DayMeal_items_item_Food_nutrition_lysine | null;
  methionine: DayMeal_items_item_Food_nutrition_methionine | null;
  cystine: DayMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: DayMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: DayMeal_items_item_Food_nutrition_tyrosine | null;
  valine: DayMeal_items_item_Food_nutrition_valine | null;
  arginine: DayMeal_items_item_Food_nutrition_arginine | null;
  histidine: DayMeal_items_item_Food_nutrition_histidine | null;
  alanine: DayMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: DayMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: DayMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: DayMeal_items_item_Food_nutrition_glycine | null;
  proline: DayMeal_items_item_Food_nutrition_proline | null;
  serine: DayMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: DayMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface DayMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_origFoodGroups {
  id: string;
  name: DayMeal_items_item_Food_origFoodGroups_name[];
}

export interface DayMeal_items_item_Food {
  id: string;
  name: DayMeal_items_item_Food_name[];
  description: DayMeal_items_item_Food_description[] | null;
  weights: DayMeal_items_item_Food_weights[];
  image: DayMeal_items_item_Food_image | null;
  thumbnail: DayMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: DayMeal_items_item_Food_nutrition;
  origFoodGroups: DayMeal_items_item_Food_origFoodGroups[][];
}

export interface DayMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_image {
  url: string;
}

export interface DayMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface DayMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: DayMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: DayMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type DayMeal_items_item_Recipe_ingredients_unit = DayMeal_items_item_Recipe_ingredients_unit_Weight | DayMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface DayMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: DayMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: DayMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: DayMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: DayMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: DayMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type DayMeal_items_item_Recipe_ingredients_item = DayMeal_items_item_Recipe_ingredients_item_Food | DayMeal_items_item_Recipe_ingredients_item_Recipe;

export interface DayMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: DayMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayMeal_items_item_Recipe_ingredients_unit | null;
  item: DayMeal_items_item_Recipe_ingredients_item | null;
}

export interface DayMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface DayMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: DayMeal_items_item_Recipe_author_avatar | null;
}

export interface DayMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition {
  calories: DayMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: DayMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: DayMeal_items_item_Recipe_nutrition_fats | null;
  proteins: DayMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: DayMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: DayMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: DayMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: DayMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: DayMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: DayMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: DayMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: DayMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: DayMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: DayMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: DayMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: DayMeal_items_item_Recipe_nutrition_galactose | null;
  starch: DayMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: DayMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: DayMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: DayMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: DayMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: DayMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: DayMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: DayMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: DayMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: DayMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: DayMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: DayMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: DayMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: DayMeal_items_item_Recipe_nutrition_calcium | null;
  choline: DayMeal_items_item_Recipe_nutrition_choline | null;
  copper: DayMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: DayMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: DayMeal_items_item_Recipe_nutrition_folate | null;
  iron: DayMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: DayMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: DayMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: DayMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: DayMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: DayMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: DayMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: DayMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: DayMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: DayMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: DayMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: DayMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: DayMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: DayMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: DayMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: DayMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: DayMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: DayMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: DayMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: DayMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: DayMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: DayMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: DayMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: DayMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: DayMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: DayMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: DayMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: DayMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: DayMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: DayMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: DayMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: DayMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: DayMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: DayMeal_items_item_Recipe_nutrition_valine | null;
  arginine: DayMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: DayMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: DayMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: DayMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: DayMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: DayMeal_items_item_Recipe_nutrition_glycine | null;
  proline: DayMeal_items_item_Recipe_nutrition_proline | null;
  serine: DayMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: DayMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface DayMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: DayMeal_items_item_Recipe_title[];
  image: DayMeal_items_item_Recipe_image | null;
  timing: DayMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: DayMeal_items_item_Recipe_thumbnail | null;
  ingredients: DayMeal_items_item_Recipe_ingredients[];
  author: DayMeal_items_item_Recipe_author;
  nutrition: DayMeal_items_item_Recipe_nutrition;
}

export type DayMeal_items_item = DayMeal_items_item_Food | DayMeal_items_item_Recipe;

export interface DayMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayMeal_items_description[] | null;
  amount: number | null;
  customUnit: DayMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayMeal_items_unit | null;
  isOptional: boolean | null;
  item: DayMeal_items_item | null;
}

export interface DayMeal {
  id: any;
  userMeal: DayMeal_userMeal;
  time: any | null;
  items: DayMeal_items[];
}
