/*
 * Checkbox.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import Image from '@Common/Image/Image'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


interface CheckboxProps {
  style?: any,
  size: number,
  filledColor?: string,
  emptyColor?: string,
  borderWidth?: number,
  borderColor?: string,
  onChange?: (checked: boolean) => void,
  value?: boolean,
  isHovering?: boolean,
}

export default class Checkbox extends RX.Component<CheckboxProps, RX.Stateless> {
  public static defaultProps = {
    size: 20,
    emptyColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
  }

  public render() {
    const { style, size, value, isHovering: isHoveringProp } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            onRenderChild={isHovering => (
              <RX.View
                style={[
                  styles.container,
                  {
                    width: size,
                    height: size,
                    borderRadius: size / 5,
                    borderWidth: this.props.borderWidth,
                    borderColor: (isHoveringProp || isHovering || value) ? 'transparent' : this.props.borderColor,
                  },
                  style,
                  {
                    backgroundColor: this._getBG(isHovering || !!isHoveringProp, theme),
                  }
                ]}
                onPress={this.props.onChange ? this._onPress : undefined}
              >
                <Image
                  source={ImageSource.Check}
                  style={{
                    width: size * 0.6,
                    height: size * 0.6,
                  }}
                  resizeMode={'contain'}
                />
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getBG = (isHovering: boolean, theme: Theme) => {
    if (this.props.value) {
      return theme.colors.primary
    }

    if (isHovering) {
      return theme.colors.textInputBg
    }

    return 'transparent'
  }

  private _onPress = () => {
    this.props.onChange!(!this.props.value)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}
