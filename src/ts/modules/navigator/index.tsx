/**
 * copyright
 * */

import { Me } from '@Models/graphql/me/types/Me'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { withRouter } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppNavigator from './web/AppNavigator/AppNavigator'


export function withNavigation(T: any): any {
  return withRouter(T)
}

export function withMobileNavigation(T: any): any {
  return T
}

interface NavigatorProps {
  me: Me | null,
}

interface NavigatorState {
  // path: string,
  height: number,
  width: number,
  isSmallOrTinyScreenSize: boolean,
}

export default class Navigator extends ComponentBase<NavigatorProps, NavigatorState> {
  constructor(props: NavigatorProps) {
    super(props)

    this.state = {
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  render() {
    const { me } = this.props

    return (
      <AppNavigator
        me={me}
        height={this.state.height}
        width={this.state.width}
        isSmallOrTinyScreenSize={this.state.isSmallOrTinyScreenSize}
      />
    )
  }

  protected _buildState(props: NavigatorProps, initialBuild: boolean): Partial<NavigatorState> | undefined {
    return {
      // path: LocationStore.getPath(),
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }
}
