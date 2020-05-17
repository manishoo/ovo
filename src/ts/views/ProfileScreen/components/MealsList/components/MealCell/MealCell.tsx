/*
 * MealCell.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealHeader from '@Common/MealHeader/MealHeader'
import MenuItem from '@Common/MenuItem/MenuItem'
import { useMe } from '@Models/graphql/me/me'
import ItemControl from '@Views/CalendarScreen/components/ItemControl/ItemControl'
import MealItemRow from '@Views/MealForm/components/MealItemRow/MealItemRow'
import { showDeletePrmopt, useMealDelete } from '@Views/MealForm/MealForm'
import { MealCellMeal } from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import { useCallback } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing,
    marginHorizontal: Styles.values.spacing / 4,
  }),
  innerContainer: RX.Styles.createViewStyle({}),
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }),
  title: RX.Styles.createTextStyle({
    // marginTop: Styles.values.spacingLarge / 2,
    fontWeight: '300',
  }),
  avatarImage: RX.Styles.createImageStyle({
    width: 50,
    height: 50,
    borderRadius: 25,
  }),
  avatarContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 15,
    [Styles.values.end]: 15,
  }),
  likesContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -10,
    flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  likeText: RX.Styles.createTextStyle({
    fontWeight: '300',
    top: 2,
    [Styles.values.end]: -15,
    fontSize: Styles.fontSizes.size16,
  }),
  timingContainer: RX.Styles.createViewStyle({
    flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    [Styles.values.start]: 16,
  }),
  timingUnit: RX.Styles.createTextStyle({
    fontWeight: '300',
  }),
  timingNumber: RX.Styles.createTextStyle({
    fontWeight: 'bold', // displayBold
    fontSize: Styles.fontSizes.size16,
    [Styles.values.marginEnd]: 3,
  }),
}

interface MealCellProps {
  style?: any,
  meal: MealCellMeal,
  hideAvatar?: boolean,
  size: number,

  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
}

export default function MealCell(props: MealCellProps) {
  const theme = useTheme()
  const { meal, size, onLayout } = props

  const me = useMe()!
  const [deleteMeal, { loading: deleteMealLoading }] = useMealDelete(me.id)

  const _onMealDelete = useCallback(() => {
    showDeletePrmopt(
      () => deleteMeal({
        variables: {
          id: meal.id,
        }
      })
    )
  }, [meal.id])

  return (
    <RX.View
      style={[
        _styles.container,
        {
          width: size,
        },
        props.style,
      ]}
    >
      <RX.View
        onLayout={onLayout}
        style={[
          RX.Styles.createViewStyle({
            borderRadius: 10,
            // padding: Styles.values.spacing / 2,
            backgroundColor: theme.colors.cardBg/*isHovering ? theme.colors.textInputBgHovering : theme.colors.textInputBg*/,
            borderWidth: 1,
            borderColor: theme.colors.borderLight,
            paddingVertical: Styles.values.spacing / 2,

            // @ts-ignore web
            transition: 'all 0.3s'
          }, false),
        ]}
      >
        <MealHeader
          meal={meal}
        >
          {
            deleteMealLoading
              ? <LoadingIndicator
                size={30}
              />
              : <ItemControl visible>
                <MenuItem
                  label={translate(translate.keys.Delete)}
                  onPress={_onMealDelete}
                />
              </ItemControl>
          }
        </MealHeader>

        {
          meal.items.map(mealItem => (
            <MealItemRow
              mealItem={mealItem}
              editable={false}
            />
          ))
        }
      </RX.View>
    </RX.View>
  )
}

MealCell.fragments = {
  meal: gql`
    fragment MealCellMeal on Meal {
      id
      name {text locale}
      likedByUser
      likesCount
      items {
        ...MealItemRowMealItem
      }
      hasPermutations
      author {
        id
        username
        avatar {url}
      }
      timing {
        totalTime
      }
    }

    ${MealItemRow.fragments.mealItem}
  `
}
