/*
 * AddCell.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { withNavigation } from '@Modules/navigator'
import RX from 'reactxp'


interface AddRecipeCellProps {
  wrapperStyle?: any,
  translatedText?: string,
  onPress: () => void,
  size?: any,
  innerContainerStyle?: any,
  color?: string,
}

@withNavigation
export default class AddCell extends RX.Component<AddRecipeCellProps> {
  private _previewScaleAnimatedValue = RX.Animated.createValue(0.8)
  private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ scale: this._previewScaleAnimatedValue }]
  })

  public render() {
    const { color } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.container,
              {
                width: this.props.size,
                height: this.props.size,
              },
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
                  borderRadius: 10,
                  borderColor: color || theme.colors.addCardBorder
                },
                this.props.innerContainerStyle,
              ]}>
              <RX.Animated.View
                style={[
                  styles.circle,
                  {
                    width: this.props.size / 5,
                    height: this.props.size / 5,
                    borderRadius: this.props.size,
                    backgroundColor: color || theme.colors.addRecipeCardCircleBG,
                  },
                  this._previewAnimatedStyle,
                ]}
              >
                <RX.View
                  style={[
                    styles.plusIconVerticalLine, {
                      backgroundColor: theme.colors.addRecipeCardCirclePlus,
                      width: this.props.size / 70,
                      height: this.props.size / 10,
                    }
                  ]}
                />
                <RX.View
                  style={[
                    styles.plusIconHorizontalLine, {
                      backgroundColor: theme.colors.addRecipeCardCirclePlus,
                      height: this.props.size / 70,
                      width: this.props.size / 10,
                    }
                  ]}
                />
              </RX.Animated.View>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _setUI = (isHovering: boolean) => {
    RX.Animated.timing(this._previewScaleAnimatedValue, {
      toValue: isHovering ? 1.2 : 0.8,
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
    marginHorizontal: Styles.values.spacing / 4,
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
    justifyContent: 'center',
    alignItems: 'center',
  }),
  plusIconVerticalLine: RX.Styles.createViewStyle({
    width: 2,
    borderRadius: 2,
    position: 'absolute'
  }),
  plusIconHorizontalLine: RX.Styles.createViewStyle({
    borderRadius: 2,
    height: 2,
    position: 'absolute'
    // transform: [{
    //   rotate: '90deg'
    // }]
  }),
}
