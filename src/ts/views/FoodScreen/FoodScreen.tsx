/*
 * FoodScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import CenterAlignedPageView from '@Common/CenterAlignedPageView'
import FilledButton from '@Common/FilledButton/FilledButton'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Text from '@Common/Text/Text'
import { Role } from '@Models/global-types'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import UserStore from '@Services/UserService'
import { getParam } from '@Utils'
import { FoodScreenFood } from '@Views/FoodScreen/types/FoodScreenFood'
import { FoodScreenQuery, FoodScreenQueryVariables } from '@Views/FoodScreen/types/FoodScreenQuery'
import { Me } from '@Services/types/Me'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface FoodScreenProps {
  food: FoodScreenFood,
}

interface FoodScreenState {
  me: Me | null,
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
    me: UserStore.getUser(),
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
          <Text type={Text.types.body} translations={this.props.food.foodClass.description || []} />
        </RX.View>
      </CenterAlignedPageView>
    )
  }

  protected _buildState(props: FoodScreenProps, initialBuild: boolean): Partial<FoodScreenState> | undefined {
    return {
      me: UserStore.getUser(),
      drawerVisible: ResponsiveWidthStore.isDrawerVisible(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.drawerVisible ? this.state.width : this.state.width - Styles.values.drawerWidth)

  private _renderControlBar = () => {
    if (this.props.food && (AppConfig.getPlatformType() === 'web') && this.state.me && (this.state.me.role === Role.operator)) {
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

export default function (props: FoodScreenProps) {
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
