/*
 * HoverButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


export interface HoverViewProps extends RX.Types.ViewProps {
  onRenderChild: (isHovering: boolean) => JSX.Element | null;
  title?: string;
  disabled?: boolean;
  style?: any
  defaultCursor?: boolean
}

export interface HoverViewState {
  isHovering: boolean;
}

const _styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
  })
}

export default class HoverView extends RX.Component<HoverViewProps, HoverViewState> {
  render() {
    return (
      <RX.View
        {...this.props}
        style={[
          this.props.defaultCursor ? undefined : _styles.container,
          this.props.style,
        ]}
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
