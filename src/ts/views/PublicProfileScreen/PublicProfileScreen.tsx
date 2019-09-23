/*
 * PublicProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from 'common/Image/Image'
import RecipesList from 'common/RecipesList/RecipesList'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { User } from 'src/ts/models/FoodModels'
import { ProfileRecipesFragments } from 'src/ts/views/ProfileScreen/components/ProfileRecipesFragments'


interface ProfileProps {
  style?: any,
  user: Partial<User>,
}

export default class PublicProfileScreen extends RX.Component<ProfileProps> {
  render() {
    const { style, user } = this.props

    return (
      <RX.ScrollView
        style={[styles.container, style]}
      >
        <Image
          source={user.imageUrl!.url}
          style={styles.avatar}
        />
        <Text translate style={styles.title}>Dishes</Text>
        <RX.View style={styles.innerContainer}>
          <Query
            query={PROFILE_RECIPES_QUERY}
            variables={{
              userId: user.id,
              lastId: undefined,
            }}
          >
            {({ data, loading }) => {
              if (loading) return <RX.Text>Loading</RX.Text>
              if (!data) return null
              if (!data.listRecipes) return null

              return (
                <RecipesList
                  recipes={data.listRecipes.recipes}
                />
              )
            }}
          </Query>
        </RX.View>
      </RX.ScrollView>
    )
  }
}

export const PROFILE_RECIPES_QUERY = gql`
  query RecipesListQuery($lastId: String, $userId: String) {
    recipes(lastId: $lastId, userId: $userId) {
      recipes {
        ...MyRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${ProfileRecipesFragments.myRecipe}
`

const styles = {
  container: RX.Styles.createViewStyle({
    // FIXME width: fullWidth(),
    flex: 1,
    padding: Styles.values.spacingLarge,
    backgroundColor: '#fff',
    alignSelf: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
  }),
  avatarContainer: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  }),
  avatar: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 40,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 50,
    // fontWeight: 'bold',
    fontWeight: 'bold',
    color: '#e7e7e7',
    marginBottom: Styles.values.spacing,
  }),
}
