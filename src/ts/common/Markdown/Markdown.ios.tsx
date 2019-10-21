/*
 * Markdown.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

// @ts-ignore
import RNMarkdown from 'react-native-easy-markdown'
import RX from 'reactxp'


interface MarkdownProps {
  style?: any,
}

export default class Markdown extends RX.Component<MarkdownProps> {
  public render() {
    const { style } = this.props

    return (
      <RNMarkdown
        markdownStyles={{
          text: style,
        }}
      >
        {this.props.children}
      </RNMarkdown>
    )
  }
}
