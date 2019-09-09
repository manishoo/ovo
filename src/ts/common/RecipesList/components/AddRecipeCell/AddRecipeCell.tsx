/*
 * AddRecipeCell.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import { navigate, withNavigation } from 'src/ts/utilities'


interface AddRecipeCellProps {
  wrapperStyle?: any,
  // imageStyle?: any,
  size?: any,
}

@withNavigation
export default class AddRecipeCell extends RX.Component<AddRecipeCellProps> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, this.props.wrapperStyle]}
            onPress={() => navigate(this.props, `${Routes.recipeForm}`)}
            activeOpacity={0.7}
          >
            <RX.View
              style={[
                styles.innerContainer,
                {
                  width: this.props.size,
                  height: this.props.size * 1.3,
                  borderRadius: this.props.size / 20,
                  borderColor: theme.colors.addRecipeCardBorder
                },
              ]}>
              <RX.View style={[styles.circle, {backgroundColor: theme.colors.addRecipeCardCircleBG}]}>
                <RX.View style={[styles.plusIconVerticalLine, {backgroundColor: theme.colors.addRecipeCardCirclePlus}]} />
                <RX.View style={[styles.plusIconHorizontalLine, {backgroundColor: theme.colors.addRecipeCardCirclePlus}]} />
              </RX.View>
            </RX.View>
            <Text
              translate
              onPress={() => navigate(this.props, `${Routes.recipeForm}`)}
              style={{color: 'inherit'}}
            >CreateNewRecipe</Text>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
    // alignItems: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    borderWidth: 3,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Styles.values.spacingLarge / 2,
  }),
  circle: RX.Styles.createViewStyle({
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  plusIconVerticalLine: RX.Styles.createViewStyle({
    width: 20,
    height: 2,
    borderRadius: 2,
    position: 'absolute'
  }),
  plusIconHorizontalLine: RX.Styles.createViewStyle({
    width: 2,
    height: 20,
    borderRadius: 2,
    position: 'absolute'
    // transform: [{
    //   rotate: '90deg'
    // }]
  }),
}
