/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: ProfileRecipesQuery
// ====================================================

export interface ProfileRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_image {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface ProfileRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type ProfileRecipesQuery_recipes_recipes_ingredients_unit = ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight | ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_image {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition {
  calories: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fats | null;
  proteins: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins | null;
  fiber: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_potassium | null;
  sugar: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sugar | null;
  sucrose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_sucrose | null;
  glucose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glucose | null;
  fructose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fructose | null;
  lactose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lactose | null;
  maltose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_maltose | null;
  galactose: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_galactose | null;
  starch: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_transFats | null;
  omega3: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega3 | null;
  omega6: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_omega6 | null;
  ALA: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_ALA | null;
  DHA: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DHA | null;
  EPA: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_EPA | null;
  DPA: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_DPA | null;
  caffeine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_theobromine | null;
  calcium: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_calcium | null;
  choline: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_choline | null;
  copper: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_copper | null;
  fluoride: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_fluoride | null;
  folate: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_folate | null;
  iron: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_iron | null;
  lycopene: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_magnesium | null;
  manganese: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_manganese | null;
  niacin: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_selenium | null;
  thiamine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitC | null;
  vitD: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD | null;
  vitD2: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitE | null;
  vitK: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_vitK | null;
  zinc: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_leucine | null;
  lysine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_lysine | null;
  methionine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_methionine | null;
  cystine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_tyrosine | null;
  valine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_valine | null;
  arginine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_arginine | null;
  histidine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_histidine | null;
  alanine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_glycine | null;
  proline: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_proline | null;
  serine: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_name[];
  description: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights[];
  image: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_image | null;
  thumbnail: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_nutrition;
  origFoodGroups: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition {
  calories: ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories | null;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_title[];
  nutrition: ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_nutrition;
}

export type ProfileRecipesQuery_recipes_recipes_ingredients_item = ProfileRecipesQuery_recipes_recipes_ingredients_item_Food | ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe;

export interface ProfileRecipesQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileRecipesQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileRecipesQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileRecipesQuery_recipes_recipes_ingredients_unit | null;
  item: ProfileRecipesQuery_recipes_recipes_ingredients_item | null;
}

export interface ProfileRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: ProfileRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_nutrition {
  calories: ProfileRecipesQuery_recipes_recipes_nutrition_calories | null;
  totalCarbs: ProfileRecipesQuery_recipes_recipes_nutrition_totalCarbs | null;
  fats: ProfileRecipesQuery_recipes_recipes_nutrition_fats | null;
  proteins: ProfileRecipesQuery_recipes_recipes_nutrition_proteins | null;
  fiber: ProfileRecipesQuery_recipes_recipes_nutrition_fiber | null;
  totalAvailableCarbs: ProfileRecipesQuery_recipes_recipes_nutrition_totalAvailableCarbs | null;
  sodium: ProfileRecipesQuery_recipes_recipes_nutrition_sodium | null;
  cholesterol: ProfileRecipesQuery_recipes_recipes_nutrition_cholesterol | null;
  potassium: ProfileRecipesQuery_recipes_recipes_nutrition_potassium | null;
  sugar: ProfileRecipesQuery_recipes_recipes_nutrition_sugar | null;
  sucrose: ProfileRecipesQuery_recipes_recipes_nutrition_sucrose | null;
  glucose: ProfileRecipesQuery_recipes_recipes_nutrition_glucose | null;
  fructose: ProfileRecipesQuery_recipes_recipes_nutrition_fructose | null;
  lactose: ProfileRecipesQuery_recipes_recipes_nutrition_lactose | null;
  maltose: ProfileRecipesQuery_recipes_recipes_nutrition_maltose | null;
  galactose: ProfileRecipesQuery_recipes_recipes_nutrition_galactose | null;
  starch: ProfileRecipesQuery_recipes_recipes_nutrition_starch | null;
  saturatedFats: ProfileRecipesQuery_recipes_recipes_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileRecipesQuery_recipes_recipes_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileRecipesQuery_recipes_recipes_nutrition_polyunsaturatedFats | null;
  transFats: ProfileRecipesQuery_recipes_recipes_nutrition_transFats | null;
  omega3: ProfileRecipesQuery_recipes_recipes_nutrition_omega3 | null;
  omega6: ProfileRecipesQuery_recipes_recipes_nutrition_omega6 | null;
  ALA: ProfileRecipesQuery_recipes_recipes_nutrition_ALA | null;
  DHA: ProfileRecipesQuery_recipes_recipes_nutrition_DHA | null;
  EPA: ProfileRecipesQuery_recipes_recipes_nutrition_EPA | null;
  DPA: ProfileRecipesQuery_recipes_recipes_nutrition_DPA | null;
  caffeine: ProfileRecipesQuery_recipes_recipes_nutrition_caffeine | null;
  theobromine: ProfileRecipesQuery_recipes_recipes_nutrition_theobromine | null;
  calcium: ProfileRecipesQuery_recipes_recipes_nutrition_calcium | null;
  choline: ProfileRecipesQuery_recipes_recipes_nutrition_choline | null;
  copper: ProfileRecipesQuery_recipes_recipes_nutrition_copper | null;
  fluoride: ProfileRecipesQuery_recipes_recipes_nutrition_fluoride | null;
  folate: ProfileRecipesQuery_recipes_recipes_nutrition_folate | null;
  iron: ProfileRecipesQuery_recipes_recipes_nutrition_iron | null;
  lycopene: ProfileRecipesQuery_recipes_recipes_nutrition_lycopene | null;
  magnesium: ProfileRecipesQuery_recipes_recipes_nutrition_magnesium | null;
  manganese: ProfileRecipesQuery_recipes_recipes_nutrition_manganese | null;
  niacin: ProfileRecipesQuery_recipes_recipes_nutrition_niacin | null;
  phosphorus: ProfileRecipesQuery_recipes_recipes_nutrition_phosphorus | null;
  retinol: ProfileRecipesQuery_recipes_recipes_nutrition_retinol | null;
  riboflavin: ProfileRecipesQuery_recipes_recipes_nutrition_riboflavin | null;
  selenium: ProfileRecipesQuery_recipes_recipes_nutrition_selenium | null;
  thiamine: ProfileRecipesQuery_recipes_recipes_nutrition_thiamine | null;
  alphaCarotene: ProfileRecipesQuery_recipes_recipes_nutrition_alphaCarotene | null;
  betaCarotene: ProfileRecipesQuery_recipes_recipes_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileRecipesQuery_recipes_recipes_nutrition_pantothenicAcid | null;
  vitA: ProfileRecipesQuery_recipes_recipes_nutrition_vitA | null;
  vitAIU: ProfileRecipesQuery_recipes_recipes_nutrition_vitAIU | null;
  vitB6: ProfileRecipesQuery_recipes_recipes_nutrition_vitB6 | null;
  vitB12: ProfileRecipesQuery_recipes_recipes_nutrition_vitB12 | null;
  vitC: ProfileRecipesQuery_recipes_recipes_nutrition_vitC | null;
  vitD: ProfileRecipesQuery_recipes_recipes_nutrition_vitD | null;
  vitD2: ProfileRecipesQuery_recipes_recipes_nutrition_vitD2 | null;
  vitD3: ProfileRecipesQuery_recipes_recipes_nutrition_vitD3 | null;
  vitE: ProfileRecipesQuery_recipes_recipes_nutrition_vitE | null;
  vitK: ProfileRecipesQuery_recipes_recipes_nutrition_vitK | null;
  zinc: ProfileRecipesQuery_recipes_recipes_nutrition_zinc | null;
  tryptophan: ProfileRecipesQuery_recipes_recipes_nutrition_tryptophan | null;
  threonine: ProfileRecipesQuery_recipes_recipes_nutrition_threonine | null;
  isoleucine: ProfileRecipesQuery_recipes_recipes_nutrition_isoleucine | null;
  leucine: ProfileRecipesQuery_recipes_recipes_nutrition_leucine | null;
  lysine: ProfileRecipesQuery_recipes_recipes_nutrition_lysine | null;
  methionine: ProfileRecipesQuery_recipes_recipes_nutrition_methionine | null;
  cystine: ProfileRecipesQuery_recipes_recipes_nutrition_cystine | null;
  phenylalanine: ProfileRecipesQuery_recipes_recipes_nutrition_phenylalanine | null;
  tyrosine: ProfileRecipesQuery_recipes_recipes_nutrition_tyrosine | null;
  valine: ProfileRecipesQuery_recipes_recipes_nutrition_valine | null;
  arginine: ProfileRecipesQuery_recipes_recipes_nutrition_arginine | null;
  histidine: ProfileRecipesQuery_recipes_recipes_nutrition_histidine | null;
  alanine: ProfileRecipesQuery_recipes_recipes_nutrition_alanine | null;
  asparticAcid: ProfileRecipesQuery_recipes_recipes_nutrition_asparticAcid | null;
  glutamicAcid: ProfileRecipesQuery_recipes_recipes_nutrition_glutamicAcid | null;
  glycine: ProfileRecipesQuery_recipes_recipes_nutrition_glycine | null;
  proline: ProfileRecipesQuery_recipes_recipes_nutrition_proline | null;
  serine: ProfileRecipesQuery_recipes_recipes_nutrition_serine | null;
  hydroxyproline: ProfileRecipesQuery_recipes_recipes_nutrition_hydroxyproline | null;
}

export interface ProfileRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileRecipesQuery_recipes_recipes_title[];
  image: ProfileRecipesQuery_recipes_recipes_image | null;
  timing: ProfileRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileRecipesQuery_recipes_recipes_thumbnail | null;
  ingredients: ProfileRecipesQuery_recipes_recipes_ingredients[];
  author: ProfileRecipesQuery_recipes_recipes_author;
  nutrition: ProfileRecipesQuery_recipes_recipes_nutrition;
}

export interface ProfileRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileRecipesQuery_recipes {
  recipes: ProfileRecipesQuery_recipes_recipes[];
  pagination: ProfileRecipesQuery_recipes_pagination;
}

export interface ProfileRecipesQuery {
  recipes: ProfileRecipesQuery_recipes;
}

export interface ProfileRecipesQueryVariables {
  lastId?: any | null;
  userId?: any | null;
  size?: number | null;
}
