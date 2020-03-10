/*
 * HoverButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


export interface HoverButtonProps extends RX.Types.ButtonProps {
  onRenderChild: (isHovering: boolean) => JSX.Element | null;
  onPress?: (e: RX.Types.SyntheticEvent) => void;
  title?: string;
  disabled?: boolean;
  style?: RX.Types.ButtonStyle
}

export interface HoverButtonState {
  isHovering: boolean;
}

export default class HoverButton extends RX.Component<HoverButtonProps, HoverButtonState> {
  render(): JSX.Element | null {
    return (
      <RX.Button
        {...this.props}
        onPress={this._onPress}
        onHoverStart={this._onHoverStart}
        onHoverEnd={this._onHoverEnd}
        title={this.props.title}
        disabled={this.props.disabled}
        style={this.props.style}
      >
        {this.props.onRenderChild(this.state ? this.state.isHovering : false)}
      </RX.Button>
    )
  }

  private _onPress = (e: RX.Types.SyntheticEvent) => {
    if (this.props.onPress) {
      this.props.onPress(e)
    }
  }

  private _onHoverStart = () => {
    if (!this.props.disabled) {
      this.setState({ isHovering: true })
    }
  }

  private _onHoverEnd = (e: any) => {
    if (!this.props.disabled) {
      this.setState({ isHovering: false })
      if (this.props.onPressOut) {
        this.props.onPressOut(e)
      }
    }
  }
}
