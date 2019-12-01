/*
 * HoverView.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


export interface HoverViewProps extends RX.Types.ViewProps {
  onRenderChild: (isHovering: boolean) => JSX.Element | null;
  title?: string;
  disabled?: boolean;
  style?: RX.Types.ViewStyle
}

export interface HoverViewState {
  isHovering: boolean;
}

export default class HoverView extends RX.Component<HoverViewProps, HoverViewState> {
  render() {
    return (
      <RX.View
        {...this.props}
        onMouseEnter={this._onHoverStart}
        onMouseLeave={this._onHoverEnd}
      >
        {this.props.onRenderChild(this.state ? this.state.isHovering : false)}
      </RX.View>
    )
  }

  private _onHoverStart = () => {
    if (!this.props.disabled) {
      this.setState({ isHovering: true })
    }
  }

  private _onHoverEnd = () => {
    if (!this.props.disabled) {
      this.setState({ isHovering: false })
    }
  }
}
