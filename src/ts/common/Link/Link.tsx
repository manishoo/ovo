/*
 * Link.tsx
 * Copyright: Ouranos Studio 2019
 */

import { withNavigation } from 'modules/navigator'
import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import LocationStore from '@Services/LocationStore'


interface LinkProps {
  style?: any,
  to: string,
  onPress?: () => void,
  openInNewTab?: boolean,
}

@withNavigation
export default class Link extends RX.Component<LinkProps> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <a
            href={this.props.to}
            target={this.props.openInNewTab ? '_blank' : undefined}
            style={Object.assign({}, { color: theme.colors.linkColor }, this.props.style)}
            onClick={e => {
              if (!this.props.openInNewTab) {
                e.stopPropagation()
                e.preventDefault()

                setTimeout(() => {
                  LocationStore.navigate(this.props, this.props.to)
                  if (this.props.onPress) this.props.onPress()
                }, 0)
              }
            }}
          >
            {this.props.children}
          </a>
        )}
      </ThemeContext.Consumer>
    )
  }
}
