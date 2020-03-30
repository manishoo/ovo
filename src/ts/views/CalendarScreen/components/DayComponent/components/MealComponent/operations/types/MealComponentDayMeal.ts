/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, MealAvailableTime, MealSize, RecipeStatus } from './../../../../../../../../models/global-types'

// ====================================================
// GraphQL fragment: MealComponentDayMeal
// ====================================================

export interface MealComponentDayMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentDayMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_customUnit {
  gramWeight: number | null;
  name: MealComponentDayMeal_items_customUnit_name[];
}

export interface MealComponentDayMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentDayMeal_items_unit_Weight_name[];
}

export interface MealComponentDayMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentDayMeal_items_unit_CustomUnit_name[];
}

export type MealComponentDayMeal_items_unit =
  MealComponentDayMeal_items_unit_Weight
  | MealComponentDayMeal_items_unit_CustomUnit;

export interface MealComponentDayMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentDayMeal_items_item_Food_weights_name[];
}

export interface MealComponentDayMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Food_nutrition {
  calories: MealComponentDayMeal_items_item_Food_nutrition_calories | null;
  totalCarbs: MealComponentDayMeal_items_item_Food_nutrition_totalCarbs | null;
  fats: MealComponentDayMeal_items_item_Food_nutrition_fats | null;
  proteins: MealComponentDayMeal_items_item_Food_nutrition_proteins | null;
  fiber: MealComponentDayMeal_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentDayMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentDayMeal_items_item_Food_nutrition_sodium | null;
  cholesterol: MealComponentDayMeal_items_item_Food_nutrition_cholesterol | null;
  potassium: MealComponentDayMeal_items_item_Food_nutrition_potassium | null;
  sugar: MealComponentDayMeal_items_item_Food_nutrition_sugar | null;
  sucrose: MealComponentDayMeal_items_item_Food_nutrition_sucrose | null;
  glucose: MealComponentDayMeal_items_item_Food_nutrition_glucose | null;
  fructose: MealComponentDayMeal_items_item_Food_nutrition_fructose | null;
  lactose: MealComponentDayMeal_items_item_Food_nutrition_lactose | null;
  maltose: MealComponentDayMeal_items_item_Food_nutrition_maltose | null;
  galactose: MealComponentDayMeal_items_item_Food_nutrition_galactose | null;
  starch: MealComponentDayMeal_items_item_Food_nutrition_starch | null;
  saturatedFats: MealComponentDayMeal_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentDayMeal_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentDayMeal_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentDayMeal_items_item_Food_nutrition_transFats | null;
  omega3: MealComponentDayMeal_items_item_Food_nutrition_omega3 | null;
  omega6: MealComponentDayMeal_items_item_Food_nutrition_omega6 | null;
  ALA: MealComponentDayMeal_items_item_Food_nutrition_ALA | null;
  DHA: MealComponentDayMeal_items_item_Food_nutrition_DHA | null;
  EPA: MealComponentDayMeal_items_item_Food_nutrition_EPA | null;
  DPA: MealComponentDayMeal_items_item_Food_nutrition_DPA | null;
  caffeine: MealComponentDayMeal_items_item_Food_nutrition_caffeine | null;
  theobromine: MealComponentDayMeal_items_item_Food_nutrition_theobromine | null;
  calcium: MealComponentDayMeal_items_item_Food_nutrition_calcium | null;
  choline: MealComponentDayMeal_items_item_Food_nutrition_choline | null;
  copper: MealComponentDayMeal_items_item_Food_nutrition_copper | null;
  fluoride: MealComponentDayMeal_items_item_Food_nutrition_fluoride | null;
  folate: MealComponentDayMeal_items_item_Food_nutrition_folate | null;
  iron: MealComponentDayMeal_items_item_Food_nutrition_iron | null;
  lycopene: MealComponentDayMeal_items_item_Food_nutrition_lycopene | null;
  magnesium: MealComponentDayMeal_items_item_Food_nutrition_magnesium | null;
  manganese: MealComponentDayMeal_items_item_Food_nutrition_manganese | null;
  niacin: MealComponentDayMeal_items_item_Food_nutrition_niacin | null;
  phosphorus: MealComponentDayMeal_items_item_Food_nutrition_phosphorus | null;
  retinol: MealComponentDayMeal_items_item_Food_nutrition_retinol | null;
  riboflavin: MealComponentDayMeal_items_item_Food_nutrition_riboflavin | null;
  selenium: MealComponentDayMeal_items_item_Food_nutrition_selenium | null;
  thiamine: MealComponentDayMeal_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealComponentDayMeal_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentDayMeal_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentDayMeal_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealComponentDayMeal_items_item_Food_nutrition_vitA | null;
  vitAIU: MealComponentDayMeal_items_item_Food_nutrition_vitAIU | null;
  vitB6: MealComponentDayMeal_items_item_Food_nutrition_vitB6 | null;
  vitB12: MealComponentDayMeal_items_item_Food_nutrition_vitB12 | null;
  vitC: MealComponentDayMeal_items_item_Food_nutrition_vitC | null;
  vitD: MealComponentDayMeal_items_item_Food_nutrition_vitD | null;
  vitD2: MealComponentDayMeal_items_item_Food_nutrition_vitD2 | null;
  vitD3: MealComponentDayMeal_items_item_Food_nutrition_vitD3 | null;
  vitE: MealComponentDayMeal_items_item_Food_nutrition_vitE | null;
  vitK: MealComponentDayMeal_items_item_Food_nutrition_vitK | null;
  zinc: MealComponentDayMeal_items_item_Food_nutrition_zinc | null;
  tryptophan: MealComponentDayMeal_items_item_Food_nutrition_tryptophan | null;
  threonine: MealComponentDayMeal_items_item_Food_nutrition_threonine | null;
  isoleucine: MealComponentDayMeal_items_item_Food_nutrition_isoleucine | null;
  leucine: MealComponentDayMeal_items_item_Food_nutrition_leucine | null;
  lysine: MealComponentDayMeal_items_item_Food_nutrition_lysine | null;
  methionine: MealComponentDayMeal_items_item_Food_nutrition_methionine | null;
  cystine: MealComponentDayMeal_items_item_Food_nutrition_cystine | null;
  phenylalanine: MealComponentDayMeal_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealComponentDayMeal_items_item_Food_nutrition_tyrosine | null;
  valine: MealComponentDayMeal_items_item_Food_nutrition_valine | null;
  arginine: MealComponentDayMeal_items_item_Food_nutrition_arginine | null;
  histidine: MealComponentDayMeal_items_item_Food_nutrition_histidine | null;
  alanine: MealComponentDayMeal_items_item_Food_nutrition_alanine | null;
  asparticAcid: MealComponentDayMeal_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentDayMeal_items_item_Food_nutrition_glutamicAcid | null;
  glycine: MealComponentDayMeal_items_item_Food_nutrition_glycine | null;
  proline: MealComponentDayMeal_items_item_Food_nutrition_proline | null;
  serine: MealComponentDayMeal_items_item_Food_nutrition_serine | null;
  hydroxyproline: MealComponentDayMeal_items_item_Food_nutrition_hydroxyproline | null;
}

