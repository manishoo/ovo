/*
 * ListView.tsx
 * Copyright: Ouranos Studio 2019
 */

import { Theme } from '@App/Theme'
import ImageSource from '@Modules/images'
import moment from 'moment-timezone'
import RX from 'reactxp'
import { VirtualListView } from 'reactxp-virtuallistview'
import { ListViewProps, ListViewState } from './types'

// const _itemTemplate = 'event'
// const _itemHeight = EVENT_CONTAINER_HEIGHT

export default class ListView extends RX.Component<ListViewProps, ListViewState> {
  private _listView: any

  constructor(props: ListViewProps) {
    super(props)

    this.state = {
      calendar: props.calendar.map(e => ({
        key: e.id,
        // template: _itemTemplate,
        // height: _itemHeight,
        height: 1000,
        measureHeight: true,
        ...e,
      })),
    }
  }

  public render() {
    return (
      <VirtualListView
        // @ts-ignore
        itemList={this.state.calendar}
        onScroll={this._onScroll}
        renderItem={this._renderItem}
      />
    )
  }

  componentDidMount(): void {
    setTimeout(() => this._scrollToCurrentMeal(true), 500)
  }

  private _renderItem = (details: any) => {
    return this.props.renderItem(details)
  }

  private _onScroll = (event: any) => {
    // const LIST_ITEM_HEIGHT = EVENT_CONTAINER_HEIGHT
    // const offsetFromBottom = event.nativeEvent.contentOffset.y
    // const renderViewHeight = event.nativeEvent.layoutMeasurement.height
    // const centerOfScreen = offsetFromBottom + (renderViewHeight / 2)
    // const bottomOfScreen = offsetFromBottom
    // const topOfScreen = offsetFromBottom + renderViewHeight
    //
    // const items = this.state.calendar.map((item: Event, index: number) => {
    // 	const itemCenterLocation = ((index + 1) * LIST_ITEM_HEIGHT) - (LIST_ITEM_HEIGHT / 2)
    // 	if ((itemCenterLocation < topOfScreen) && (itemCenterLocation > bottomOfScreen)) {
    // 		const differenceToCenter = Math.abs(centerOfScreen - itemCenterLocation)
    // 		let r = ((100 * differenceToCenter) / (renderViewHeight / 2)) / 100
    // 		if (r < 0.2) {
    // 			r = 0.2
    // 		}
    //
    // 		item.relativeSize = 1 - r
    // 	} else {
    // 		item.relativeSize = 0
    // 	}
    //
    // 	return item
    // })
    //
    // let activeDateTime = String(new Date())
    //
    // const centerEvent = findTheCenterEvent(items)
    // if (centerEvent) {
    // 	activeDateTime = centerEvent.datetime
    // 	// centerEvent.datetime
    // }
    //
    // this.setState({
    // 	itemsRelativeSize: items.map(i => i.relativeSize),
    // 	centerEvent,
    // })
    // this.props.onDateTimeChange(activeDateTime)
    // /* activeDateTime,centerEvent*/
  }

  private _scrollToCurrentMeal = (animated: boolean = false) => {
    const closestMeal = this.props.findClosestMeal()
    if (!closestMeal) return

    setTimeout(() => {
      if (this._listView) {
        this._listView.scrollToTop(true, 0)
      }
    }, 0)
  }

  // @ts-ignore
  private _renderGoToToday = (theme: Theme) => {
    if (!this.state.centerEvent) return null
    const closestMeal = this.props.findClosestMeal()
    if (!closestMeal) return null
    if (closestMeal.nextMeal === undefined) return null

    if (closestMeal.nextMeal.id === this.state.centerEvent.id) return null

    if (moment(this.state.centerEvent.date).isAfter(moment())) {
      // current day was in the past
      return (
        <RX.View style={[styles.goToToday, { borderColor: theme.colors.goToTodayBorder, top: 32 }]}
                 onPress={() => this._scrollToCurrentMeal(true)}>
          <RX.Image
            source={ImageSource.Back}
            style={{
              width: 25,
              height: 25,
              transform: [{ rotate: '90deg' }],
              top: -2
            }}
          />
        </RX.View>
      )
    } else {
      // current day is in the future
      return (
        <RX.View style={[styles.goToToday, { borderColor: theme.colors.goToTodayBorder, bottom: 100 }]}
                 onPress={() => this._scrollToCurrentMeal(true)}>
          <RX.Image
            source={ImageSource.Back}
            style={{
              width: 25,
              height: 25,
              transform: [{ rotate: '-90deg' }],
              bottom: -2
            }}
          />
        </RX.View>
      )
    }
  }
}

const styles = {
  goToToday: RX.Styles.createViewStyle({
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }),
}
