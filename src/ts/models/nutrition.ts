/*
 * nutrition.ts
 * Copyright: Ouranos Studio 2020
 */

import gql from 'graphql-tag'


const NutritionFragment = gql`
  fragment Nutrition on Nutrition {
    calories { ...NutritionInfoNutrientUnit }
    totalCarbs { ...NutritionInfoNutrientUnit }
    fats { ...NutritionInfoNutrientUnit }
    proteins { ...NutritionInfoNutrientUnit }
    fiber { ...NutritionInfoNutrientUnit }
    totalAvailableCarbs { ...NutritionInfoNutrientUnit }
    sodium { ...NutritionInfoNutrientUnit }
    cholesterol { ...NutritionInfoNutrientUnit }
    potassium { ...NutritionInfoNutrientUnit }

    # Sugars
    sugar { ...NutritionInfoNutrientUnit }
    sucrose { ...NutritionInfoNutrientUnit }
    glucose { ...NutritionInfoNutrientUnit }
    fructose { ...NutritionInfoNutrientUnit }
    lactose { ...NutritionInfoNutrientUnit }
    maltose { ...NutritionInfoNutrientUnit }
    galactose { ...NutritionInfoNutrientUnit }
    starch { ...NutritionInfoNutrientUnit }

    # Fats
    saturatedFats { ...NutritionInfoNutrientUnit }
    monounsaturatedFats { ...NutritionInfoNutrientUnit }
    polyunsaturatedFats { ...NutritionInfoNutrientUnit }
    transFats { ...NutritionInfoNutrientUnit }

    # Fatty Acids
    omega3 { ...NutritionInfoNutrientUnit }
    omega6 { ...NutritionInfoNutrientUnit }
    ALA { ...NutritionInfoNutrientUnit }
    DHA { ...NutritionInfoNutrientUnit }
    EPA { ...NutritionInfoNutrientUnit }
    DPA { ...NutritionInfoNutrientUnit }

    # Vitamins
    caffeine { ...NutritionInfoNutrientUnit }
    theobromine { ...NutritionInfoNutrientUnit }
    calcium { ...NutritionInfoNutrientUnit }
    choline { ...NutritionInfoNutrientUnit }
    copper { ...NutritionInfoNutrientUnit }
    fluoride { ...NutritionInfoNutrientUnit }
    folate { ...NutritionInfoNutrientUnit }
    iron { ...NutritionInfoNutrientUnit }
    lycopene { ...NutritionInfoNutrientUnit }
    magnesium { ...NutritionInfoNutrientUnit }
    manganese { ...NutritionInfoNutrientUnit }
    niacin { ...NutritionInfoNutrientUnit }
    phosphorus { ...NutritionInfoNutrientUnit }
    retinol { ...NutritionInfoNutrientUnit }
    riboflavin { ...NutritionInfoNutrientUnit }
    selenium { ...NutritionInfoNutrientUnit }
    thiamine { ...NutritionInfoNutrientUnit }
    alphaCarotene { ...NutritionInfoNutrientUnit }
    betaCarotene { ...NutritionInfoNutrientUnit }
    pantothenicAcid { ...NutritionInfoNutrientUnit }
    vitA { ...NutritionInfoNutrientUnit }
    vitAIU { ...NutritionInfoNutrientUnit }
    vitB6 { ...NutritionInfoNutrientUnit }
    vitB12 { ...NutritionInfoNutrientUnit }
    vitC { ...NutritionInfoNutrientUnit }
    vitD { ...NutritionInfoNutrientUnit }
    #    vitDIU { ...NutritionInfoNutrientUnit }
    vitD2 { ...NutritionInfoNutrientUnit }
    vitD3 { ...NutritionInfoNutrientUnit }
    vitE { ...NutritionInfoNutrientUnit }
    vitK { ...NutritionInfoNutrientUnit }
    zinc { ...NutritionInfoNutrientUnit }

    # Amino Acids
    tryptophan { ...NutritionInfoNutrientUnit }
    threonine { ...NutritionInfoNutrientUnit }
    isoleucine { ...NutritionInfoNutrientUnit }
    leucine { ...NutritionInfoNutrientUnit }
    lysine { ...NutritionInfoNutrientUnit }
    methionine { ...NutritionInfoNutrientUnit }
    cystine { ...NutritionInfoNutrientUnit }
    phenylalanine { ...NutritionInfoNutrientUnit }
    tyrosine { ...NutritionInfoNutrientUnit }
    valine { ...NutritionInfoNutrientUnit }
    methionine { ...NutritionInfoNutrientUnit }
    arginine { ...NutritionInfoNutrientUnit }
    histidine { ...NutritionInfoNutrientUnit }
    alanine { ...NutritionInfoNutrientUnit }
    asparticAcid { ...NutritionInfoNutrientUnit }
    glutamicAcid { ...NutritionInfoNutrientUnit }
    glycine { ...NutritionInfoNutrientUnit }
    proline { ...NutritionInfoNutrientUnit }
    serine { ...NutritionInfoNutrientUnit }
    hydroxyproline { ...NutritionInfoNutrientUnit }
  }

  fragment NutritionInfoNutrientUnit on NutrientUnit {
    amount
    unit
  }
`

export default NutritionFragment
