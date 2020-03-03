/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: SearchResultQuery
// ====================================================

export interface SearchResultQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_image {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface SearchResultQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: SearchResultQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: SearchResultQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type SearchResultQuery_recipes_recipes_ingredients_unit = SearchResultQuery_recipes_recipes_ingredients_unit_Weight | SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_image {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition {
  calories: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fats | null;
  proteins: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins | null;
  fiber: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium | null;
  sugar: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar | null;
  sucrose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose | null;
  glucose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose | null;
  fructose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose | null;
  lactose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose | null;
  maltose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose | null;
  galactose: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose | null;
  starch: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats | null;
  omega3: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 | null;
  omega6: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 | null;
  ALA: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA | null;
  DHA: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA | null;
  EPA: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA | null;
  DPA: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA | null;
  caffeine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine | null;
  calcium: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium | null;
  choline: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_choline | null;
  copper: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_copper | null;
  fluoride: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride | null;
  folate: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_folate | null;
  iron: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_iron | null;
  lycopene: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium | null;
  manganese: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese | null;
  niacin: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium | null;
  thiamine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC | null;
  vitD: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD | null;
  vitD2: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE | null;
  vitK: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK | null;
  zinc: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine | null;
  lysine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine | null;
  methionine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine | null;
  cystine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine | null;
  valine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_valine | null;
  arginine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine | null;
  histidine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine | null;
  alanine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine | null;
  proline: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_proline | null;
  serine: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_name[];
  description: SearchResultQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: SearchResultQuery_recipes_recipes_ingredients_item_Food_weights[];
  image: SearchResultQuery_recipes_recipes_ingredients_item_Food_image | null;
  thumbnail: SearchResultQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: SearchResultQuery_recipes_recipes_ingredients_item_Food_nutrition;
  origFoodGroups: SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe_nutrition {
  calories: SearchResultQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories | null;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: SearchResultQuery_recipes_recipes_ingredients_item_Recipe_title[];
  nutrition: SearchResultQuery_recipes_recipes_ingredients_item_Recipe_nutrition;
}

export type SearchResultQuery_recipes_recipes_ingredients_item = SearchResultQuery_recipes_recipes_ingredients_item_Food | SearchResultQuery_recipes_recipes_ingredients_item_Recipe;

export interface SearchResultQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: SearchResultQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: SearchResultQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: SearchResultQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: SearchResultQuery_recipes_recipes_ingredients_unit | null;
  item: SearchResultQuery_recipes_recipes_ingredients_item | null;
}

export interface SearchResultQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: SearchResultQuery_recipes_recipes_author_avatar | null;
}

export interface SearchResultQuery_recipes_recipes_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_fats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_starch {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_choline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_copper {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_folate {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_iron {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_valine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_proline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_serine {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface SearchResultQuery_recipes_recipes_nutrition {
  calories: SearchResultQuery_recipes_recipes_nutrition_calories | null;
  totalCarbs: SearchResultQuery_recipes_recipes_nutrition_totalCarbs | null;
  fats: SearchResultQuery_recipes_recipes_nutrition_fats | null;
  proteins: SearchResultQuery_recipes_recipes_nutrition_proteins | null;
  fiber: SearchResultQuery_recipes_recipes_nutrition_fiber | null;
  totalAvailableCarbs: SearchResultQuery_recipes_recipes_nutrition_totalAvailableCarbs | null;
  sodium: SearchResultQuery_recipes_recipes_nutrition_sodium | null;
  cholesterol: SearchResultQuery_recipes_recipes_nutrition_cholesterol | null;
  potassium: SearchResultQuery_recipes_recipes_nutrition_potassium | null;
  sugar: SearchResultQuery_recipes_recipes_nutrition_sugar | null;
  sucrose: SearchResultQuery_recipes_recipes_nutrition_sucrose | null;
  glucose: SearchResultQuery_recipes_recipes_nutrition_glucose | null;
  fructose: SearchResultQuery_recipes_recipes_nutrition_fructose | null;
  lactose: SearchResultQuery_recipes_recipes_nutrition_lactose | null;
  maltose: SearchResultQuery_recipes_recipes_nutrition_maltose | null;
  galactose: SearchResultQuery_recipes_recipes_nutrition_galactose | null;
  starch: SearchResultQuery_recipes_recipes_nutrition_starch | null;
  saturatedFats: SearchResultQuery_recipes_recipes_nutrition_saturatedFats | null;
  monounsaturatedFats: SearchResultQuery_recipes_recipes_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: SearchResultQuery_recipes_recipes_nutrition_polyunsaturatedFats | null;
  transFats: SearchResultQuery_recipes_recipes_nutrition_transFats | null;
  omega3: SearchResultQuery_recipes_recipes_nutrition_omega3 | null;
  omega6: SearchResultQuery_recipes_recipes_nutrition_omega6 | null;
  ALA: SearchResultQuery_recipes_recipes_nutrition_ALA | null;
  DHA: SearchResultQuery_recipes_recipes_nutrition_DHA | null;
  EPA: SearchResultQuery_recipes_recipes_nutrition_EPA | null;
  DPA: SearchResultQuery_recipes_recipes_nutrition_DPA | null;
  caffeine: SearchResultQuery_recipes_recipes_nutrition_caffeine | null;
  theobromine: SearchResultQuery_recipes_recipes_nutrition_theobromine | null;
  calcium: SearchResultQuery_recipes_recipes_nutrition_calcium | null;
  choline: SearchResultQuery_recipes_recipes_nutrition_choline | null;
  copper: SearchResultQuery_recipes_recipes_nutrition_copper | null;
  fluoride: SearchResultQuery_recipes_recipes_nutrition_fluoride | null;
  folate: SearchResultQuery_recipes_recipes_nutrition_folate | null;
  iron: SearchResultQuery_recipes_recipes_nutrition_iron | null;
  lycopene: SearchResultQuery_recipes_recipes_nutrition_lycopene | null;
  magnesium: SearchResultQuery_recipes_recipes_nutrition_magnesium | null;
  manganese: SearchResultQuery_recipes_recipes_nutrition_manganese | null;
  niacin: SearchResultQuery_recipes_recipes_nutrition_niacin | null;
  phosphorus: SearchResultQuery_recipes_recipes_nutrition_phosphorus | null;
  retinol: SearchResultQuery_recipes_recipes_nutrition_retinol | null;
  riboflavin: SearchResultQuery_recipes_recipes_nutrition_riboflavin | null;
  selenium: SearchResultQuery_recipes_recipes_nutrition_selenium | null;
  thiamine: SearchResultQuery_recipes_recipes_nutrition_thiamine | null;
  alphaCarotene: SearchResultQuery_recipes_recipes_nutrition_alphaCarotene | null;
  betaCarotene: SearchResultQuery_recipes_recipes_nutrition_betaCarotene | null;
  pantothenicAcid: SearchResultQuery_recipes_recipes_nutrition_pantothenicAcid | null;
  vitA: SearchResultQuery_recipes_recipes_nutrition_vitA | null;
  vitAIU: SearchResultQuery_recipes_recipes_nutrition_vitAIU | null;
  vitB6: SearchResultQuery_recipes_recipes_nutrition_vitB6 | null;
  vitB12: SearchResultQuery_recipes_recipes_nutrition_vitB12 | null;
  vitC: SearchResultQuery_recipes_recipes_nutrition_vitC | null;
  vitD: SearchResultQuery_recipes_recipes_nutrition_vitD | null;
  vitD2: SearchResultQuery_recipes_recipes_nutrition_vitD2 | null;
  vitD3: SearchResultQuery_recipes_recipes_nutrition_vitD3 | null;
  vitE: SearchResultQuery_recipes_recipes_nutrition_vitE | null;
  vitK: SearchResultQuery_recipes_recipes_nutrition_vitK | null;
  zinc: SearchResultQuery_recipes_recipes_nutrition_zinc | null;
  tryptophan: SearchResultQuery_recipes_recipes_nutrition_tryptophan | null;
  threonine: SearchResultQuery_recipes_recipes_nutrition_threonine | null;
  isoleucine: SearchResultQuery_recipes_recipes_nutrition_isoleucine | null;
  leucine: SearchResultQuery_recipes_recipes_nutrition_leucine | null;
  lysine: SearchResultQuery_recipes_recipes_nutrition_lysine | null;
  methionine: SearchResultQuery_recipes_recipes_nutrition_methionine | null;
  cystine: SearchResultQuery_recipes_recipes_nutrition_cystine | null;
  phenylalanine: SearchResultQuery_recipes_recipes_nutrition_phenylalanine | null;
  tyrosine: SearchResultQuery_recipes_recipes_nutrition_tyrosine | null;
  valine: SearchResultQuery_recipes_recipes_nutrition_valine | null;
  arginine: SearchResultQuery_recipes_recipes_nutrition_arginine | null;
  histidine: SearchResultQuery_recipes_recipes_nutrition_histidine | null;
  alanine: SearchResultQuery_recipes_recipes_nutrition_alanine | null;
  asparticAcid: SearchResultQuery_recipes_recipes_nutrition_asparticAcid | null;
  glutamicAcid: SearchResultQuery_recipes_recipes_nutrition_glutamicAcid | null;
  glycine: SearchResultQuery_recipes_recipes_nutrition_glycine | null;
  proline: SearchResultQuery_recipes_recipes_nutrition_proline | null;
  serine: SearchResultQuery_recipes_recipes_nutrition_serine | null;
  hydroxyproline: SearchResultQuery_recipes_recipes_nutrition_hydroxyproline | null;
}

export interface SearchResultQuery_recipes_recipes {
  id: string;
  slug: string;
  title: SearchResultQuery_recipes_recipes_title[];
  image: SearchResultQuery_recipes_recipes_image | null;
  timing: SearchResultQuery_recipes_recipes_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: SearchResultQuery_recipes_recipes_thumbnail | null;
  ingredients: SearchResultQuery_recipes_recipes_ingredients[];
  author: SearchResultQuery_recipes_recipes_author;
  nutrition: SearchResultQuery_recipes_recipes_nutrition;
}

export interface SearchResultQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface SearchResultQuery_recipes {
  recipes: SearchResultQuery_recipes_recipes[];
  pagination: SearchResultQuery_recipes_pagination;
}

export interface SearchResultQuery {
  recipes: SearchResultQuery_recipes;
}

export interface SearchResultQueryVariables {
  nameSearchQuery: string;
  lastId?: any | null;
  tags?: string[] | null;
}
