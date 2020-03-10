/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: Recipe
// ====================================================

export interface Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_author_avatar {
  url: string;
}

export interface Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: Recipe_author_avatar | null;
}

export interface Recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number | null;
}

export interface Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_customUnit_name[];
}

export interface Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Recipe_ingredients_unit_Weight_name[];
}

export interface Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_unit_CustomUnit_name[];
}

export type Recipe_ingredients_unit = Recipe_ingredients_unit_Weight | Recipe_ingredients_unit_CustomUnit;

export interface Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Recipe_ingredients_item_Food_weights_name[];
}

export interface Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition {
  calories: Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Recipe_ingredients_item_Food {
  id: string;
  name: Recipe_ingredients_item_Food_name[];
  description: Recipe_ingredients_item_Food_description[] | null;
  weights: Recipe_ingredients_item_Food_weights[];
  image: Recipe_ingredients_item_Food_image | null;
  thumbnail: Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_image {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface Recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type Recipe_ingredients_item_Recipe_ingredients_unit = Recipe_ingredients_item_Recipe_ingredients_unit_Weight | Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  totalCarbs: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  fats: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
  proteins: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  fiber: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sodium | null;
  cholesterol: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cholesterol | null;
  potassium: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_potassium | null;
  sugar: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sugar | null;
  sucrose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_sucrose | null;
  glucose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glucose | null;
  fructose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fructose | null;
  lactose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lactose | null;
  maltose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_maltose | null;
  galactose: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_galactose | null;
  starch: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_starch | null;
  saturatedFats: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_transFats | null;
  omega3: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega3 | null;
  omega6: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_omega6 | null;
  ALA: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_ALA | null;
  DHA: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DHA | null;
  EPA: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_EPA | null;
  DPA: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_DPA | null;
  caffeine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_caffeine | null;
  theobromine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_theobromine | null;
  calcium: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calcium | null;
  choline: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_choline | null;
  copper: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_copper | null;
  fluoride: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fluoride | null;
  folate: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_folate | null;
  iron: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_iron | null;
  lycopene: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lycopene | null;
  magnesium: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_magnesium | null;
  manganese: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_manganese | null;
  niacin: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_niacin | null;
  phosphorus: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phosphorus | null;
  retinol: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_retinol | null;
  riboflavin: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_riboflavin | null;
  selenium: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_selenium | null;
  thiamine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_thiamine | null;
  alphaCarotene: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_pantothenicAcid | null;
  vitA: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitA | null;
  vitAIU: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitAIU | null;
  vitB6: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB6 | null;
  vitB12: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitB12 | null;
  vitC: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitC | null;
  vitD: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD | null;
  vitD2: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD2 | null;
  vitD3: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitD3 | null;
  vitE: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitE | null;
  vitK: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_vitK | null;
  zinc: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_zinc | null;
  tryptophan: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tryptophan | null;
  threonine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_threonine | null;
  isoleucine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_isoleucine | null;
  leucine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_leucine | null;
  lysine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_lysine | null;
  methionine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_methionine | null;
  cystine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_cystine | null;
  phenylalanine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_phenylalanine | null;
  tyrosine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_tyrosine | null;
  valine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_valine | null;
  arginine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_arginine | null;
  histidine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_histidine | null;
  alanine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_alanine | null;
  asparticAcid: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glutamicAcid | null;
  glycine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_glycine | null;
  proline: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proline | null;
  serine: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_serine | null;
  hydroxyproline: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_hydroxyproline | null;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: Recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: Recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: Recipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: Recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type Recipe_ingredients_item_Recipe_ingredients_item = Recipe_ingredients_item_Recipe_ingredients_item_Food | Recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface Recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: Recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface Recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: Recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition {
  calories: Recipe_ingredients_item_Recipe_nutrition_calories | null;
  totalCarbs: Recipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  fats: Recipe_ingredients_item_Recipe_nutrition_fats | null;
  proteins: Recipe_ingredients_item_Recipe_nutrition_proteins | null;
  fiber: Recipe_ingredients_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: Recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: Recipe_ingredients_item_Recipe_nutrition_sodium | null;
  cholesterol: Recipe_ingredients_item_Recipe_nutrition_cholesterol | null;
  potassium: Recipe_ingredients_item_Recipe_nutrition_potassium | null;
  sugar: Recipe_ingredients_item_Recipe_nutrition_sugar | null;
  sucrose: Recipe_ingredients_item_Recipe_nutrition_sucrose | null;
  glucose: Recipe_ingredients_item_Recipe_nutrition_glucose | null;
  fructose: Recipe_ingredients_item_Recipe_nutrition_fructose | null;
  lactose: Recipe_ingredients_item_Recipe_nutrition_lactose | null;
  maltose: Recipe_ingredients_item_Recipe_nutrition_maltose | null;
  galactose: Recipe_ingredients_item_Recipe_nutrition_galactose | null;
  starch: Recipe_ingredients_item_Recipe_nutrition_starch | null;
  saturatedFats: Recipe_ingredients_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: Recipe_ingredients_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: Recipe_ingredients_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: Recipe_ingredients_item_Recipe_nutrition_transFats | null;
  omega3: Recipe_ingredients_item_Recipe_nutrition_omega3 | null;
  omega6: Recipe_ingredients_item_Recipe_nutrition_omega6 | null;
  ALA: Recipe_ingredients_item_Recipe_nutrition_ALA | null;
  DHA: Recipe_ingredients_item_Recipe_nutrition_DHA | null;
  EPA: Recipe_ingredients_item_Recipe_nutrition_EPA | null;
  DPA: Recipe_ingredients_item_Recipe_nutrition_DPA | null;
  caffeine: Recipe_ingredients_item_Recipe_nutrition_caffeine | null;
  theobromine: Recipe_ingredients_item_Recipe_nutrition_theobromine | null;
  calcium: Recipe_ingredients_item_Recipe_nutrition_calcium | null;
  choline: Recipe_ingredients_item_Recipe_nutrition_choline | null;
  copper: Recipe_ingredients_item_Recipe_nutrition_copper | null;
  fluoride: Recipe_ingredients_item_Recipe_nutrition_fluoride | null;
  folate: Recipe_ingredients_item_Recipe_nutrition_folate | null;
  iron: Recipe_ingredients_item_Recipe_nutrition_iron | null;
  lycopene: Recipe_ingredients_item_Recipe_nutrition_lycopene | null;
  magnesium: Recipe_ingredients_item_Recipe_nutrition_magnesium | null;
  manganese: Recipe_ingredients_item_Recipe_nutrition_manganese | null;
  niacin: Recipe_ingredients_item_Recipe_nutrition_niacin | null;
  phosphorus: Recipe_ingredients_item_Recipe_nutrition_phosphorus | null;
  retinol: Recipe_ingredients_item_Recipe_nutrition_retinol | null;
  riboflavin: Recipe_ingredients_item_Recipe_nutrition_riboflavin | null;
  selenium: Recipe_ingredients_item_Recipe_nutrition_selenium | null;
  thiamine: Recipe_ingredients_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: Recipe_ingredients_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: Recipe_ingredients_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: Recipe_ingredients_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: Recipe_ingredients_item_Recipe_nutrition_vitA | null;
  vitAIU: Recipe_ingredients_item_Recipe_nutrition_vitAIU | null;
  vitB6: Recipe_ingredients_item_Recipe_nutrition_vitB6 | null;
  vitB12: Recipe_ingredients_item_Recipe_nutrition_vitB12 | null;
  vitC: Recipe_ingredients_item_Recipe_nutrition_vitC | null;
  vitD: Recipe_ingredients_item_Recipe_nutrition_vitD | null;
  vitD2: Recipe_ingredients_item_Recipe_nutrition_vitD2 | null;
  vitD3: Recipe_ingredients_item_Recipe_nutrition_vitD3 | null;
  vitE: Recipe_ingredients_item_Recipe_nutrition_vitE | null;
  vitK: Recipe_ingredients_item_Recipe_nutrition_vitK | null;
  zinc: Recipe_ingredients_item_Recipe_nutrition_zinc | null;
  tryptophan: Recipe_ingredients_item_Recipe_nutrition_tryptophan | null;
  threonine: Recipe_ingredients_item_Recipe_nutrition_threonine | null;
  isoleucine: Recipe_ingredients_item_Recipe_nutrition_isoleucine | null;
  leucine: Recipe_ingredients_item_Recipe_nutrition_leucine | null;
  lysine: Recipe_ingredients_item_Recipe_nutrition_lysine | null;
  methionine: Recipe_ingredients_item_Recipe_nutrition_methionine | null;
  cystine: Recipe_ingredients_item_Recipe_nutrition_cystine | null;
  phenylalanine: Recipe_ingredients_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: Recipe_ingredients_item_Recipe_nutrition_tyrosine | null;
  valine: Recipe_ingredients_item_Recipe_nutrition_valine | null;
  arginine: Recipe_ingredients_item_Recipe_nutrition_arginine | null;
  histidine: Recipe_ingredients_item_Recipe_nutrition_histidine | null;
  alanine: Recipe_ingredients_item_Recipe_nutrition_alanine | null;
  asparticAcid: Recipe_ingredients_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: Recipe_ingredients_item_Recipe_nutrition_glutamicAcid | null;
  glycine: Recipe_ingredients_item_Recipe_nutrition_glycine | null;
  proline: Recipe_ingredients_item_Recipe_nutrition_proline | null;
  serine: Recipe_ingredients_item_Recipe_nutrition_serine | null;
  hydroxyproline: Recipe_ingredients_item_Recipe_nutrition_hydroxyproline | null;
}

export interface Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Recipe_ingredients_item_Recipe_title[];
  image: Recipe_ingredients_item_Recipe_image | null;
  timing: Recipe_ingredients_item_Recipe_timing;
  status: RecipeStatus;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: Recipe_ingredients_item_Recipe_ingredients[];
  author: Recipe_ingredients_item_Recipe_author;
  nutrition: Recipe_ingredients_item_Recipe_nutrition;
}

export type Recipe_ingredients_item = Recipe_ingredients_item_Food | Recipe_ingredients_item_Recipe;

export interface Recipe_ingredients {
  id: any;
  amount: number | null;
  customUnit: Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: Recipe_ingredients_item | null;
}

export interface Recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_instructions {
  step: number;
  text: Recipe_instructions_text[];
}

export interface Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition {
  calories: Recipe_nutrition_calories | null;
  proteins: Recipe_nutrition_proteins | null;
  totalCarbs: Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: Recipe_nutrition_totalAvailableCarbs | null;
  fats: Recipe_nutrition_fats | null;
}

export interface Recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_image {
  url: string;
}

export interface Recipe {
  id: string;
  title: Recipe_title[];
  serving: number;
  slug: string;
  status: RecipeStatus;
  author: Recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: Recipe_timing;
  ingredients: Recipe_ingredients[];
  instructions: Recipe_instructions[];
  nutrition: Recipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: Recipe_description[] | null;
  image: Recipe_image | null;
  createdAt: any;
  updatedAt: any;
  tags: string[];
}
