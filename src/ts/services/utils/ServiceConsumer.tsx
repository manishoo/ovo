/*
 * ServiceConsumer.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface ServiceState {
  [k: string]: (args?: any) => any
}

interface ServiceStateResult {
  [k: string]: any
}

interface ServiceConsumerProps {
  state: ServiceState,
  children: (state: ServiceStateResult) => any,
}

export default class ServiceConsumer extends ComponentBase<ServiceConsumerProps, any> {
  render() {
    return this.props.children(this.state)
  }

  protected _buildState(props: ServiceConsumerProps, initialBuild: boolean): any | undefined {
    const state: any = {}

    Object.keys(props.state).map(key => {
      state[key] = props.state[key]()
    })

    return state
  }
}
