/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../../../../../../models/global-types'

// ====================================================
// GraphQL mutation operation: MealItemComponentMutation
// ====================================================

export interface MealItemComponentMutation_suggestMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_customUnit_name[];
}

export interface MealItemComponentMutation_suggestMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMutation_suggestMealItem_unit_Weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_unit_CustomUnit_name[];
}

export type MealItemComponentMutation_suggestMealItem_unit =
  MealItemComponentMutation_suggestMealItem_unit_Weight
  | MealItemComponentMutation_suggestMealItem_unit_CustomUnit;

export interface MealItemComponentMutation_suggestMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentMutation_suggestMealItem_item_Food_weights_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calories | null;
  totalCarbs: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalCarbs | null;
  fats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fats | null;
  proteins: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proteins | null;
  fiber: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sodium | null;
  cholesterol: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_cholesterol | null;
  potassium: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_potassium | null;
  sugar: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sugar | null;
  sucrose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_sucrose | null;
  glucose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glucose | null;
  fructose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fructose | null;
  lactose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lactose | null;
  maltose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_maltose | null;
  galactose: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_galactose | null;
  starch: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_starch | null;
  saturatedFats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_transFats | null;
  omega3: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_omega3 | null;
  omega6: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_omega6 | null;
  ALA: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_ALA | null;
  DHA: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_DHA | null;
  EPA: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_EPA | null;
  DPA: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_DPA | null;
  caffeine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_caffeine | null;
  theobromine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_theobromine | null;
  calcium: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calcium | null;
  choline: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_choline | null;
  copper: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_copper | null;
  fluoride: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fluoride | null;
  folate: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_folate | null;
  iron: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_iron | null;
  lycopene: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lycopene | null;
  magnesium: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_magnesium | null;
  manganese: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_manganese | null;
  niacin: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_niacin | null;
  phosphorus: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_phosphorus | null;
  retinol: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_retinol | null;
  riboflavin: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_riboflavin | null;
  selenium: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_selenium | null;
  thiamine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitA | null;
  vitAIU: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitB12 | null;
  vitC: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitC | null;
  vitD: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD | null;
  vitD2: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitD3 | null;
  vitE: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitE | null;
  vitK: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_vitK | null;
  zinc: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_zinc | null;
  tryptophan: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_tryptophan | null;
  threonine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_threonine | null;
  isoleucine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_isoleucine | null;
  leucine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_leucine | null;
  lysine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_lysine | null;
  methionine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_methionine | null;
  cystine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_tyrosine | null;
  valine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_valine | null;
  arginine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_arginine | null;
  histidine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_histidine | null;
  alanine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_glycine | null;
  proline: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proline | null;
  serine: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Food_name[];
  description: MealItemComponentMutation_suggestMealItem_item_Food_description[] | null;
  weights: MealItemComponentMutation_suggestMealItem_item_Food_weights[];
  thumbnail: MealItemComponentMutation_suggestMealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItemComponentMutation_suggestMealItem_item_Food_nutrition | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_timing {
  totalTime: number | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealItemComponentMutation_suggestMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fats | null;
  proteins: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proteins | null;
  fiber: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_potassium | null;
  sugar: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glucose | null;
  fructose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fructose | null;
  lactose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lactose | null;
  maltose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_maltose | null;
  galactose: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_galactose | null;
  starch: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_transFats | null;
  omega3: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_ALA | null;
  DHA: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_DHA | null;
  EPA: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_EPA | null;
  DPA: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calcium | null;
  choline: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_choline | null;
  copper: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_copper | null;
  fluoride: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fluoride | null;
  folate: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_folate | null;
  iron: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_iron | null;
  lycopene: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_manganese | null;
  niacin: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitC | null;
  vitD: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitE | null;
  vitK: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_vitK | null;
  zinc: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_leucine | null;
  lysine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_lysine | null;
  methionine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_methionine | null;
  cystine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_valine | null;
  arginine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_arginine | null;
  histidine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_histidine | null;
  alanine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_glycine | null;
  proline: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proline | null;
  serine: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentMutation_suggestMealItem_item_Recipe_title[];
  timing: MealItemComponentMutation_suggestMealItem_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemComponentMutation_suggestMealItem_item_Recipe_thumbnail | null;
  author: MealItemComponentMutation_suggestMealItem_item_Recipe_author;
  nutrition: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition | null;
}

export type MealItemComponentMutation_suggestMealItem_item =
  MealItemComponentMutation_suggestMealItem_item_Food
  | MealItemComponentMutation_suggestMealItem_item_Recipe;

export interface MealItemComponentMutation_suggestMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentMutation_suggestMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentMutation_suggestMealItem_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentMutation_suggestMealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentMutation_suggestMealItem_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: MealItemComponentMutation_suggestMealItem_item | null;
}

export interface MealItemComponentMutation {
  suggestMealItem: MealItemComponentMutation_suggestMealItem;
}

export interface MealItemComponentMutationVariables {
  userMealId: string;
  mealItemId: string;
  date: any;
}
