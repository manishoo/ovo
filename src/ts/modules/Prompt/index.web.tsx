/*
 * index.web.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Prompt } from 'react-router'
import RX from 'reactxp'


interface PromptWebProps {
  style?: any,
  when: boolean,
  message: string,
}

export default class PromptWeb extends RX.Component<PromptWebProps> {
  public render() {
    return (
      <Prompt
        when={this.props.when}
        message={this.props.message}
      />
    )
  }

  public componentDidUpdate(prevProps: Readonly<PromptWebProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (typeof window === 'undefined') return

    if (this.props.when) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = null
    }
  }
}
