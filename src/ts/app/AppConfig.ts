/*
 * AppConfig.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ThemeMode } from '@App/Theme'
import { LanguageCode, MealAvailableTime, MealSize } from '@Models/global-types'
import { isTouchDevice } from '@Utils/is-touch'
import { CalendarSystem, Settings } from 'luxon'
import RX from 'reactxp'


interface InitParams {
  appVersion?: string;
}

class AppConfig {
  public serverAddress = process.env.API_ADDRESS || 'http://localhost:4003'
  public version = process.env.TAG || ''
  public locale: LanguageCode = LanguageCode.en
  public calendarSystem: CalendarSystem = 'gregory'
  public panelAddress: string = 'http://panel.prana.global'
  public emailTo: string = 'hi@eatwithovo.com'
  public calorieMeasurementUnit: 'kcal' | 'kJ' = 'kcal'
  public theme: ThemeMode = ThemeMode.light
  public contentMaxWidth = 975
  public defaultCalories = 2300
  public defaultScrollBarWidth = 20
  public defaultUserMeals = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      availableTime: MealAvailableTime.littleTime,
      cook: false,
      time: '09:00',
      size: MealSize.tiny,
    },
    {
      id: 'lunch',
      name: 'Lunch',
      availableTime: MealAvailableTime.someTime,
      cook: true,
      time: '13:00',
      size: MealSize.normal,
    },
    {
      id: 'snack',
      name: 'Snack',
      availableTime: MealAvailableTime.noLimit,
      cook: false,
      time: '17:30',
      size: MealSize.normal,
    },
    {
      id: 'dinner',
      name: 'Dinner',
      availableTime: MealAvailableTime.moreTime,
      cook: true,
      time: '21:00',
      size: MealSize.big,
    }
  ]
  private _appVersion: string
  private readonly _frontendHost: string
  private readonly _platformType: RX.Types.PlatformType
  private readonly _isTouchInterface: boolean
  private readonly _startupTime: number

  constructor() {
    this._appVersion = '0.0.0.1'
    this._frontendHost = (typeof document !== 'undefined') && document.location ? document.location.host : ''
    this._platformType = RX.Platform.getType()
    this._isTouchInterface = this._platformType === 'ios' || this._platformType === 'android' || isTouchDevice()
    this._startupTime = Date.now()
  }

  public get graphQLAddress() {
    return `${this.serverAddress}/${process.env.GRAPHQL_ENDPOINT || 'gql'}?deduplicate=1`
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
    return this.getDocRoot() + 'img/' + imageName
  }

  isRTL(): boolean {
    return RX.International.isRTL()
  }

  isNode(): boolean {
    return process.env.isNode == 'true'
  }

  setTheme(theme: ThemeMode) {
    this.theme = theme
  }

  setLocale(locale: LanguageCode) {
    let calendarSystem: CalendarSystem = this.calendarSystem

    switch (locale) {
      case LanguageCode.fa:
        calendarSystem = 'persian'
        break
      default:
        calendarSystem = 'gregory'
        break
    }

    Settings.defaultLocale = locale
    Settings.defaultOutputCalendar = calendarSystem

    this.locale = locale
    this.calendarSystem = calendarSystem
  }
}

export default new AppConfig()
