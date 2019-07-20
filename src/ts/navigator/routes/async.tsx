/*
 * async.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'

// `path` should be relative to the `components/` folder
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
				`src/ts/views/${path}/${secondaryPath || path}`
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

		render() {
			const { Component } = this.state

			return Component
				? <Component {...this.props} />
				: <RX.Text>Loading</RX.Text>
		}
	}
)

export default loadComponentAsync
