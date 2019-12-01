/*
 * Markdown.tsx
 * Copyright: Ouranos Studio 2019
 */

import ReactMarkdown from 'react-markdown'
import RX from 'reactxp'


const Markdown = ({ children, style, ...props }: any) => {
  return (
    <RX.View style={style} {...props}>
      <ReactMarkdown source={children} />
    </RX.View>
  )
}

export default Markdown
