/*
 * Home.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {fullWidth, getParam, map, navigate} from 'src/ts/utilities'
import Path from 'src/ts/views/Path/Path'
import Explore from 'src/ts/views/Explore'
import Profile from 'src/ts/views/Profile/Profile'
import TabBar from 'src/ts/views/Home/components/TabBar/TabBar'
import {AssistantMessage} from 'src/ts/views/Introduction/components/ChatBox'
import FilledButton from 'common/FilledButton'
import {__} from 'common/LocalizedText'
import Assistant from 'common/Assistant/Assistant'
import { ComponentBase } from 'resub'
import {UserStore} from 'src/ts/stores'


interface HomeState {
	tabBarMargin: number,
	tabBarBackgroundOpacity: number,
	exploreIconOpacity: number,
	profileIconOpacity: number,
	assistantBottom: number,
}

export default class Home extends ComponentBase<{}, HomeState> {
	// constructor(props: any) {
	// 	super(props)
	//
	// 	// UserStore.setUser()
	// }

	state = {
		tabBarMargin: 16,
		tabBarBackgroundOpacity: 0,
		exploreIconOpacity: 0,
		profileIconOpacity: 0,
		assistantBottom: 16,
	}

	// refs
	_scrollView: any

	componentDidMount(): void {
		// switch to Path tab
		// RX.StatusBar.setTranslucent(true)
		// RX.StatusBar.setBackgroundColor('red', true)

		this._scrollView.setScrollLeft(fullWidth(), false)
	}

	private onScroll = (_scrollTop: number, scrollLeft: number) => {
		// orchestrate TabBar animation based on main scroll view scroll
		this.setState({
			tabBarMargin: map(0, 375, 16, 48, Math.abs(fullWidth() - scrollLeft)),
			tabBarBackgroundOpacity: map(0, 375, 0, 1, Math.abs(fullWidth() - scrollLeft)),
			exploreIconOpacity: (fullWidth() - scrollLeft) > 0 ? map(0, 375, 0, 1, Math.abs(fullWidth() - scrollLeft)) : 0,
			profileIconOpacity: (fullWidth() - scrollLeft) < 0 ? map(0, 375, 0, 1, Math.abs(fullWidth() - scrollLeft)) : 0,
			assistantBottom: map(0, 375, 16, -100, Math.abs(fullWidth() - scrollLeft)),
		})
	}

	private isIntro = () => getParam(this.props, 'intro') === true

	private renderIntroDialog = () => {
		return (
			<RX.View style={styles.introDialog}>
				<RX.Image
					source={require('src/ts/sharedAssets/Caloria.png')}
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

	render() {
		const {
			tabBarMargin,
			tabBarBackgroundOpacity,
			exploreIconOpacity,
			profileIconOpacity,
		} = this.state

		const onProfileIconPress = () => this._scrollView.setScrollLeft(fullWidth() * 2, true)
		const onExploreIconPress = () => this._scrollView.setScrollLeft(0, true)
		const onPathIconPress = () => this._scrollView.setScrollLeft(fullWidth(), true)


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
					// scrollEventThrottle={32}
					scrollEnabled={!this.isIntro()}
					bounces={false}
					onScroll={this.onScroll}

					//@ts-ignore
					directionalLockEnabled={true}
				>
					<Explore {...this.props}/>
					<Path {...this.props}/>
					<Profile {...this.props}/>
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
					onPress={() => navigate(this.props, 'assistant')}
					style={{
						position: 'absolute',
						bottom: this.state.assistantBottom,
						alignSelf: 'center',
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
