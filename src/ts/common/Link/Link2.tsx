/*
 * Link.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ThemeContext } from '@App/ThemeContext'
import { withNavigation } from '@Modules/navigator'
import { History } from 'history'
import { Link as RRLink } from 'react-router-dom'
import RX from 'reactxp'


interface LinkProps {
  style?: any,
  to: History.LocationDescriptor,
  onPress?: () => void,
  openInNewTab?: boolean,
}

@withNavigation
export default class Link extends RX.Component<LinkProps> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RRLink
            to={this.props.to}
            target={this.props.openInNewTab ? '_blank' : undefined}
            style={Object.assign({}, { color: theme.colors.linkColor }, this.props.style)}
            // onClick={e => {
            //   if (!this.props.openInNewTab) {
            //     e.stopPropagation()
            //     e.preventDefault()
            //
            //     setTimeout(() => {
            //       LocationStore.navigate(this.props, this.props.to)
            //       if (this.props.onPress) this.props.onPress()
            //     }, 0)
            //   }
            // }}
          >
            {this.props.children}
          </RRLink>
        )}
      </ThemeContext.Consumer>
    )
  }
}
