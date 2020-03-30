/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileMealsQuery
// ====================================================

export interface ProfileMealsQuery_meals_meals_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileMealsQuery_meals_meals_items_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_unit = ProfileMealsQuery_meals_meals_items_unit_Weight | ProfileMealsQuery_meals_meals_items_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileMealsQuery_meals_meals_items_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fats | null;
  proteins: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_proteins | null;
  fiber: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_potassium | null;
  sugar: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sugar | null;
  sucrose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_sucrose | null;
  glucose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glucose | null;
  fructose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fructose | null;
  lactose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lactose | null;
  maltose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_maltose | null;
  galactose: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_galactose | null;
  starch: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_transFats | null;
  omega3: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_omega3 | null;
  omega6: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_omega6 | null;
  ALA: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_ALA | null;
  DHA: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_DHA | null;
  EPA: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_EPA | null;
  DPA: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_DPA | null;
  caffeine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_theobromine | null;
  calcium: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calcium | null;
  choline: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_choline | null;
  copper: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_copper | null;
  fluoride: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_fluoride | null;
  folate: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_folate | null;
  iron: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_iron | null;
  lycopene: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_magnesium | null;
  manganese: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_manganese | null;
  niacin: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_selenium | null;
  thiamine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitC | null;
  vitD: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD | null;
  vitD2: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitE | null;
  vitK: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_vitK | null;
  zinc: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_leucine | null;
  lysine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_lysine | null;
  methionine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_methionine | null;
  cystine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_tyrosine | null;
  valine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_valine | null;
  arginine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_arginine | null;
  histidine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_histidine | null;
  alanine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_glycine | null;
  proline: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_proline | null;
  serine: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_item_Food_weights[];
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: ProfileMealsQuery_meals_meals_items_item_Food_nutrition | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_timing {
  totalTime: number | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileMealsQuery_meals_meals_items_item_Recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fats | null;
  proteins: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_galactose | null;
  starch: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calcium | null;
  choline: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_choline | null;
  copper: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_folate | null;
  iron: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_valine | null;
  arginine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_glycine | null;
  proline: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_proline | null;
  serine: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_item_Recipe_title[];
  timing: ProfileMealsQuery_meals_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail | null;
  author: ProfileMealsQuery_meals_meals_items_item_Recipe_author;
  nutrition: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition | null;
}

