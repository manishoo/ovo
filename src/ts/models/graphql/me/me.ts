/*
 * me.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import NutritionProfileForm from '@Common/NutritionProfileForm/NutritionProfileForm'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import React from 'react'
import { Me } from './types/Me'
import { MeQuery } from './types/MeQuery'


export const MeFragment = gql`
  fragment Me on User {
    id
    username
    session
    email
    firstName
    lastName
    avatar {
      url
    }
    gender
    bodyFat
    age
    bio
    weight {
      value
      unit
    }
    height {
      value
      unit
    }
    socialNetworks {
      instagram
      twitter
      website
      pinterest
    }
    nutritionProfile { ...NutritionProfileFormNutritionProfile }
    membership {
      type
    }
    role
    achievements {
      finishedSetup
    }
    meals {
      ...MealSettingsMeal
    }
    plan
  }

  ${MealSettingsScreen.fragments.mealSettingsMeal}
  ${NutritionProfileForm.fragments.nutritionProfile}
`

export const MeOperation = gql`
  query MeQuery {
    me @client {
      ...Me
    }
  }

  ${MeFragment}
`

export const useMe = (): Me | null => {
  const { data } = useQuery<MeQuery>(MeOperation, {
    fetchPolicy: 'cache-only',
  })
  if (!data) return null

  return data.me
}

export const MeContext = React.createContext(<{ me: Me | null }>{
  me: null,
})
