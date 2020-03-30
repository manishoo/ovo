/**
 * copyright
 * */

import { Me } from '@Models/graphql/me/types/Me'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { History } from 'history'
import { Router, withRouter } from 'react-router-dom'
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
  history: History,
  me: Me | null,
}

interface NavigatorState {
  path: string,
  height: number,
  width: number,
  isSmallOrTinyScreenSize: boolean,
}

class Blocker extends RX.Component {
  public shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
    return false
  }

  render() {
    return this.props.children
  }
}

export default class Navigator extends ComponentBase<NavigatorProps, NavigatorState> {
  constructor(props: NavigatorProps) {
    super(props)

    this.state = {
      path: LocationStore.getPath(),
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  render() {
    const { me, history } = this.props

    return (
      <Router history={history}>
        <AppNavigator
          history={history}
          me={me}
          path={this.state.path}
          height={this.state.height}
          width={this.state.width}
          isSmallOrTinyScreenSize={this.state.isSmallOrTinyScreenSize}
        />
      </Router>
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
