/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodPickerFood
// ====================================================

export interface FoodPickerFood_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_origFoodGroups {
  id: string;
  name: FoodPickerFood_origFoodGroups_name[];
}

export interface FoodPickerFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPickerFood_weights_name[];
}

export interface FoodPickerFood_image {
  url: string;
}

export interface FoodPickerFood_thumbnail {
  url: string;
}

export interface FoodPickerFood_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition {
  calories: FoodPickerFood_nutrition_calories | null;
  totalCarbs: FoodPickerFood_nutrition_totalCarbs | null;
  fats: FoodPickerFood_nutrition_fats | null;
  proteins: FoodPickerFood_nutrition_proteins | null;
  fiber: FoodPickerFood_nutrition_fiber | null;
  totalAvailableCarbs: FoodPickerFood_nutrition_totalAvailableCarbs | null;
  sodium: FoodPickerFood_nutrition_sodium | null;
  cholesterol: FoodPickerFood_nutrition_cholesterol | null;
  potassium: FoodPickerFood_nutrition_potassium | null;
  sugar: FoodPickerFood_nutrition_sugar | null;
  sucrose: FoodPickerFood_nutrition_sucrose | null;
  glucose: FoodPickerFood_nutrition_glucose | null;
  fructose: FoodPickerFood_nutrition_fructose | null;
  lactose: FoodPickerFood_nutrition_lactose | null;
  maltose: FoodPickerFood_nutrition_maltose | null;
  galactose: FoodPickerFood_nutrition_galactose | null;
  starch: FoodPickerFood_nutrition_starch | null;
  saturatedFats: FoodPickerFood_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPickerFood_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPickerFood_nutrition_polyunsaturatedFats | null;
  transFats: FoodPickerFood_nutrition_transFats | null;
  omega3: FoodPickerFood_nutrition_omega3 | null;
  omega6: FoodPickerFood_nutrition_omega6 | null;
  ALA: FoodPickerFood_nutrition_ALA | null;
  DHA: FoodPickerFood_nutrition_DHA | null;
  EPA: FoodPickerFood_nutrition_EPA | null;
  DPA: FoodPickerFood_nutrition_DPA | null;
  caffeine: FoodPickerFood_nutrition_caffeine | null;
  theobromine: FoodPickerFood_nutrition_theobromine | null;
  calcium: FoodPickerFood_nutrition_calcium | null;
  choline: FoodPickerFood_nutrition_choline | null;
  copper: FoodPickerFood_nutrition_copper | null;
  fluoride: FoodPickerFood_nutrition_fluoride | null;
  folate: FoodPickerFood_nutrition_folate | null;
  iron: FoodPickerFood_nutrition_iron | null;
  lycopene: FoodPickerFood_nutrition_lycopene | null;
  magnesium: FoodPickerFood_nutrition_magnesium | null;
  manganese: FoodPickerFood_nutrition_manganese | null;
  niacin: FoodPickerFood_nutrition_niacin | null;
  phosphorus: FoodPickerFood_nutrition_phosphorus | null;
  retinol: FoodPickerFood_nutrition_retinol | null;
  riboflavin: FoodPickerFood_nutrition_riboflavin | null;
  selenium: FoodPickerFood_nutrition_selenium | null;
  thiamine: FoodPickerFood_nutrition_thiamine | null;
  alphaCarotene: FoodPickerFood_nutrition_alphaCarotene | null;
  betaCarotene: FoodPickerFood_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPickerFood_nutrition_pantothenicAcid | null;
  vitA: FoodPickerFood_nutrition_vitA | null;
  vitAIU: FoodPickerFood_nutrition_vitAIU | null;
  vitB6: FoodPickerFood_nutrition_vitB6 | null;
  vitB12: FoodPickerFood_nutrition_vitB12 | null;
  vitC: FoodPickerFood_nutrition_vitC | null;
  vitD: FoodPickerFood_nutrition_vitD | null;
  vitD2: FoodPickerFood_nutrition_vitD2 | null;
  vitD3: FoodPickerFood_nutrition_vitD3 | null;
  vitE: FoodPickerFood_nutrition_vitE | null;
  vitK: FoodPickerFood_nutrition_vitK | null;
  zinc: FoodPickerFood_nutrition_zinc | null;
  tryptophan: FoodPickerFood_nutrition_tryptophan | null;
  threonine: FoodPickerFood_nutrition_threonine | null;
  isoleucine: FoodPickerFood_nutrition_isoleucine | null;
  leucine: FoodPickerFood_nutrition_leucine | null;
  lysine: FoodPickerFood_nutrition_lysine | null;
  methionine: FoodPickerFood_nutrition_methionine | null;
  cystine: FoodPickerFood_nutrition_cystine | null;
  phenylalanine: FoodPickerFood_nutrition_phenylalanine | null;
  tyrosine: FoodPickerFood_nutrition_tyrosine | null;
  valine: FoodPickerFood_nutrition_valine | null;
  arginine: FoodPickerFood_nutrition_arginine | null;
  histidine: FoodPickerFood_nutrition_histidine | null;
  alanine: FoodPickerFood_nutrition_alanine | null;
  asparticAcid: FoodPickerFood_nutrition_asparticAcid | null;
  glutamicAcid: FoodPickerFood_nutrition_glutamicAcid | null;
  glycine: FoodPickerFood_nutrition_glycine | null;
  proline: FoodPickerFood_nutrition_proline | null;
  serine: FoodPickerFood_nutrition_serine | null;
  hydroxyproline: FoodPickerFood_nutrition_hydroxyproline | null;
}

export interface FoodPickerFood {
  id: string;
  name: FoodPickerFood_name[];
  description: FoodPickerFood_description[] | null;
  origFoodGroups: FoodPickerFood_origFoodGroups[][];
  weights: FoodPickerFood_weights[];
  image: FoodPickerFood_image | null;
  thumbnail: FoodPickerFood_thumbnail | null;
  nutrition: FoodPickerFood_nutrition;
}
