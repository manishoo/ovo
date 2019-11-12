/*
 * FoodScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
import { translate } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { Role } from 'src/ts/models/global-types'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import UserStore from '@Services/UserStore'
import { getParam } from 'src/ts/utilities'
import { FoodScreenFood } from 'src/ts/views/FoodScreen/types/FoodScreenFood'
import { FoodScreenQuery, FoodScreenQueryVariables } from 'src/ts/views/FoodScreen/types/FoodScreenQuery'
import { Me } from 'src/ts/views/Register/types/Me'


interface FoodScreenProps {
  food: FoodScreenFood,
}

interface FoodScreenState {
  user: Me,
  width: number,
  drawerVisible?: boolean,
  isSmallOrTiny?: boolean,
}

class FoodScreen extends ComponentBase<FoodScreenProps, FoodScreenState> {
  static fragments = {
    food: gql`
      fragment FoodScreenFood on Food {
        id
        name {text locale}
        description {text locale}
        image {url}
        origFoodGroups {
          id
          name {text locale}
        }
        nutrition {
          calories {amount unit}
        }
        foodClass {
          id
          name {text locale}
          description {text locale}
        }
      }
    `
  }
  state = {
    user: UserStore.getUser(),
    drawerVisible: ResponsiveWidthStore.isDrawerVisible(),
    isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    width: ResponsiveWidthStore.getWidth(),
  }

  public render() {
    return (
      <CenterAlignedPageView>
        <Navbar>
          {this._renderControlBar()}
        </Navbar>

        <RX.View
          style={[
            {
              height: this._getWindowWidthConsideringDrawer() / 2,
            }
          ]}
        >
          <Image
            source={this.props.food.image ? this.props.food.image.url : ''}
            resizeMode={'cover'}
            style={{ flex: 1, borderRadius: this.state.isSmallOrTiny ? 0 : 20 }}
          />
        </RX.View>

        <RX.View style={{ paddingTop: Styles.values.spacing, paddingBottom: Styles.values.spacing }}>
          <Text type={Text.types.title} translations={this.props.food.foodClass.name} />
          <Text type={Text.types.body} translations={this.props.food.foodClass.description} />
        </RX.View>
      </CenterAlignedPageView>
    )
  }

  protected _buildState(props: FoodScreenProps, initialBuild: boolean): Partial<FoodScreenState> | undefined {
    return {
      user: UserStore.getUser(),
      drawerVisible: ResponsiveWidthStore.isDrawerVisible(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.drawerVisible ? this.state.width : this.state.width - Styles.values.drawerWidth)

  private _renderControlBar = () => {
    if (this.props.food && (AppConfig.getPlatformType() === 'web') && this.state.user && (this.state.user.role === Role.operator)) {
      return (
        <RX.View style={{ flexDirection: 'row' }}>
          <Link to={`${AppConfig.panelAddress}/food-class/${this.props.food.foodClass.id}`} openInNewTab>
            <FilledButton
              label={translate('Edit Food')}
              onPress={() => null}
              style={{
                [Styles.values.marginStart]: Styles.values.spacing / 2
              }}
            />
          </Link>
        </RX.View>
      )
    }

    return null
  }
}

export default function (props: any) {
  const { data } = useQuery<FoodScreenQuery, FoodScreenQueryVariables>(gql`
    query FoodScreenQuery ($id: ObjectId!) {
      food(id: $id) {
        ...FoodScreenFood
      }
    }

    ${FoodScreen.fragments.food}
  `, {
    variables: {
      id: getParam(props, 'id'),
    }
  })

  if (!data) return null
  if (!data.food) return null

  return (
    <FoodScreen
      food={data.food}
    />
  )
}

// const styles = {
//   container: RX.Styles.createViewStyle({
//     //
//   }),
//   title: RX.Styles.createTextStyle({
//     fontSize: Styles.fontSizes.size32,
//     fontWeight: '500',
//     marginBottom: 10,
//   }),
// }
