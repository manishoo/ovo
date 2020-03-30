/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: FoodPickerQuery
// ====================================================

export interface FoodPickerQuery_foods_foods_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPickerQuery_foods_foods_weights_name[];
}

export interface FoodPickerQuery_foods_foods_thumbnail {
  url: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition {
  calories: FoodPickerQuery_foods_foods_nutrition_calories | null;
  totalCarbs: FoodPickerQuery_foods_foods_nutrition_totalCarbs | null;
  fats: FoodPickerQuery_foods_foods_nutrition_fats | null;
  proteins: FoodPickerQuery_foods_foods_nutrition_proteins | null;
  fiber: FoodPickerQuery_foods_foods_nutrition_fiber | null;
  totalAvailableCarbs: FoodPickerQuery_foods_foods_nutrition_totalAvailableCarbs | null;
  sodium: FoodPickerQuery_foods_foods_nutrition_sodium | null;
  cholesterol: FoodPickerQuery_foods_foods_nutrition_cholesterol | null;
  potassium: FoodPickerQuery_foods_foods_nutrition_potassium | null;
  sugar: FoodPickerQuery_foods_foods_nutrition_sugar | null;
  sucrose: FoodPickerQuery_foods_foods_nutrition_sucrose | null;
  glucose: FoodPickerQuery_foods_foods_nutrition_glucose | null;
  fructose: FoodPickerQuery_foods_foods_nutrition_fructose | null;
  lactose: FoodPickerQuery_foods_foods_nutrition_lactose | null;
  maltose: FoodPickerQuery_foods_foods_nutrition_maltose | null;
  galactose: FoodPickerQuery_foods_foods_nutrition_galactose | null;
  starch: FoodPickerQuery_foods_foods_nutrition_starch | null;
  saturatedFats: FoodPickerQuery_foods_foods_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPickerQuery_foods_foods_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPickerQuery_foods_foods_nutrition_polyunsaturatedFats | null;
  transFats: FoodPickerQuery_foods_foods_nutrition_transFats | null;
  omega3: FoodPickerQuery_foods_foods_nutrition_omega3 | null;
  omega6: FoodPickerQuery_foods_foods_nutrition_omega6 | null;
  ALA: FoodPickerQuery_foods_foods_nutrition_ALA | null;
  DHA: FoodPickerQuery_foods_foods_nutrition_DHA | null;
  EPA: FoodPickerQuery_foods_foods_nutrition_EPA | null;
  DPA: FoodPickerQuery_foods_foods_nutrition_DPA | null;
  caffeine: FoodPickerQuery_foods_foods_nutrition_caffeine | null;
  theobromine: FoodPickerQuery_foods_foods_nutrition_theobromine | null;
  calcium: FoodPickerQuery_foods_foods_nutrition_calcium | null;
  choline: FoodPickerQuery_foods_foods_nutrition_choline | null;
  copper: FoodPickerQuery_foods_foods_nutrition_copper | null;
  fluoride: FoodPickerQuery_foods_foods_nutrition_fluoride | null;
  folate: FoodPickerQuery_foods_foods_nutrition_folate | null;
  iron: FoodPickerQuery_foods_foods_nutrition_iron | null;
  lycopene: FoodPickerQuery_foods_foods_nutrition_lycopene | null;
  magnesium: FoodPickerQuery_foods_foods_nutrition_magnesium | null;
  manganese: FoodPickerQuery_foods_foods_nutrition_manganese | null;
  niacin: FoodPickerQuery_foods_foods_nutrition_niacin | null;
  phosphorus: FoodPickerQuery_foods_foods_nutrition_phosphorus | null;
  retinol: FoodPickerQuery_foods_foods_nutrition_retinol | null;
  riboflavin: FoodPickerQuery_foods_foods_nutrition_riboflavin | null;
  selenium: FoodPickerQuery_foods_foods_nutrition_selenium | null;
  thiamine: FoodPickerQuery_foods_foods_nutrition_thiamine | null;
  alphaCarotene: FoodPickerQuery_foods_foods_nutrition_alphaCarotene | null;
  betaCarotene: FoodPickerQuery_foods_foods_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPickerQuery_foods_foods_nutrition_pantothenicAcid | null;
  vitA: FoodPickerQuery_foods_foods_nutrition_vitA | null;
  vitAIU: FoodPickerQuery_foods_foods_nutrition_vitAIU | null;
  vitB6: FoodPickerQuery_foods_foods_nutrition_vitB6 | null;
  vitB12: FoodPickerQuery_foods_foods_nutrition_vitB12 | null;
  vitC: FoodPickerQuery_foods_foods_nutrition_vitC | null;
  vitD: FoodPickerQuery_foods_foods_nutrition_vitD | null;
  vitD2: FoodPickerQuery_foods_foods_nutrition_vitD2 | null;
  vitD3: FoodPickerQuery_foods_foods_nutrition_vitD3 | null;
  vitE: FoodPickerQuery_foods_foods_nutrition_vitE | null;
  vitK: FoodPickerQuery_foods_foods_nutrition_vitK | null;
  zinc: FoodPickerQuery_foods_foods_nutrition_zinc | null;
  tryptophan: FoodPickerQuery_foods_foods_nutrition_tryptophan | null;
  threonine: FoodPickerQuery_foods_foods_nutrition_threonine | null;
  isoleucine: FoodPickerQuery_foods_foods_nutrition_isoleucine | null;
  leucine: FoodPickerQuery_foods_foods_nutrition_leucine | null;
  lysine: FoodPickerQuery_foods_foods_nutrition_lysine | null;
  methionine: FoodPickerQuery_foods_foods_nutrition_methionine | null;
  cystine: FoodPickerQuery_foods_foods_nutrition_cystine | null;
  phenylalanine: FoodPickerQuery_foods_foods_nutrition_phenylalanine | null;
  tyrosine: FoodPickerQuery_foods_foods_nutrition_tyrosine | null;
  valine: FoodPickerQuery_foods_foods_nutrition_valine | null;
  arginine: FoodPickerQuery_foods_foods_nutrition_arginine | null;
  histidine: FoodPickerQuery_foods_foods_nutrition_histidine | null;
  alanine: FoodPickerQuery_foods_foods_nutrition_alanine | null;
  asparticAcid: FoodPickerQuery_foods_foods_nutrition_asparticAcid | null;
  glutamicAcid: FoodPickerQuery_foods_foods_nutrition_glutamicAcid | null;
  glycine: FoodPickerQuery_foods_foods_nutrition_glycine | null;
  proline: FoodPickerQuery_foods_foods_nutrition_proline | null;
  serine: FoodPickerQuery_foods_foods_nutrition_serine | null;
  hydroxyproline: FoodPickerQuery_foods_foods_nutrition_hydroxyproline | null;
}

export interface FoodPickerQuery_foods_foods {
  id: string;
  name: FoodPickerQuery_foods_foods_name[];
  description: FoodPickerQuery_foods_foods_description[] | null;
  weights: FoodPickerQuery_foods_foods_weights[];
  thumbnail: FoodPickerQuery_foods_foods_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: FoodPickerQuery_foods_foods_nutrition;
}

export interface FoodPickerQuery_foods_pagination {
  hasNext: boolean;
}

export interface FoodPickerQuery_foods {
  foods: FoodPickerQuery_foods_foods[];
  pagination: FoodPickerQuery_foods_pagination;
}

export interface FoodPickerQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_timing {
  totalTime: number | null;
}

export interface FoodPickerQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: FoodPickerQuery_recipes_recipes_author_avatar | null;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition {
  calories: FoodPickerQuery_recipes_recipes_nutrition_calories | null;
  totalCarbs: FoodPickerQuery_recipes_recipes_nutrition_totalCarbs | null;
  fats: FoodPickerQuery_recipes_recipes_nutrition_fats | null;
  proteins: FoodPickerQuery_recipes_recipes_nutrition_proteins | null;
  fiber: FoodPickerQuery_recipes_recipes_nutrition_fiber | null;
  totalAvailableCarbs: FoodPickerQuery_recipes_recipes_nutrition_totalAvailableCarbs | null;
  sodium: FoodPickerQuery_recipes_recipes_nutrition_sodium | null;
  cholesterol: FoodPickerQuery_recipes_recipes_nutrition_cholesterol | null;
  potassium: FoodPickerQuery_recipes_recipes_nutrition_potassium | null;
  sugar: FoodPickerQuery_recipes_recipes_nutrition_sugar | null;
  sucrose: FoodPickerQuery_recipes_recipes_nutrition_sucrose | null;
  glucose: FoodPickerQuery_recipes_recipes_nutrition_glucose | null;
  fructose: FoodPickerQuery_recipes_recipes_nutrition_fructose | null;
  lactose: FoodPickerQuery_recipes_recipes_nutrition_lactose | null;
  maltose: FoodPickerQuery_recipes_recipes_nutrition_maltose | null;
  galactose: FoodPickerQuery_recipes_recipes_nutrition_galactose | null;
  starch: FoodPickerQuery_recipes_recipes_nutrition_starch | null;
  saturatedFats: FoodPickerQuery_recipes_recipes_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPickerQuery_recipes_recipes_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPickerQuery_recipes_recipes_nutrition_polyunsaturatedFats | null;
  transFats: FoodPickerQuery_recipes_recipes_nutrition_transFats | null;
  omega3: FoodPickerQuery_recipes_recipes_nutrition_omega3 | null;
  omega6: FoodPickerQuery_recipes_recipes_nutrition_omega6 | null;
  ALA: FoodPickerQuery_recipes_recipes_nutrition_ALA | null;
  DHA: FoodPickerQuery_recipes_recipes_nutrition_DHA | null;
  EPA: FoodPickerQuery_recipes_recipes_nutrition_EPA | null;
  DPA: FoodPickerQuery_recipes_recipes_nutrition_DPA | null;
  caffeine: FoodPickerQuery_recipes_recipes_nutrition_caffeine | null;
  theobromine: FoodPickerQuery_recipes_recipes_nutrition_theobromine | null;
  calcium: FoodPickerQuery_recipes_recipes_nutrition_calcium | null;
  choline: FoodPickerQuery_recipes_recipes_nutrition_choline | null;
  copper: FoodPickerQuery_recipes_recipes_nutrition_copper | null;
  fluoride: FoodPickerQuery_recipes_recipes_nutrition_fluoride | null;
  folate: FoodPickerQuery_recipes_recipes_nutrition_folate | null;
  iron: FoodPickerQuery_recipes_recipes_nutrition_iron | null;
  lycopene: FoodPickerQuery_recipes_recipes_nutrition_lycopene | null;
  magnesium: FoodPickerQuery_recipes_recipes_nutrition_magnesium | null;
  manganese: FoodPickerQuery_recipes_recipes_nutrition_manganese | null;
  niacin: FoodPickerQuery_recipes_recipes_nutrition_niacin | null;
  phosphorus: FoodPickerQuery_recipes_recipes_nutrition_phosphorus | null;
  retinol: FoodPickerQuery_recipes_recipes_nutrition_retinol | null;
  riboflavin: FoodPickerQuery_recipes_recipes_nutrition_riboflavin | null;
  selenium: FoodPickerQuery_recipes_recipes_nutrition_selenium | null;
  thiamine: FoodPickerQuery_recipes_recipes_nutrition_thiamine | null;
  alphaCarotene: FoodPickerQuery_recipes_recipes_nutrition_alphaCarotene | null;
  betaCarotene: FoodPickerQuery_recipes_recipes_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPickerQuery_recipes_recipes_nutrition_pantothenicAcid | null;
  vitA: FoodPickerQuery_recipes_recipes_nutrition_vitA | null;
  vitAIU: FoodPickerQuery_recipes_recipes_nutrition_vitAIU | null;
  vitB6: FoodPickerQuery_recipes_recipes_nutrition_vitB6 | null;
  vitB12: FoodPickerQuery_recipes_recipes_nutrition_vitB12 | null;
  vitC: FoodPickerQuery_recipes_recipes_nutrition_vitC | null;
  vitD: FoodPickerQuery_recipes_recipes_nutrition_vitD | null;
  vitD2: FoodPickerQuery_recipes_recipes_nutrition_vitD2 | null;
  vitD3: FoodPickerQuery_recipes_recipes_nutrition_vitD3 | null;
  vitE: FoodPickerQuery_recipes_recipes_nutrition_vitE | null;
  vitK: FoodPickerQuery_recipes_recipes_nutrition_vitK | null;
  zinc: FoodPickerQuery_recipes_recipes_nutrition_zinc | null;
  tryptophan: FoodPickerQuery_recipes_recipes_nutrition_tryptophan | null;
  threonine: FoodPickerQuery_recipes_recipes_nutrition_threonine | null;
  isoleucine: FoodPickerQuery_recipes_recipes_nutrition_isoleucine | null;
  leucine: FoodPickerQuery_recipes_recipes_nutrition_leucine | null;
  lysine: FoodPickerQuery_recipes_recipes_nutrition_lysine | null;
  methionine: FoodPickerQuery_recipes_recipes_nutrition_methionine | null;
  cystine: FoodPickerQuery_recipes_recipes_nutrition_cystine | null;
  phenylalanine: FoodPickerQuery_recipes_recipes_nutrition_phenylalanine | null;
  tyrosine: FoodPickerQuery_recipes_recipes_nutrition_tyrosine | null;
  valine: FoodPickerQuery_recipes_recipes_nutrition_valine | null;
  arginine: FoodPickerQuery_recipes_recipes_nutrition_arginine | null;
  histidine: FoodPickerQuery_recipes_recipes_nutrition_histidine | null;
  alanine: FoodPickerQuery_recipes_recipes_nutrition_alanine | null;
  asparticAcid: FoodPickerQuery_recipes_recipes_nutrition_asparticAcid | null;
  glutamicAcid: FoodPickerQuery_recipes_recipes_nutrition_glutamicAcid | null;
  glycine: FoodPickerQuery_recipes_recipes_nutrition_glycine | null;
  proline: FoodPickerQuery_recipes_recipes_nutrition_proline | null;
  serine: FoodPickerQuery_recipes_recipes_nutrition_serine | null;
  hydroxyproline: FoodPickerQuery_recipes_recipes_nutrition_hydroxyproline | null;
}

export interface FoodPickerQuery_recipes_recipes {
  id: string;
  slug: string;
  title: FoodPickerQuery_recipes_recipes_title[];
  timing: FoodPickerQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: FoodPickerQuery_recipes_recipes_thumbnail | null;
  author: FoodPickerQuery_recipes_recipes_author;
  nutrition: FoodPickerQuery_recipes_recipes_nutrition;
}

export interface FoodPickerQuery_recipes_pagination {
  hasNext: boolean;
}

export interface FoodPickerQuery_recipes {
  recipes: FoodPickerQuery_recipes_recipes[];
  pagination: FoodPickerQuery_recipes_pagination;
}

export interface FoodPickerQuery {
  foods: FoodPickerQuery_foods;
  recipes: FoodPickerQuery_recipes;
}

export interface FoodPickerQueryVariables {
  nameSearchQuery?: string | null;
  foodsPage?: number | null;
  skipFoods: boolean;
  recipesPage?: number | null;
  skipRecipes: boolean;
}
