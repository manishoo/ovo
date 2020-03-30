/*
 * Text.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Translation } from '@Models/common'
import RX from 'reactxp'
import { ImportantForAccessibility } from 'reactxp/dist/common/Types'
import En from '../../locales/en'


interface TextProps extends RX.Types.TextProps {
  style?: any,
  translations?: Translation[],
  translate?: En | string | boolean,
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
  static types = TextType

  public render() {
    const { style } = this.props

    const Component = this._getComponent()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Component
            {...this.props}
            importantForAccessibility={ImportantForAccessibility.Yes}
            style={[styles.container, this._getFont(), this._getStyle(theme), style]}
          >
            {this._getValue()}
          </Component>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getFont = () => {
    switch (this.props.type) {
      case TextType.title:
        return {
          fontFamily: Styles.fonts[AppConfig.locale].display.fontFamily,
        }
      default:
        return {
          fontFamily: Styles.fonts[AppConfig.locale].text.fontFamily,
        }
    }
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
        color: theme.colors.textDark,
        fontSize: 20,
        marginBottom: 16,
        fontWeight: 'bold',
      }
    }

    if (this.props.type === TextType.subtitle) {
      style = {
        ...style,
        fontSize: 12,
        fontWeight: '100',
        color: theme.colors.subtitle,
      }
    }

    if (this.props.type === TextType.body) {
      style = {
        ...style,
        fontWeight: '100',
      }
    }

    return style
  }

  private _getValue = () => {
    const { translate: tr, translations, children, variables } = this.props

    if (tr) {
      if (typeof tr === 'boolean') {
        return translate(String(children), variables)
      } else {
        return translate(tr, variables)
      }
    }

    if (translations && translations.length > 0) {
      const foundTranslation = translations.find(p => p.locale === AppConfig.locale)
      if (foundTranslation) return foundTranslation.text

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
}

const styles = {
  container: RX.Styles.createTextStyle({
    // fontWeight: Styles.fonts.displayRegular,

    // @ts-ignore web
    transition: 'all 0.3s'
  }),
}
