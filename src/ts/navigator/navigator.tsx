/*
 * navigator.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
import Text from 'common/Text/Text'
import { Action } from 'history'
import ImageSource from 'modules/images'
import { matchPath } from 'react-router'
import { Route, RouteProps, Router, Switch } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import theme from 'src/ts/app/Theme'
import { User } from 'src/ts/models/FoodModels'
import LocationStore from 'src/ts/stores/LocationStore'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { navigate } from 'src/ts/utilities'
import ExploreSearch from 'src/ts/views/ExploreSearch/ExploreSearch'
import {
	LandingScreen,
	LoginModal,
	MealPlanScreen,
	PathScreen,
	ProfileScreen,
	PublicProfileScreen,
	Recipe,
	RecipeForm,
	RecipeFormContainer,
	RegisterModal,
	Routes,
	SearchResult,
	SettingsScreen,
} from './routes'

const NAVBAR_HEIGHT = 50
const BRAND_IMAGE_WIDTH = 135
const BRAND_IMAGE_HEIGHT = 50
const SEARCH_ICON_SIZE = 56
const SEARCH_CONTAINER_HEIGHT = 400
const SEARCH_ICON_IMAGE_SIZE = 30
const TAB_BAR_HEIGHT = 50
const TAB_BAR_MAX_WIDTH = 350

interface NavOptions {
	back?: boolean,
	title?: string
}

interface WebAppRouterState {
	mode: 'drawer' | 'navbar',
	userLoggedIn?: User,
	isLanding: boolean,
	currentPath: string,
	height: number,
	width: number,
	searchModalShowing?: boolean,
	routes: (RouteProps & { modal?: boolean, navOptions?: NavOptions })[]
}

function trimSlashes(s: string) {
	if (s[s.length - 1] === '/') {
		s = s.replace(/\/$/, '')
		return s.replace(/.*\//, '')
	}

	return s.replace(/.*\//, '')
}

export default class WebAppRoutes extends ComponentBase<RX.CommonProps & { history: any }, WebAppRouterState> {
	private _searchInput: any
	private _drawerClosedValue = AppConfig.isRTL() ? theme.styles.drawerWidth : -theme.styles.drawerWidth
	private _drawerAnimationLeftValue = RX.Animated.createValue(this._drawerClosedValue)
	private _navbarAnimationTopValue = RX.Animated.createValue(-NAVBAR_HEIGHT)
	private _searchContainerAnimationTopValue = RX.Animated.createValue(-2000) // Since rendering on the server we don't know the user's height
	private _searchContainerBackDropAnimationOpacityValue = RX.Animated.createValue(0)
	private _drawerAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ translateX: this._drawerAnimationLeftValue }],
	})
	private _navbarAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ translateY: this._navbarAnimationTopValue }],
	})
	private _searchContainerAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ translateY: this._searchContainerAnimationTopValue }],
	})
	private _searchContainerBackDropAnimationStyle = RX.Styles.createAnimatedViewStyle({
		opacity: this._searchContainerBackDropAnimationOpacityValue,
	})

	render() {
		const Navbar = this._renderNavbar()

		return (
			<Router history={this.props.history}>
				<RX.View
					style={[styles.container, { paddingTop: (this.state.mode === 'navbar' && Navbar) ? NAVBAR_HEIGHT : 0 }]}>
					<RX.View style={{ flexDirection: 'row' }}>
						{
							(this.state.mode === 'drawer' && !this.state.isLanding) &&
              <RX.Animated.View style={{ height: 100, width: theme.styles.drawerWidth }} />
						}
						<RX.ScrollView
							style={[styles.innerContainer, { height: this.state.height }]}
						>
							<Switch>
								{
									this.state.routes.map(route => (
										<Route
											{...route}
										/>
									))
								}
							</Switch>
						</RX.ScrollView>
					</RX.View>

					{Navbar}
					{this._renderTabBar()}
					{this._renderDrawer()}
					{this._renderSearch()}
					<RX.Text>{this.state.mode}</RX.Text>

					{/* Modals */}

					{
						this.state.routes.filter(r => r.modal).map(route => (
							<Route
								{...route}
							/>
						))
					}
				</RX.View>
			</Router>
		)
	}

	componentDidMount(): void {
		this._checkIfHomeHideDrawer(undefined, false)

		this.props.history.listen(this._handleLocationChange) // FIXME better place to call this maybe
	}

	protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<WebAppRouterState> | undefined {
		const mode = ResponsiveWidthStore.isSmallOrTinyScreenSize() ? 'navbar' : 'drawer'
		const user = UserStore.getUser()
		const currentPath = LocationStore.getPath()

		if (initialBuild || (this.state.mode !== mode)) {
			if (mode === 'drawer') {
				this._setUI(true, false, !initialBuild)
			} else {
				this._setUI(false, true, !initialBuild)
			}
		}

		const defaultNavOptions: NavOptions = {
			back: true,
		}

		return {
			mode,
			userLoggedIn: user,
			currentPath,
			height: ResponsiveWidthStore.getHeight(),
			width: ResponsiveWidthStore.getWidth(),
			routes: [
				{
					path: `/recipe/:slug/edit`,
					exact: false,
					component: RecipeFormContainer,
					navOptions: {
						...defaultNavOptions,
						title: 'Edit Recipe',
					},
				},
				{
					path: `${Routes.recipe}/:slug/`,
					exact: false,
					component: Recipe,
					navOptions: defaultNavOptions,
				},
				{
					path: `/recipes/`,
					exact: false,
					component: SearchResult,
					navOptions: defaultNavOptions,
				},
				{
					path: `${Routes.recipeForm}/`,
					exact: false,
					component: RecipeForm,
					navOptions: {
						...defaultNavOptions,
						title: 'Create Recipe',
					},
				},
				{
					path: `${Routes.mealPlan}/`,
					exact: false,
					component: MealPlanScreen,
					navOptions: defaultNavOptions,
				},
				{
					path: `${Routes.settings}/`,
					exact: false,
					component: SettingsScreen,
					navOptions: defaultNavOptions,
				},
				{
					path: '/:username/',
					exact: false,
					component: (user && (user.username === trimSlashes(currentPath!))) ? ProfileScreen : PublicProfileScreen,
				},
				{
					path: '/',
					exact: false,
					component: user ? PathScreen : LandingScreen,
				},
				{
					path: '*/login',
					exact: false,
					component: LoginModal,
					modal: true,
				},
				{
					path: '*/join',
					exact: false,
					component: RegisterModal,
					modal: true,
				},
			],
		}
	}

	private _renderDrawer = () => {
		if (this.state.isLanding && !this.state.userLoggedIn) return null

		return (
			<RX.Animated.View style={[styles.drawer.container, { height: this.state.height }, this._drawerAnimationStyle]}>
				<Image
					source={ImageSource.Brand}
					style={styles.drawer.logo}
				/>

				{
					(() => {
						if (this.state.userLoggedIn) {
							return [
								<Link
									to={`/${this.state.userLoggedIn.username}`}
									style={{ alignSelf: 'center', marginVertical: theme.styles.spacing, }}
								>
									<Image source={this.state.userLoggedIn.avatar.url} style={styles.drawer.avatar} />
								</Link>,
								<Link to={`/`} style={styles.drawer.link}><Text translate>Path</Text></Link>,
								<Link to={`${Routes.mealPlan}`} style={styles.drawer.link}><Text translate>MealPlan</Text></Link>,
								<Link to={`/explore`} style={styles.drawer.link}><Text translate>Explore</Text></Link>,
								<Link to={`/${this.state.userLoggedIn.username}`} style={styles.drawer.link}><Text
									translate>Profile</Text></Link>,
							]
						} else {
							return <FilledButton onPress={() => navigate(this.props, Routes.login)} label={'Login'} />
						}
					})()
				}
			</RX.Animated.View>
		)
	}

	private _renderNavbar = () => {
		const { currentPath, routes } = this.state

		const foundRoute = routes.find(p => !!matchPath(currentPath, {
			path: p.path,
			exact: p.exact,
		}))

		if (!foundRoute) return null
		if (!foundRoute.navOptions) return null

		const { title, back } = foundRoute.navOptions as NavOptions

		return (
			<RX.Animated.View style={[styles.navbarContainer, this._navbarAnimationStyle]}>
				<Text>{back ? '<' : ''}</Text>
				<Text>{title}</Text>
			</RX.Animated.View>
		)
	}

	private _renderTabBar = () => {
		if (this.state.mode === 'drawer') return null
		if (!this.state.userLoggedIn) return null

		let { currentPath } = this.state

		let activePath: string | undefined

		if (matchPath(currentPath, {
			path: '/',
			exact: false,
		})) activePath = 'path'

		if (matchPath(currentPath, {
			path: '/explore',
			exact: false,
		})) activePath = 'feed'

		if (this.state.userLoggedIn && (this.state.userLoggedIn.username === trimSlashes(currentPath))) {
			activePath = 'profile'
		}

		// Only appear on Path, Feed and Profile
		if (!activePath) return null

		const ICON_SIZE = 30

		return (
			<RX.View style={styles.tabBar.container}>
				<RX.View style={[styles.tabBar.innerContainer, { width: this.state.width }]}>
					<Image
						source={activePath === 'feed' ? ImageSource.SearchActive : ImageSource.Search}
						style={{
							width: ICON_SIZE,
							height: ICON_SIZE,
						}}
					/>
					<Image
						source={activePath === 'path' ? ImageSource.OvalActive : ImageSource.Oval}
						style={{
							width: ICON_SIZE,
							height: ICON_SIZE,
						}}
					/>
					<Image
						source={activePath === 'profile' ? ImageSource.RectangleActive : ImageSource.Rectangle}
						style={{
							width: ICON_SIZE,
							height: ICON_SIZE,
						}}
					/>
				</RX.View>
			</RX.View>
		)
	}

	private _renderSearch = () => {
		return null // FIXME

		const match = matchPath(this.state.currentPath, {
			path: '/recipes/',
			exact: false,
		})

		const toggleModal = (show: boolean) => () => {
			RX.Animated.parallel([
				RX.Animated.timing(this._searchContainerAnimationTopValue, { toValue: show ? 0 : -this.state.height }),
				RX.Animated.timing(this._searchContainerBackDropAnimationOpacityValue, { toValue: show ? 1 : 0 }),
			]).start(() => {
				this.setState({ searchModalShowing: show })
				if (this._searchInput) {
					this._searchInput.focus()
				}
			})
		}

		return [
			<RX.View onPress={toggleModal(true)} style={[styles.search.iconContainer, { opacity: match ? 0 : 1 }]}>
				<Image
					source={ImageSource.SearchIcon}
					style={styles.search.icon}
					resizeMode={'contain'}
				/>
			</RX.View>,
			<RX.Animated.View
				ignorePointerEvents={!this.state.searchModalShowing}
				onPress={toggleModal(false)}
				style={[
					styles.search.backDrop,
					this._searchContainerBackDropAnimationStyle,
				]}
			/>,
			<RX.Animated.View
				style={[
					styles.search.container,
					{
						height: this.state.mode === 'drawer' ? SEARCH_CONTAINER_HEIGHT : this.state.height,
					},
					this._searchContainerAnimationStyle,
				]}
			>
				{this.state.mode === 'navbar' &&
        <RX.Text style={{ padding: theme.styles.spacing, fontSize: 20 }} onPress={toggleModal(false)}>x</RX.Text>}

				<ExploreSearch ref={(ref: any) => this._searchInput = ref} onSubmit={toggleModal(false)} />
			</RX.Animated.View>
		]
	}

	private _handleLocationChange = (location: Location, action: Action) => {
		LocationStore.setPath(location.pathname) // FIXME do something better maybe
		this._checkIfHomeHideDrawer(location.pathname)
	}

	private _setUI = (showDrawer: boolean, showNavbar: boolean, animate: boolean = true) => {
		RX.Animated.parallel([
			RX.Animated.timing(this._drawerAnimationLeftValue, {
				toValue: showDrawer ? 0 : this._drawerClosedValue,
				duration: animate ? 500 : 0,
			}),
			RX.Animated.timing(this._navbarAnimationTopValue, {
				toValue: showNavbar ? 0 : -NAVBAR_HEIGHT,
				duration: animate ? 500 : 0,
			})
		]).start()
	}

	private _checkIfHomeHideDrawer = (pathname?: string, animate: boolean = true) => {
		const currentPath = this.state.currentPath
		const match = matchPath(pathname || currentPath, {
			path: '/',
			exact: true,
			strict: false
		}) || matchPath(pathname || currentPath, {
			path: '/login',
			exact: false,
			strict: false
		}) || matchPath(pathname || currentPath, {
			path: '/join',
			exact: false,
			strict: false
		})

		if (match) {
			this.setState({
				isLanding: !this.state.userLoggedIn,
			})

			// hide the drawer if landing
			if (this.state.userLoggedIn) {
				this._setUI(this.state.mode === 'drawer', this.state.mode === 'navbar', animate)
			} else {
				this._setUI(false, false, animate)
			}
		} else {
			// set the state
			this.setState({
				isLanding: false,
			})

			this._setUI(this.state.mode === 'drawer', this.state.mode === 'navbar', animate)
		}
	}
}


