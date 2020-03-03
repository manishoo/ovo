/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../../../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItemGridIngredient
// ====================================================

export interface MealItemGridIngredient_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_customUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_customUnit_name[];
}

export interface MealItemGridIngredient_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_unit_Weight_name[];
}

export interface MealItemGridIngredient_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_unit_CustomUnit_name[];
}

export type MealItemGridIngredient_unit = MealItemGridIngredient_unit_Weight | MealItemGridIngredient_unit_CustomUnit;

export interface MealItemGridIngredient_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Food_weights_name[];
}

export interface MealItemGridIngredient_item_Food_image {
  url: string;
}

export interface MealItemGridIngredient_item_Food_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition {
  calories: MealItemGridIngredient_item_Food_nutrition_calories | null;
  totalCarbs: MealItemGridIngredient_item_Food_nutrition_totalCarbs | null;
  fats: MealItemGridIngredient_item_Food_nutrition_fats | null;
  proteins: MealItemGridIngredient_item_Food_nutrition_proteins | null;
  fiber: MealItemGridIngredient_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemGridIngredient_item_Food_nutrition_sodium | null;
  cholesterol: MealItemGridIngredient_item_Food_nutrition_cholesterol | null;
  potassium: MealItemGridIngredient_item_Food_nutrition_potassium | null;
  sugar: MealItemGridIngredient_item_Food_nutrition_sugar | null;
  sucrose: MealItemGridIngredient_item_Food_nutrition_sucrose | null;
  glucose: MealItemGridIngredient_item_Food_nutrition_glucose | null;
  fructose: MealItemGridIngredient_item_Food_nutrition_fructose | null;
  lactose: MealItemGridIngredient_item_Food_nutrition_lactose | null;
  maltose: MealItemGridIngredient_item_Food_nutrition_maltose | null;
  galactose: MealItemGridIngredient_item_Food_nutrition_galactose | null;
  starch: MealItemGridIngredient_item_Food_nutrition_starch | null;
  saturatedFats: MealItemGridIngredient_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemGridIngredient_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemGridIngredient_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemGridIngredient_item_Food_nutrition_transFats | null;
  omega3: MealItemGridIngredient_item_Food_nutrition_omega3 | null;
  omega6: MealItemGridIngredient_item_Food_nutrition_omega6 | null;
  ALA: MealItemGridIngredient_item_Food_nutrition_ALA | null;
  DHA: MealItemGridIngredient_item_Food_nutrition_DHA | null;
  EPA: MealItemGridIngredient_item_Food_nutrition_EPA | null;
  DPA: MealItemGridIngredient_item_Food_nutrition_DPA | null;
  caffeine: MealItemGridIngredient_item_Food_nutrition_caffeine | null;
  theobromine: MealItemGridIngredient_item_Food_nutrition_theobromine | null;
  calcium: MealItemGridIngredient_item_Food_nutrition_calcium | null;
  choline: MealItemGridIngredient_item_Food_nutrition_choline | null;
  copper: MealItemGridIngredient_item_Food_nutrition_copper | null;
  fluoride: MealItemGridIngredient_item_Food_nutrition_fluoride | null;
  folate: MealItemGridIngredient_item_Food_nutrition_folate | null;
  iron: MealItemGridIngredient_item_Food_nutrition_iron | null;
  lycopene: MealItemGridIngredient_item_Food_nutrition_lycopene | null;
  magnesium: MealItemGridIngredient_item_Food_nutrition_magnesium | null;
  manganese: MealItemGridIngredient_item_Food_nutrition_manganese | null;
  niacin: MealItemGridIngredient_item_Food_nutrition_niacin | null;
  phosphorus: MealItemGridIngredient_item_Food_nutrition_phosphorus | null;
  retinol: MealItemGridIngredient_item_Food_nutrition_retinol | null;
  riboflavin: MealItemGridIngredient_item_Food_nutrition_riboflavin | null;
  selenium: MealItemGridIngredient_item_Food_nutrition_selenium | null;
  thiamine: MealItemGridIngredient_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemGridIngredient_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemGridIngredient_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemGridIngredient_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemGridIngredient_item_Food_nutrition_vitA | null;
  vitAIU: MealItemGridIngredient_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemGridIngredient_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemGridIngredient_item_Food_nutrition_vitB12 | null;
  vitC: MealItemGridIngredient_item_Food_nutrition_vitC | null;
  vitD: MealItemGridIngredient_item_Food_nutrition_vitD | null;
  vitD2: MealItemGridIngredient_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemGridIngredient_item_Food_nutrition_vitD3 | null;
  vitE: MealItemGridIngredient_item_Food_nutrition_vitE | null;
  vitK: MealItemGridIngredient_item_Food_nutrition_vitK | null;
  zinc: MealItemGridIngredient_item_Food_nutrition_zinc | null;
  tryptophan: MealItemGridIngredient_item_Food_nutrition_tryptophan | null;
  threonine: MealItemGridIngredient_item_Food_nutrition_threonine | null;
  isoleucine: MealItemGridIngredient_item_Food_nutrition_isoleucine | null;
  leucine: MealItemGridIngredient_item_Food_nutrition_leucine | null;
  lysine: MealItemGridIngredient_item_Food_nutrition_lysine | null;
  methionine: MealItemGridIngredient_item_Food_nutrition_methionine | null;
  cystine: MealItemGridIngredient_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemGridIngredient_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemGridIngredient_item_Food_nutrition_tyrosine | null;
  valine: MealItemGridIngredient_item_Food_nutrition_valine | null;
  arginine: MealItemGridIngredient_item_Food_nutrition_arginine | null;
  histidine: MealItemGridIngredient_item_Food_nutrition_histidine | null;
  alanine: MealItemGridIngredient_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemGridIngredient_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemGridIngredient_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemGridIngredient_item_Food_nutrition_glycine | null;
  proline: MealItemGridIngredient_item_Food_nutrition_proline | null;
  serine: MealItemGridIngredient_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemGridIngredient_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemGridIngredient_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_origFoodGroups {
  id: string;
  name: MealItemGridIngredient_item_Food_origFoodGroups_name[];
}

export interface MealItemGridIngredient_item_Food {
  id: string;
  name: MealItemGridIngredient_item_Food_name[];
  description: MealItemGridIngredient_item_Food_description[] | null;
  weights: MealItemGridIngredient_item_Food_weights[];
  image: MealItemGridIngredient_item_Food_image | null;
  thumbnail: MealItemGridIngredient_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItemGridIngredient_item_Food_nutrition;
  origFoodGroups: MealItemGridIngredient_item_Food_origFoodGroups[][];
}

export interface MealItemGridIngredient_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_image {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealItemGridIngredient_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemGridIngredient_item_Recipe_ingredients_unit = MealItemGridIngredient_item_Recipe_ingredients_unit_Weight | MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_name[];
  description: MealItemGridIngredient_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights[];
  image: MealItemGridIngredient_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItemGridIngredient_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealItemGridIngredient_item_Recipe_ingredients_item = MealItemGridIngredient_item_Recipe_ingredients_item_Food | MealItemGridIngredient_item_Recipe_ingredients_item_Recipe;

export interface MealItemGridIngredient_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemGridIngredient_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemGridIngredient_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemGridIngredient_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemGridIngredient_item_Recipe_ingredients_unit | null;
  item: MealItemGridIngredient_item_Recipe_ingredients_item | null;
}

export interface MealItemGridIngredient_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemGridIngredient_item_Recipe_author_avatar | null;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition {
  calories: MealItemGridIngredient_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemGridIngredient_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemGridIngredient_item_Recipe_nutrition_fats | null;
  proteins: MealItemGridIngredient_item_Recipe_nutrition_proteins | null;
  fiber: MealItemGridIngredient_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemGridIngredient_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemGridIngredient_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemGridIngredient_item_Recipe_nutrition_potassium | null;
  sugar: MealItemGridIngredient_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemGridIngredient_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemGridIngredient_item_Recipe_nutrition_glucose | null;
  fructose: MealItemGridIngredient_item_Recipe_nutrition_fructose | null;
  lactose: MealItemGridIngredient_item_Recipe_nutrition_lactose | null;
  maltose: MealItemGridIngredient_item_Recipe_nutrition_maltose | null;
  galactose: MealItemGridIngredient_item_Recipe_nutrition_galactose | null;
  starch: MealItemGridIngredient_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemGridIngredient_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemGridIngredient_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemGridIngredient_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemGridIngredient_item_Recipe_nutrition_transFats | null;
  omega3: MealItemGridIngredient_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemGridIngredient_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemGridIngredient_item_Recipe_nutrition_ALA | null;
  DHA: MealItemGridIngredient_item_Recipe_nutrition_DHA | null;
  EPA: MealItemGridIngredient_item_Recipe_nutrition_EPA | null;
  DPA: MealItemGridIngredient_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemGridIngredient_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemGridIngredient_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemGridIngredient_item_Recipe_nutrition_calcium | null;
  choline: MealItemGridIngredient_item_Recipe_nutrition_choline | null;
  copper: MealItemGridIngredient_item_Recipe_nutrition_copper | null;
  fluoride: MealItemGridIngredient_item_Recipe_nutrition_fluoride | null;
  folate: MealItemGridIngredient_item_Recipe_nutrition_folate | null;
  iron: MealItemGridIngredient_item_Recipe_nutrition_iron | null;
  lycopene: MealItemGridIngredient_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemGridIngredient_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemGridIngredient_item_Recipe_nutrition_manganese | null;
  niacin: MealItemGridIngredient_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemGridIngredient_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemGridIngredient_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemGridIngredient_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemGridIngredient_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemGridIngredient_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemGridIngredient_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemGridIngredient_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemGridIngredient_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemGridIngredient_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemGridIngredient_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemGridIngredient_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemGridIngredient_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemGridIngredient_item_Recipe_nutrition_vitC | null;
  vitD: MealItemGridIngredient_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemGridIngredient_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemGridIngredient_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemGridIngredient_item_Recipe_nutrition_vitE | null;
  vitK: MealItemGridIngredient_item_Recipe_nutrition_vitK | null;
  zinc: MealItemGridIngredient_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemGridIngredient_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemGridIngredient_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemGridIngredient_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemGridIngredient_item_Recipe_nutrition_leucine | null;
  lysine: MealItemGridIngredient_item_Recipe_nutrition_lysine | null;
  methionine: MealItemGridIngredient_item_Recipe_nutrition_methionine | null;
  cystine: MealItemGridIngredient_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemGridIngredient_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemGridIngredient_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemGridIngredient_item_Recipe_nutrition_valine | null;
  arginine: MealItemGridIngredient_item_Recipe_nutrition_arginine | null;
  histidine: MealItemGridIngredient_item_Recipe_nutrition_histidine | null;
  alanine: MealItemGridIngredient_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemGridIngredient_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemGridIngredient_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemGridIngredient_item_Recipe_nutrition_glycine | null;
  proline: MealItemGridIngredient_item_Recipe_nutrition_proline | null;
  serine: MealItemGridIngredient_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemGridIngredient_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemGridIngredient_item_Recipe {
  id: string;
  slug: string;
  title: MealItemGridIngredient_item_Recipe_title[];
  image: MealItemGridIngredient_item_Recipe_image | null;
  timing: MealItemGridIngredient_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemGridIngredient_item_Recipe_thumbnail | null;
  ingredients: MealItemGridIngredient_item_Recipe_ingredients[];
  author: MealItemGridIngredient_item_Recipe_author;
  nutrition: MealItemGridIngredient_item_Recipe_nutrition;
}

export type MealItemGridIngredient_item = MealItemGridIngredient_item_Food | MealItemGridIngredient_item_Recipe;

export interface MealItemGridIngredient {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemGridIngredient_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemGridIngredient_description[] | null;
  amount: number | null;
  customUnit: MealItemGridIngredient_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemGridIngredient_unit | null;
  isOptional: boolean | null;
  item: MealItemGridIngredient_item | null;
}
