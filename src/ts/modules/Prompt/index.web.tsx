/*
 * Prompt.web.tsx
 * Copyright: Ouranos Studio 2019
 */

import { Prompt } from 'react-router'
import RX from 'reactxp'


interface PromptWebProps {
  style?: any,
  when: boolean,
  message: string,
}

export default class PromptWeb extends RX.Component<PromptWebProps> {
  render() {
    return (
      <Prompt
        when={this.props.when}
        message={this.props.message}
      />
    )
  }

  public componentDidUpdate(prevProps: Readonly<PromptWebProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.props.when) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = undefined
    }
  }
}
