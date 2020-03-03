/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../global-types";

// ====================================================
// GraphQL fragment: Ingredient
// ====================================================

export interface Ingredient_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_description {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_customUnit {
  gramWeight: number | null;
  name: Ingredient_customUnit_name[];
}

export interface Ingredient_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Ingredient_unit_Weight_name[];
}

export interface Ingredient_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_unit_CustomUnit {
  gramWeight: number | null;
  name: Ingredient_unit_CustomUnit_name[];
}

export type Ingredient_unit = Ingredient_unit_Weight | Ingredient_unit_CustomUnit;

export interface Ingredient_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Ingredient_item_Food_weights_name[];
}

export interface Ingredient_item_Food_image {
  url: string;
}

export interface Ingredient_item_Food_thumbnail {
  url: string;
}

export interface Ingredient_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Food_nutrition {
  calories: Ingredient_item_Food_nutrition_calories | null;
  totalCarbs: Ingredient_item_Food_nutrition_totalCarbs | null;
  fats: Ingredient_item_Food_nutrition_fats | null;
  proteins: Ingredient_item_Food_nutrition_proteins | null;
  fiber: Ingredient_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Ingredient_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Ingredient_item_Food_nutrition_sodium | null;
  cholesterol: Ingredient_item_Food_nutrition_cholesterol | null;
  potassium: Ingredient_item_Food_nutrition_potassium | null;
  sugar: Ingredient_item_Food_nutrition_sugar | null;
  sucrose: Ingredient_item_Food_nutrition_sucrose | null;
  glucose: Ingredient_item_Food_nutrition_glucose | null;
  fructose: Ingredient_item_Food_nutrition_fructose | null;
  lactose: Ingredient_item_Food_nutrition_lactose | null;
  maltose: Ingredient_item_Food_nutrition_maltose | null;
  galactose: Ingredient_item_Food_nutrition_galactose | null;
  starch: Ingredient_item_Food_nutrition_starch | null;
  saturatedFats: Ingredient_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Ingredient_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Ingredient_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Ingredient_item_Food_nutrition_transFats | null;
  omega3: Ingredient_item_Food_nutrition_omega3 | null;
  omega6: Ingredient_item_Food_nutrition_omega6 | null;
  ALA: Ingredient_item_Food_nutrition_ALA | null;
  DHA: Ingredient_item_Food_nutrition_DHA | null;
  EPA: Ingredient_item_Food_nutrition_EPA | null;
  DPA: Ingredient_item_Food_nutrition_DPA | null;
  caffeine: Ingredient_item_Food_nutrition_caffeine | null;
  theobromine: Ingredient_item_Food_nutrition_theobromine | null;
  calcium: Ingredient_item_Food_nutrition_calcium | null;
  choline: Ingredient_item_Food_nutrition_choline | null;
  copper: Ingredient_item_Food_nutrition_copper | null;
  fluoride: Ingredient_item_Food_nutrition_fluoride | null;
  folate: Ingredient_item_Food_nutrition_folate | null;
  iron: Ingredient_item_Food_nutrition_iron | null;
  lycopene: Ingredient_item_Food_nutrition_lycopene | null;
  magnesium: Ingredient_item_Food_nutrition_magnesium | null;
  manganese: Ingredient_item_Food_nutrition_manganese | null;
  niacin: Ingredient_item_Food_nutrition_niacin | null;
  phosphorus: Ingredient_item_Food_nutrition_phosphorus | null;
  retinol: Ingredient_item_Food_nutrition_retinol | null;
  riboflavin: Ingredient_item_Food_nutrition_riboflavin | null;
  selenium: Ingredient_item_Food_nutrition_selenium | null;
  thiamine: Ingredient_item_Food_nutrition_thiamine | null;
  alphaCarotene: Ingredient_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Ingredient_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Ingredient_item_Food_nutrition_pantothenicAcid | null;
  vitA: Ingredient_item_Food_nutrition_vitA | null;
  vitAIU: Ingredient_item_Food_nutrition_vitAIU | null;
  vitB6: Ingredient_item_Food_nutrition_vitB6 | null;
  vitB12: Ingredient_item_Food_nutrition_vitB12 | null;
  vitC: Ingredient_item_Food_nutrition_vitC | null;
  vitD: Ingredient_item_Food_nutrition_vitD | null;
  vitD2: Ingredient_item_Food_nutrition_vitD2 | null;
  vitD3: Ingredient_item_Food_nutrition_vitD3 | null;
  vitE: Ingredient_item_Food_nutrition_vitE | null;
  vitK: Ingredient_item_Food_nutrition_vitK | null;
  zinc: Ingredient_item_Food_nutrition_zinc | null;
  tryptophan: Ingredient_item_Food_nutrition_tryptophan | null;
  threonine: Ingredient_item_Food_nutrition_threonine | null;
  isoleucine: Ingredient_item_Food_nutrition_isoleucine | null;
  leucine: Ingredient_item_Food_nutrition_leucine | null;
  lysine: Ingredient_item_Food_nutrition_lysine | null;
  methionine: Ingredient_item_Food_nutrition_methionine | null;
  cystine: Ingredient_item_Food_nutrition_cystine | null;
  phenylalanine: Ingredient_item_Food_nutrition_phenylalanine | null;
  tyrosine: Ingredient_item_Food_nutrition_tyrosine | null;
  valine: Ingredient_item_Food_nutrition_valine | null;
  arginine: Ingredient_item_Food_nutrition_arginine | null;
  histidine: Ingredient_item_Food_nutrition_histidine | null;
  alanine: Ingredient_item_Food_nutrition_alanine | null;
  asparticAcid: Ingredient_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Ingredient_item_Food_nutrition_glutamicAcid | null;
  glycine: Ingredient_item_Food_nutrition_glycine | null;
  proline: Ingredient_item_Food_nutrition_proline | null;
  serine: Ingredient_item_Food_nutrition_serine | null;
  hydroxyproline: Ingredient_item_Food_nutrition_hydroxyproline | null;
}

