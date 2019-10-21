/*
 * Event.tsx
 * Copyright: Ouranos Studio 2019
 */

import { withNavigation } from 'modules/navigator'
import moment from 'moment'
import RX from 'reactxp'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import { Event, Meal, MealItem } from 'src/ts/models/FoodModels'
import LocationStore from 'src/ts/stores/LocationStore'
import { fullHeight, renderImageOrPlaceholder } from 'src/ts/utilities'


interface EventProps {
  style?: any,
  relativeSize: number,
  item: Event,
  active: boolean,
  containerWidth: number,
}

export const EVENT_CONTAINER_HEIGHT = fullHeight() / 2

@withNavigation
export default class EventComponent extends RX.Component<EventProps> {
  relativeSize: RX.Animated.Value = RX.Animated.createValue(1)

  shouldComponentUpdate(nextProps: Readonly<EventProps>): boolean {
    return (nextProps.relativeSize !== this.props.relativeSize) || (nextProps.containerWidth !== this.props.containerWidth)
  }

  componentWillReceiveProps(nextProps: Readonly<EventProps>): void {
    const toValue = 1 + (nextProps.relativeSize * 1.8)
    if (!toValue) return
    RX.Animated.timing(this.relativeSize, {
      duration: 50,
      toValue,
    }).start()
  }

  public render() {
    const { style, item } = this.props
    let lineHeight: number = 0
    let borderWidth: number = 0
    if (this.props.active) {
      lineHeight = EVENT_CONTAINER_HEIGHT / 2
      borderWidth = 3
    }
    if (new Date() > new Date(item.datetime)) {
      lineHeight = EVENT_CONTAINER_HEIGHT
      borderWidth = 1
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={
              [
                styles.container,
                { width: this.props.containerWidth },
                style,
              ]
            }
          >
            <RX.View
              style={[styles.line, { height: lineHeight }]}
            >
              <RX.View
                style={[
                  {
                    backgroundColor: theme.colors.pathLine,
                    flex: 1,
                  }
                ]}
              />
            </RX.View>
            {!!item.meal && this.renderMeal(theme, item.meal, this.relativeSize, borderWidth)}
            <RX.View style={styles.mealTime}>
              <RX.Text style={styles.time}>{moment(item.datetime).format('HH:mm')}</RX.Text>
              <RX.Text style={styles.mealName}>{item.name}</RX.Text>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  // private _renderLine = (event: Event) => {
  // 	if (event.type === EventTypes.Meal) {
  // 		const calculateLineHeight = () => {
  // 			if (this.props.active) {
  // 				return EVENT_CONTAINER_HEIGHT / 2
  // 			}
  // 			if (new Date() > new Date(event.datetime)) {
  // 				return EVENT_CONTAINER_HEIGHT
  // 			}
  // 			if (new Date() < new Date(event.datetime)) {
  // 				return 0
  // 			}
  //
  // 			return 0
  // 		}
  //
  // 		return (
  // 			<RX.View
  // 				style={[styles.line, {height: calculateLineHeight()}]}
  // 			>
  // 				<RX.View
  // 					style={[
  // 						{
  // 							backgroundColor: theme.colors.pathLine,
  // 							flex: 1,
  // 						}
  // 					]}
  // 				/>
  // 			</RX.View>
  // 		)
  // 	}
  //
  // 	return null
  // }

  private renderMeal = (theme: Theme, meal: Meal, relativeSize: RX.Animated.Value, borderWidth: number) => {
    const SIZE = 30
    const pureDimension = this.props.containerWidth / 4
    let dimensions = pureDimension - (meal.items.length * SIZE)

    return (
      <RX.Animated.View
        onPress={this.onEventPress}
        disableTouchOpacityAnimation={true}
        style={[styles.meal, { width: pureDimension, height: pureDimension }, { transform: [{ scale: relativeSize }] }]}
      >
        {
          meal.items.map((mealItem: MealItem, index: number) => {
            return (
              <RX.Animated.View
                style={{
                  position: 'absolute',
                  width: dimensions + (index * SIZE),
                  height: dimensions + (index * SIZE),
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: (index * 8) * this.props.relativeSize,
                }}
              >
                {renderImageOrPlaceholder(mealItem.thumbnail, {
                  width: ((dimensions + (index * SIZE))),
                  height: ((dimensions + (index * SIZE))),
                  borderRadius: ((dimensions + (index * SIZE))) / 2,
                  backgroundColor: '#eee',
                  borderWidth,
                  borderColor: theme.colors.activeMealItemBorderColor,
                  position: 'absolute',
                })}
              </RX.Animated.View>
            )
          })
        }
      </RX.Animated.View>
    )
  }

  private onEventPress = () => {
    LocationStore.navigate(this.props, Routes.mealDetails, {
      params: {
        meal: this.props.item.meal,
        datetime: this.props.item.datetime,
      }
    })
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    height: EVENT_CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  meal: RX.Styles.createViewStyle({
    top: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  mealTime: RX.Styles.createViewStyle({
    position: 'absolute',
    right: 16,
  }),
  time: RX.Styles.createTextStyle({
    textAlign: 'right',
  }),
  mealName: RX.Styles.createTextStyle({
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '100'
  }),
  line: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    width: 10,
    flexDirection: 'row'
  }),
}
