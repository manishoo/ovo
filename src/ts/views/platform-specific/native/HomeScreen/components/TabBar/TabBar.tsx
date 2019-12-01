/*
 * TabBar.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ThemeContext } from '@App/ThemeContext'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


interface TabBarProps {
  exploreIconOpacity: number,
  tabBarBackgroundOpacity: number,
  profileIconOpacity: number,
  tabBarMargin: number,
  onExplorePress: () => void,
  onPathPress: () => void,
  onProfilePress: () => void,
}

export default class TabBar extends RX.Component<TabBarProps> {
  render() {
    const { tabBarMargin, exploreIconOpacity, tabBarBackgroundOpacity, profileIconOpacity } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={[
              styles.container,
              {
                marginRight: tabBarMargin,
                marginLeft: tabBarMargin,
                paddingRight: tabBarMargin / 2,
                paddingLeft: tabBarMargin / 2,
              }
            ]}
          >
            <RX.View
              style={{
                backgroundColor: theme.colors.white,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                opacity: tabBarBackgroundOpacity,
                borderRadius: 150,
              }}
            />
            <RX.View
              onPress={this.props.onExplorePress}
            >
              <RX.Image
                source={ImageSource.Search}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <RX.Image
                source={ImageSource.SearchActive}
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  opacity: exploreIconOpacity,
                }}
              />
            </RX.View>
            <RX.View
              onPress={this.props.onPathPress}
            >
              <RX.Image
                source={ImageSource.Path}
                style={{
                  width: 32,
                  height: 32,
                  opacity: tabBarBackgroundOpacity,
                }}
              />
            </RX.View>
            <RX.View
              onPress={this.props.onProfilePress}
            >
              <RX.Image
                source={ImageSource.Rectangle}
                style={{
                  width: 32,
                  height: 32,
                }}
              />
              <RX.Image
                source={ImageSource.RectangleActive}
                style={{
                  width: 32,
                  height: 32,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  opacity: profileIconOpacity,
                }}
              />
            </RX.View>

          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 16,
  }),
}
