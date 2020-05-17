/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: FoodScreenQuery
// ====================================================

export interface FoodScreenQuery_foodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_image {
  url: string;
}

export interface FoodScreenQuery_foodClass_food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_food_weights {
  amount: number;
  gramWeight: number | null;
  name: FoodScreenQuery_foodClass_food_weights_name[];
  id: any;
}

export interface FoodScreenQuery_foodClass_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_foodClass_food_nutrition {
  calories: FoodScreenQuery_foodClass_food_nutrition_calories | null;
  totalCarbs: FoodScreenQuery_foodClass_food_nutrition_totalCarbs | null;
  fats: FoodScreenQuery_foodClass_food_nutrition_fats | null;
  proteins: FoodScreenQuery_foodClass_food_nutrition_proteins | null;
  fiber: FoodScreenQuery_foodClass_food_nutrition_fiber | null;
  totalAvailableCarbs: FoodScreenQuery_foodClass_food_nutrition_totalAvailableCarbs | null;
  sodium: FoodScreenQuery_foodClass_food_nutrition_sodium | null;
  cholesterol: FoodScreenQuery_foodClass_food_nutrition_cholesterol | null;
  potassium: FoodScreenQuery_foodClass_food_nutrition_potassium | null;
  sugar: FoodScreenQuery_foodClass_food_nutrition_sugar | null;
  sucrose: FoodScreenQuery_foodClass_food_nutrition_sucrose | null;
  glucose: FoodScreenQuery_foodClass_food_nutrition_glucose | null;
  fructose: FoodScreenQuery_foodClass_food_nutrition_fructose | null;
  lactose: FoodScreenQuery_foodClass_food_nutrition_lactose | null;
  maltose: FoodScreenQuery_foodClass_food_nutrition_maltose | null;
  galactose: FoodScreenQuery_foodClass_food_nutrition_galactose | null;
  starch: FoodScreenQuery_foodClass_food_nutrition_starch | null;
  saturatedFats: FoodScreenQuery_foodClass_food_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodScreenQuery_foodClass_food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodScreenQuery_foodClass_food_nutrition_polyunsaturatedFats | null;
  transFats: FoodScreenQuery_foodClass_food_nutrition_transFats | null;
  omega3: FoodScreenQuery_foodClass_food_nutrition_omega3 | null;
  omega6: FoodScreenQuery_foodClass_food_nutrition_omega6 | null;
  ALA: FoodScreenQuery_foodClass_food_nutrition_ALA | null;
  DHA: FoodScreenQuery_foodClass_food_nutrition_DHA | null;
  EPA: FoodScreenQuery_foodClass_food_nutrition_EPA | null;
  DPA: FoodScreenQuery_foodClass_food_nutrition_DPA | null;
  caffeine: FoodScreenQuery_foodClass_food_nutrition_caffeine | null;
  theobromine: FoodScreenQuery_foodClass_food_nutrition_theobromine | null;
  calcium: FoodScreenQuery_foodClass_food_nutrition_calcium | null;
  choline: FoodScreenQuery_foodClass_food_nutrition_choline | null;
  copper: FoodScreenQuery_foodClass_food_nutrition_copper | null;
  fluoride: FoodScreenQuery_foodClass_food_nutrition_fluoride | null;
  folate: FoodScreenQuery_foodClass_food_nutrition_folate | null;
  iron: FoodScreenQuery_foodClass_food_nutrition_iron | null;
  lycopene: FoodScreenQuery_foodClass_food_nutrition_lycopene | null;
  magnesium: FoodScreenQuery_foodClass_food_nutrition_magnesium | null;
  manganese: FoodScreenQuery_foodClass_food_nutrition_manganese | null;
  niacin: FoodScreenQuery_foodClass_food_nutrition_niacin | null;
  phosphorus: FoodScreenQuery_foodClass_food_nutrition_phosphorus | null;
  retinol: FoodScreenQuery_foodClass_food_nutrition_retinol | null;
  riboflavin: FoodScreenQuery_foodClass_food_nutrition_riboflavin | null;
  selenium: FoodScreenQuery_foodClass_food_nutrition_selenium | null;
  thiamine: FoodScreenQuery_foodClass_food_nutrition_thiamine | null;
  alphaCarotene: FoodScreenQuery_foodClass_food_nutrition_alphaCarotene | null;
  betaCarotene: FoodScreenQuery_foodClass_food_nutrition_betaCarotene | null;
  pantothenicAcid: FoodScreenQuery_foodClass_food_nutrition_pantothenicAcid | null;
  vitA: FoodScreenQuery_foodClass_food_nutrition_vitA | null;
  vitAIU: FoodScreenQuery_foodClass_food_nutrition_vitAIU | null;
  vitB6: FoodScreenQuery_foodClass_food_nutrition_vitB6 | null;
  vitB12: FoodScreenQuery_foodClass_food_nutrition_vitB12 | null;
  vitC: FoodScreenQuery_foodClass_food_nutrition_vitC | null;
  vitD: FoodScreenQuery_foodClass_food_nutrition_vitD | null;
  vitD2: FoodScreenQuery_foodClass_food_nutrition_vitD2 | null;
  vitD3: FoodScreenQuery_foodClass_food_nutrition_vitD3 | null;
  vitE: FoodScreenQuery_foodClass_food_nutrition_vitE | null;
  vitK: FoodScreenQuery_foodClass_food_nutrition_vitK | null;
  zinc: FoodScreenQuery_foodClass_food_nutrition_zinc | null;
  tryptophan: FoodScreenQuery_foodClass_food_nutrition_tryptophan | null;
  threonine: FoodScreenQuery_foodClass_food_nutrition_threonine | null;
  isoleucine: FoodScreenQuery_foodClass_food_nutrition_isoleucine | null;
  leucine: FoodScreenQuery_foodClass_food_nutrition_leucine | null;
  lysine: FoodScreenQuery_foodClass_food_nutrition_lysine | null;
  methionine: FoodScreenQuery_foodClass_food_nutrition_methionine | null;
  cystine: FoodScreenQuery_foodClass_food_nutrition_cystine | null;
  phenylalanine: FoodScreenQuery_foodClass_food_nutrition_phenylalanine | null;
  tyrosine: FoodScreenQuery_foodClass_food_nutrition_tyrosine | null;
  valine: FoodScreenQuery_foodClass_food_nutrition_valine | null;
  arginine: FoodScreenQuery_foodClass_food_nutrition_arginine | null;
  histidine: FoodScreenQuery_foodClass_food_nutrition_histidine | null;
  alanine: FoodScreenQuery_foodClass_food_nutrition_alanine | null;
  asparticAcid: FoodScreenQuery_foodClass_food_nutrition_asparticAcid | null;
  glutamicAcid: FoodScreenQuery_foodClass_food_nutrition_glutamicAcid | null;
  glycine: FoodScreenQuery_foodClass_food_nutrition_glycine | null;
  proline: FoodScreenQuery_foodClass_food_nutrition_proline | null;
  serine: FoodScreenQuery_foodClass_food_nutrition_serine | null;
  hydroxyproline: FoodScreenQuery_foodClass_food_nutrition_hydroxyproline | null;
}

export interface FoodScreenQuery_foodClass_food {
  id: string;
  name: FoodScreenQuery_foodClass_food_name[];
  description: FoodScreenQuery_foodClass_food_description[] | null;
  weights: FoodScreenQuery_foodClass_food_weights[];
  nutrition: FoodScreenQuery_foodClass_food_nutrition | null;
}

export interface FoodScreenQuery_foodClass_foodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_foodGroups {
  id: string;
  name: FoodScreenQuery_foodClass_foodGroups_name[];
}

export interface FoodScreenQuery_foodClass {
  id: string;
  name: FoodScreenQuery_foodClass_name[];
  description: FoodScreenQuery_foodClass_description[] | null;
  image: FoodScreenQuery_foodClass_image | null;
  food: FoodScreenQuery_foodClass_food | null;
  foodGroups: FoodScreenQuery_foodClass_foodGroups[][];
}

export interface FoodScreenQuery {
  foodClass: FoodScreenQuery_foodClass;
}

export interface FoodScreenQueryVariables {
  slug: string;
  foodId?: any | null;
}
