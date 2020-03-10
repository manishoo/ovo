/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeInput, RecipeStatus } from './../../../../models/global-types'

// ====================================================
// GraphQL mutation operation: PublishRecipeUpdateMutation
// ====================================================

export interface PublishRecipeUpdateMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_author_avatar {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: PublishRecipeUpdateMutation_updateRecipe_author_avatar | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name[];
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_unit = PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight | PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fats | null;
  proteins: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_galactose | null;
  starch: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calcium | null;
  choline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_choline | null;
  copper: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_folate | null;
  iron: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_valine | null;
  arginine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_glycine | null;
  proline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proline | null;
  serine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_name[];
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_description[] | null;
  weights: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_image | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit | null;
  item: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories | null;
  totalCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  fats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fats | null;
  proteins: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proteins | null;
  fiber: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sodium | null;
  cholesterol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_cholesterol | null;
  potassium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_potassium | null;
  sugar: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sugar | null;
  sucrose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_sucrose | null;
  glucose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glucose | null;
  fructose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fructose | null;
  lactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lactose | null;
  maltose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_maltose | null;
  galactose: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_galactose | null;
  starch: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_starch | null;
  saturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_transFats | null;
  omega3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_omega3 | null;
  omega6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_omega6 | null;
  ALA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_ALA | null;
  DHA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_DHA | null;
  EPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_EPA | null;
  DPA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_DPA | null;
  caffeine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_caffeine | null;
  theobromine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_theobromine | null;
  calcium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calcium | null;
  choline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_choline | null;
  copper: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_copper | null;
  fluoride: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fluoride | null;
  folate: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_folate | null;
  iron: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_iron | null;
  lycopene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lycopene | null;
  magnesium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_magnesium | null;
  manganese: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_manganese | null;
  niacin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_niacin | null;
  phosphorus: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_phosphorus | null;
  retinol: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_retinol | null;
  riboflavin: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_riboflavin | null;
  selenium: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_selenium | null;
  thiamine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitA | null;
  vitAIU: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitAIU | null;
  vitB6: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitB6 | null;
  vitB12: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitB12 | null;
  vitC: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitC | null;
  vitD: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD | null;
  vitD2: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD2 | null;
  vitD3: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitD3 | null;
  vitE: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitE | null;
  vitK: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_vitK | null;
  zinc: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_zinc | null;
  tryptophan: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_tryptophan | null;
  threonine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_threonine | null;
  isoleucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_isoleucine | null;
  leucine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_leucine | null;
  lysine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_lysine | null;
  methionine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_methionine | null;
  cystine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_cystine | null;
  phenylalanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_tyrosine | null;
  valine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_valine | null;
  arginine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_arginine | null;
  histidine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_histidine | null;
  alanine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_alanine | null;
  asparticAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glutamicAcid | null;
  glycine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_glycine | null;
  proline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proline | null;
  serine: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_serine | null;
  hydroxyproline: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_hydroxyproline | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_title[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_image | null;
  timing: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients[];
  author: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition;
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients {
  id: any;
  amount: number | null;
  customUnit: PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: PublishRecipeUpdateMutation_updateRecipe_ingredients_item | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions {
  step: number;
  text: PublishRecipeUpdateMutation_updateRecipe_instructions_text[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_nutrition_calories | null;
  proteins: PublishRecipeUpdateMutation_updateRecipe_nutrition_proteins | null;
  totalCarbs: PublishRecipeUpdateMutation_updateRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: PublishRecipeUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs | null;
  fats: PublishRecipeUpdateMutation_updateRecipe_nutrition_fats | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe {
  id: string;
  title: PublishRecipeUpdateMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  status: RecipeStatus;
  author: PublishRecipeUpdateMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: PublishRecipeUpdateMutation_updateRecipe_timing;
  ingredients: PublishRecipeUpdateMutation_updateRecipe_ingredients[];
  instructions: PublishRecipeUpdateMutation_updateRecipe_instructions[];
  nutrition: PublishRecipeUpdateMutation_updateRecipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: PublishRecipeUpdateMutation_updateRecipe_description[] | null;
  image: PublishRecipeUpdateMutation_updateRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}

export interface PublishRecipeUpdateMutation {
  updateRecipe: PublishRecipeUpdateMutation_updateRecipe;
}

export interface PublishRecipeUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
