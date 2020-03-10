/*
 * async.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Text from '@Common/Text/Text'
import RX from 'reactxp'

// `calendar` should be relative to the `components/` folder
const loadComponentAsync = (path: string, secondaryPath?: string) => (
  class AsyncComponent extends RX.Component<any, any> {
    constructor(props: any) {
      super(props)

      this.state = {
        Component: null,
        error: null,
      }
    }

    componentDidMount() {
      // Name a chunk via webpack's magic comment
      import(
        /* webpackChunkName: "[request]" */
        /* webpackPreload: true */
        `@Views/${path}/${secondaryPath || path}`
        )
        .then(mod => {
          if (mod.default) {
            return mod.default
          }

          return mod
        })
        .then((Component) => {
          this.setState({ Component })
        })
        .catch(error => {
          console.error('cs error', error)
          this.setState({ error })
        })
    }

    public render() {
      const { Component } = this.state

      return Component
        ? <Component {...this.props} />
        : <Text translate>Loading</Text>
    }
  }
)

export default loadComponentAsync
