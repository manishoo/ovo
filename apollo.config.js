/*
 * apollo.config.js
 * Copyright: Ouranos Studio 2019. All rights reserved.
 */

module.exports = {
  client: {
    service: {
      name: 'solarys',
      url: 'http://localhost:4003/gql',
      // headers: {
      //   authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
      // },

      // optional disable SSL validation check
      skipSSLValidation: true,
      watch: true,
      globalTypesFile: './src/ts/models/global-types.ts',
      noAddTypeName: true,
      target: 'typescript',
    },
    includes: [
      './src/ts/views/Register/*',
      './src/ts/views/LoginForm/*',
      './src/ts/views/ProfileScreen/*',
      './src/ts/views/RecipeForm/**/*',
      './src/ts/views/Recipe/*',
      './src/ts/views/Login/*',
      './src/ts/views/SettingsScreen/*',

      './src/ts/common/FoodDialog/*',
    ],
  }
}
