/*
 * AddRecipeCell.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { withNavigation } from '@Modules/navigator'
import RX from 'reactxp'


interface AddRecipeCellProps {
  wrapperStyle?: any,
  translatedText: string,
  onPress: () => void,
  size?: any,
}

@withNavigation
export default class AddCell extends RX.Component<AddRecipeCellProps> {
  private _previewScaleAnimatedValue = RX.Animated.createValue(1)
  private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ scale: this._previewScaleAnimatedValue }]
  })

  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.container,
              this.props.wrapperStyle,
            ]}
            onPress={this.props.onPress}
            onMouseEnter={this._onHoverStart}
            onMouseLeave={this._onHoverEnd}
            activeOpacity={0.7}
          >
            <RX.View
              style={[
                styles.innerContainer,
                {
                  width: this.props.size,
                  height: this.props.size,
                  borderRadius: this.props.size / 20,
                  borderColor: theme.colors.addCardBorder
                },
              ]}>
              <RX.Animated.View
                style={[
                  styles.circle,
                  { backgroundColor: theme.colors.addRecipeCardCircleBG },
                  this._previewAnimatedStyle,
                ]}
              >
                <RX.View
                  style={[styles.plusIconVerticalLine, { backgroundColor: theme.colors.addRecipeCardCirclePlus }]} />
                <RX.View
                  style={[styles.plusIconHorizontalLine, { backgroundColor: theme.colors.addRecipeCardCirclePlus }]} />
              </RX.Animated.View>
            </RX.View>
            {/*<Text
              translate
              onPress={this.props.onPress}
              style={{ color: theme.colors.addRecipeCardText }}
            >{this.props.translatedText}</Text>*/}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _setUI = (isHovering: boolean) => {
    RX.Animated.timing(this._previewScaleAnimatedValue, {
      toValue: isHovering ? 1.5 : 1,
      duration: 300,
    }).start()
  }

  private _onHoverStart = () => {
    this._setUI(true)
  }

  private _onHoverEnd = () => {
    this._setUI(false)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
    [Styles.values.marginEnd]: Styles.values.spacing
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
