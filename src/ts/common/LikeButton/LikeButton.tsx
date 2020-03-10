/*
 * LikeButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Image from '@Common/Image/Image'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


interface LikeButtonProps {
  style?: any,
  size: number,
  liked?: boolean,
  onChange: (liked: boolean) => void,
}

interface LikeButtonState {
  left: number,
}

export default class LikeButton extends RX.Component<LikeButtonProps, LikeButtonState> {
  constructor(props: LikeButtonProps) {
    super(props)

    this.state = {
      left: props.liked ? (-28 * props.size) : 0,
    }
  }

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style, { width: this.props.size, height: this.props.size }]}
        onPress={this._click}
        onLayout={this._realign}
      >
        <Image
          source={ImageSource.HeartAnimationEdge}
          style={{
            height: this.props.size,
            width: this.props.size * 29,
            position: 'absolute',
            left: this.state.left,
            top: 0,
          }}
        />
      </RX.View>
    )
  }

  private _click = async () => {
    if (this.props.liked) {
      this.props.onChange(false)
      this.setState({
        left: 0,
      })
    } else {
      this.props.onChange(true)
      for (let i = 1; i < new Array(29).length; i++) {
        await new Promise(res => {
          this.setState({
            left: -(i * this.props.size)
          }, () => {
            setTimeout(res, 15)
          })
        })
      }
    }
  }

  private _realign = () => {
    if (this.props.liked) {
      this.setState({
        left: (-28 * this.props.size),
      })
    } else {
      this.setState({
        left: 0,
      })
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
    position: 'relative',
  }),
}
