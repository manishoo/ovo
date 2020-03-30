/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodPreviewRecipe
// ====================================================

export interface FoodPreviewRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewRecipe_timing {
  totalTime: number | null;
}

export interface FoodPreviewRecipe_thumbnail {
  url: string;
}

export interface FoodPreviewRecipe_author_avatar {
  url: string;
}

export interface FoodPreviewRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: FoodPreviewRecipe_author_avatar | null;
}

export interface FoodPreviewRecipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPreviewRecipe_nutrition {
  calories: FoodPreviewRecipe_nutrition_calories | null;
  totalCarbs: FoodPreviewRecipe_nutrition_totalCarbs | null;
  fats: FoodPreviewRecipe_nutrition_fats | null;
  proteins: FoodPreviewRecipe_nutrition_proteins | null;
  fiber: FoodPreviewRecipe_nutrition_fiber | null;
  totalAvailableCarbs: FoodPreviewRecipe_nutrition_totalAvailableCarbs | null;
  sodium: FoodPreviewRecipe_nutrition_sodium | null;
  cholesterol: FoodPreviewRecipe_nutrition_cholesterol | null;
  potassium: FoodPreviewRecipe_nutrition_potassium | null;
  sugar: FoodPreviewRecipe_nutrition_sugar | null;
  sucrose: FoodPreviewRecipe_nutrition_sucrose | null;
  glucose: FoodPreviewRecipe_nutrition_glucose | null;
  fructose: FoodPreviewRecipe_nutrition_fructose | null;
  lactose: FoodPreviewRecipe_nutrition_lactose | null;
  maltose: FoodPreviewRecipe_nutrition_maltose | null;
  galactose: FoodPreviewRecipe_nutrition_galactose | null;
  starch: FoodPreviewRecipe_nutrition_starch | null;
  saturatedFats: FoodPreviewRecipe_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPreviewRecipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPreviewRecipe_nutrition_polyunsaturatedFats | null;
  transFats: FoodPreviewRecipe_nutrition_transFats | null;
  omega3: FoodPreviewRecipe_nutrition_omega3 | null;
  omega6: FoodPreviewRecipe_nutrition_omega6 | null;
  ALA: FoodPreviewRecipe_nutrition_ALA | null;
  DHA: FoodPreviewRecipe_nutrition_DHA | null;
  EPA: FoodPreviewRecipe_nutrition_EPA | null;
  DPA: FoodPreviewRecipe_nutrition_DPA | null;
  caffeine: FoodPreviewRecipe_nutrition_caffeine | null;
  theobromine: FoodPreviewRecipe_nutrition_theobromine | null;
  calcium: FoodPreviewRecipe_nutrition_calcium | null;
  choline: FoodPreviewRecipe_nutrition_choline | null;
  copper: FoodPreviewRecipe_nutrition_copper | null;
  fluoride: FoodPreviewRecipe_nutrition_fluoride | null;
  folate: FoodPreviewRecipe_nutrition_folate | null;
  iron: FoodPreviewRecipe_nutrition_iron | null;
  lycopene: FoodPreviewRecipe_nutrition_lycopene | null;
  magnesium: FoodPreviewRecipe_nutrition_magnesium | null;
  manganese: FoodPreviewRecipe_nutrition_manganese | null;
  niacin: FoodPreviewRecipe_nutrition_niacin | null;
  phosphorus: FoodPreviewRecipe_nutrition_phosphorus | null;
  retinol: FoodPreviewRecipe_nutrition_retinol | null;
  riboflavin: FoodPreviewRecipe_nutrition_riboflavin | null;
  selenium: FoodPreviewRecipe_nutrition_selenium | null;
  thiamine: FoodPreviewRecipe_nutrition_thiamine | null;
  alphaCarotene: FoodPreviewRecipe_nutrition_alphaCarotene | null;
  betaCarotene: FoodPreviewRecipe_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPreviewRecipe_nutrition_pantothenicAcid | null;
  vitA: FoodPreviewRecipe_nutrition_vitA | null;
  vitAIU: FoodPreviewRecipe_nutrition_vitAIU | null;
  vitB6: FoodPreviewRecipe_nutrition_vitB6 | null;
  vitB12: FoodPreviewRecipe_nutrition_vitB12 | null;
  vitC: FoodPreviewRecipe_nutrition_vitC | null;
  vitD: FoodPreviewRecipe_nutrition_vitD | null;
  vitD2: FoodPreviewRecipe_nutrition_vitD2 | null;
  vitD3: FoodPreviewRecipe_nutrition_vitD3 | null;
  vitE: FoodPreviewRecipe_nutrition_vitE | null;
  vitK: FoodPreviewRecipe_nutrition_vitK | null;
  zinc: FoodPreviewRecipe_nutrition_zinc | null;
  tryptophan: FoodPreviewRecipe_nutrition_tryptophan | null;
  threonine: FoodPreviewRecipe_nutrition_threonine | null;
  isoleucine: FoodPreviewRecipe_nutrition_isoleucine | null;
  leucine: FoodPreviewRecipe_nutrition_leucine | null;
  lysine: FoodPreviewRecipe_nutrition_lysine | null;
  methionine: FoodPreviewRecipe_nutrition_methionine | null;
  cystine: FoodPreviewRecipe_nutrition_cystine | null;
  phenylalanine: FoodPreviewRecipe_nutrition_phenylalanine | null;
  tyrosine: FoodPreviewRecipe_nutrition_tyrosine | null;
  valine: FoodPreviewRecipe_nutrition_valine | null;
  arginine: FoodPreviewRecipe_nutrition_arginine | null;
  histidine: FoodPreviewRecipe_nutrition_histidine | null;
  alanine: FoodPreviewRecipe_nutrition_alanine | null;
  asparticAcid: FoodPreviewRecipe_nutrition_asparticAcid | null;
  glutamicAcid: FoodPreviewRecipe_nutrition_glutamicAcid | null;
  glycine: FoodPreviewRecipe_nutrition_glycine | null;
  proline: FoodPreviewRecipe_nutrition_proline | null;
  serine: FoodPreviewRecipe_nutrition_serine | null;
  hydroxyproline: FoodPreviewRecipe_nutrition_hydroxyproline | null;
}

export interface FoodPreviewRecipe {
  id: string;
  slug: string;
  title: FoodPreviewRecipe_title[];
  timing: FoodPreviewRecipe_timing;
  status: RecipeStatus;
  thumbnail: FoodPreviewRecipe_thumbnail | null;
  author: FoodPreviewRecipe_author;
  nutrition: FoodPreviewRecipe_nutrition | null;
}