export interface MealComponentDayMeal_items_item_Food {
  id: string;
  name: MealComponentDayMeal_items_item_Food_name[];
  description: MealComponentDayMeal_items_item_Food_description[] | null;
  weights: MealComponentDayMeal_items_item_Food_weights[];
  thumbnail: MealComponentDayMeal_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealComponentDayMeal_items_item_Food_nutrition;
}

export interface MealComponentDayMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentDayMeal_items_item_Recipe_timing {
  totalTime: number | null;
}

export interface MealComponentDayMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealComponentDayMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealComponentDayMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealComponentDayMeal_items_item_Recipe_author_avatar | null;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealComponentDayMeal_items_item_Recipe_nutrition {
  calories: MealComponentDayMeal_items_item_Recipe_nutrition_calories | null;
  totalCarbs: MealComponentDayMeal_items_item_Recipe_nutrition_totalCarbs | null;
  fats: MealComponentDayMeal_items_item_Recipe_nutrition_fats | null;
  proteins: MealComponentDayMeal_items_item_Recipe_nutrition_proteins | null;
  fiber: MealComponentDayMeal_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealComponentDayMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealComponentDayMeal_items_item_Recipe_nutrition_sodium | null;
  cholesterol: MealComponentDayMeal_items_item_Recipe_nutrition_cholesterol | null;
  potassium: MealComponentDayMeal_items_item_Recipe_nutrition_potassium | null;
  sugar: MealComponentDayMeal_items_item_Recipe_nutrition_sugar | null;
  sucrose: MealComponentDayMeal_items_item_Recipe_nutrition_sucrose | null;
  glucose: MealComponentDayMeal_items_item_Recipe_nutrition_glucose | null;
  fructose: MealComponentDayMeal_items_item_Recipe_nutrition_fructose | null;
  lactose: MealComponentDayMeal_items_item_Recipe_nutrition_lactose | null;
  maltose: MealComponentDayMeal_items_item_Recipe_nutrition_maltose | null;
  galactose: MealComponentDayMeal_items_item_Recipe_nutrition_galactose | null;
  starch: MealComponentDayMeal_items_item_Recipe_nutrition_starch | null;
  saturatedFats: MealComponentDayMeal_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealComponentDayMeal_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealComponentDayMeal_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealComponentDayMeal_items_item_Recipe_nutrition_transFats | null;
  omega3: MealComponentDayMeal_items_item_Recipe_nutrition_omega3 | null;
  omega6: MealComponentDayMeal_items_item_Recipe_nutrition_omega6 | null;
  ALA: MealComponentDayMeal_items_item_Recipe_nutrition_ALA | null;
  DHA: MealComponentDayMeal_items_item_Recipe_nutrition_DHA | null;
  EPA: MealComponentDayMeal_items_item_Recipe_nutrition_EPA | null;
  DPA: MealComponentDayMeal_items_item_Recipe_nutrition_DPA | null;
  caffeine: MealComponentDayMeal_items_item_Recipe_nutrition_caffeine | null;
  theobromine: MealComponentDayMeal_items_item_Recipe_nutrition_theobromine | null;
  calcium: MealComponentDayMeal_items_item_Recipe_nutrition_calcium | null;
  choline: MealComponentDayMeal_items_item_Recipe_nutrition_choline | null;
  copper: MealComponentDayMeal_items_item_Recipe_nutrition_copper | null;
  fluoride: MealComponentDayMeal_items_item_Recipe_nutrition_fluoride | null;
  folate: MealComponentDayMeal_items_item_Recipe_nutrition_folate | null;
  iron: MealComponentDayMeal_items_item_Recipe_nutrition_iron | null;
  lycopene: MealComponentDayMeal_items_item_Recipe_nutrition_lycopene | null;
  magnesium: MealComponentDayMeal_items_item_Recipe_nutrition_magnesium | null;
  manganese: MealComponentDayMeal_items_item_Recipe_nutrition_manganese | null;
  niacin: MealComponentDayMeal_items_item_Recipe_nutrition_niacin | null;
  phosphorus: MealComponentDayMeal_items_item_Recipe_nutrition_phosphorus | null;
  retinol: MealComponentDayMeal_items_item_Recipe_nutrition_retinol | null;
  riboflavin: MealComponentDayMeal_items_item_Recipe_nutrition_riboflavin | null;
  selenium: MealComponentDayMeal_items_item_Recipe_nutrition_selenium | null;
  thiamine: MealComponentDayMeal_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealComponentDayMeal_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealComponentDayMeal_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealComponentDayMeal_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealComponentDayMeal_items_item_Recipe_nutrition_vitA | null;
  vitAIU: MealComponentDayMeal_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealComponentDayMeal_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealComponentDayMeal_items_item_Recipe_nutrition_vitB12 | null;
  vitC: MealComponentDayMeal_items_item_Recipe_nutrition_vitC | null;
  vitD: MealComponentDayMeal_items_item_Recipe_nutrition_vitD | null;
  vitD2: MealComponentDayMeal_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealComponentDayMeal_items_item_Recipe_nutrition_vitD3 | null;
  vitE: MealComponentDayMeal_items_item_Recipe_nutrition_vitE | null;
  vitK: MealComponentDayMeal_items_item_Recipe_nutrition_vitK | null;
  zinc: MealComponentDayMeal_items_item_Recipe_nutrition_zinc | null;
  tryptophan: MealComponentDayMeal_items_item_Recipe_nutrition_tryptophan | null;
  threonine: MealComponentDayMeal_items_item_Recipe_nutrition_threonine | null;
  isoleucine: MealComponentDayMeal_items_item_Recipe_nutrition_isoleucine | null;
  leucine: MealComponentDayMeal_items_item_Recipe_nutrition_leucine | null;
  lysine: MealComponentDayMeal_items_item_Recipe_nutrition_lysine | null;
  methionine: MealComponentDayMeal_items_item_Recipe_nutrition_methionine | null;
  cystine: MealComponentDayMeal_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealComponentDayMeal_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealComponentDayMeal_items_item_Recipe_nutrition_tyrosine | null;
  valine: MealComponentDayMeal_items_item_Recipe_nutrition_valine | null;
  arginine: MealComponentDayMeal_items_item_Recipe_nutrition_arginine | null;
  histidine: MealComponentDayMeal_items_item_Recipe_nutrition_histidine | null;
  alanine: MealComponentDayMeal_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealComponentDayMeal_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealComponentDayMeal_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealComponentDayMeal_items_item_Recipe_nutrition_glycine | null;
  proline: MealComponentDayMeal_items_item_Recipe_nutrition_proline | null;
  serine: MealComponentDayMeal_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealComponentDayMeal_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealComponentDayMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentDayMeal_items_item_Recipe_title[];
  timing: MealComponentDayMeal_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealComponentDayMeal_items_item_Recipe_thumbnail | null;
  author: MealComponentDayMeal_items_item_Recipe_author;
  nutrition: MealComponentDayMeal_items_item_Recipe_nutrition;
}

export type MealComponentDayMeal_items_item =
  MealComponentDayMeal_items_item_Food
  | MealComponentDayMeal_items_item_Recipe;

export interface MealComponentDayMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentDayMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentDayMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealComponentDayMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentDayMeal_items_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: MealComponentDayMeal_items_item | null;
}

export interface MealComponentDayMeal {
  id: any;
  time: any | null;
  /**
   * if this DayMeal was associated with a Meal, this is its id
   */
  mealId: any | null;
  ate: boolean | null;
  userMeal: MealComponentDayMeal_userMeal;
  items: MealComponentDayMeal_items[];
}
