/*
 * GoDownIndicator.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'


interface GoDownIndicatorProps {
  style?: any,
}

export default class GoDownIndicator extends RX.Component<GoDownIndicatorProps> {
  private _imageTopAnimation = RX.Animated.createValue(0)
  private _imageAnimationStyle = RX.Styles.createAnimatedImageStyle({
    top: this._imageTopAnimation,
  })

  public render() {
    const { style } = this.props

    return (
      <RX.View style={{ flexDirection: 'row', padding: Styles.values.spacing }}>
        <RX.Animated.Image
          source={ImageSource.ArrowDownCircle}
          style={[
            styles.container,
            {
              width: 15,
              height: 15,
            },
            style,
            this._imageAnimationStyle,
          ]}
        />
        <Text
          translate
          style={styles.text}
        >LandingReadMore</Text>
      </RX.View>
    )
  }

  componentDidMount(): void {
    setInterval(this._wiggle, 4000)
  }

  private _wiggle = () => {
    RX.Animated.timing(this._imageTopAnimation, {
      toValue: 10,
      duration: 750,
    })
      .start(() => {
        RX.Animated.timing(this._imageTopAnimation, {
          toValue: 0,
          duration: 750,
        })
          .start()
      })
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
  text: RX.Styles.createTextStyle({
    font: Styles.fonts.displayLight,
    color: '#BBBBBB',
    marginHorizontal: Styles.values.spacing / 2,
  })
}
