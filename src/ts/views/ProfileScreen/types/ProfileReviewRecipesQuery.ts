/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: ProfileReviewRecipesQuery
// ====================================================

export interface ProfileReviewRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_image {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit = ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight | ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_image {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition {
  calories: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fats | null;
  proteins: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins | null;
  fiber: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium | null;
  sugar: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar | null;
  sucrose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose | null;
  glucose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose | null;
  fructose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose | null;
  lactose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose | null;
  maltose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose | null;
  galactose: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose | null;
  starch: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats | null;
  omega3: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 | null;
  omega6: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 | null;
  ALA: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA | null;
  DHA: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA | null;
  EPA: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA | null;
  DPA: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA | null;
  caffeine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine | null;
  calcium: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium | null;
  choline: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_choline | null;
  copper: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_copper | null;
  fluoride: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride | null;
  folate: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_folate | null;
  iron: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_iron | null;
  lycopene: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium | null;
  manganese: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese | null;
  niacin: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium | null;
  thiamine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC | null;
  vitD: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD | null;
  vitD2: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE | null;
  vitK: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK | null;
  zinc: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine | null;
  lysine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine | null;
  methionine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine | null;
  cystine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine | null;
  valine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_valine | null;
  arginine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine | null;
  histidine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine | null;
  alanine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine | null;
  proline: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proline | null;
  serine: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_name[];
  description: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights[];
  image: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_image | null;
  thumbnail: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition;
  origFoodGroups: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition {
  calories: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_title[];
  nutrition: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition;
}

export type ProfileReviewRecipesQuery_recipes_recipes_ingredients_item = ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food | ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe;

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileReviewRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit | null;
  item: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: ProfileReviewRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_nutrition {
  calories: ProfileReviewRecipesQuery_recipes_recipes_nutrition_calories | null;
  totalCarbs: ProfileReviewRecipesQuery_recipes_recipes_nutrition_totalCarbs | null;
  fats: ProfileReviewRecipesQuery_recipes_recipes_nutrition_fats | null;
  proteins: ProfileReviewRecipesQuery_recipes_recipes_nutrition_proteins | null;
  fiber: ProfileReviewRecipesQuery_recipes_recipes_nutrition_fiber | null;
  totalAvailableCarbs: ProfileReviewRecipesQuery_recipes_recipes_nutrition_totalAvailableCarbs | null;
  sodium: ProfileReviewRecipesQuery_recipes_recipes_nutrition_sodium | null;
  cholesterol: ProfileReviewRecipesQuery_recipes_recipes_nutrition_cholesterol | null;
  potassium: ProfileReviewRecipesQuery_recipes_recipes_nutrition_potassium | null;
  sugar: ProfileReviewRecipesQuery_recipes_recipes_nutrition_sugar | null;
  sucrose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_sucrose | null;
  glucose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_glucose | null;
  fructose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_fructose | null;
  lactose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_lactose | null;
  maltose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_maltose | null;
  galactose: ProfileReviewRecipesQuery_recipes_recipes_nutrition_galactose | null;
  starch: ProfileReviewRecipesQuery_recipes_recipes_nutrition_starch | null;
  saturatedFats: ProfileReviewRecipesQuery_recipes_recipes_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileReviewRecipesQuery_recipes_recipes_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileReviewRecipesQuery_recipes_recipes_nutrition_polyunsaturatedFats | null;
  transFats: ProfileReviewRecipesQuery_recipes_recipes_nutrition_transFats | null;
  omega3: ProfileReviewRecipesQuery_recipes_recipes_nutrition_omega3 | null;
  omega6: ProfileReviewRecipesQuery_recipes_recipes_nutrition_omega6 | null;
  ALA: ProfileReviewRecipesQuery_recipes_recipes_nutrition_ALA | null;
  DHA: ProfileReviewRecipesQuery_recipes_recipes_nutrition_DHA | null;
  EPA: ProfileReviewRecipesQuery_recipes_recipes_nutrition_EPA | null;
  DPA: ProfileReviewRecipesQuery_recipes_recipes_nutrition_DPA | null;
  caffeine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_caffeine | null;
  theobromine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_theobromine | null;
  calcium: ProfileReviewRecipesQuery_recipes_recipes_nutrition_calcium | null;
  choline: ProfileReviewRecipesQuery_recipes_recipes_nutrition_choline | null;
  copper: ProfileReviewRecipesQuery_recipes_recipes_nutrition_copper | null;
  fluoride: ProfileReviewRecipesQuery_recipes_recipes_nutrition_fluoride | null;
  folate: ProfileReviewRecipesQuery_recipes_recipes_nutrition_folate | null;
  iron: ProfileReviewRecipesQuery_recipes_recipes_nutrition_iron | null;
  lycopene: ProfileReviewRecipesQuery_recipes_recipes_nutrition_lycopene | null;
  magnesium: ProfileReviewRecipesQuery_recipes_recipes_nutrition_magnesium | null;
  manganese: ProfileReviewRecipesQuery_recipes_recipes_nutrition_manganese | null;
  niacin: ProfileReviewRecipesQuery_recipes_recipes_nutrition_niacin | null;
  phosphorus: ProfileReviewRecipesQuery_recipes_recipes_nutrition_phosphorus | null;
  retinol: ProfileReviewRecipesQuery_recipes_recipes_nutrition_retinol | null;
  riboflavin: ProfileReviewRecipesQuery_recipes_recipes_nutrition_riboflavin | null;
  selenium: ProfileReviewRecipesQuery_recipes_recipes_nutrition_selenium | null;
  thiamine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_thiamine | null;
  alphaCarotene: ProfileReviewRecipesQuery_recipes_recipes_nutrition_alphaCarotene | null;
  betaCarotene: ProfileReviewRecipesQuery_recipes_recipes_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileReviewRecipesQuery_recipes_recipes_nutrition_pantothenicAcid | null;
  vitA: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitA | null;
  vitAIU: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitAIU | null;
  vitB6: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitB6 | null;
  vitB12: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitB12 | null;
  vitC: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitC | null;
  vitD: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD | null;
  vitD2: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD2 | null;
  vitD3: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitD3 | null;
  vitE: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitE | null;
  vitK: ProfileReviewRecipesQuery_recipes_recipes_nutrition_vitK | null;
  zinc: ProfileReviewRecipesQuery_recipes_recipes_nutrition_zinc | null;
  tryptophan: ProfileReviewRecipesQuery_recipes_recipes_nutrition_tryptophan | null;
  threonine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_threonine | null;
  isoleucine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_isoleucine | null;
  leucine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_leucine | null;
  lysine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_lysine | null;
  methionine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_methionine | null;
  cystine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_cystine | null;
  phenylalanine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_phenylalanine | null;
  tyrosine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_tyrosine | null;
  valine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_valine | null;
  arginine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_arginine | null;
  histidine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_histidine | null;
  alanine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_alanine | null;
  asparticAcid: ProfileReviewRecipesQuery_recipes_recipes_nutrition_asparticAcid | null;
  glutamicAcid: ProfileReviewRecipesQuery_recipes_recipes_nutrition_glutamicAcid | null;
  glycine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_glycine | null;
  proline: ProfileReviewRecipesQuery_recipes_recipes_nutrition_proline | null;
  serine: ProfileReviewRecipesQuery_recipes_recipes_nutrition_serine | null;
  hydroxyproline: ProfileReviewRecipesQuery_recipes_recipes_nutrition_hydroxyproline | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileReviewRecipesQuery_recipes_recipes_title[];
  image: ProfileReviewRecipesQuery_recipes_recipes_image | null;
  timing: ProfileReviewRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileReviewRecipesQuery_recipes_recipes_thumbnail | null;
  ingredients: ProfileReviewRecipesQuery_recipes_recipes_ingredients[];
  author: ProfileReviewRecipesQuery_recipes_recipes_author;
  nutrition: ProfileReviewRecipesQuery_recipes_recipes_nutrition;
}

export interface ProfileReviewRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileReviewRecipesQuery_recipes {
  recipes: ProfileReviewRecipesQuery_recipes_recipes[];
  pagination: ProfileReviewRecipesQuery_recipes_pagination;
}

export interface ProfileReviewRecipesQuery {
  recipes: ProfileReviewRecipesQuery_recipes;
}

export interface ProfileReviewRecipesQueryVariables {
  lastId?: any | null;
  size?: number | null;
}
