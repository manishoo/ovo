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
import { MeContext } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { getParam } from '@Utils'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { FoodScreenFoodClass } from './types/FoodScreenFoodClass'
import { FoodScreenQuery, FoodScreenQueryVariables } from './types/FoodScreenQuery'


const MODAL_ID = 'FoodScreen'
const MODAL_MAX_WIDTH = 800

interface FoodScreenCommonProps {
  slug?: string,
  modal?: boolean,
}

interface FoodScreenProps extends FoodScreenCommonProps {
  foodClass: FoodScreenFoodClass,
}

interface FoodScreenState {
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
            // maxWidth={MODAL_MAX_WIDTH}
            maxWidth={MODAL_MAX_WIDTH}
            fullHeight
            theme={theme}
          >
            <FoodScreenContainer
              {...props}
              modal
            />
          </Modal>
        )}
      </ThemeContext.Consumer>,
      MODAL_ID,
    )
  )

  public render() {
    return (
      <Page
        lazyRender
        maxWidth={MODAL_MAX_WIDTH}
        withFooter={!this.props.modal}
      >
        <MeContext.Consumer>
          {({ me }) => (
            <Navbar
              modalId={this.props.modal ? MODAL_ID : undefined}
            >
              {me && this._renderControlBar(me)}
            </Navbar>
          )}
        </MeContext.Consumer>

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
      drawerVisible: ResponsiveWidthStore.isDrawerVisible(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.drawerVisible ? this.state.width : this.state.width - Styles.values.drawerWidth)

  private _renderControlBar = (me: Me) => {
    if (this.props.foodClass && (AppConfig.getPlatformType() === 'web') && (me.role === Role.operator)) {
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

  console.log('data', data)

  if (!data) return null
  if (!data.foodClass) return null

  return (
    <FoodScreen
      {...props}
      foodClass={data.foodClass}
    />
  )
}
