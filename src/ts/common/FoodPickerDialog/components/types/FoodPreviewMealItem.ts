/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodPreviewMealItem
// ====================================================

export interface FoodPreviewMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_customUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_customUnit_name[];
}

export interface FoodPreviewMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPreviewMealItem_unit_Weight_name[];
}

export interface FoodPreviewMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_unit_CustomUnit_name[];
}

export type FoodPreviewMealItem_unit = FoodPreviewMealItem_unit_Weight | FoodPreviewMealItem_unit_CustomUnit;

export interface FoodPreviewMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPreviewMealItem_item_Food_weights_name[];
}

export interface FoodPreviewMealItem_item_Food_thumbnail {
  url: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition {
  calories: FoodPreviewMealItem_item_Food_nutrition_calories | null;
  totalCarbs: FoodPreviewMealItem_item_Food_nutrition_totalCarbs | null;
  fats: FoodPreviewMealItem_item_Food_nutrition_fats | null;
  proteins: FoodPreviewMealItem_item_Food_nutrition_proteins | null;
  fiber: FoodPreviewMealItem_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: FoodPreviewMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: FoodPreviewMealItem_item_Food_nutrition_sodium | null;
  cholesterol: FoodPreviewMealItem_item_Food_nutrition_cholesterol | null;
  potassium: FoodPreviewMealItem_item_Food_nutrition_potassium | null;
  sugar: FoodPreviewMealItem_item_Food_nutrition_sugar | null;
  sucrose: FoodPreviewMealItem_item_Food_nutrition_sucrose | null;
  glucose: FoodPreviewMealItem_item_Food_nutrition_glucose | null;
  fructose: FoodPreviewMealItem_item_Food_nutrition_fructose | null;
  lactose: FoodPreviewMealItem_item_Food_nutrition_lactose | null;
  maltose: FoodPreviewMealItem_item_Food_nutrition_maltose | null;
  galactose: FoodPreviewMealItem_item_Food_nutrition_galactose | null;
  starch: FoodPreviewMealItem_item_Food_nutrition_starch | null;
  saturatedFats: FoodPreviewMealItem_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPreviewMealItem_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPreviewMealItem_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: FoodPreviewMealItem_item_Food_nutrition_transFats | null;
  omega3: FoodPreviewMealItem_item_Food_nutrition_omega3 | null;
  omega6: FoodPreviewMealItem_item_Food_nutrition_omega6 | null;
  ALA: FoodPreviewMealItem_item_Food_nutrition_ALA | null;
  DHA: FoodPreviewMealItem_item_Food_nutrition_DHA | null;
  EPA: FoodPreviewMealItem_item_Food_nutrition_EPA | null;
  DPA: FoodPreviewMealItem_item_Food_nutrition_DPA | null;
  caffeine: FoodPreviewMealItem_item_Food_nutrition_caffeine | null;
  theobromine: FoodPreviewMealItem_item_Food_nutrition_theobromine | null;
  calcium: FoodPreviewMealItem_item_Food_nutrition_calcium | null;
  choline: FoodPreviewMealItem_item_Food_nutrition_choline | null;
  copper: FoodPreviewMealItem_item_Food_nutrition_copper | null;
  fluoride: FoodPreviewMealItem_item_Food_nutrition_fluoride | null;
  folate: FoodPreviewMealItem_item_Food_nutrition_folate | null;
  iron: FoodPreviewMealItem_item_Food_nutrition_iron | null;
  lycopene: FoodPreviewMealItem_item_Food_nutrition_lycopene | null;
  magnesium: FoodPreviewMealItem_item_Food_nutrition_magnesium | null;
  manganese: FoodPreviewMealItem_item_Food_nutrition_manganese | null;
  niacin: FoodPreviewMealItem_item_Food_nutrition_niacin | null;
  phosphorus: FoodPreviewMealItem_item_Food_nutrition_phosphorus | null;
  retinol: FoodPreviewMealItem_item_Food_nutrition_retinol | null;
  riboflavin: FoodPreviewMealItem_item_Food_nutrition_riboflavin | null;
  selenium: FoodPreviewMealItem_item_Food_nutrition_selenium | null;
  thiamine: FoodPreviewMealItem_item_Food_nutrition_thiamine | null;
  alphaCarotene: FoodPreviewMealItem_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: FoodPreviewMealItem_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPreviewMealItem_item_Food_nutrition_pantothenicAcid | null;
  vitA: FoodPreviewMealItem_item_Food_nutrition_vitA | null;
  vitAIU: FoodPreviewMealItem_item_Food_nutrition_vitAIU | null;
  vitB6: FoodPreviewMealItem_item_Food_nutrition_vitB6 | null;
  vitB12: FoodPreviewMealItem_item_Food_nutrition_vitB12 | null;
  vitC: FoodPreviewMealItem_item_Food_nutrition_vitC | null;
  vitD: FoodPreviewMealItem_item_Food_nutrition_vitD | null;
  vitD2: FoodPreviewMealItem_item_Food_nutrition_vitD2 | null;
  vitD3: FoodPreviewMealItem_item_Food_nutrition_vitD3 | null;
  vitE: FoodPreviewMealItem_item_Food_nutrition_vitE | null;
  vitK: FoodPreviewMealItem_item_Food_nutrition_vitK | null;
  zinc: FoodPreviewMealItem_item_Food_nutrition_zinc | null;
  tryptophan: FoodPreviewMealItem_item_Food_nutrition_tryptophan | null;
  threonine: FoodPreviewMealItem_item_Food_nutrition_threonine | null;
  isoleucine: FoodPreviewMealItem_item_Food_nutrition_isoleucine | null;
  leucine: FoodPreviewMealItem_item_Food_nutrition_leucine | null;
  lysine: FoodPreviewMealItem_item_Food_nutrition_lysine | null;
  methionine: FoodPreviewMealItem_item_Food_nutrition_methionine | null;
  cystine: FoodPreviewMealItem_item_Food_nutrition_cystine | null;
  phenylalanine: FoodPreviewMealItem_item_Food_nutrition_phenylalanine | null;
  tyrosine: FoodPreviewMealItem_item_Food_nutrition_tyrosine | null;
  valine: FoodPreviewMealItem_item_Food_nutrition_valine | null;
  arginine: FoodPreviewMealItem_item_Food_nutrition_arginine | null;
  histidine: FoodPreviewMealItem_item_Food_nutrition_histidine | null;
  alanine: FoodPreviewMealItem_item_Food_nutrition_alanine | null;
  asparticAcid: FoodPreviewMealItem_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: FoodPreviewMealItem_item_Food_nutrition_glutamicAcid | null;
  glycine: FoodPreviewMealItem_item_Food_nutrition_glycine | null;
  proline: FoodPreviewMealItem_item_Food_nutrition_proline | null;
  serine: FoodPreviewMealItem_item_Food_nutrition_serine | null;
  hydroxyproline: FoodPreviewMealItem_item_Food_nutrition_hydroxyproline | null;
}

export interface FoodPreviewMealItem_item_Food {
  id: string;
  name: FoodPreviewMealItem_item_Food_name[];
  description: FoodPreviewMealItem_item_Food_description[] | null;
  weights: FoodPreviewMealItem_item_Food_weights[];
  thumbnail: FoodPreviewMealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: FoodPreviewMealItem_item_Food_nutrition;
}

export interface FoodPreviewMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_timing {
  totalTime: number | null;
}

export interface FoodPreviewMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: FoodPreviewMealItem_item_Recipe_author_avatar | null;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition {
  calories: FoodPreviewMealItem_item_Recipe_nutrition_calories | null;
  totalCarbs: FoodPreviewMealItem_item_Recipe_nutrition_totalCarbs | null;
  fats: FoodPreviewMealItem_item_Recipe_nutrition_fats | null;
  proteins: FoodPreviewMealItem_item_Recipe_nutrition_proteins | null;
  fiber: FoodPreviewMealItem_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: FoodPreviewMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: FoodPreviewMealItem_item_Recipe_nutrition_sodium | null;
  cholesterol: FoodPreviewMealItem_item_Recipe_nutrition_cholesterol | null;
  potassium: FoodPreviewMealItem_item_Recipe_nutrition_potassium | null;
  sugar: FoodPreviewMealItem_item_Recipe_nutrition_sugar | null;
  sucrose: FoodPreviewMealItem_item_Recipe_nutrition_sucrose | null;
  glucose: FoodPreviewMealItem_item_Recipe_nutrition_glucose | null;
  fructose: FoodPreviewMealItem_item_Recipe_nutrition_fructose | null;
  lactose: FoodPreviewMealItem_item_Recipe_nutrition_lactose | null;
  maltose: FoodPreviewMealItem_item_Recipe_nutrition_maltose | null;
  galactose: FoodPreviewMealItem_item_Recipe_nutrition_galactose | null;
  starch: FoodPreviewMealItem_item_Recipe_nutrition_starch | null;
  saturatedFats: FoodPreviewMealItem_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: FoodPreviewMealItem_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: FoodPreviewMealItem_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: FoodPreviewMealItem_item_Recipe_nutrition_transFats | null;
  omega3: FoodPreviewMealItem_item_Recipe_nutrition_omega3 | null;
  omega6: FoodPreviewMealItem_item_Recipe_nutrition_omega6 | null;
  ALA: FoodPreviewMealItem_item_Recipe_nutrition_ALA | null;
  DHA: FoodPreviewMealItem_item_Recipe_nutrition_DHA | null;
  EPA: FoodPreviewMealItem_item_Recipe_nutrition_EPA | null;
  DPA: FoodPreviewMealItem_item_Recipe_nutrition_DPA | null;
  caffeine: FoodPreviewMealItem_item_Recipe_nutrition_caffeine | null;
  theobromine: FoodPreviewMealItem_item_Recipe_nutrition_theobromine | null;
  calcium: FoodPreviewMealItem_item_Recipe_nutrition_calcium | null;
  choline: FoodPreviewMealItem_item_Recipe_nutrition_choline | null;
  copper: FoodPreviewMealItem_item_Recipe_nutrition_copper | null;
  fluoride: FoodPreviewMealItem_item_Recipe_nutrition_fluoride | null;
  folate: FoodPreviewMealItem_item_Recipe_nutrition_folate | null;
  iron: FoodPreviewMealItem_item_Recipe_nutrition_iron | null;
  lycopene: FoodPreviewMealItem_item_Recipe_nutrition_lycopene | null;
  magnesium: FoodPreviewMealItem_item_Recipe_nutrition_magnesium | null;
  manganese: FoodPreviewMealItem_item_Recipe_nutrition_manganese | null;
  niacin: FoodPreviewMealItem_item_Recipe_nutrition_niacin | null;
  phosphorus: FoodPreviewMealItem_item_Recipe_nutrition_phosphorus | null;
  retinol: FoodPreviewMealItem_item_Recipe_nutrition_retinol | null;
  riboflavin: FoodPreviewMealItem_item_Recipe_nutrition_riboflavin | null;
  selenium: FoodPreviewMealItem_item_Recipe_nutrition_selenium | null;
  thiamine: FoodPreviewMealItem_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: FoodPreviewMealItem_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: FoodPreviewMealItem_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: FoodPreviewMealItem_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: FoodPreviewMealItem_item_Recipe_nutrition_vitA | null;
  vitAIU: FoodPreviewMealItem_item_Recipe_nutrition_vitAIU | null;
  vitB6: FoodPreviewMealItem_item_Recipe_nutrition_vitB6 | null;
  vitB12: FoodPreviewMealItem_item_Recipe_nutrition_vitB12 | null;
  vitC: FoodPreviewMealItem_item_Recipe_nutrition_vitC | null;
  vitD: FoodPreviewMealItem_item_Recipe_nutrition_vitD | null;
  vitD2: FoodPreviewMealItem_item_Recipe_nutrition_vitD2 | null;
  vitD3: FoodPreviewMealItem_item_Recipe_nutrition_vitD3 | null;
  vitE: FoodPreviewMealItem_item_Recipe_nutrition_vitE | null;
  vitK: FoodPreviewMealItem_item_Recipe_nutrition_vitK | null;
  zinc: FoodPreviewMealItem_item_Recipe_nutrition_zinc | null;
  tryptophan: FoodPreviewMealItem_item_Recipe_nutrition_tryptophan | null;
  threonine: FoodPreviewMealItem_item_Recipe_nutrition_threonine | null;
  isoleucine: FoodPreviewMealItem_item_Recipe_nutrition_isoleucine | null;
  leucine: FoodPreviewMealItem_item_Recipe_nutrition_leucine | null;
  lysine: FoodPreviewMealItem_item_Recipe_nutrition_lysine | null;
  methionine: FoodPreviewMealItem_item_Recipe_nutrition_methionine | null;
  cystine: FoodPreviewMealItem_item_Recipe_nutrition_cystine | null;
  phenylalanine: FoodPreviewMealItem_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: FoodPreviewMealItem_item_Recipe_nutrition_tyrosine | null;
  valine: FoodPreviewMealItem_item_Recipe_nutrition_valine | null;
  arginine: FoodPreviewMealItem_item_Recipe_nutrition_arginine | null;
  histidine: FoodPreviewMealItem_item_Recipe_nutrition_histidine | null;
  alanine: FoodPreviewMealItem_item_Recipe_nutrition_alanine | null;
  asparticAcid: FoodPreviewMealItem_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: FoodPreviewMealItem_item_Recipe_nutrition_glutamicAcid | null;
  glycine: FoodPreviewMealItem_item_Recipe_nutrition_glycine | null;
  proline: FoodPreviewMealItem_item_Recipe_nutrition_proline | null;
  serine: FoodPreviewMealItem_item_Recipe_nutrition_serine | null;
  hydroxyproline: FoodPreviewMealItem_item_Recipe_nutrition_hydroxyproline | null;
}

export interface FoodPreviewMealItem_item_Recipe {
  id: string;
  slug: string;
  title: FoodPreviewMealItem_item_Recipe_title[];
  timing: FoodPreviewMealItem_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: FoodPreviewMealItem_item_Recipe_thumbnail | null;
  author: FoodPreviewMealItem_item_Recipe_author;
  nutrition: FoodPreviewMealItem_item_Recipe_nutrition;
}

export type FoodPreviewMealItem_item = FoodPreviewMealItem_item_Food | FoodPreviewMealItem_item_Recipe;

export interface FoodPreviewMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: FoodPreviewMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: FoodPreviewMealItem_description[] | null;
  amount: number | null;
  customUnit: FoodPreviewMealItem_customUnit | null;
  isOptional: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: FoodPreviewMealItem_unit | null;
  hasAlternatives: boolean | null;
  item: FoodPreviewMealItem_item | null;
}