const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
	}),
	innerContainer: RX.Styles.createViewStyle({
		flex: 1,
		overflow: 'visible',
	}),
	navbarContainer: RX.Styles.createViewStyle({
		height: NAVBAR_HEIGHT,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderWidth: 1,
		backgroundColor: theme.colors.drawerBg,
		borderColor: theme.colors.drawerBorderColor,
	}),
	drawer: {
		container: RX.Styles.createViewStyle({
			padding: theme.styles.spacingLarge,
			width: theme.styles.drawerWidth,
			position: 'absolute',
			[theme.styles.start]: 0,
			backgroundColor: theme.colors.drawerBg,
			shadowColor: 'rgba(0, 0, 0, .12)',
			shadowOffset: {
				width: 0,
				height: 0,
			},
			shadowRadius: 50,
		}),
		logo: RX.Styles.createImageStyle({
			width: BRAND_IMAGE_WIDTH,
			height: BRAND_IMAGE_HEIGHT,
			alignSelf: 'center',
		}),
		link: RX.Styles.createTextStyle({
			[theme.styles.paddingStart]: theme.styles.spacing,
			paddingVertical: theme.styles.spacing / 2,
		}),
		avatar: RX.Styles.createImageStyle({
			width: 80,
			height: 80,
		})
	},
	search: {
		container: RX.Styles.createViewStyle({
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			backgroundColor: theme.colors.searchContainerBG,
			padding: theme.styles.spacing,
		}),
		backDrop: RX.Styles.createViewStyle({
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: theme.colors.searchContainerBackdropBG,
		}),
		iconContainer: RX.Styles.createViewStyle({
			position: 'absolute',
			[theme.styles.end]: theme.styles.spacing * 2,
			top: theme.styles.spacing * 2,
			width: SEARCH_ICON_SIZE,
			height: SEARCH_ICON_SIZE,
			borderRadius: SEARCH_ICON_SIZE / 2,
			backgroundColor: theme.colors.searchIconBG,
			shadowColor: 'rgba(0, 0, 0, .12)',
			shadowRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
		}),
		icon: RX.Styles.createImageStyle({
			width: SEARCH_ICON_IMAGE_SIZE,
			height: SEARCH_ICON_IMAGE_SIZE,
		}),
	},
	tabBar: {
		container: RX.Styles.createViewStyle({
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			justifyContent: 'center',
			alignItems: 'center',
			padding: theme.styles.spacing,
		}),
		innerContainer: RX.Styles.createViewStyle({
			flex: 1,
			height: TAB_BAR_HEIGHT,
			maxWidth: TAB_BAR_MAX_WIDTH,
			backgroundColor: theme.colors.tabBarBG,
			borderRadius: TAB_BAR_HEIGHT / 2,
			shadowColor: 'rgba(0, 0, 0, .12)',
			shadowRadius: 10,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingHorizontal: theme.styles.spacing * 2,
		})
	}
}
