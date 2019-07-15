/*
 * Markdown.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import ReactMarkdown from 'react-markdown'

const Markdown = ({children, style, ...props}: any) => {
	return (
		<span style={style} {...props}>
			<ReactMarkdown source={children}/>
		</span>
	)
}

export default Markdown