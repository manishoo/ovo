/*
 * Navbar.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { navigate, withNavigation } from 'src/ts/utilities'


interface NavbarProps {
  style?: any,
  title?: string,
}

@withNavigation
export default class Navbar extends RX.Component<NavbarProps> {
  render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, { height: Styles.values.navBarHeight }, style]}
          >
            {this.renderBackButton(theme)}
            <RX.Text style={styles.titleContainer}>
              <RX.Text style={[styles.title, { fontSize: 18, }]}>{this.props.title}</RX.Text>
            </RX.Text>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private renderBackButton = (theme: Theme) => (
    <RX.View
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={() => navigate(this.props, 'back')}
    >
      <RX.Image
        source={ImageSource.Back}
        style={styles.backImage}
      />
      <Text translate style={[styles.backText, { color: theme.colors.navbarBackButtonColor }]}>Back</Text>
    </RX.View>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Styles.values.spacing * 2,
    // backgroundColor: 'red',
  }),
  backText: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginLeft: 5,
  }),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
  }),
  titleContainer: RX.Styles.createViewStyle({
    // position: 'absolute',
    // left: 0,
    // right: 0,
    [Styles.values.marginStart]: Styles.values.spacing,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    fontWeight: 'bold',
  }),
}
