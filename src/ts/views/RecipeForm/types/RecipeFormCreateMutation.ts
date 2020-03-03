/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeStatus, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormCreateMutation
// ====================================================

export interface RecipeFormCreateMutation_createRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_author_avatar {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormCreateMutation_createRecipe_author_avatar | null;
}

export interface RecipeFormCreateMutation_createRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_customUnit_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormCreateMutation_createRecipe_ingredients_unit = RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight | RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fats | null;
  proteins: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_galactose | null;
  starch: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calcium | null;
  choline: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_choline | null;
  copper: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_folate | null;
  iron: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_valine | null;
  arginine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_glycine | null;
  proline: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_proline | null;
  serine: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_name[];
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit = RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item = RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calories | null;
  totalCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  fats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fats | null;
  proteins: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_proteins | null;
  fiber: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sodium | null;
  cholesterol: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_cholesterol | null;
  potassium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_potassium | null;
  sugar: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sugar | null;
  sucrose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_sucrose | null;
  glucose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glucose | null;
  fructose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fructose | null;
  lactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lactose | null;
  maltose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_maltose | null;
  galactose: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_galactose | null;
  starch: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_starch | null;
  saturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_transFats | null;
  omega3: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_omega3 | null;
  omega6: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_omega6 | null;
  ALA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_ALA | null;
  DHA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_DHA | null;
  EPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_EPA | null;
  DPA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_DPA | null;
  caffeine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_caffeine | null;
  theobromine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_theobromine | null;
  calcium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calcium | null;
  choline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_choline | null;
  copper: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_copper | null;
  fluoride: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_fluoride | null;
  folate: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_folate | null;
  iron: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_iron | null;
  lycopene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lycopene | null;
  magnesium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_magnesium | null;
  manganese: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_manganese | null;
  niacin: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_niacin | null;
  phosphorus: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_phosphorus | null;
  retinol: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_retinol | null;
  riboflavin: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_riboflavin | null;
  selenium: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_selenium | null;
  thiamine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitA | null;
  vitAIU: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitAIU | null;
  vitB6: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitB6 | null;
  vitB12: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitB12 | null;
  vitC: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitC | null;
  vitD: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD | null;
  vitD2: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD2 | null;
  vitD3: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitD3 | null;
  vitE: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitE | null;
  vitK: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_vitK | null;
  zinc: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_zinc | null;
  tryptophan: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_tryptophan | null;
  threonine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_threonine | null;
  isoleucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_isoleucine | null;
  leucine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_leucine | null;
  lysine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_lysine | null;
  methionine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_methionine | null;
  cystine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_cystine | null;
  phenylalanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_tyrosine | null;
  valine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_valine | null;
  arginine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_arginine | null;
  histidine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_histidine | null;
  alanine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_alanine | null;
  asparticAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glutamicAcid | null;
  glycine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_glycine | null;
  proline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_proline | null;
  serine: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_serine | null;
  hydroxyproline: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_hydroxyproline | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_title[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_image | null;
  timing: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients[];
  author: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition;
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item = RecipeFormCreateMutation_createRecipe_ingredients_item_Food | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe;

export interface RecipeFormCreateMutation_createRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormCreateMutation_createRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormCreateMutation_createRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormCreateMutation_createRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormCreateMutation_createRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormCreateMutation_createRecipe_ingredients_item | null;
}

export interface RecipeFormCreateMutation_createRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_instructions {
  step: number;
  text: RecipeFormCreateMutation_createRecipe_instructions_text[];
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_nutrition_calories | null;
  proteins: RecipeFormCreateMutation_createRecipe_nutrition_proteins | null;
  totalCarbs: RecipeFormCreateMutation_createRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormCreateMutation_createRecipe_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormCreateMutation_createRecipe_nutrition_fats | null;
}

export interface RecipeFormCreateMutation_createRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe {
  id: string;
  title: RecipeFormCreateMutation_createRecipe_title[];
  serving: number;
  slug: string;
  status: RecipeStatus;
  author: RecipeFormCreateMutation_createRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormCreateMutation_createRecipe_timing;
  ingredients: RecipeFormCreateMutation_createRecipe_ingredients[];
  instructions: RecipeFormCreateMutation_createRecipe_instructions[];
  nutrition: RecipeFormCreateMutation_createRecipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormCreateMutation_createRecipe_description[] | null;
  image: RecipeFormCreateMutation_createRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}

export interface RecipeFormCreateMutation {
  createRecipe: RecipeFormCreateMutation_createRecipe;
}

export interface RecipeFormCreateMutationVariables {
  recipe: RecipeInput;
}
