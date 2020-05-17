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
      watch: false,
      globalTypesFile: './src/ts/models/global-types.ts',
      noAddTypeName: true,
      target: 'typescript',
      // includes: ["src/resources"]
    },
  }
}
