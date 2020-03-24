/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: MealItemRowMealItem
// ====================================================

export interface MealItemRowMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_customUnit_name[];
}

export interface MealItemRowMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_unit_Weight_name[];
}

export interface MealItemRowMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_unit = MealItemRowMealItem_unit_Weight | MealItemRowMealItem_unit_CustomUnit;

export interface MealItemRowMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_item_Food_weights_name[];
}

export interface MealItemRowMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition {
  calories: MealItemRowMealItem_item_Food_nutrition_calories | null;
  totalCarbs: MealItemRowMealItem_item_Food_nutrition_totalCarbs | null;
  fats: MealItemRowMealItem_item_Food_nutrition_fats | null;
  proteins: MealItemRowMealItem_item_Food_nutrition_proteins | null;
  fiber: MealItemRowMealItem_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemRowMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemRowMealItem_item_Food_nutrition_sodium | null;
  cholesterol: MealItemRowMealItem_item_Food_nutrition_cholesterol | null;
  potassium: MealItemRowMealItem_item_Food_nutrition_potassium | null;
  sugar: MealItemRowMealItem_item_Food_nutrition_sugar | null;
  sucrose: MealItemRowMealItem_item_Food_nutrition_sucrose | null;
  glucose: MealItemRowMealItem_item_Food_nutrition_glucose | null;
  fructose: MealItemRowMealItem_item_Food_nutrition_fructose | null;
  lactose: MealItemRowMealItem_item_Food_nutrition_lactose | null;
  maltose: MealItemRowMealItem_item_Food_nutrition_maltose | null;
  galactose: MealItemRowMealItem_item_Food_nutrition_galactose | null;
  starch: MealItemRowMealItem_item_Food_nutrition_starch | null;
  saturatedFats: MealItemRowMealItem_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemRowMealItem_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemRowMealItem_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemRowMealItem_item_Food_nutrition_transFats | null;
  omega3: MealItemRowMealItem_item_Food_nutrition_omega3 | null;
  omega6: MealItemRowMealItem_item_Food_nutrition_omega6 | null;
  ALA: MealItemRowMealItem_item_Food_nutrition_ALA | null;
  DHA: MealItemRowMealItem_item_Food_nutrition_DHA | null;
  EPA: MealItemRowMealItem_item_Food_nutrition_EPA | null;
  DPA: MealItemRowMealItem_item_Food_nutrition_DPA | null;
  caffeine: MealItemRowMealItem_item_Food_nutrition_caffeine | null;
  theobromine: MealItemRowMealItem_item_Food_nutrition_theobromine | null;
  calcium: MealItemRowMealItem_item_Food_nutrition_calcium | null;
  choline: MealItemRowMealItem_item_Food_nutrition_choline | null;
  copper: MealItemRowMealItem_item_Food_nutrition_copper | null;
  fluoride: MealItemRowMealItem_item_Food_nutrition_fluoride | null;
  folate: MealItemRowMealItem_item_Food_nutrition_folate | null;
  iron: MealItemRowMealItem_item_Food_nutrition_iron | null;
  lycopene: MealItemRowMealItem_item_Food_nutrition_lycopene | null;
  magnesium: MealItemRowMealItem_item_Food_nutrition_magnesium | null;
  manganese: MealItemRowMealItem_item_Food_nutrition_manganese | null;
  niacin: MealItemRowMealItem_item_Food_nutrition_niacin | null;
  phosphorus: MealItemRowMealItem_item_Food_nutrition_phosphorus | null;
  retinol: MealItemRowMealItem_item_Food_nutrition_retinol | null;
  riboflavin: MealItemRowMealItem_item_Food_nutrition_riboflavin | null;
  selenium: MealItemRowMealItem_item_Food_nutrition_selenium | null;
  thiamine: MealItemRowMealItem_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemRowMealItem_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemRowMealItem_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemRowMealItem_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemRowMealItem_item_Food_nutrition_vitA | null;
  vitAIU: MealItemRowMealItem_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemRowMealItem_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemRowMealItem_item_Food_nutrition_vitB12 | null;
  vitC: MealItemRowMealItem_item_Food_nutrition_vitC | null;
  vitD: MealItemRowMealItem_item_Food_nutrition_vitD | null;
  vitD2: MealItemRowMealItem_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemRowMealItem_item_Food_nutrition_vitD3 | null;
  vitE: MealItemRowMealItem_item_Food_nutrition_vitE | null;
  vitK: MealItemRowMealItem_item_Food_nutrition_vitK | null;
  zinc: MealItemRowMealItem_item_Food_nutrition_zinc | null;
  tryptophan: MealItemRowMealItem_item_Food_nutrition_tryptophan | null;
  threonine: MealItemRowMealItem_item_Food_nutrition_threonine | null;
  isoleucine: MealItemRowMealItem_item_Food_nutrition_isoleucine | null;
  leucine: MealItemRowMealItem_item_Food_nutrition_leucine | null;
  lysine: MealItemRowMealItem_item_Food_nutrition_lysine | null;
  methionine: MealItemRowMealItem_item_Food_nutrition_methionine | null;
  cystine: MealItemRowMealItem_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemRowMealItem_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemRowMealItem_item_Food_nutrition_tyrosine | null;
  valine: MealItemRowMealItem_item_Food_nutrition_valine | null;
  arginine: MealItemRowMealItem_item_Food_nutrition_arginine | null;
  histidine: MealItemRowMealItem_item_Food_nutrition_histidine | null;
  alanine: MealItemRowMealItem_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemRowMealItem_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemRowMealItem_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemRowMealItem_item_Food_nutrition_glycine | null;
  proline: MealItemRowMealItem_item_Food_nutrition_proline | null;
  serine: MealItemRowMealItem_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemRowMealItem_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemRowMealItem_item_Food {
  id: string;
  name: MealItemRowMealItem_item_Food_name[];
  description: MealItemRowMealItem_item_Food_description[] | null;
  weights: MealItemRowMealItem_item_Food_weights[];
  thumbnail: MealItemRowMealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItemRowMealItem_item_Food_nutrition;
}

export interface MealItemRowMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_timing {
  totalTime: number | null;
}

export interface MealItemRowMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemRowMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition {
  calories: MealItemRowMealItem_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemRowMealItem_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemRowMealItem_item_Recipe_nutrition_fats | null;
  proteins: MealItemRowMealItem_item_Recipe_nutrition_proteins | null;
  fiber: MealItemRowMealItem_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemRowMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemRowMealItem_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemRowMealItem_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemRowMealItem_item_Recipe_nutrition_potassium | null;
  sugar: MealItemRowMealItem_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemRowMealItem_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemRowMealItem_item_Recipe_nutrition_glucose | null;
  fructose: MealItemRowMealItem_item_Recipe_nutrition_fructose | null;
  lactose: MealItemRowMealItem_item_Recipe_nutrition_lactose | null;
  maltose: MealItemRowMealItem_item_Recipe_nutrition_maltose | null;
  galactose: MealItemRowMealItem_item_Recipe_nutrition_galactose | null;
  starch: MealItemRowMealItem_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemRowMealItem_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemRowMealItem_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemRowMealItem_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemRowMealItem_item_Recipe_nutrition_transFats | null;
  omega3: MealItemRowMealItem_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemRowMealItem_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemRowMealItem_item_Recipe_nutrition_ALA | null;
  DHA: MealItemRowMealItem_item_Recipe_nutrition_DHA | null;
  EPA: MealItemRowMealItem_item_Recipe_nutrition_EPA | null;
  DPA: MealItemRowMealItem_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemRowMealItem_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemRowMealItem_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemRowMealItem_item_Recipe_nutrition_calcium | null;
  choline: MealItemRowMealItem_item_Recipe_nutrition_choline | null;
  copper: MealItemRowMealItem_item_Recipe_nutrition_copper | null;
  fluoride: MealItemRowMealItem_item_Recipe_nutrition_fluoride | null;
  folate: MealItemRowMealItem_item_Recipe_nutrition_folate | null;
  iron: MealItemRowMealItem_item_Recipe_nutrition_iron | null;
  lycopene: MealItemRowMealItem_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemRowMealItem_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemRowMealItem_item_Recipe_nutrition_manganese | null;
  niacin: MealItemRowMealItem_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemRowMealItem_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemRowMealItem_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemRowMealItem_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemRowMealItem_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemRowMealItem_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemRowMealItem_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemRowMealItem_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemRowMealItem_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemRowMealItem_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemRowMealItem_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemRowMealItem_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemRowMealItem_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemRowMealItem_item_Recipe_nutrition_vitC | null;
  vitD: MealItemRowMealItem_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemRowMealItem_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemRowMealItem_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemRowMealItem_item_Recipe_nutrition_vitE | null;
  vitK: MealItemRowMealItem_item_Recipe_nutrition_vitK | null;
  zinc: MealItemRowMealItem_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemRowMealItem_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemRowMealItem_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemRowMealItem_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemRowMealItem_item_Recipe_nutrition_leucine | null;
  lysine: MealItemRowMealItem_item_Recipe_nutrition_lysine | null;
  methionine: MealItemRowMealItem_item_Recipe_nutrition_methionine | null;
  cystine: MealItemRowMealItem_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemRowMealItem_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemRowMealItem_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemRowMealItem_item_Recipe_nutrition_valine | null;
  arginine: MealItemRowMealItem_item_Recipe_nutrition_arginine | null;
  histidine: MealItemRowMealItem_item_Recipe_nutrition_histidine | null;
  alanine: MealItemRowMealItem_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemRowMealItem_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemRowMealItem_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemRowMealItem_item_Recipe_nutrition_glycine | null;
  proline: MealItemRowMealItem_item_Recipe_nutrition_proline | null;
  serine: MealItemRowMealItem_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemRowMealItem_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemRowMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_item_Recipe_title[];
  timing: MealItemRowMealItem_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemRowMealItem_item_Recipe_thumbnail | null;
  author: MealItemRowMealItem_item_Recipe_author;
  nutrition: MealItemRowMealItem_item_Recipe_nutrition;
}

export type MealItemRowMealItem_item = MealItemRowMealItem_item_Food | MealItemRowMealItem_item_Recipe;

export interface MealItemRowMealItem_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_customUnit_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_unit_Weight_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_alternativeMealItems_unit = MealItemRowMealItem_alternativeMealItems_unit_Weight | MealItemRowMealItem_alternativeMealItems_unit_CustomUnit;

export interface MealItemRowMealItem_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_item_Food_weights_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food {
  id: string;
  name: MealItemRowMealItem_alternativeMealItems_item_Food_name[];
  description: MealItemRowMealItem_alternativeMealItems_item_Food_description[] | null;
  weights: MealItemRowMealItem_alternativeMealItems_item_Food_weights[];
  thumbnail: MealItemRowMealItem_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_timing {
  totalTime: number | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemRowMealItem_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_alternativeMealItems_item_Recipe_title[];
  timing: MealItemRowMealItem_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemRowMealItem_alternativeMealItems_item_Recipe_thumbnail | null;
  author: MealItemRowMealItem_alternativeMealItems_item_Recipe_author;
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition;
}

export type MealItemRowMealItem_alternativeMealItems_item = MealItemRowMealItem_alternativeMealItems_item_Food | MealItemRowMealItem_alternativeMealItems_item_Recipe;

export interface MealItemRowMealItem_alternativeMealItems {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_alternativeMealItems_description[] | null;
  isOptional: boolean | null;
  customUnit: MealItemRowMealItem_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_alternativeMealItems_unit | null;
  item: MealItemRowMealItem_alternativeMealItems_item | null;
}

export interface MealItemRowMealItem {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_description[] | null;
  customUnit: MealItemRowMealItem_customUnit | null;
  isOptional: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_unit | null;
  item: MealItemRowMealItem_item | null;
  alternativeMealItems: MealItemRowMealItem_alternativeMealItems[];
}
