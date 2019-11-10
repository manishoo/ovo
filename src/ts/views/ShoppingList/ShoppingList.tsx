/*
 * ShoppingList.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


interface LoginProps {
  style?: any,
}

export default class ShoppingList extends RX.Component<LoginProps> {
  state = {
    username: '',
    password: '',
  }

  onChange = (fieldName: string) => (value: string) => {
    this.setState({
      [fieldName]: value,
    })
  }

  isValid = () => {
    return !!this.state.username && !!this.state.password
  }

  handleSubmit = (mutate: any) => () => {
    if (!this.isValid()) return () => {
    }

    return mutate()
      .then(async ({ data: { login } }: { data: { login: any } }) => {
        /**
         * LoginForm Success
         * */
        await RX.Storage.setItem('token', login.session)
      })
  }

  public render() {
    return (
      <RX.Text>This is Shopping list</RX.Text>
    )
  }
}
