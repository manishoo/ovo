/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodPreviewFood
// ====================================================

export interface FoodPreviewFood_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewFood_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewFood_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPreviewFood_weights_name[];
}

export interface FoodPreviewFood_thumbnail {
  url: string;
}

export interface FoodPreviewFood_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewFood_origFoodGroups {
  id: string;
  name: FoodPreviewFood_origFoodGroups_name[];
}

export interface FoodPreviewFood_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPreviewFood_nutrition {
  calories: FoodPreviewFood_nutrition_calories | null;
  totalCarbs: FoodPreviewFood_nutrition_totalCarbs | null;
  fats: FoodPreviewFood_nutrition_fats | null;
  proteins: FoodPreviewFood_nutrition_proteins | null;
  fiber: FoodPreviewFood_nutrition_fiber | null;
  totalAvailableCarbs: FoodPreviewFood_nutrition_totalAvailableCarbs | null;
  sodium: FoodPreviewFood_nutrition_sodium | null;
  cholesterol: FoodPreviewFood_nutrition_cholesterol | null;
  potassium: FoodPreviewFood_nutrition_potassium | null;
  sugar: FoodPreviewFood_nutrition_sugar | null;
  sucrose: FoodPreviewFood_nutrition_sucrose | null;
  glucose: FoodPreviewFood_nutrition_glucose | null;
  fructose: FoodPreviewFood_nutrition_fructose | null;
  lactose: FoodPreviewFood_nutrition_lactose | null;
  maltose: FoodPreviewFood_nutrition_maltose | null;
  galactose: FoodPreviewFood_nutrition_galactose | null;
  starch: FoodPreviewFood_nutrition_starch | null;
  saturatedFats: FoodPreviewFood_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPreviewFood_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPreviewFood_nutrition_polyunsaturatedFats | null;
  transFats: FoodPreviewFood_nutrition_transFats | null;
  omega3: FoodPreviewFood_nutrition_omega3 | null;
  omega6: FoodPreviewFood_nutrition_omega6 | null;
  ALA: FoodPreviewFood_nutrition_ALA | null;
  DHA: FoodPreviewFood_nutrition_DHA | null;
  EPA: FoodPreviewFood_nutrition_EPA | null;
  DPA: FoodPreviewFood_nutrition_DPA | null;
  caffeine: FoodPreviewFood_nutrition_caffeine | null;
  theobromine: FoodPreviewFood_nutrition_theobromine | null;
  calcium: FoodPreviewFood_nutrition_calcium | null;
  choline: FoodPreviewFood_nutrition_choline | null;
  copper: FoodPreviewFood_nutrition_copper | null;
  fluoride: FoodPreviewFood_nutrition_fluoride | null;
  folate: FoodPreviewFood_nutrition_folate | null;
  iron: FoodPreviewFood_nutrition_iron | null;
  lycopene: FoodPreviewFood_nutrition_lycopene | null;
  magnesium: FoodPreviewFood_nutrition_magnesium | null;
  manganese: FoodPreviewFood_nutrition_manganese | null;
  niacin: FoodPreviewFood_nutrition_niacin | null;
  phosphorus: FoodPreviewFood_nutrition_phosphorus | null;
  retinol: FoodPreviewFood_nutrition_retinol | null;
  riboflavin: FoodPreviewFood_nutrition_riboflavin | null;
  selenium: FoodPreviewFood_nutrition_selenium | null;
  thiamine: FoodPreviewFood_nutrition_thiamine | null;
  alphaCarotene: FoodPreviewFood_nutrition_alphaCarotene | null;
  betaCarotene: FoodPreviewFood_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPreviewFood_nutrition_pantothenicAcid | null;
  vitA: FoodPreviewFood_nutrition_vitA | null;
  vitAIU: FoodPreviewFood_nutrition_vitAIU | null;
  vitB6: FoodPreviewFood_nutrition_vitB6 | null;
  vitB12: FoodPreviewFood_nutrition_vitB12 | null;
  vitC: FoodPreviewFood_nutrition_vitC | null;
  vitD: FoodPreviewFood_nutrition_vitD | null;
  vitD2: FoodPreviewFood_nutrition_vitD2 | null;
  vitD3: FoodPreviewFood_nutrition_vitD3 | null;
  vitE: FoodPreviewFood_nutrition_vitE | null;
  vitK: FoodPreviewFood_nutrition_vitK | null;
  zinc: FoodPreviewFood_nutrition_zinc | null;
  tryptophan: FoodPreviewFood_nutrition_tryptophan | null;
  threonine: FoodPreviewFood_nutrition_threonine | null;
  isoleucine: FoodPreviewFood_nutrition_isoleucine | null;
  leucine: FoodPreviewFood_nutrition_leucine | null;
  lysine: FoodPreviewFood_nutrition_lysine | null;
  methionine: FoodPreviewFood_nutrition_methionine | null;
  cystine: FoodPreviewFood_nutrition_cystine | null;
  phenylalanine: FoodPreviewFood_nutrition_phenylalanine | null;
  tyrosine: FoodPreviewFood_nutrition_tyrosine | null;
  valine: FoodPreviewFood_nutrition_valine | null;
  arginine: FoodPreviewFood_nutrition_arginine | null;
  histidine: FoodPreviewFood_nutrition_histidine | null;
  alanine: FoodPreviewFood_nutrition_alanine | null;
  asparticAcid: FoodPreviewFood_nutrition_asparticAcid | null;
  glutamicAcid: FoodPreviewFood_nutrition_glutamicAcid | null;
  glycine: FoodPreviewFood_nutrition_glycine | null;
  proline: FoodPreviewFood_nutrition_proline | null;
  serine: FoodPreviewFood_nutrition_serine | null;
  hydroxyproline: FoodPreviewFood_nutrition_hydroxyproline | null;
}

export interface FoodPreviewFood {
  id: string;
  name: FoodPreviewFood_name[];
  description: FoodPreviewFood_description[] | null;
  weights: FoodPreviewFood_weights[];
  thumbnail: FoodPreviewFood_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: FoodPreviewFood_origFoodGroups[][];
  nutrition: FoodPreviewFood_nutrition | null;
}
