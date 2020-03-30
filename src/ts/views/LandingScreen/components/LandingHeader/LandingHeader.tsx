/*
 * LandingHeader.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Assistant from '@Common/Assistant/Assistant'
import FilledButton from '@Common/FilledButton/FilledButton'
import Hamburger from '@Common/Hamburger/Hamburger'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import { useEffect, useMemo, useState } from 'react'
import { Visible } from 'react-grid-system'
import { useLocation } from 'react-router'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
  headerContainer: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    maxWidth: Styles.values.mainContentMaxWidth,
    padding: Styles.values.spacing,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    // @ts-ignore web
    margin: 'auto',
    transition: 'all 0.5s'
  }),

  // brand: RX.Styles.createImageStyle({
  //   width: 73,
  //   height: 30,
  //   [Styles.values.marginStart]: Styles.values.spacing,
  //   [Styles.values.marginEnd]: Styles.values.spacing,
  // }),

  brandText: RX.Styles.createTextStyle({
    fontFamily: Styles.fonts.typography,
    fontSize: 45,
    [Styles.values.marginStart]: Styles.values.spacing,
  })
}

interface LandingHeaderProps {
  style?: any,
  onLinkPress: (position: number) => void,
  textColor: string,
  backgroundColor?: string,
}

const LandingHeader = ({ style, onLinkPress, textColor, backgroundColor }: LandingHeaderProps) => {
  const navTitleStyle = useMemo(() => RX.Styles.createTextStyle({
    [Styles.values.marginEnd]: Styles.values.spacingLarge,
    fontWeight: 'bold',
    color: textColor,
  }, false), [textColor])

  const [dropDownVisible, setDropDownVisible] = useState(false)
  const location = useLocation()

  return (
    <RX.View
      style={_styles.container}
    >
      <RX.View style={[
        _styles.headerContainer,
        style,
        { backgroundColor },
      ]}>
        <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <a href="#">
            <RX.View onPress={() => onLinkPress(0)} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Assistant size={70} />
              <RX.View
                activeOpacity={0.7}
              >
                <Text style={[_styles.brandText, navTitleStyle]}>
                  Ovo
                </Text>
                {/*<Image
                  source={ImageSource.Brand}
                  style={_styles.brand}
                  resizeMode={'contain'}
                />*/}
              </RX.View>
            </RX.View>
          </a>
          <Visible xs sm>
            <Hamburger
              size={30}
              open={dropDownVisible}
              onPress={() => setDropDownVisible(!dropDownVisible)}
              color={textColor}
            />
          </Visible>
          <Visible md lg xl>
            <a href="#get-a-plan">
              <Text onPress={() => onLinkPress(3)} translate={'Get a Plan'} style={navTitleStyle} />
            </a>
            <a href='#'>
              <Text translate={'Blog'} style={navTitleStyle} />
            </a>
            <a href='#'>
              <Text translate={'About'} style={navTitleStyle} />
            </a>
          </Visible>
        </RX.View>
        <RX.View style={{ [Styles.values.paddingStart]: Styles.values.spacing }}>
          <RX.View>
            <FilledButton
              label={translate('Sign Up')}
              onPress={() => LocationStore.navigate({}, {
                pathname: Routes.setupProcess,
                state: { background: { ...location, state: { isInBackground: true } } }
              })}
            />
          </RX.View>
          <Link to={Routes.login} style={{ marginTop: Styles.values.spacing / 2 }}>
            <RX.View
              style={{
                width: 138,
                borderWidth: 1,
                borderColor: textColor,
                paddingTop: Styles.values.spacing / 2,
                paddingBottom: Styles.values.spacing / 2,
                borderRadius: 8,
              }}
            >
              <Text
                translate={translate.keys.AlreadyAMember}
                style={{ textAlign: 'center', color: textColor, fontWeight: '600' }}
              />
            </RX.View>
          </Link>
        </RX.View>
      </RX.View>

      <Visible xs sm>
        <LandingDropDown
          visible={dropDownVisible}
          onLinkPress={onLinkPress}
        />
      </Visible>
    </RX.View>
  )
}

const LandingDropDown = ({ visible, onLinkPress }: { visible: boolean, onLinkPress: (position: number) => void }) => {
  const theme = useTheme()

  const navTitleStyle = useMemo(() => RX.Styles.createTextStyle({
    [Styles.values.marginEnd]: Styles.values.spacingLarge,
    fontWeight: 'bold',
    color: theme.colors.text,
    paddingTop: Styles.values.spacing / 2,
  }, false), [theme.colors.text])

  const [_dropDownHeight] = useState(RX.Animated.createValue(0))
  const _dropDownAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    height: _dropDownHeight
  }), [_dropDownHeight])

  useEffect(() => {
    RX.Animated.timing(_dropDownHeight, {
      toValue: visible ? 95 : 0,
    })
      .start()
  }, [visible])

  return (
    <RX.Animated.View
      style={[
        {
          width: 220,
          backgroundColor: theme.colors.cardBg,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          [Styles.values.paddingStart]: Styles.values.spacing,
        },
        _dropDownAnimatedStyle
      ]}
    >
      <Text onPress={() => onLinkPress(5)} translate={'Get a Plan'} style={navTitleStyle}>
        <Link to={{ hash: '#get-a-plan' }} />
      </Text>
      <Text translate={'Blog'} style={navTitleStyle}>
        <Link to={{ hash: '#' }} />
      </Text>
      <Text translate={'About'} style={navTitleStyle}>
        <Link to={{ hash: '#' }} />
      </Text>
    </RX.Animated.View>
  )
}

export default LandingHeader
