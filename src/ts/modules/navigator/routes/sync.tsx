/*
 * sync.tsx
 * Copyright: Ouranos Studio 2019
 */

import * as PropTypes from 'prop-types'
import RX from 'reactxp'

// `calendar` should be relative to the `views/` folder
const loadComponentSync = (path: string, secondaryPath?: string) => {
  const mod = require(`@Views/${path}/${secondaryPath || path}`)
  const Component = mod.default ? mod.default : mod // es6 module compat

  const SyncComponent = (props: any) => {
    const { staticContext: ctx } = props

    // Send the `calendar` to the server, via router's `staticContext` object,
    // so that it's able to determine names of the chunks to preload.
    if (ctx && ctx.splitPoints)
      ctx.splitPoints.push(path)

    return <Component {...props} />
  }

  SyncComponent.propTypes = {
    staticContext: PropTypes.object,
  }

  return SyncComponent
}

export default loadComponentSync
