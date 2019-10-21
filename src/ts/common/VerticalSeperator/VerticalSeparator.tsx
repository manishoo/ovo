/*
 * VerticalSeparator.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


export interface VerticalSeparatorProps {
  style?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyle>;
}

const _styles = {
  separator: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    marginVertical: 12,
    marginHorizontal: 8,
    width: 1,
    backgroundColor: '#eee'
  })
}

export default class VerticalSeparator extends RX.Component<VerticalSeparatorProps, RX.Stateless> {
  render(): JSX.Element | null {
    return (
      <RX.View style={[_styles.separator, this.props.style]} />
    )
  }
}