export interface Ingredient_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Food_origFoodGroups {
  id: string;
  name: Ingredient_item_Food_origFoodGroups_name[];
}

export interface Ingredient_item_Food {
  id: string;
  name: Ingredient_item_Food_name[];
  description: Ingredient_item_Food_description[] | null;
  weights: Ingredient_item_Food_weights[];
  image: Ingredient_item_Food_image | null;
  thumbnail: Ingredient_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Ingredient_item_Food_nutrition;
  origFoodGroups: Ingredient_item_Food_origFoodGroups[][];
}

export interface Ingredient_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_image {
  url: string;
}

export interface Ingredient_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface Ingredient_item_Recipe_thumbnail {
  url: string;
}

export interface Ingredient_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Ingredient_item_Recipe_ingredients_customUnit_name[];
}

export interface Ingredient_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Ingredient_item_Recipe_ingredients_unit_Weight_name[];
}

export interface Ingredient_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Ingredient_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type Ingredient_item_Recipe_ingredients_unit = Ingredient_item_Recipe_ingredients_unit_Weight | Ingredient_item_Recipe_ingredients_unit_CustomUnit;

export interface Ingredient_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Ingredient_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface Ingredient_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_nutrition {
  calories: Ingredient_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: Ingredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: Ingredient_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: Ingredient_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: Ingredient_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Ingredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Ingredient_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: Ingredient_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: Ingredient_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: Ingredient_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: Ingredient_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: Ingredient_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: Ingredient_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Ingredient_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Ingredient_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Ingredient_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: Ingredient_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: Ingredient_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: Ingredient_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: Ingredient_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: Ingredient_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: Ingredient_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: Ingredient_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: Ingredient_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: Ingredient_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: Ingredient_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: Ingredient_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: Ingredient_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: Ingredient_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: Ingredient_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: Ingredient_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: Ingredient_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: Ingredient_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: Ingredient_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: Ingredient_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: Ingredient_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: Ingredient_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Ingredient_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Ingredient_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: Ingredient_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: Ingredient_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: Ingredient_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: Ingredient_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Ingredient_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: Ingredient_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: Ingredient_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: Ingredient_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Ingredient_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Ingredient_item_Recipe_ingredients_item_Food {
  id: string;
  name: Ingredient_item_Recipe_ingredients_item_Food_name[];
  description: Ingredient_item_Recipe_ingredients_item_Food_description[] | null;
  weights: Ingredient_item_Recipe_ingredients_item_Food_weights[];
  image: Ingredient_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: Ingredient_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Ingredient_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Ingredient_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Ingredient_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Ingredient_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: Ingredient_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Ingredient_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Ingredient_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: Ingredient_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type Ingredient_item_Recipe_ingredients_item = Ingredient_item_Recipe_ingredients_item_Food | Ingredient_item_Recipe_ingredients_item_Recipe;

export interface Ingredient_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Ingredient_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Ingredient_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Ingredient_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Ingredient_item_Recipe_ingredients_unit | null;
  item: Ingredient_item_Recipe_ingredients_item | null;
}

export interface Ingredient_item_Recipe_author_avatar {
  url: string;
}

export interface Ingredient_item_Recipe_author {
  id: string;
  username: string;
  avatar: Ingredient_item_Recipe_author_avatar | null;
}

export interface Ingredient_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Ingredient_item_Recipe_nutrition {
  calories: Ingredient_item_Recipe_nutrition_calories | null;
  totalCarbs: Ingredient_item_Recipe_nutrition_totalCarbs | null;
  fats: Ingredient_item_Recipe_nutrition_fats | null;
  proteins: Ingredient_item_Recipe_nutrition_proteins | null;
  fiber: Ingredient_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: Ingredient_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: Ingredient_item_Recipe_nutrition_sodium | null;
  cholesterol: Ingredient_item_Recipe_nutrition_cholesterol | null;
  potassium: Ingredient_item_Recipe_nutrition_potassium | null;
  sugar: Ingredient_item_Recipe_nutrition_sugar | null;
  sucrose: Ingredient_item_Recipe_nutrition_sucrose | null;
  glucose: Ingredient_item_Recipe_nutrition_glucose | null;
  fructose: Ingredient_item_Recipe_nutrition_fructose | null;
  lactose: Ingredient_item_Recipe_nutrition_lactose | null;
  maltose: Ingredient_item_Recipe_nutrition_maltose | null;
  galactose: Ingredient_item_Recipe_nutrition_galactose | null;
  starch: Ingredient_item_Recipe_nutrition_starch | null;
  saturatedFats: Ingredient_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: Ingredient_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Ingredient_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: Ingredient_item_Recipe_nutrition_transFats | null;
  omega3: Ingredient_item_Recipe_nutrition_omega3 | null;
  omega6: Ingredient_item_Recipe_nutrition_omega6 | null;
  ALA: Ingredient_item_Recipe_nutrition_ALA | null;
  DHA: Ingredient_item_Recipe_nutrition_DHA | null;
  EPA: Ingredient_item_Recipe_nutrition_EPA | null;
  DPA: Ingredient_item_Recipe_nutrition_DPA | null;
  caffeine: Ingredient_item_Recipe_nutrition_caffeine | null;
  theobromine: Ingredient_item_Recipe_nutrition_theobromine | null;
  calcium: Ingredient_item_Recipe_nutrition_calcium | null;
  choline: Ingredient_item_Recipe_nutrition_choline | null;
  copper: Ingredient_item_Recipe_nutrition_copper | null;
  fluoride: Ingredient_item_Recipe_nutrition_fluoride | null;
  folate: Ingredient_item_Recipe_nutrition_folate | null;
  iron: Ingredient_item_Recipe_nutrition_iron | null;
  lycopene: Ingredient_item_Recipe_nutrition_lycopene | null;
  magnesium: Ingredient_item_Recipe_nutrition_magnesium | null;
  manganese: Ingredient_item_Recipe_nutrition_manganese | null;
  niacin: Ingredient_item_Recipe_nutrition_niacin | null;
  phosphorus: Ingredient_item_Recipe_nutrition_phosphorus | null;
  retinol: Ingredient_item_Recipe_nutrition_retinol | null;
  riboflavin: Ingredient_item_Recipe_nutrition_riboflavin | null;
  selenium: Ingredient_item_Recipe_nutrition_selenium | null;
  thiamine: Ingredient_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: Ingredient_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: Ingredient_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: Ingredient_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: Ingredient_item_Recipe_nutrition_vitA | null;
  vitAIU: Ingredient_item_Recipe_nutrition_vitAIU | null;
  vitB6: Ingredient_item_Recipe_nutrition_vitB6 | null;
  vitB12: Ingredient_item_Recipe_nutrition_vitB12 | null;
  vitC: Ingredient_item_Recipe_nutrition_vitC | null;
  vitD: Ingredient_item_Recipe_nutrition_vitD | null;
  vitD2: Ingredient_item_Recipe_nutrition_vitD2 | null;
  vitD3: Ingredient_item_Recipe_nutrition_vitD3 | null;
  vitE: Ingredient_item_Recipe_nutrition_vitE | null;
  vitK: Ingredient_item_Recipe_nutrition_vitK | null;
  zinc: Ingredient_item_Recipe_nutrition_zinc | null;
  tryptophan: Ingredient_item_Recipe_nutrition_tryptophan | null;
  threonine: Ingredient_item_Recipe_nutrition_threonine | null;
  isoleucine: Ingredient_item_Recipe_nutrition_isoleucine | null;
  leucine: Ingredient_item_Recipe_nutrition_leucine | null;
  lysine: Ingredient_item_Recipe_nutrition_lysine | null;
  methionine: Ingredient_item_Recipe_nutrition_methionine | null;
  cystine: Ingredient_item_Recipe_nutrition_cystine | null;
  phenylalanine: Ingredient_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: Ingredient_item_Recipe_nutrition_tyrosine | null;
  valine: Ingredient_item_Recipe_nutrition_valine | null;
  arginine: Ingredient_item_Recipe_nutrition_arginine | null;
  histidine: Ingredient_item_Recipe_nutrition_histidine | null;
  alanine: Ingredient_item_Recipe_nutrition_alanine | null;
  asparticAcid: Ingredient_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: Ingredient_item_Recipe_nutrition_glutamicAcid | null;
  glycine: Ingredient_item_Recipe_nutrition_glycine | null;
  proline: Ingredient_item_Recipe_nutrition_proline | null;
  serine: Ingredient_item_Recipe_nutrition_serine | null;
  hydroxyproline: Ingredient_item_Recipe_nutrition_hydroxyproline | null;
}

export interface Ingredient_item_Recipe {
  id: string;
  slug: string;
  title: Ingredient_item_Recipe_title[];
  image: Ingredient_item_Recipe_image | null;
  timing: Ingredient_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Ingredient_item_Recipe_thumbnail | null;
  ingredients: Ingredient_item_Recipe_ingredients[];
  author: Ingredient_item_Recipe_author;
  nutrition: Ingredient_item_Recipe_nutrition;
}

export type Ingredient_item = Ingredient_item_Food | Ingredient_item_Recipe;

export interface Ingredient {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Ingredient_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Ingredient_description[] | null;
  amount: number | null;
  customUnit: Ingredient_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Ingredient_unit | null;
  isOptional: boolean | null;
  item: Ingredient_item | null;
}
