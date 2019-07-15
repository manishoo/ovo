/*
 * AppConfig.ts
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface InitParams {
	appVersion?: string;
}

class AppConfig {
	public graphQLAddress = 'http://5.253.24.16:4003/gql'
	public serverAddress = 'http://5.253.24.16:4003'
	public locale = 'fa'
	private _appVersion: string
	private _frontendHost: string
	private _platformType: RX.Types.PlatformType
	private _isTouchInterface: boolean
	private _startupTime: number

	constructor() {
		this._appVersion = '0.0.0.1'
		this._frontendHost = (typeof document !== 'undefined') && document.location ? document.location.host : ''
		this._platformType = RX.Platform.getType()
		this._isTouchInterface = this._platformType === 'ios' || this._platformType === 'android'
		this._startupTime = Date.now()
	}

	initialize(params: InitParams) {
		if (params.appVersion) {
			this._appVersion = params.appVersion
		}
	}

	isDevelopmentBuild(): boolean {
		return __DEV__
	}

	getPlatformType(): RX.Types.PlatformType {
		return this._platformType
	}

	isTouchInterface(): boolean {
		return this._isTouchInterface
	}

	getStartupTime(): number {
		return this._startupTime
	}

	getAppVersion(): string {
		return this._appVersion
	}

	getFrontendHost(): string {
		return this._frontendHost
	}

	getProtocol(): string {
		if (this.getPlatformType() === 'web' &&
			typeof location !== 'undefined' &&
			typeof location.protocol !== 'undefined') {
			return location.protocol
		}
		return 'https:'
	}

	getFrontendBaseUrl(): string {
		return this.getProtocol() + '//' + this._frontendHost
	}

	getDocRoot(): string {
		return '/'
	}

	getImagePath(imageName = ''): string {
		return this.getDocRoot() + 'images/' + imageName
	}

	isRTL(): boolean {
		return RX.International.isRTL()
	}

	isNode(): boolean {
		return process.env.isNode == 'true'
	}
}

export default new AppConfig()
