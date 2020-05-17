/*
 * Link.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useTheme } from '@App/ThemeContext'
// import LocationStore from '@Services/LocationStore'
import { History } from 'history'
import { FC } from 'react'
import { Link as RRLink } from 'react-router-dom'
import RX from 'reactxp'


interface LinkProps {
  style?: any,
  to?: string | History.LocationDescriptor<History.PoorMansUnknown>,
  onPress?: () => void,
  openInNewTab?: boolean,
  children: any,
}

const Link: FC<LinkProps> = (props) => {
  const theme = useTheme()

  if (!props.to) return props.children

  return (
    <RRLink
      to={props.to}
      target={props.openInNewTab ? '_blank' : undefined}
      style={Object.assign({}, { color: theme.colors.linkColor }, props.style)}
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
      {props.children}
    </RRLink>
  )
}

export default Link

// @withNavigation
// export default class Link extends RX.Component<LinkProps> {
//   public render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }

// interface LinkProps {
//   style?: any,
//   to: any,
//   onPress?: () => void,
//   openInNewTab?: boolean,
// }
//
//
// @withNavigation
// export default class Link extends RX.Component<LinkProps> {
//   public render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <a
//             href={this.props.to}
//             target={this.props.openInNewTab ? '_blank' : undefined}
//             style={Object.assign({}, { color: theme.colors.linkColor }, this.props.style)}
//             onClick={e => {
//               if (!this.props.openInNewTab) {
//                 e.stopPropagation()
//                 e.preventDefault()
//
//                 setTimeout(() => {
//                   LocationStore.navigate(this.props, this.props.to)
//                   if (this.props.onPress) this.props.onPress()
//                 }, 0)
//               }
//             }}
//           >
//             {this.props.children}
//           </a>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }
