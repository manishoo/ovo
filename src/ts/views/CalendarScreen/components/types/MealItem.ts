/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItem
// ====================================================

export interface MealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_customUnit {
  gramWeight: number | null;
  name: MealItem_customUnit_name[];
}

export interface MealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItem_unit_Weight_name[];
}

export interface MealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItem_unit_CustomUnit_name[];
}

export type MealItem_unit = MealItem_unit_Weight | MealItem_unit_CustomUnit;

export interface MealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItem_item_Food_weights_name[];
}

export interface MealItem_item_Food_image {
  url: string;
}

export interface MealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Food_nutrition {
  calories: MealItem_item_Food_nutrition_calories | null;
  totalCarbs: MealItem_item_Food_nutrition_totalCarbs | null;
  fats: MealItem_item_Food_nutrition_fats | null;
  proteins: MealItem_item_Food_nutrition_proteins | null;
  fiber: MealItem_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItem_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItem_item_Food_nutrition_sodium | null;
  cholesterol: MealItem_item_Food_nutrition_cholesterol | null;
  potassium: MealItem_item_Food_nutrition_potassium | null;
  sugar: MealItem_item_Food_nutrition_sugar | null;
  sucrose: MealItem_item_Food_nutrition_sucrose | null;
  glucose: MealItem_item_Food_nutrition_glucose | null;
  fructose: MealItem_item_Food_nutrition_fructose | null;
  lactose: MealItem_item_Food_nutrition_lactose | null;
  maltose: MealItem_item_Food_nutrition_maltose | null;
  galactose: MealItem_item_Food_nutrition_galactose | null;
  starch: MealItem_item_Food_nutrition_starch | null;
  saturatedFats: MealItem_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItem_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItem_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItem_item_Food_nutrition_transFats | null;
  omega3: MealItem_item_Food_nutrition_omega3 | null;
  omega6: MealItem_item_Food_nutrition_omega6 | null;
  ALA: MealItem_item_Food_nutrition_ALA | null;
  DHA: MealItem_item_Food_nutrition_DHA | null;
  EPA: MealItem_item_Food_nutrition_EPA | null;
  DPA: MealItem_item_Food_nutrition_DPA | null;
  caffeine: MealItem_item_Food_nutrition_caffeine | null;
  theobromine: MealItem_item_Food_nutrition_theobromine | null;
  calcium: MealItem_item_Food_nutrition_calcium | null;
  choline: MealItem_item_Food_nutrition_choline | null;
  copper: MealItem_item_Food_nutrition_copper | null;
  fluoride: MealItem_item_Food_nutrition_fluoride | null;
  folate: MealItem_item_Food_nutrition_folate | null;
  iron: MealItem_item_Food_nutrition_iron | null;
  lycopene: MealItem_item_Food_nutrition_lycopene | null;
  magnesium: MealItem_item_Food_nutrition_magnesium | null;
  manganese: MealItem_item_Food_nutrition_manganese | null;
  niacin: MealItem_item_Food_nutrition_niacin | null;
  phosphorus: MealItem_item_Food_nutrition_phosphorus | null;
  retinol: MealItem_item_Food_nutrition_retinol | null;
  riboflavin: MealItem_item_Food_nutrition_riboflavin | null;
  selenium: MealItem_item_Food_nutrition_selenium | null;
  thiamine: MealItem_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItem_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItem_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItem_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItem_item_Food_nutrition_vitA | null;
  vitAIU: MealItem_item_Food_nutrition_vitAIU | null;
  vitB6: MealItem_item_Food_nutrition_vitB6 | null;
  vitB12: MealItem_item_Food_nutrition_vitB12 | null;
  vitC: MealItem_item_Food_nutrition_vitC | null;
  vitD: MealItem_item_Food_nutrition_vitD | null;
  vitD2: MealItem_item_Food_nutrition_vitD2 | null;
  vitD3: MealItem_item_Food_nutrition_vitD3 | null;
  vitE: MealItem_item_Food_nutrition_vitE | null;
  vitK: MealItem_item_Food_nutrition_vitK | null;
  zinc: MealItem_item_Food_nutrition_zinc | null;
  tryptophan: MealItem_item_Food_nutrition_tryptophan | null;
  threonine: MealItem_item_Food_nutrition_threonine | null;
  isoleucine: MealItem_item_Food_nutrition_isoleucine | null;
  leucine: MealItem_item_Food_nutrition_leucine | null;
  lysine: MealItem_item_Food_nutrition_lysine | null;
  methionine: MealItem_item_Food_nutrition_methionine | null;
  cystine: MealItem_item_Food_nutrition_cystine | null;
  phenylalanine: MealItem_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItem_item_Food_nutrition_tyrosine | null;
  valine: MealItem_item_Food_nutrition_valine | null;
  arginine: MealItem_item_Food_nutrition_arginine | null;
  histidine: MealItem_item_Food_nutrition_histidine | null;
  alanine: MealItem_item_Food_nutrition_alanine | null;
  asparticAcid: MealItem_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItem_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItem_item_Food_nutrition_glycine | null;
  proline: MealItem_item_Food_nutrition_proline | null;
  serine: MealItem_item_Food_nutrition_serine | null;
  hydroxyproline: MealItem_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_origFoodGroups {
  id: string;
  name: MealItem_item_Food_origFoodGroups_name[];
}

export interface MealItem_item_Food {
  id: string;
  name: MealItem_item_Food_name[];
  description: MealItem_item_Food_description[] | null;
  weights: MealItem_item_Food_weights[];
  image: MealItem_item_Food_image | null;
  thumbnail: MealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItem_item_Food_nutrition;
  origFoodGroups: MealItem_item_Food_origFoodGroups[][];
}

export interface MealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_image {
  url: string;
}

export interface MealItem_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface MealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItem_item_Recipe_ingredients_unit = MealItem_item_Recipe_ingredients_unit_Weight | MealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItem_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItem_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: MealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: MealItem_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: MealItem_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: MealItem_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: MealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: MealItem_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: MealItem_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: MealItem_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: MealItem_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: MealItem_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: MealItem_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: MealItem_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: MealItem_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: MealItem_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: MealItem_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: MealItem_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: MealItem_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItem_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItem_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: MealItem_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: MealItem_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: MealItem_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: MealItem_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: MealItem_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: MealItem_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: MealItem_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: MealItem_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: MealItem_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: MealItem_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: MealItem_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: MealItem_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: MealItem_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: MealItem_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: MealItem_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: MealItem_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: MealItem_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: MealItem_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: MealItem_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: MealItem_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: MealItem_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: MealItem_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: MealItem_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: MealItem_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: MealItem_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: MealItem_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: MealItem_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: MealItem_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: MealItem_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: MealItem_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: MealItem_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: MealItem_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: MealItem_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: MealItem_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: MealItem_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: MealItem_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: MealItem_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: MealItem_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: MealItem_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: MealItem_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: MealItem_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: MealItem_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: MealItem_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: MealItem_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: MealItem_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: MealItem_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: MealItem_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: MealItem_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface MealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItem_item_Recipe_ingredients_item_Food_name[];
  description: MealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItem_item_Recipe_ingredients_item_Food_weights[];
  image: MealItem_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: MealItem_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItem_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItem_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealItem_item_Recipe_ingredients_item = MealItem_item_Recipe_ingredients_item_Food | MealItem_item_Recipe_ingredients_item_Recipe;

export interface MealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItem_item_Recipe_ingredients_unit | null;
  item: MealItem_item_Recipe_ingredients_item | null;
}

