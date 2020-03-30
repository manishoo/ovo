/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, MealAvailableTime, MealSize, RecipeStatus } from './../../../../models/global-types'

// ====================================================
// GraphQL query operation: CalendarQuery
// ====================================================

export interface CalendarQuery_calendar_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface CalendarQuery_calendar_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_customUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_customUnit_name[];
}

export interface CalendarQuery_calendar_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: CalendarQuery_calendar_meals_items_unit_Weight_name[];
}

export interface CalendarQuery_calendar_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_unit_CustomUnit_name[];
}

export type CalendarQuery_calendar_meals_items_unit =
  CalendarQuery_calendar_meals_items_unit_Weight
  | CalendarQuery_calendar_meals_items_unit_CustomUnit;

export interface CalendarQuery_calendar_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: CalendarQuery_calendar_meals_items_item_Food_weights_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_fats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_starch {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_choline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_copper {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_folate {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_iron {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_valine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_proline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_serine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Food_nutrition_calories | null;
  totalCarbs: CalendarQuery_calendar_meals_items_item_Food_nutrition_totalCarbs | null;
  fats: CalendarQuery_calendar_meals_items_item_Food_nutrition_fats | null;
  proteins: CalendarQuery_calendar_meals_items_item_Food_nutrition_proteins | null;
  fiber: CalendarQuery_calendar_meals_items_item_Food_nutrition_fiber | null;
  totalAvailableCarbs: CalendarQuery_calendar_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  sodium: CalendarQuery_calendar_meals_items_item_Food_nutrition_sodium | null;
  cholesterol: CalendarQuery_calendar_meals_items_item_Food_nutrition_cholesterol | null;
  potassium: CalendarQuery_calendar_meals_items_item_Food_nutrition_potassium | null;
  sugar: CalendarQuery_calendar_meals_items_item_Food_nutrition_sugar | null;
  sucrose: CalendarQuery_calendar_meals_items_item_Food_nutrition_sucrose | null;
  glucose: CalendarQuery_calendar_meals_items_item_Food_nutrition_glucose | null;
  fructose: CalendarQuery_calendar_meals_items_item_Food_nutrition_fructose | null;
  lactose: CalendarQuery_calendar_meals_items_item_Food_nutrition_lactose | null;
  maltose: CalendarQuery_calendar_meals_items_item_Food_nutrition_maltose | null;
  galactose: CalendarQuery_calendar_meals_items_item_Food_nutrition_galactose | null;
  starch: CalendarQuery_calendar_meals_items_item_Food_nutrition_starch | null;
  saturatedFats: CalendarQuery_calendar_meals_items_item_Food_nutrition_saturatedFats | null;
  monounsaturatedFats: CalendarQuery_calendar_meals_items_item_Food_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: CalendarQuery_calendar_meals_items_item_Food_nutrition_polyunsaturatedFats | null;
  transFats: CalendarQuery_calendar_meals_items_item_Food_nutrition_transFats | null;
  omega3: CalendarQuery_calendar_meals_items_item_Food_nutrition_omega3 | null;
  omega6: CalendarQuery_calendar_meals_items_item_Food_nutrition_omega6 | null;
  ALA: CalendarQuery_calendar_meals_items_item_Food_nutrition_ALA | null;
  DHA: CalendarQuery_calendar_meals_items_item_Food_nutrition_DHA | null;
  EPA: CalendarQuery_calendar_meals_items_item_Food_nutrition_EPA | null;
  DPA: CalendarQuery_calendar_meals_items_item_Food_nutrition_DPA | null;
  caffeine: CalendarQuery_calendar_meals_items_item_Food_nutrition_caffeine | null;
  theobromine: CalendarQuery_calendar_meals_items_item_Food_nutrition_theobromine | null;
  calcium: CalendarQuery_calendar_meals_items_item_Food_nutrition_calcium | null;
  choline: CalendarQuery_calendar_meals_items_item_Food_nutrition_choline | null;
  copper: CalendarQuery_calendar_meals_items_item_Food_nutrition_copper | null;
  fluoride: CalendarQuery_calendar_meals_items_item_Food_nutrition_fluoride | null;
  folate: CalendarQuery_calendar_meals_items_item_Food_nutrition_folate | null;
  iron: CalendarQuery_calendar_meals_items_item_Food_nutrition_iron | null;
  lycopene: CalendarQuery_calendar_meals_items_item_Food_nutrition_lycopene | null;
  magnesium: CalendarQuery_calendar_meals_items_item_Food_nutrition_magnesium | null;
  manganese: CalendarQuery_calendar_meals_items_item_Food_nutrition_manganese | null;
  niacin: CalendarQuery_calendar_meals_items_item_Food_nutrition_niacin | null;
  phosphorus: CalendarQuery_calendar_meals_items_item_Food_nutrition_phosphorus | null;
  retinol: CalendarQuery_calendar_meals_items_item_Food_nutrition_retinol | null;
  riboflavin: CalendarQuery_calendar_meals_items_item_Food_nutrition_riboflavin | null;
  selenium: CalendarQuery_calendar_meals_items_item_Food_nutrition_selenium | null;
  thiamine: CalendarQuery_calendar_meals_items_item_Food_nutrition_thiamine | null;
  alphaCarotene: CalendarQuery_calendar_meals_items_item_Food_nutrition_alphaCarotene | null;
  betaCarotene: CalendarQuery_calendar_meals_items_item_Food_nutrition_betaCarotene | null;
  pantothenicAcid: CalendarQuery_calendar_meals_items_item_Food_nutrition_pantothenicAcid | null;
  vitA: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitA | null;
  vitAIU: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitAIU | null;
  vitB6: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitB6 | null;
  vitB12: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitB12 | null;
  vitC: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitC | null;
  vitD: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD | null;
  vitD2: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD2 | null;
  vitD3: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitD3 | null;
  vitE: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitE | null;
  vitK: CalendarQuery_calendar_meals_items_item_Food_nutrition_vitK | null;
  zinc: CalendarQuery_calendar_meals_items_item_Food_nutrition_zinc | null;
  tryptophan: CalendarQuery_calendar_meals_items_item_Food_nutrition_tryptophan | null;
  threonine: CalendarQuery_calendar_meals_items_item_Food_nutrition_threonine | null;
  isoleucine: CalendarQuery_calendar_meals_items_item_Food_nutrition_isoleucine | null;
  leucine: CalendarQuery_calendar_meals_items_item_Food_nutrition_leucine | null;
  lysine: CalendarQuery_calendar_meals_items_item_Food_nutrition_lysine | null;
  methionine: CalendarQuery_calendar_meals_items_item_Food_nutrition_methionine | null;
  cystine: CalendarQuery_calendar_meals_items_item_Food_nutrition_cystine | null;
  phenylalanine: CalendarQuery_calendar_meals_items_item_Food_nutrition_phenylalanine | null;
  tyrosine: CalendarQuery_calendar_meals_items_item_Food_nutrition_tyrosine | null;
  valine: CalendarQuery_calendar_meals_items_item_Food_nutrition_valine | null;
  arginine: CalendarQuery_calendar_meals_items_item_Food_nutrition_arginine | null;
  histidine: CalendarQuery_calendar_meals_items_item_Food_nutrition_histidine | null;
  alanine: CalendarQuery_calendar_meals_items_item_Food_nutrition_alanine | null;
  asparticAcid: CalendarQuery_calendar_meals_items_item_Food_nutrition_asparticAcid | null;
  glutamicAcid: CalendarQuery_calendar_meals_items_item_Food_nutrition_glutamicAcid | null;
  glycine: CalendarQuery_calendar_meals_items_item_Food_nutrition_glycine | null;
  proline: CalendarQuery_calendar_meals_items_item_Food_nutrition_proline | null;
  serine: CalendarQuery_calendar_meals_items_item_Food_nutrition_serine | null;
  hydroxyproline: CalendarQuery_calendar_meals_items_item_Food_nutrition_hydroxyproline | null;
}

export interface CalendarQuery_calendar_meals_items_item_Food {
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Food_name[];
  description: CalendarQuery_calendar_meals_items_item_Food_description[] | null;
  weights: CalendarQuery_calendar_meals_items_item_Food_weights[];
  thumbnail: CalendarQuery_calendar_meals_items_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  nutrition: CalendarQuery_calendar_meals_items_item_Food_nutrition;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_timing {
  totalTime: number | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: CalendarQuery_calendar_meals_items_item_Recipe_author_avatar | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fiber {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sodium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_cholesterol {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_potassium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sugar {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sucrose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glucose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fructose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lactose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_maltose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_galactose {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_starch {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_saturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_monounsaturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_polyunsaturatedFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_transFats {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_omega3 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_omega6 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_ALA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_DHA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_EPA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_DPA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_caffeine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_theobromine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calcium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_choline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_copper {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fluoride {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_folate {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_iron {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lycopene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_magnesium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_manganese {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_niacin {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_phosphorus {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_retinol {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_riboflavin {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_selenium {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_thiamine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_alphaCarotene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_betaCarotene {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_pantothenicAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitA {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitAIU {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitB6 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitB12 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitC {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD2 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD3 {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitE {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitK {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_zinc {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_tryptophan {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_threonine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_isoleucine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_leucine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lysine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_methionine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_cystine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_phenylalanine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_tyrosine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_valine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_arginine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_histidine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_alanine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_asparticAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glutamicAcid {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glycine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_serine {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_hydroxyproline {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calories | null;
  totalCarbs: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalCarbs | null;
  fats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fats | null;
  proteins: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proteins | null;
  fiber: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fiber | null;
  totalAvailableCarbs: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  sodium: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sodium | null;
  cholesterol: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_cholesterol | null;
  potassium: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_potassium | null;
  sugar: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sugar | null;
  sucrose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_sucrose | null;
  glucose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glucose | null;
  fructose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fructose | null;
  lactose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lactose | null;
  maltose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_maltose | null;
  galactose: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_galactose | null;
  starch: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_starch | null;
  saturatedFats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_saturatedFats | null;
  monounsaturatedFats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_monounsaturatedFats | null;
  polyunsaturatedFats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_polyunsaturatedFats | null;
  transFats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_transFats | null;
  omega3: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_omega3 | null;
  omega6: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_omega6 | null;
  ALA: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_ALA | null;
  DHA: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_DHA | null;
  EPA: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_EPA | null;
  DPA: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_DPA | null;
  caffeine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_caffeine | null;
  theobromine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_theobromine | null;
  calcium: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calcium | null;
  choline: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_choline | null;
  copper: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_copper | null;
  fluoride: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fluoride | null;
  folate: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_folate | null;
  iron: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_iron | null;
  lycopene: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lycopene | null;
  magnesium: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_magnesium | null;
  manganese: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_manganese | null;
  niacin: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_niacin | null;
  phosphorus: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_phosphorus | null;
  retinol: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_retinol | null;
  riboflavin: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_riboflavin | null;
  selenium: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_selenium | null;
  thiamine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_thiamine | null;
  alphaCarotene: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_alphaCarotene | null;
  betaCarotene: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_betaCarotene | null;
  pantothenicAcid: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_pantothenicAcid | null;
  vitA: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitA | null;
  vitAIU: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitAIU | null;
  vitB6: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitB6 | null;
  vitB12: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitB12 | null;
  vitC: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitC | null;
  vitD: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD | null;
  vitD2: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD2 | null;
  vitD3: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitD3 | null;
  vitE: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitE | null;
  vitK: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_vitK | null;
  zinc: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_zinc | null;
  tryptophan: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_tryptophan | null;
  threonine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_threonine | null;
  isoleucine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_isoleucine | null;
  leucine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_leucine | null;
  lysine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_lysine | null;
  methionine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_methionine | null;
  cystine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_cystine | null;
  phenylalanine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_phenylalanine | null;
  tyrosine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_tyrosine | null;
  valine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_valine | null;
  arginine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_arginine | null;
  histidine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_histidine | null;
  alanine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_alanine | null;
  asparticAcid: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_asparticAcid | null;
  glutamicAcid: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glutamicAcid | null;
  glycine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_glycine | null;
  proline: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proline | null;
  serine: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_serine | null;
  hydroxyproline: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_hydroxyproline | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: CalendarQuery_calendar_meals_items_item_Recipe_title[];
  timing: CalendarQuery_calendar_meals_items_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: CalendarQuery_calendar_meals_items_item_Recipe_thumbnail | null;
  author: CalendarQuery_calendar_meals_items_item_Recipe_author;
  nutrition: CalendarQuery_calendar_meals_items_item_Recipe_nutrition;
}

export type CalendarQuery_calendar_meals_items_item =
  CalendarQuery_calendar_meals_items_item_Food
  | CalendarQuery_calendar_meals_items_item_Recipe;

export interface CalendarQuery_calendar_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: CalendarQuery_calendar_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: CalendarQuery_calendar_meals_items_description[] | null;
  amount: number | null;
  customUnit: CalendarQuery_calendar_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: CalendarQuery_calendar_meals_items_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: CalendarQuery_calendar_meals_items_item | null;
}

export interface CalendarQuery_calendar_meals {
  id: any;
  time: any | null;
  /**
   * if this DayMeal was associated with a Meal, this is its id
   */
  mealId: any | null;
  ate: boolean | null;
  userMeal: CalendarQuery_calendar_meals_userMeal;
  items: CalendarQuery_calendar_meals_items[];
}

export interface CalendarQuery_calendar {
  id: any;
  date: any;
  meals: CalendarQuery_calendar_meals[];
}

export interface CalendarQuery {
  calendar: CalendarQuery_calendar[];
}

export interface CalendarQueryVariables {
  dates: any[];
}
