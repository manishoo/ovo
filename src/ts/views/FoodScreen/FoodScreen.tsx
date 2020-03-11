/*
 * FoodScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import { Role } from '@Models/global-types'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { Me } from '@Services/types/Me'
import UserStore from '@Services/UserService'
import { getParam } from '@Utils'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { FoodScreenFoodClass } from './types/FoodScreenFoodClass'
import { FoodScreenQuery, FoodScreenQueryVariables } from './types/FoodScreenQuery'


const MODAL_ID = 'FoodScreen'

interface FoodScreenCommonProps extends RX.CommonProps {
  slug?: string
}

interface FoodScreenProps {
  foodClass: FoodScreenFoodClass,
}

interface FoodScreenState {
  me: Me | null,
  width: number,
  drawerVisible?: boolean,
  isSmallOrTiny?: boolean,
}

export class FoodScreen extends ComponentBase<FoodScreenProps, FoodScreenState> {
  static fragments = {
    foodClass: gql`
      fragment FoodScreenFoodClass on FoodClass {
        id
        name {text locale}
        description {text locale}
        image {url}
        foodGroups {
          id
          name {text locale}
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

  public static showModal = (props: FoodScreenCommonProps) => (
    RX.Modal.show(
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Modal
            key={MODAL_ID}
            modalId={MODAL_ID}
            fullWidth
            fullHeight
            theme={theme}
          >
            <FoodScreenContainer
              {...props}
            />
          </Modal>
        )}
      </ThemeContext.Consumer>,
      MODAL_ID,
    )
  )

  public render() {
    return (
      <Page lazyRender>
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
            source={this.props.foodClass.image ? this.props.foodClass.image.url : ''}
            resizeMode={'cover'}
            style={{ flex: 1, borderRadius: this.state.isSmallOrTiny ? 0 : 20 }}
          />
        </RX.View>

        <RX.View style={{ paddingTop: Styles.values.spacing, paddingBottom: Styles.values.spacing }}>
          <Text type={Text.types.title} translations={this.props.foodClass.name} />
          <Text type={Text.types.body} translations={this.props.foodClass.description || []} />
        </RX.View>
      </Page>
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
    if (this.props.foodClass && (AppConfig.getPlatformType() === 'web') && this.state.me && (this.state.me.role === Role.operator)) {
      return (
        <RX.View style={{ flexDirection: 'row' }}>
          <Link to={`${AppConfig.panelAddress}/food-class/${this.props.foodClass.id}`} openInNewTab>
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

export default function FoodScreenContainer(props: FoodScreenCommonProps) {
  const { data } = useQuery<FoodScreenQuery, FoodScreenQueryVariables>(gql`
    query FoodScreenQuery ($slug: String!) {
      foodClass(slug: $slug) {
        ...FoodScreenFoodClass
      }
    }

    ${FoodScreen.fragments.foodClass}
  `, {
    variables: {
      slug: props.slug || getParam(props, 'slug'),
    }
  })

  if (!data) return null
  if (!data.foodClass) return null

  return (
    <FoodScreen
      foodClass={data.foodClass}
    />
  )
}
