/*
 * Text.tsx
 * Copyright: Ouranos Studio 2019
 */

import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import RX from 'reactxp'
import { ImportantForAccessibility } from 'reactxp/dist/common/Types'
import AppConfig from 'src/ts/app/AppConfig'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Translation } from 'src/ts/models/common'


interface TextProps extends RX.Types.TextProps {
  style?: any,
  translations?: Translation[],
  translate?: boolean,
  variables?: { [k: string]: string },
  el?: 'h1',
  type?: TextType,
}

const components = {
  h1: (props: any) => <h1 {...props} />,
}

enum TextType {
  title = 'title',
  subtitle = 'subtitle',
  body = 'body',
}

export default class Text extends RX.Component<TextProps> {
  render() {
    const { style } = this.props

    const Component = this._getComponent()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Component
            {...this.props}
            importantForAccessibility={ImportantForAccessibility.Yes}
            style={[styles.container, this._getStyle(theme), style]}
          >
            {this._getValue()}
          </Component>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getStyle = (theme: Theme) => {
    let style = {}

    if (this.props.onPress) {
      style = {
        ...style,
        color: theme.colors.linkColor,
      }
    }

    if (this.props.type === TextType.title) {
      style = {
        ...style,
        fontSize: 18,
        fontWeight: 'bold',
      }
    }

    if (this.props.type === TextType.subtitle) {
      style = {
        ...style,
        fontSize: 12,
        fontWeight: 'light',
        color: theme.colors.subtitle,
      }
    }

    if (this.props.type === TextType.body) {
      style = {
        ...style,
        fontWeight: 'light',
      }
    }

    return style
  }

  private _getValue = () => {
    const { translate, translations, children, variables } = this.props

    if (translate) {
      return getLocalizedText(String(children), variables)
    }

    if (translations && translations.length > 0) {
      return translations[0].text
    }

    return children
  }

  private _getComponent = () => {
    let Component: any = RX.Text
    if (this.props.el && AppConfig.getPlatformType() === 'web') {
      Component = components[this.props.el]
    }

    return Component
  }

  static types = TextType
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