export interface MealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItem_item_Recipe_author_avatar | null;
}

export interface MealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition {
  calories: MealItem_item_Recipe_nutrition_calories | null;
  totalCarbs: MealItem_item_Recipe_nutrition_totalCarbs | null;
  fats: MealItem_item_Recipe_nutrition_fats | null;
  proteins: MealItem_item_Recipe_nutrition_proteins | null;
  fiber: MealItem_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: MealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: MealItem_item_Recipe_nutrition_sodium | null;
  cholesterol: MealItem_item_Recipe_nutrition_cholesterol | null;
  potassium: MealItem_item_Recipe_nutrition_potassium | null;
  sugar: MealItem_item_Recipe_nutrition_sugar | null;
  sucrose: MealItem_item_Recipe_nutrition_sucrose | null;
  glucose: MealItem_item_Recipe_nutrition_glucose | null;
  fructose: MealItem_item_Recipe_nutrition_fructose | null;
  lactose: MealItem_item_Recipe_nutrition_lactose | null;
  maltose: MealItem_item_Recipe_nutrition_maltose | null;
  galactose: MealItem_item_Recipe_nutrition_galactose | null;
  starch: MealItem_item_Recipe_nutrition_starch | null;
  saturatedFats: MealItem_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: MealItem_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: MealItem_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: MealItem_item_Recipe_nutrition_transFats | null;
  omega3: MealItem_item_Recipe_nutrition_omega3 | null;
  omega6: MealItem_item_Recipe_nutrition_omega6 | null;
  ALA: MealItem_item_Recipe_nutrition_ALA | null;
  DHA: MealItem_item_Recipe_nutrition_DHA | null;
  EPA: MealItem_item_Recipe_nutrition_EPA | null;
  DPA: MealItem_item_Recipe_nutrition_DPA | null;
  caffeine: MealItem_item_Recipe_nutrition_caffeine | null;
  theobromine: MealItem_item_Recipe_nutrition_theobromine | null;
  calcium: MealItem_item_Recipe_nutrition_calcium | null;
  choline: MealItem_item_Recipe_nutrition_choline | null;
  copper: MealItem_item_Recipe_nutrition_copper | null;
  fluoride: MealItem_item_Recipe_nutrition_fluoride | null;
  folate: MealItem_item_Recipe_nutrition_folate | null;
  iron: MealItem_item_Recipe_nutrition_iron | null;
  lycopene: MealItem_item_Recipe_nutrition_lycopene | null;
  magnesium: MealItem_item_Recipe_nutrition_magnesium | null;
  manganese: MealItem_item_Recipe_nutrition_manganese | null;
  niacin: MealItem_item_Recipe_nutrition_niacin | null;
  phosphorus: MealItem_item_Recipe_nutrition_phosphorus | null;
  retinol: MealItem_item_Recipe_nutrition_retinol | null;
  riboflavin: MealItem_item_Recipe_nutrition_riboflavin | null;
  selenium: MealItem_item_Recipe_nutrition_selenium | null;
  thiamine: MealItem_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: MealItem_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: MealItem_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: MealItem_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: MealItem_item_Recipe_nutrition_vitA | null;
  vitAIU: MealItem_item_Recipe_nutrition_vitAIU | null;
  vitB6: MealItem_item_Recipe_nutrition_vitB6 | null;
  vitB12: MealItem_item_Recipe_nutrition_vitB12 | null;
  vitC: MealItem_item_Recipe_nutrition_vitC | null;
  vitD: MealItem_item_Recipe_nutrition_vitD | null;
  vitD2: MealItem_item_Recipe_nutrition_vitD2 | null;
  vitD3: MealItem_item_Recipe_nutrition_vitD3 | null;
  vitE: MealItem_item_Recipe_nutrition_vitE | null;
  vitK: MealItem_item_Recipe_nutrition_vitK | null;
  zinc: MealItem_item_Recipe_nutrition_zinc | null;
  tryptophan: MealItem_item_Recipe_nutrition_tryptophan | null;
  threonine: MealItem_item_Recipe_nutrition_threonine | null;
  isoleucine: MealItem_item_Recipe_nutrition_isoleucine | null;
  leucine: MealItem_item_Recipe_nutrition_leucine | null;
  lysine: MealItem_item_Recipe_nutrition_lysine | null;
  methionine: MealItem_item_Recipe_nutrition_methionine | null;
  cystine: MealItem_item_Recipe_nutrition_cystine | null;
  phenylalanine: MealItem_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: MealItem_item_Recipe_nutrition_tyrosine | null;
  valine: MealItem_item_Recipe_nutrition_valine | null;
  arginine: MealItem_item_Recipe_nutrition_arginine | null;
  histidine: MealItem_item_Recipe_nutrition_histidine | null;
  alanine: MealItem_item_Recipe_nutrition_alanine | null;
  asparticAcid: MealItem_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: MealItem_item_Recipe_nutrition_glutamicAcid | null;
  glycine: MealItem_item_Recipe_nutrition_glycine | null;
  proline: MealItem_item_Recipe_nutrition_proline | null;
  serine: MealItem_item_Recipe_nutrition_serine | null;
  hydroxyproline: MealItem_item_Recipe_nutrition_hydroxyproline | null;
}

export interface MealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItem_item_Recipe_title[];
  image: MealItem_item_Recipe_image | null;
  timing: MealItem_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItem_item_Recipe_thumbnail | null;
  ingredients: MealItem_item_Recipe_ingredients[];
  author: MealItem_item_Recipe_author;
  nutrition: MealItem_item_Recipe_nutrition;
}

export type MealItem_item = MealItem_item_Food | MealItem_item_Recipe;

export interface MealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItem_description[] | null;
  amount: number | null;
  customUnit: MealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItem_unit | null;
  isOptional: boolean | null;
  item: MealItem_item | null;
}
