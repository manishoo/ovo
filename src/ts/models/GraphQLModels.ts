/*
 * GraphQLModels.ts
 * Copyright: Ouranos Studio 2019
 */

export const ImageFragment = `
{
  width
  height
  sourceUrl
  source
  authorName
  url
}
`

export const WeightOrHeightFragment = `
{
  value
  unit
}
`

export const TranslationFragment = `
{
  lang
  description
}
`

export const InstructionFragment = `
{
	step
	text
}
`

export const NutrientDataFragment = `
{
	content
	unit
}
`

export const NutrientFragment = `
{
	saturatedFat ${NutrientDataFragment}
	polyUnsaturatedFat ${NutrientDataFragment}
	monoUnsaturatedFat ${NutrientDataFragment}
	unsaturatedFat ${NutrientDataFragment}
	cholesterol ${NutrientDataFragment}
	sodium ${NutrientDataFragment}
	potassium ${NutrientDataFragment}
	totalFat ${NutrientDataFragment}
	totalCarbohydrates ${NutrientDataFragment}
	dietaryFiber ${NutrientDataFragment}
	sugars ${NutrientDataFragment}
	protein ${NutrientDataFragment}
	vitaminC ${NutrientDataFragment}
	vitaminA ${NutrientDataFragment}
	calcium ${NutrientDataFragment}
	iron ${NutrientDataFragment}
	calories ${NutrientDataFragment}
	caloriesFromFat ${NutrientDataFragment}
}
`
export const WeightFragment = `
{
  id
  amount
  gramWeight
  seq
  description
  unit
  translations ${TranslationFragment}
}
`

export const TagFragment = `
{
	slug
	title
	info
	type
}
`

// export const FoodVarietyFragment = `
// {
// 	id
// 	name
// 	description
// }
// `

export const FoodFragment = `
{
	id
  name
  description
  image ${ImageFragment}
  thumbnail ${ImageFragment}
  nutrients ${NutrientFragment}
	weights ${WeightFragment}
  foodGroup {
    name
    id
  }
}
`

export const IngredientFragment = `
{
  name
  amount
  unit
  thumbnail ${ImageFragment}
  description
	foodId
	weight ${WeightFragment}
}
`


export const MealItemFragment = `
{
  id
  type
  title
  unitDescription
  subtitle
  thumbnail ${ImageFragment}
  amount
  seq
  totalTime
  weights ${WeightFragment}
  slug
}
`

export const MealFragment = `
{
  name
  time
  energyPercentageOfDay
  availableTime
  cook
  items ${MealItemFragment}
}
`

export const PathFragment = `
{
  id
  name
  datetime
  type
  meal ${MealFragment}
}
`

export const SelfUserFragment = `
{
  id
  username
  session
  email
  firstName
  middleName
  lastName
  avatar ${ImageFragment}
  path ${PathFragment}
  gender
  bodyFat
  age
  weight ${WeightOrHeightFragment}
  height ${WeightOrHeightFragment}
  caloriesPerDay
}
`

export const UserFragment = `
{
  id
  username
  firstName
  lastName
  avatar ${ImageFragment}
}
`

export const RecipeFragment = `
{
  id
  title
  ingredients ${IngredientFragment}
  yield
  calories
  fat
  carbohydrate
  protein
  url
  slug
  coverImage ${ImageFragment}
  thumbnail ${ImageFragment}
  instructions ${InstructionFragment}
  author ${UserFragment}
  likesCount
  likedByUser
  description
  timing {
    prepTime
    cookTime
    totalTime
  }
  origin {
    source
    sourceUrl
    authorName
    url
  }
  tags {
    slug
    title
    type
  }
  images ${ImageFragment}
  video ${ImageFragment}
  dataVersion
  createdAt
}
`