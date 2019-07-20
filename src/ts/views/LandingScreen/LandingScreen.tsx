/*
 * LandingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Assistant from 'common/Assistant/Assistant'
import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import theme from 'src/ts/app/Theme'
import HoverButton from 'src/ts/common/HoverButton/HoverButton'
import { Routes } from 'src/ts/navigator/routes'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { navigate } from 'src/ts/utilities'
import Introduction from 'src/ts/views/Introduction/Introduction'
import GoDownIndicator from 'src/ts/views/LandingScreen/components/GoDownIndicator'

const HEADER_MAX_WIDTH = 950
const HEADER_HEIGHT = 80

interface AssistantScreenProps extends RX.CommonProps {
	style?: any,
}

interface AssistantScreenState {
	height: number,
	width: number,
}

export default class LandingScreen extends ComponentBase<AssistantScreenProps, AssistantScreenState> {
	render() {
		const { style } = this.props

		if (this.state.width < 950) {
			return (
				<RX.View>
					<Text
						style={{
							fontSize: theme.fontSizes.size20,
							alignSelf: 'center',
							padding: theme.styles.spacing,
							textAlign: 'center',
						}}
					>This website is currently under development, please use a desktop browser to view this page</Text>
				</RX.View>
			)
		}

		return (
			<RX.View style={[styles.container, style]}>
				<RX.View
					style={[
						{
							height: this.state.height,
							minHeight: 1000
						},
						styles.initialPageContainer,
					]}>
					<Text translate style={styles.title}>landingTitle</Text>
					<Text translate style={styles.subtitle}>landingSubtitle</Text>

					{this._renderPhone()}

					<GoDownIndicator />
				</RX.View>

				{this._renderSection(ImageSource.SC1, getLocalizedText('landing_1_t'), getLocalizedText('landing_1_s'))}
				{this._renderSection(ImageSource.SC2, getLocalizedText('landing_2_t'), getLocalizedText('landing_2_s'), {
					width: 400,
				})}
				{this._renderSection(ImageSource.SC3, getLocalizedText('landing_3_t'), getLocalizedText('landing_3_s'))}
				{this._renderSection(ImageSource.SC4, getLocalizedText('landing_4_t'), getLocalizedText('landing_4_s'))}

				{this._renderBottomCall2Action()}
				{this._renderFooter()}
				{this._renderHeader()}
			</RX.View>
		)
	}

	protected _buildState(props: AssistantScreenProps, initialBuild: boolean): Partial<AssistantScreenState> | undefined {
		return {
			height: ResponsiveWidthStore.getHeight(),
			width: ResponsiveWidthStore.getWidth(),
		}
	}

	private _renderHeader = () => {
		return (
			<RX.View style={styles.headerContainer}>
				<RX.View
					style={styles.brandContainer}
					activeOpacity={0.7}
				>
					<Image
						source={ImageSource.Brand}
						style={styles.brand}
						resizeMode={'contain'}
					/>
				</RX.View>
				{false && <HoverButton
          onPress={() => navigate(this.props, Routes.login)}
          onRenderChild={isHovering => (
						<RX.View
							style={[
								styles.loginButtonContainer,
								{
									opacity: isHovering ? 0.8 : 1,
								}
							]}
						>
							<Text translate style={styles.loginButtonText}>Login</Text>
						</RX.View>
					)}
        />}
			</RX.View>
		)
	}

	private _renderPhone = () => {
		let { height } = this.state

		if (height < 900) {
			height = 900
		}

		const phoneHeight = height / 1.5
		const phoneWidth = phoneHeight / 1.8

		return (
			<RX.View style={styles.phoneContainer}>
				<Image
					source={ImageSource.Phone}
					style={{
						width: phoneWidth,
						height: phoneHeight,
						right: 2
					}}
					resizeMode={'contain'}
				/>
				<RX.View
					style={[
						{
							top: 49,
							width: phoneWidth - 86,
							height: phoneHeight - 76,
							borderBottomLeftRadius: phoneHeight / 23,
							borderBottomRightRadius: phoneHeight / 23,
						},
						styles.introductionContainer,
					]}
				>
					<Introduction
						introductionWidth={phoneWidth - 86}
						introductionHeight={phoneHeight - 76}
					/>
				</RX.View>
			</RX.View>
		)
	}

	private _renderSection = (image: any, title: string, subtitle: string, imageStyle?: any) => {
		const { height, width } = this.state

		let sectionWidth = width
		if (width >= 950) {
			sectionWidth = 950
		}

		return (
			<RX.View style={[styles.sectionContainer, { minHeight: height, width: sectionWidth }]}>
				<RX.View>
					<Image
						source={image}
						style={[styles.sectionImage, imageStyle]}
					/>
				</RX.View>
				<RX.View style={{ flexDirection: 'row', padding: theme.styles.spacing }}>
					<RX.View>
						<RX.View style={styles.circle} />
					</RX.View>
					<RX.View style={{ maxWidth: 500 }}>
						<Text style={styles.sectionTitle}>{title}</Text>
						<Text style={styles.sectionSubtitle}>{subtitle}</Text>
					</RX.View>
				</RX.View>
			</RX.View>
		)
	}

	private _renderBottomCall2Action = () => {
		return [
			<Assistant
				size={150}
				glowMode={'dark'}
			/>,
			<FilledButton
				label={getLocalizedText('LandingStartFree')}
				fontSize={24}
				style={{ paddingRight: theme.styles.spacingLarge * 2, paddingLeft: theme.styles.spacingLarge * 2 }}
				onPress={() => {
				}}
			/>
		]
	}

	private _renderFooter = () => {
		return [
			<Image
				source={ImageSource.LandingCurve}
				style={{
					width: this.state.width + 32,
					height: this.state.width / 15.9,
				}}
				resizeMode={'cover'}
			/>,
			<RX.View style={[styles.footerContainer, { width: this.state.width }]}>
				<RX.View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginRight: theme.styles.spacing,
						marginLeft: theme.styles.spacing,
					}}
				>
					<RX.View style={{ [theme.styles.marginEnd]: theme.styles.spacing * 2 }}>
						<Text translate style={styles.footerTitle}>LandingFooterCentralOffice</Text>
						<Text translate style={styles.footerLink}>LandingFooterAboutCaloria</Text>
						<Text translate style={styles.footerLink}>LandingFooterContactUs</Text>
						<Text translate style={styles.footerLink}>LandingFooterTerms</Text>
					</RX.View>
					<RX.View>
						<Image
							source={ImageSource.BrandWhite}
							style={{
								width: 152,
								height: 31,
								alignSelf: 'flex-end',
								marginBottom: theme.styles.spacing * 2,
							}}
						/>
						<Image
							source={ImageSource.ComingSoonButtonGroup}
							style={{
								width: 400,
								height: 143,
							}}
						/>
					</RX.View>
				</RX.View>
				<RX.View
					style={{
						alignItems: 'center',
						marginTop: theme.styles.spacing * 4,
					}}
				>
					<RX.View
						style={{
							flexDirection: 'row',
						}}
					>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.FaceBookIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.YoutubeIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.TwitterIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.PinterestIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.InstagramIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
						<HoverButton
							onRenderChild={isHovering => (
								<Image
									source={ImageSource.TelegramIcon}
									style={[
										styles.socialMediaIcon,
										{ opacity: isHovering ? 0.8 : 1, }
									]}
								/>
							)}
						/>
					</RX.View>
					<Text
						translate
						style={styles.socialMediaText}
					>LandingFooterSocialMediaText</Text>
				</RX.View>

				<Text
					translate
					style={{
						position: 'absolute',
						bottom: theme.styles.spacing,
						width: this.state.width,
						color: theme.colors.footerTitleColor,
						font: theme.fonts.displayLight,
						fontSize: 12,
						textAlign: 'center',
					}}
				>landingfooterAck</Text>
			</RX.View>
		]
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		alignItems: 'center'
	}),
	headerContainer: RX.Styles.createViewStyle({
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		minHeight: 50,
		maxWidth: HEADER_MAX_WIDTH,
		padding: theme.styles.spacing,
		marginTop: theme.styles.spacing,
		// @ts-ignore
		margin: 'auto' //FIXME only web
	}),
	brandContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		left: theme.styles.spacing,
		top: theme.styles.spacing,
	}),
	brand: RX.Styles.createImageStyle({
		width: 150,
		get height() {
			return this.width / 5
		},
	}),
	loginButtonContainer: RX.Styles.createViewStyle({
		padding: theme.styles.spacing,
		backgroundColor: '#fff',
		...theme.styles.defaultShadow,
	}),
	loginButtonText: RX.Styles.createTextStyle({
		color: theme.colors.loginButtonTextColor,
	}),
	phone: RX.Styles.createImageStyle({
		width: 300,
		height: 530,
	}),
	phoneContainer: RX.Styles.createViewStyle({
		alignItems: 'center',
	}),
	title: RX.Styles.createTextStyle({
		fontSize: theme.fontSizes.size32,
		font: theme.fonts.displayBold,
		marginBottom: theme.styles.spacingLarge,
	}),
	subtitle: RX.Styles.createTextStyle({
		fontSize: theme.fontSizes.size20,
		color: theme.colors.landingSubtitle,
		marginBottom: theme.styles.spacing,
	}),
	introductionContainer: RX.Styles.createViewStyle({
		position: 'absolute',
	}),
	initialPageContainer: RX.Styles.createViewStyle({
		alignItems: 'center',
		marginTop: HEADER_HEIGHT
	}),
	sectionImage: RX.Styles.createImageStyle({
		width: 333,
		height: 650,
	}),
	footerContainer: RX.Styles.createViewStyle({
		flex: 1,
		backgroundColor: theme.colors.landingFooterBG,
		padding: theme.styles.spacing,
		alignItems: 'center',
		paddingBottom: theme.styles.spacing * 4
	}),
	sectionContainer: RX.Styles.createViewStyle({
		flexDirection: 'row',
		alignItems: 'center'
	}),
	circle: RX.Styles.createViewStyle({
		borderWidth: 6,
		borderColor: theme.colors.sectionCircle,
		width: 20,
		height: 20,
		borderRadius: 10,
		marginTop: 5,
		[theme.styles.marginEnd]: 10,
	}),
	sectionTitle: RX.Styles.createTextStyle({
		color: theme.colors.landingSectionTitle,
		fontSize: theme.fontSizes.size20,
		font: theme.fonts.displayBold,
		marginBottom: 5,
	}),
	sectionSubtitle: RX.Styles.createTextStyle({
		color: theme.colors.landingSectionSubtitle,
		fontSize: theme.fontSizes.size16,
		fontWeight: '100',
	}),
	footerTitle: RX.Styles.createTextStyle({
		color: theme.colors.footerTitleColor,
		font: theme.fonts.displayBold,
	}),
	footerLink: RX.Styles.createTextStyle({
		color: theme.colors.footerLinkColor,
		marginTop: theme.styles.spacing,
	}),
	socialMediaIcon: RX.Styles.createImageStyle({
		width: 30,
		height: 30,
		marginHorizontal: theme.styles.spacing
	}),
	socialMediaText: RX.Styles.createTextStyle({
		fontSize: theme.fontSizes.size16,
		color: theme.colors.footerTitleColor,
		marginTop: theme.styles.spacing
	})
}