export type ProfileMealsQuery_meals_meals_items_item = ProfileMealsQuery_meals_meals_items_item_Food | ProfileMealsQuery_meals_meals_items_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit =
  ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight
  | ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calories | null;
  totalCarbs: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  fats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fats | null;
  proteins: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  fiber: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sodium | null;
  cholesterol: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_cholesterol | null;
  potassium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_potassium | null;
  sugar: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sugar | null;
  sucrose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_sucrose | null;
  glucose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glucose | null;
  fructose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fructose | null;
  lactose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lactose | null;
  maltose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_maltose | null;
  galactose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_galactose | null;
  starch: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_starch | null;
  saturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_transFats | null;
  omega3: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_omega3 | null;
  omega6: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_omega6 | null;
  ALA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_ALA | null;
  DHA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_DHA | null;
  EPA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_EPA | null;
  DPA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_DPA | null;
  caffeine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_caffeine | null;
  theobromine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_theobromine | null;
  calcium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calcium | null;
  choline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_choline | null;
  copper: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_copper | null;
  fluoride: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_fluoride | null;
  folate: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_folate | null;
  iron: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_iron | null;
  lycopene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lycopene | null;
  magnesium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_magnesium | null;
  manganese: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_manganese | null;
  niacin: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_niacin | null;
  phosphorus: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_phosphorus | null;
  retinol: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_retinol | null;
  riboflavin: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_riboflavin | null;
  selenium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_selenium | null;
  thiamine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_thiamine | null;
  alphaCarotene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_pantothenicAcid | null;
  vitA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitA | null;
  vitAIU: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitAIU | null;
  vitB6: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitB6 | null;
  vitB12: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitB12 | null;
  vitC: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitC | null;
  vitD: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD | null;
  vitD2: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD2 | null;
  vitD3: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitD3 | null;
  vitE: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitE | null;
  vitK: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_vitK | null;
  zinc: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_zinc | null;
  tryptophan: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_tryptophan | null;
  threonine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_threonine | null;
  isoleucine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_isoleucine | null;
  leucine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_leucine | null;
  lysine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_lysine | null;
  methionine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_methionine | null;
  cystine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_cystine | null;
  phenylalanine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_phenylalanine | null;
  tyrosine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_tyrosine | null;
  valine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_valine | null;
  arginine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_arginine | null;
  histidine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_histidine | null;
  alanine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_alanine | null;
  asparticAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glutamicAcid | null;
  glycine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_glycine | null;
  proline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_proline | null;
  serine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_serine | null;
  hydroxyproline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_hydroxyproline | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights[];
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  totalCarbs: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  fats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
  proteins: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  fiber: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sodium | null;
  cholesterol: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_cholesterol | null;
  potassium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_potassium | null;
  sugar: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sugar | null;
  sucrose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_sucrose | null;
  glucose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glucose | null;
  fructose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fructose | null;
  lactose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lactose | null;
  maltose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_maltose | null;
  galactose: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_galactose | null;
  starch: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_starch | null;
  saturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_transFats | null;
  omega3: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_omega3 | null;
  omega6: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_omega6 | null;
  ALA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_ALA | null;
  DHA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_DHA | null;
  EPA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_EPA | null;
  DPA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_DPA | null;
  caffeine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_caffeine | null;
  theobromine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_theobromine | null;
  calcium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calcium | null;
  choline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_choline | null;
  copper: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_copper | null;
  fluoride: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_fluoride | null;
  folate: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_folate | null;
  iron: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_iron | null;
  lycopene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lycopene | null;
  magnesium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_magnesium | null;
  manganese: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_manganese | null;
  niacin: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_niacin | null;
  phosphorus: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_phosphorus | null;
  retinol: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_retinol | null;
  riboflavin: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_riboflavin | null;
  selenium: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_selenium | null;
  thiamine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitA | null;
  vitAIU: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitAIU | null;
  vitB6: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitB6 | null;
  vitB12: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitB12 | null;
  vitC: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitC | null;
  vitD: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD | null;
  vitD2: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD2 | null;
  vitD3: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitD3 | null;
  vitE: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitE | null;
  vitK: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_vitK | null;
  zinc: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_zinc | null;
  tryptophan: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_tryptophan | null;
  threonine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_threonine | null;
  isoleucine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_isoleucine | null;
  leucine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_leucine | null;
  lysine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_lysine | null;
  methionine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_methionine | null;
  cystine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_cystine | null;
  phenylalanine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_tyrosine | null;
  valine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_valine | null;
  arginine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_arginine | null;
  histidine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_histidine | null;
  alanine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_alanine | null;
  asparticAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glutamicAcid | null;
  glycine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_glycine | null;
  proline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_proline | null;
  serine: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_serine | null;
  hydroxyproline: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_hydroxyproline | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_title[];
  timing: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_thumbnail | null;
  author: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author;
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_item =
  ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food
  | ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_description[] | null;
  isOptional: boolean | null;
  customUnit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit | null;
  item: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item | null;
}

export interface ProfileMealsQuery_meals_meals_items {
  id: any;
  amount: number | null;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_description[] | null;
  customUnit: ProfileMealsQuery_meals_meals_items_customUnit | null;
  isOptional: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_unit | null;
  item: ProfileMealsQuery_meals_meals_items_item | null;
  alternativeMealItems: ProfileMealsQuery_meals_meals_items_alternativeMealItems[];
}

export interface ProfileMealsQuery_meals_meals_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_timing {
  totalTime: number | null;
}

export interface ProfileMealsQuery_meals_meals {
  id: string;
  name: ProfileMealsQuery_meals_meals_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: ProfileMealsQuery_meals_meals_items[];
  hasPermutations: boolean | null;
  author: ProfileMealsQuery_meals_meals_author;
  timing: ProfileMealsQuery_meals_meals_timing;
}

export interface ProfileMealsQuery_meals_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileMealsQuery_meals {
  meals: ProfileMealsQuery_meals_meals[];
  pagination: ProfileMealsQuery_meals_pagination;
}

export interface ProfileMealsQuery {
  meals: ProfileMealsQuery_meals;
}

export interface ProfileMealsQueryVariables {
  lastId?: string | null;
  userId?: any | null;
}
