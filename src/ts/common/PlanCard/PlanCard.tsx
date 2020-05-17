/*
 * PlanCard.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import Image from '@Common/Image/Image'
import Text from '@Common/Text/Text'
import { useMemo } from 'react'
import RX from 'reactxp'
import { PlanCardPlan } from './types/PlanCardPlan'


const _styles = {
  container: RX.Styles.createViewStyle({
    borderWidth: 1,
    borderRadius: 10,
    height: 220,
    width: 330,
    padding: Styles.values.spacingLarge,
    justifyContent: 'center',
  }),
  title: RX.Styles.createTextStyle({
    top: -10,
    fontSize: 36,
    fontWeight: 'bold',
    // marginBottom: Styles.values.spacing / 4,
    maxWidth: 250,
  }),
  description: RX.Styles.createTextStyle({
    fontSize: 12,
    maxWidth: 200,
  }),
}

interface PlanCardProps {
  style?: any,
  plan: PlanCardPlan,
  onPress?: () => void,
}

const PlanCard = ({ style, plan, onPress }: PlanCardProps) => {
  const theme = useTheme()

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    borderColor: theme.colors.borderLight,
    backgroundColor: theme.colors.cardBg,
  }, false), [theme.colors.borderLight])

  const _textStyle = useMemo(() => RX.Styles.createTextStyle({
    color: plan.thumbnailImage ? theme.colors.textLight : theme.colors.text,
  }, false), [
    theme.colors.textLight,
    theme.colors.text,
    !!plan.thumbnailImage,
  ])

  const _overlayStyle = useMemo(() => RX.Styles.createViewStyle({
    ...Styles.values.absolutelyExtended,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }, false), [])

  const _thumbImageStyle = useMemo(() => RX.Styles.createImageStyle({
    ...Styles.values.absolutelyExtended
  }, false), [])

  return (
    <HoverView
      key={plan.id}
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
      onPress={onPress}
      onRenderChild={isHovering => (
        <>
          {
            plan.thumbnailImage &&
            <Image
              source={plan.thumbnailImage.url}
              resizeMode={'cover'}
              style={_thumbImageStyle}
            />
          }

          {
            isHovering &&
            <RX.View
              style={_overlayStyle}
            />
          }
          <Text
            translations={plan.name || []}
            style={[_styles.title, _textStyle]}
          />
          <Text
            translations={plan.description || []}
            style={[_styles.description, _textStyle]}
          />
        </>
      )}
    />
  )
}

export const PlanCardFragments = {
  plan: gql`
    fragment PlanCardPlan on Plan {
      name { text locale }
      description { text locale }
      thumbnailImage { url }
      id
    }
  `
}

export default PlanCard
