/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../global-types";

// ====================================================
// GraphQL fragment: IngredientRecipe
// ====================================================

export interface IngredientRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_image {
  url: string;
}

export interface IngredientRecipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface IngredientRecipe_thumbnail {
  url: string;
}

export interface IngredientRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: IngredientRecipe_ingredients_customUnit_name[];
}

export interface IngredientRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: IngredientRecipe_ingredients_unit_Weight_name[];
}

export interface IngredientRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: IngredientRecipe_ingredients_unit_CustomUnit_name[];
}

export type IngredientRecipe_ingredients_unit = IngredientRecipe_ingredients_unit_Weight | IngredientRecipe_ingredients_unit_CustomUnit;

export interface IngredientRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: IngredientRecipe_ingredients_item_Food_weights_name[];
}

export interface IngredientRecipe_ingredients_item_Food_image {
  url: string;
}

export interface IngredientRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Food_nutrition {
  calories: IngredientRecipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: IngredientRecipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: IngredientRecipe_ingredients_item_Food_nutrition_fats | null;
  proteins: IngredientRecipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: IngredientRecipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: IngredientRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: IngredientRecipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: IngredientRecipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: IngredientRecipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: IngredientRecipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: IngredientRecipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: IngredientRecipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: IngredientRecipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: IngredientRecipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: IngredientRecipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: IngredientRecipe_ingredients_item_Food_nutrition_galactose | null;
  starch: IngredientRecipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: IngredientRecipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: IngredientRecipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: IngredientRecipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: IngredientRecipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: IngredientRecipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: IngredientRecipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: IngredientRecipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: IngredientRecipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: IngredientRecipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: IngredientRecipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: IngredientRecipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: IngredientRecipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: IngredientRecipe_ingredients_item_Food_nutrition_calcium | null;
  choline: IngredientRecipe_ingredients_item_Food_nutrition_choline | null;
  copper: IngredientRecipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: IngredientRecipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: IngredientRecipe_ingredients_item_Food_nutrition_folate | null;
  iron: IngredientRecipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: IngredientRecipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: IngredientRecipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: IngredientRecipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: IngredientRecipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: IngredientRecipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: IngredientRecipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: IngredientRecipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: IngredientRecipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: IngredientRecipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: IngredientRecipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: IngredientRecipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: IngredientRecipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: IngredientRecipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: IngredientRecipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: IngredientRecipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: IngredientRecipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: IngredientRecipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: IngredientRecipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: IngredientRecipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: IngredientRecipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: IngredientRecipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: IngredientRecipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: IngredientRecipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: IngredientRecipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: IngredientRecipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: IngredientRecipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: IngredientRecipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: IngredientRecipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: IngredientRecipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: IngredientRecipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: IngredientRecipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: IngredientRecipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: IngredientRecipe_ingredients_item_Food_nutrition_valine | null;
  arginine: IngredientRecipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: IngredientRecipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: IngredientRecipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: IngredientRecipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: IngredientRecipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: IngredientRecipe_ingredients_item_Food_nutrition_glycine | null;
  proline: IngredientRecipe_ingredients_item_Food_nutrition_proline | null;
  serine: IngredientRecipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: IngredientRecipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface IngredientRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: IngredientRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface IngredientRecipe_ingredients_item_Food {
  id: string;
  name: IngredientRecipe_ingredients_item_Food_name[];
  description: IngredientRecipe_ingredients_item_Food_description[] | null;
  weights: IngredientRecipe_ingredients_item_Food_weights[];
  image: IngredientRecipe_ingredients_item_Food_image | null;
  thumbnail: IngredientRecipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: IngredientRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: IngredientRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface IngredientRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_ingredients_item_Recipe_nutrition {
  calories: IngredientRecipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface IngredientRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: IngredientRecipe_ingredients_item_Recipe_title[];
  nutrition: IngredientRecipe_ingredients_item_Recipe_nutrition;
}

export type IngredientRecipe_ingredients_item = IngredientRecipe_ingredients_item_Food | IngredientRecipe_ingredients_item_Recipe;

export interface IngredientRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: IngredientRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: IngredientRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: IngredientRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: IngredientRecipe_ingredients_unit | null;
  item: IngredientRecipe_ingredients_item | null;
}

export interface IngredientRecipe_author_avatar {
  url: string;
}

export interface IngredientRecipe_author {
  id: string;
  username: string;
  avatar: IngredientRecipe_author_avatar | null;
}

export interface IngredientRecipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface IngredientRecipe_nutrition {
  calories: IngredientRecipe_nutrition_calories | null;
  totalCarbs: IngredientRecipe_nutrition_totalCarbs | null;
  fats: IngredientRecipe_nutrition_fats | null;
  proteins: IngredientRecipe_nutrition_proteins | null;
  fiber: IngredientRecipe_nutrition_fiber | null;
  totalAvailableCarbs: IngredientRecipe_nutrition_totalAvailableCarbs | null;
  sodium: IngredientRecipe_nutrition_sodium | null;
  cholesterol: IngredientRecipe_nutrition_cholesterol | null;
  potassium: IngredientRecipe_nutrition_potassium | null;
  sugar: IngredientRecipe_nutrition_sugar | null;
  sucrose: IngredientRecipe_nutrition_sucrose | null;
  glucose: IngredientRecipe_nutrition_glucose | null;
  fructose: IngredientRecipe_nutrition_fructose | null;
  lactose: IngredientRecipe_nutrition_lactose | null;
  maltose: IngredientRecipe_nutrition_maltose | null;
  galactose: IngredientRecipe_nutrition_galactose | null;
  starch: IngredientRecipe_nutrition_starch | null;
  saturatedFats: IngredientRecipe_nutrition_saturatedFats | null;
  monounsaturatedFats: IngredientRecipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: IngredientRecipe_nutrition_polyunsaturatedFats | null;
  transFats: IngredientRecipe_nutrition_transFats | null;
  omega3: IngredientRecipe_nutrition_omega3 | null;
  omega6: IngredientRecipe_nutrition_omega6 | null;
  ALA: IngredientRecipe_nutrition_ALA | null;
  DHA: IngredientRecipe_nutrition_DHA | null;
  EPA: IngredientRecipe_nutrition_EPA | null;
  DPA: IngredientRecipe_nutrition_DPA | null;
  caffeine: IngredientRecipe_nutrition_caffeine | null;
  theobromine: IngredientRecipe_nutrition_theobromine | null;
  calcium: IngredientRecipe_nutrition_calcium | null;
  choline: IngredientRecipe_nutrition_choline | null;
  copper: IngredientRecipe_nutrition_copper | null;
  fluoride: IngredientRecipe_nutrition_fluoride | null;
  folate: IngredientRecipe_nutrition_folate | null;
  iron: IngredientRecipe_nutrition_iron | null;
  lycopene: IngredientRecipe_nutrition_lycopene | null;
  magnesium: IngredientRecipe_nutrition_magnesium | null;
  manganese: IngredientRecipe_nutrition_manganese | null;
  niacin: IngredientRecipe_nutrition_niacin | null;
  phosphorus: IngredientRecipe_nutrition_phosphorus | null;
  retinol: IngredientRecipe_nutrition_retinol | null;
  riboflavin: IngredientRecipe_nutrition_riboflavin | null;
  selenium: IngredientRecipe_nutrition_selenium | null;
  thiamine: IngredientRecipe_nutrition_thiamine | null;
  alphaCarotene: IngredientRecipe_nutrition_alphaCarotene | null;
  betaCarotene: IngredientRecipe_nutrition_betaCarotene | null;
  pantothenicAcid: IngredientRecipe_nutrition_pantothenicAcid | null;
  vitA: IngredientRecipe_nutrition_vitA | null;
  vitAIU: IngredientRecipe_nutrition_vitAIU | null;
  vitB6: IngredientRecipe_nutrition_vitB6 | null;
  vitB12: IngredientRecipe_nutrition_vitB12 | null;
  vitC: IngredientRecipe_nutrition_vitC | null;
  vitD: IngredientRecipe_nutrition_vitD | null;
  vitD2: IngredientRecipe_nutrition_vitD2 | null;
  vitD3: IngredientRecipe_nutrition_vitD3 | null;
  vitE: IngredientRecipe_nutrition_vitE | null;
  vitK: IngredientRecipe_nutrition_vitK | null;
  zinc: IngredientRecipe_nutrition_zinc | null;
  tryptophan: IngredientRecipe_nutrition_tryptophan | null;
  threonine: IngredientRecipe_nutrition_threonine | null;
  isoleucine: IngredientRecipe_nutrition_isoleucine | null;
  leucine: IngredientRecipe_nutrition_leucine | null;
  lysine: IngredientRecipe_nutrition_lysine | null;
  methionine: IngredientRecipe_nutrition_methionine | null;
  cystine: IngredientRecipe_nutrition_cystine | null;
  phenylalanine: IngredientRecipe_nutrition_phenylalanine | null;
  tyrosine: IngredientRecipe_nutrition_tyrosine | null;
  valine: IngredientRecipe_nutrition_valine | null;
  arginine: IngredientRecipe_nutrition_arginine | null;
  histidine: IngredientRecipe_nutrition_histidine | null;
  alanine: IngredientRecipe_nutrition_alanine | null;
  asparticAcid: IngredientRecipe_nutrition_asparticAcid | null;
  glutamicAcid: IngredientRecipe_nutrition_glutamicAcid | null;
  glycine: IngredientRecipe_nutrition_glycine | null;
  proline: IngredientRecipe_nutrition_proline | null;
  serine: IngredientRecipe_nutrition_serine | null;
  hydroxyproline: IngredientRecipe_nutrition_hydroxyproline | null;
}

export interface IngredientRecipe {
  id: string;
  slug: string;
  title: IngredientRecipe_title[];
  image: IngredientRecipe_image | null;
  timing: IngredientRecipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: IngredientRecipe_thumbnail | null;
  ingredients: IngredientRecipe_ingredients[];
  author: IngredientRecipe_author;
  nutrition: IngredientRecipe_nutrition;
}
