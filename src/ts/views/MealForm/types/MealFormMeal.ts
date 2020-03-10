/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: MealFormMeal
// ====================================================

export interface MealFormMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_customUnit_name[];
}

export interface MealFormMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_unit_Weight_name[];
}

export interface MealFormMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_unit_CustomUnit_name[];
}

export type MealFormMeal_items_unit = MealFormMeal_items_unit_Weight | MealFormMeal_items_unit_CustomUnit;

export interface MealFormMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_item_Food_weights_name[];
}

export interface MealFormMeal_items_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition {
  calories: MealFormMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_item_Food_nutrition_fats | null;
  proteins: MealFormMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealFormMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealFormMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealFormMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealFormMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealFormMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealFormMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealFormMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealFormMeal_items_item_Food_nutrition_galactose | null;
  starch: MealFormMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealFormMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealFormMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealFormMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealFormMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealFormMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealFormMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealFormMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealFormMeal_items_item_Food_nutrition_calcium | null;
  choline: MealFormMeal_items_item_Food_nutrition_choline | null;
  copper: MealFormMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealFormMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealFormMeal_items_item_Food_nutrition_folate | null;
  iron: MealFormMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealFormMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealFormMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealFormMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealFormMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealFormMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealFormMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealFormMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealFormMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealFormMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealFormMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealFormMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealFormMeal_items_item_Food_nutrition_valine | null;
  arginine: MealFormMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealFormMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealFormMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_item_Food_nutrition_glycine | null;
  proline: MealFormMeal_items_item_Food_nutrition_proline | null;
  serine: MealFormMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_item_Food {
  id: string;
  name: MealFormMeal_items_item_Food_name[];
  description: MealFormMeal_items_item_Food_description[] | null;
  weights: MealFormMeal_items_item_Food_weights[];
  image: MealFormMeal_items_item_Food_image | null;
  thumbnail: MealFormMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormMeal_items_item_Food_nutrition;
  origFoodGroups: MealFormMeal_items_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_image {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormMeal_items_item_Recipe_ingredients_unit = MealFormMeal_items_item_Recipe_ingredients_unit_Weight | MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormMeal_items_item_Recipe_ingredients_item = MealFormMeal_items_item_Recipe_ingredients_item_Food | MealFormMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition {
  calories: MealFormMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealFormMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealFormMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealFormMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealFormMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealFormMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealFormMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealFormMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealFormMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealFormMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealFormMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealFormMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealFormMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealFormMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealFormMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealFormMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealFormMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealFormMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealFormMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealFormMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealFormMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealFormMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealFormMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealFormMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealFormMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealFormMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealFormMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealFormMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealFormMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealFormMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealFormMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_item_Recipe_title[];
  image: MealFormMeal_items_item_Recipe_image | null;
  timing: MealFormMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormMeal_items_item_Recipe_ingredients[];
  author: MealFormMeal_items_item_Recipe_author;
  nutrition: MealFormMeal_items_item_Recipe_nutrition;
}

export type MealFormMeal_items_item = MealFormMeal_items_item_Food | MealFormMeal_items_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormMeal_items_alternativeMealItems_unit = MealFormMeal_items_alternativeMealItems_unit_Weight | MealFormMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Food_nutrition;
  origFoodGroups: MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormMeal_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition;
}

export type MealFormMeal_items_alternativeMealItems_item = MealFormMeal_items_alternativeMealItems_item_Food | MealFormMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems {
  id: any;
  amount: number | null;
  customUnit: MealFormMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_alternativeMealItems_unit | null;
  item: MealFormMeal_items_alternativeMealItems_item | null;
}

export interface MealFormMeal_items {
  id: any;
  amount: number | null;
  customUnit: MealFormMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_unit | null;
  item: MealFormMeal_items_item | null;
  alternativeMealItems: MealFormMeal_items_alternativeMealItems[];
}

export interface MealFormMeal_author_avatar {
  url: string;
}

export interface MealFormMeal_author {
  id: string;
  username: string;
  avatar: MealFormMeal_author_avatar | null;
}

export interface MealFormMeal_timing {
  totalTime: number | null;
}

export interface MealFormMeal {
  id: string;
  name: MealFormMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormMeal_items[];
  instanceOf: any | null;
  author: MealFormMeal_author;
  timing: MealFormMeal_timing;
}
