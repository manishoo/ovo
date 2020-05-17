/*
 * FilledButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { useTheme } from '@App/ThemeContext'
import HoverButton from '@Common/HoverButton/HoverButton'
// import Link from '@Common/Link/Link'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
// @ts-ignore import
import pSBC from '@Utils/pSBC.js'
import { History } from 'history'
import { useCallback, useEffect, useRef, useState } from 'react'
import RX from 'reactxp'
import LocationDescriptor = History.LocationDescriptor


interface FilledButtonProps {
  style?: any,
  containerStyle?: any,
  label: any,
  onPress?: (e: RX.Types.SyntheticEvent) => void,
  disabled?: boolean,
  fontSize?: number,
  mode?: ButtonMode,
  suffix?: any,
  pressed?: boolean
  loading?: boolean
  flat?: boolean
  to?: LocationDescriptor<History.PoorMansUnknown>
}

enum ButtonMode {
  primary = 'primary',
  success = 'success',
  default = 'default',
  danger = 'danger',
  link = 'link',
}

const FilledButton = (props: FilledButtonProps) => {
  const {
    style,
    containerStyle,
    label,
    onPress,
    loading,
    fontSize,
    disabled,
    suffix,
    flat,
    mode = ButtonMode.primary,
  } = props

  const theme = useTheme()
  const [pressed, setPressed] = useState(props.pressed)
  const _scrollViewRef = useRef<RX.ScrollView | null>(null)
  const _scrollViewHeight = useRef<number>()

  useEffect(() => setPressed(props.pressed), [props.pressed])

  useEffect(() => {
    if (!_scrollViewRef.current) return
    if (!_scrollViewHeight.current) return

    _scrollViewRef.current.setScrollTop(loading ? _scrollViewHeight.current : 0, true)
  }, [loading])

  const _getStyle = useCallback((theme: Theme) => {
    let style: any = {
      borderWidth: 0,
      borderColor: theme.colors.filledButtonDefaultModeBorder,
    }
    let hoverStyle = {}

    let labelStyle: any = {
      fontFamily: Styles.fonts.text,
    }

    switch (mode) {
      case ButtonMode.default:
        style = {
          ...style,
          backgroundColor: theme.colors.filledButtonDefaultModeBG,
        }
        labelStyle = {
          ...labelStyle,
          color: theme.colors.filledButtonDefaultModeTextColor,
          fontWeight: 'bold',
        }
        hoverStyle = {
          ...hoverStyle,
          backgroundColor: theme.colors.filledButtonDefaultHoverBG,
        }
        break
      case ButtonMode.primary:
      case ButtonMode.danger:
        const bg = mode === ButtonMode.primary ? theme.colors.filledButtonBG : theme.colors.red
        style = {
          ...style,
          borderColor: pSBC(-0.5, bg),
          backgroundColor: bg,
        }
        labelStyle = {
          ...labelStyle,
          fontWeight: 'bold',
        }
        hoverStyle = {
          ...hoverStyle,
          backgroundColor: mode === ButtonMode.primary ? theme.colors.filledButtonHoverBG : theme.colors.darkerRed,
        }
        break
      case ButtonMode.link:
        style = {
          ...style,
          borderWidth: 0,
          // borderBottomWidth: 3,
          // borderColor: theme.colors.filledButtonDefaultModeBorder,
          // backgroundColor: this.mode === ButtonMode.primary ? theme.colors.filledButtonBG : theme.colors.red,
        }
        labelStyle = {
          ...labelStyle,
          color: theme.colors.primary,
          // fontWeight: 'bold',
        }
        hoverStyle = {
          ...hoverStyle,
          // color: theme.colors.primary,
          // backgroundColor: this.mode === ButtonMode.primary ? theme.colors.filledButtonHoverBG : theme.colors.darkerRed,
        }
        break
    }
    return { style, labelStyle, hoverStyle }

  }, [theme.mode, mode])

  return (
    <HoverButton
      style={containerStyle}
      onPressIn={props.pressed ? undefined : () => setPressed(true)}
      onPressOut={props.pressed ? undefined : () => setPressed(false)}
      onPress={loading ? undefined : onPress}
      disabled={disabled}
      disabledOpacity={1}
      onRenderChild={isHovering => (
        <RX.View
          style={[
            styles.container,
            _getStyle(theme).style,
            isHovering && !disabled ? _getStyle(theme).hoverStyle : undefined,
            flat || disabled ? undefined : {
              borderBottomWidth: pressed && !disabled ? 1 : 3,
              marginTop: pressed && !disabled ? 2 : 0,
            },
            disabled ? { backgroundColor: theme.colors.filledButtonDisabledBG } : undefined,
            style,
          ]}
        >
          <RX.ScrollView
            ref={ref => _scrollViewRef.current = ref}
            scrollEnabled={false}
            style={{
              height: _scrollViewHeight.current || undefined,
            }}
          >
            <RX.View
              style={styles.innerContainer}
              onLayout={e => _scrollViewHeight.current = e.height}
            >
              <RX.Text
                style={[{
                  color: disabled ? theme.colors.filledButtonDisabledTextColor : theme.colors.filledButtonText,
                  fontWeight: 'bold', // displayBold
                  fontSize: Styles.fontSizes.size14,
                }, _getStyle(theme).labelStyle, { fontSize }]}
              >{label}</RX.Text>
              {suffix}
            </RX.View>
            {
              !!_scrollViewHeight.current && typeof loading === 'boolean' &&
              <RX.View
                style={[
                  {
                    height: _scrollViewHeight.current,
                  },
                  styles.innerContainer
                ]}
              >
                <LoadingIndicator
                  size={_scrollViewHeight.current}
                />
              </RX.View>
            }

          </RX.ScrollView>
        </RX.View>
      )}
    />
  )
}

FilledButton.mode = ButtonMode

export default FilledButton

const styles = {
  container: RX.Styles.createViewStyle({
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // shadowColor: 'rgba(0, 0, 0, .2)',
    // shadowOffset: {
    //   height: 3,
    //   width: 0,
    // },
    // shadowRadius: 6,
    // margin: 10,
  }),
  innerContainer: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  })
}
