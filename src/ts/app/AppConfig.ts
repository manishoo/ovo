/*
 * AppConfig.ts
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { LanguageCode } from 'src/ts/models/global-types'


interface InitParams {
  appVersion?: string;
}

class AppConfig {
  public serverAddress = process.env.API_ADDRESS || 'http://localhost:4003'
  public version = process.env.TAG || ''

  public get graphQLAddress() {
    return `${this.serverAddress}/${process.env.GRAPHQL_ENDPOINT || 'gql'}`
  }

  public locale: LanguageCode = LanguageCode.en
  public panelAddress: string = 'http://pantheon.mycaloria.com'
  private _appVersion: string
  private readonly _frontendHost: string
  private readonly _platformType: RX.Types.PlatformType
  private readonly _isTouchInterface: boolean
  private readonly _startupTime: number

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

  setLocale(locale: LanguageCode) {
    this.locale = locale
  }
}

export default new AppConfig()
