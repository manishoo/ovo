/*
 * HomeScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Assistant from '@Common/Assistant/Assistant'
import FilledButton from '@Common/FilledButton/FilledButton'
import { __ } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { getParam, map } from '@Utils'
import { AssistantMessage } from '@Views/Introduction/components/ChatBox'
import ProfileScreenContainer from '@Views/ProfileScreen/ProfileScreenContainer'
import SearchResult from '@Views/SearchResult/SearchResult'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import TabBar from './components/TabBar/TabBar'


interface HomeScreenState {
  tabBarMargin: number,
  tabBarBackgroundOpacity: number,
  exploreIconOpacity: number,
  profileIconOpacity: number,
  assistantBottom: number,

  width: number,
}

export default class HomeScreen extends ComponentBase<{}, HomeScreenState> {
  state = {
    tabBarMargin: 16,
    tabBarBackgroundOpacity: 0,
    exploreIconOpacity: 0,
    profileIconOpacity: 0,
    assistantBottom: 16,
    width: ResponsiveWidthStore.getWidth(),
  }

  // refs
  _scrollView: any

  componentDidMount(): void {
    this._scrollView.setScrollLeft(this.state.width, false)
  }

  render() {
    const {
      tabBarMargin,
      tabBarBackgroundOpacity,
      exploreIconOpacity,
      profileIconOpacity,
    } = this.state

    const onProfileIconPress = () => this._scrollView.setScrollLeft(this.state.width * 2, true)
    const onExploreIconPress = () => this._scrollView.setScrollLeft(0, true)
    const onPathIconPress = () => this._scrollView.setScrollLeft(this.state.width, true)

    return (
      <RX.View style={styles.container}>
        {/*<A />*/}
        <RX.ScrollView
          ref={(ref: any) => this._scrollView = ref}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}
          scrollEnabled={!this.isIntro()}
          bounces={false}
          onScroll={this.onScroll}

          // directionalLockEnabled={true}
        >
          {/*<Explore {...this.props} />
					<Path {...this.props} />
					<Profile {...this.props} />*/}
          <RX.View style={{ width: this.state.width }}>
            <SearchResult />
          </RX.View>
          <RX.View style={{ width: this.state.width }}>

          </RX.View>
          <RX.View style={{ width: this.state.width }}>
            <ProfileScreenContainer />
          </RX.View>
        </RX.ScrollView>

        {
          !this.isIntro() && <TabBar
            exploreIconOpacity={exploreIconOpacity}
            tabBarBackgroundOpacity={tabBarBackgroundOpacity}
            profileIconOpacity={profileIconOpacity}
            tabBarMargin={tabBarMargin}
            onExplorePress={onExploreIconPress}
            onPathPress={onPathIconPress}
            onProfilePress={onProfileIconPress}
          />
        }

        {
          this.isIntro() && this.renderIntroDialog()
        }

        <Assistant
          size={80}
          onPress={() => LocationStore.navigate(this.props, Routes.assistant)}
          style={{
            position: 'absolute',
            bottom: this.state.assistantBottom,
            alignSelf: 'center',
          }}
        />
      </RX.View>
    )
  }

  protected _buildState(props: {}, initialBuild: boolean): Partial<HomeScreenState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private onScroll = (_scrollTop: number, scrollLeft: number) => {
    const fullWidth = this.state.width

    // orchestrate TabBar animation based on main scroll view scroll
    this.setState({
      tabBarMargin: map(0, 375, 16, 48, Math.abs(fullWidth - scrollLeft)),
      tabBarBackgroundOpacity: map(0, 375, 0, 1, Math.abs(fullWidth - scrollLeft)),
      exploreIconOpacity: (fullWidth - scrollLeft) > 0 ? map(0, 375, 0, 1, Math.abs(fullWidth - scrollLeft)) : 0,
      profileIconOpacity: (fullWidth - scrollLeft) < 0 ? map(0, 375, 0, 1, Math.abs(fullWidth - scrollLeft)) : 0,
      assistantBottom: map(0, 375, 16, -200, Math.abs(fullWidth - scrollLeft)),
    })
  }

  private isIntro = () => getParam(this.props, 'intro') === true

  private renderIntroDialog = () => {
    return (
      <RX.View style={styles.introDialog}>
        <RX.Image
          source={ImageSource.Assistant}
          style={{
            width: 80,
            height: 80,
            marginBottom: 10,
          }}
        />
        <AssistantMessage
          text={__('homeIntro1')}
        />
        <FilledButton
          label={'Mmm-hmmm'}
          onPress={() => {
          }}
          style={{
            width: 150,
            alignSelf: 'flex-end'
          }}
        />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
  }),
  scrollViewStyle: RX.Styles.createScrollViewStyle({
    flexDirection: 'row',
  }),
  introDialog: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // height: 200,
    padding: 16,
    // backgroundColor: 'blue'
  }),
}
