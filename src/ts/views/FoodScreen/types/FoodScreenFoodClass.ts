/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodScreenFoodClass
// ====================================================

export interface FoodScreenFoodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_image {
  url: string;
}

export interface FoodScreenFoodClass_food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_food_weights {
  amount: number;
  gramWeight: number | null;
  name: FoodScreenFoodClass_food_weights_name[];
  id: any;
}

export interface FoodScreenFoodClass_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodScreenFoodClass_food_nutrition {
  calories: FoodScreenFoodClass_food_nutrition_calories | null;
  totalCarbs: FoodScreenFoodClass_food_nutrition_totalCarbs | null;
  fats: FoodScreenFoodClass_food_nutrition_fats | null;
  proteins: FoodScreenFoodClass_food_nutrition_proteins | null;
  fiber: FoodScreenFoodClass_food_nutrition_fiber | null;
  totalAvailableCarbs: FoodScreenFoodClass_food_nutrition_totalAvailableCarbs | null;
  sodium: FoodScreenFoodClass_food_nutrition_sodium | null;
  cholesterol: FoodScreenFoodClass_food_nutrition_cholesterol | null;
  potassium: FoodScreenFoodClass_food_nutrition_potassium | null;
  sugar: FoodScreenFoodClass_food_nutrition_sugar | null;
  sucrose: FoodScreenFoodClass_food_nutrition_sucrose | null;
  glucose: FoodScreenFoodClass_food_nutrition_glucose | null;
  fructose: FoodScreenFoodClass_food_nutrition_fructose | null;
  lactose: FoodScreenFoodClass_food_nutrition_lactose | null;
  maltose: FoodScreenFoodClass_food_nutrition_maltose | null;
  galactose: FoodScreenFoodClass_food_nutrition_galactose | null;
  starch: FoodScreenFoodClass_food_nutrition_starch | null;
  saturatedFats: FoodScreenFoodClass_food_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodScreenFoodClass_food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodScreenFoodClass_food_nutrition_polyunsaturatedFats | null;
  transFats: FoodScreenFoodClass_food_nutrition_transFats | null;
  omega3: FoodScreenFoodClass_food_nutrition_omega3 | null;
  omega6: FoodScreenFoodClass_food_nutrition_omega6 | null;
  ALA: FoodScreenFoodClass_food_nutrition_ALA | null;
  DHA: FoodScreenFoodClass_food_nutrition_DHA | null;
  EPA: FoodScreenFoodClass_food_nutrition_EPA | null;
  DPA: FoodScreenFoodClass_food_nutrition_DPA | null;
  caffeine: FoodScreenFoodClass_food_nutrition_caffeine | null;
  theobromine: FoodScreenFoodClass_food_nutrition_theobromine | null;
  calcium: FoodScreenFoodClass_food_nutrition_calcium | null;
  choline: FoodScreenFoodClass_food_nutrition_choline | null;
  copper: FoodScreenFoodClass_food_nutrition_copper | null;
  fluoride: FoodScreenFoodClass_food_nutrition_fluoride | null;
  folate: FoodScreenFoodClass_food_nutrition_folate | null;
  iron: FoodScreenFoodClass_food_nutrition_iron | null;
  lycopene: FoodScreenFoodClass_food_nutrition_lycopene | null;
  magnesium: FoodScreenFoodClass_food_nutrition_magnesium | null;
  manganese: FoodScreenFoodClass_food_nutrition_manganese | null;
  niacin: FoodScreenFoodClass_food_nutrition_niacin | null;
  phosphorus: FoodScreenFoodClass_food_nutrition_phosphorus | null;
  retinol: FoodScreenFoodClass_food_nutrition_retinol | null;
  riboflavin: FoodScreenFoodClass_food_nutrition_riboflavin | null;
  selenium: FoodScreenFoodClass_food_nutrition_selenium | null;
  thiamine: FoodScreenFoodClass_food_nutrition_thiamine | null;
  alphaCarotene: FoodScreenFoodClass_food_nutrition_alphaCarotene | null;
  betaCarotene: FoodScreenFoodClass_food_nutrition_betaCarotene | null;
  pantothenicAcid: FoodScreenFoodClass_food_nutrition_pantothenicAcid | null;
  vitA: FoodScreenFoodClass_food_nutrition_vitA | null;
  vitAIU: FoodScreenFoodClass_food_nutrition_vitAIU | null;
  vitB6: FoodScreenFoodClass_food_nutrition_vitB6 | null;
  vitB12: FoodScreenFoodClass_food_nutrition_vitB12 | null;
  vitC: FoodScreenFoodClass_food_nutrition_vitC | null;
  vitD: FoodScreenFoodClass_food_nutrition_vitD | null;
  vitD2: FoodScreenFoodClass_food_nutrition_vitD2 | null;
  vitD3: FoodScreenFoodClass_food_nutrition_vitD3 | null;
  vitE: FoodScreenFoodClass_food_nutrition_vitE | null;
  vitK: FoodScreenFoodClass_food_nutrition_vitK | null;
  zinc: FoodScreenFoodClass_food_nutrition_zinc | null;
  tryptophan: FoodScreenFoodClass_food_nutrition_tryptophan | null;
  threonine: FoodScreenFoodClass_food_nutrition_threonine | null;
  isoleucine: FoodScreenFoodClass_food_nutrition_isoleucine | null;
  leucine: FoodScreenFoodClass_food_nutrition_leucine | null;
  lysine: FoodScreenFoodClass_food_nutrition_lysine | null;
  methionine: FoodScreenFoodClass_food_nutrition_methionine | null;
  cystine: FoodScreenFoodClass_food_nutrition_cystine | null;
  phenylalanine: FoodScreenFoodClass_food_nutrition_phenylalanine | null;
  tyrosine: FoodScreenFoodClass_food_nutrition_tyrosine | null;
  valine: FoodScreenFoodClass_food_nutrition_valine | null;
  arginine: FoodScreenFoodClass_food_nutrition_arginine | null;
  histidine: FoodScreenFoodClass_food_nutrition_histidine | null;
  alanine: FoodScreenFoodClass_food_nutrition_alanine | null;
  asparticAcid: FoodScreenFoodClass_food_nutrition_asparticAcid | null;
  glutamicAcid: FoodScreenFoodClass_food_nutrition_glutamicAcid | null;
  glycine: FoodScreenFoodClass_food_nutrition_glycine | null;
  proline: FoodScreenFoodClass_food_nutrition_proline | null;
  serine: FoodScreenFoodClass_food_nutrition_serine | null;
  hydroxyproline: FoodScreenFoodClass_food_nutrition_hydroxyproline | null;
}

export interface FoodScreenFoodClass_food {
  id: string;
  name: FoodScreenFoodClass_food_name[];
  description: FoodScreenFoodClass_food_description[] | null;
  weights: FoodScreenFoodClass_food_weights[];
  nutrition: FoodScreenFoodClass_food_nutrition | null;
}

export interface FoodScreenFoodClass_foodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_foodGroups {
  id: string;
  name: FoodScreenFoodClass_foodGroups_name[];
}

export interface FoodScreenFoodClass {
  id: string;
  name: FoodScreenFoodClass_name[];
  description: FoodScreenFoodClass_description[] | null;
  image: FoodScreenFoodClass_image | null;
  food: FoodScreenFoodClass_food | null;
  foodGroups: FoodScreenFoodClass_foodGroups[][];
}
