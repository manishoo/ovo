/*
 * FindYourPlan.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import Assistant from '@Common/Assistant/Assistant'
import { Row } from '@Common/Grid/Grid'
import Image from '@Common/Image/Image'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import Page from '@Common/Page'
import PlanCard from '@Common/PlanCard/PlanCard'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { useMe } from '@Models/graphql/me/me'
import LocationStore from '@Services/LocationStore'
import { useGenerateDays } from '@Views/CalendarScreen/operations/CalendarOperation'
import PlansList from '@Views/ProfileScreen/components/PlansList/PlansList'
import addDays from 'date-fns/addDays'
import { useCallback } from 'react'
import RX from 'reactxp'


const _styles = {
  loadingContainer: RX.Styles.createViewStyle({
    ...Styles.values.absolutelyExtended,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  container: RX.Styles.createViewStyle({
    alignItems: 'center',
  }),
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
  planList: RX.Styles.createViewStyle({
    justifyContent: 'center',
  }),
  manualCardStyle: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacing / 2,
    marginTop: Styles.values.spacing,
  }),
  cardStyle: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacing / 2,
  }, false),
  title: RX.Styles.createTextStyle({
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: Styles.values.spacing,
    maxWidth: 500
  }),
  innerContainer: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing * 2,
    justifyContent: 'center',
  })
}

interface FindYourPlanProps {
  style?: any
}

const fromScratchPlan = {
  id: 'scratch',
  thumbnailImage: null,
  name: [{ text: 'From Scratch', locale: AppConfig.locale }],
  description: [{ text: 'Create your own meal plan from scratch', locale: AppConfig.locale }],
}

const generatedPlan = {
  id: 'generated',
  thumbnailImage: { url: Image.source.AIGeneratedPlanCardBG },
  name: [{ text: 'AI Generated Plan', locale: AppConfig.locale }],
  description: [{
    text: 'Start off with an AI generated plan fitting your preferences',
    locale: AppConfig.locale
  }],
}

const FindYourPlan = ({ style }: FindYourPlanProps) => {
  const me = useMe()!
  const [generateDays, { loading }] = useGenerateDays(me.plan)

  const _onFromScratchPress = useCallback(() => {
    LocationStore.navigate({}, Routes.calendar)
  }, [])

  const _onGeneratePress = useCallback(() => {
    const dates = []

    const now = new Date()
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(now, i))
    }

    generateDays({ variables: { dates } })
      .then(() => {
        LocationStore.navigate({}, Routes.calendar)
      })
  }, [])

  return (
    <>
      <Page
        maxWidth={800}
        innermostViewStyle={_styles.container}
      >
        <Assistant
          size={100}
          playful
        />

        <Text
          translate={'FindYourPlan.title'}
          style={_styles.title}
        />

        <Row style={_styles.innerContainer}>
          <PlanCard
            style={_styles.manualCardStyle}
            plan={fromScratchPlan}
            onPress={_onFromScratchPress}
          />
          <PlanCard
            style={_styles.manualCardStyle}
            plan={generatedPlan}
            onPress={_onGeneratePress}
          />
        </Row>

        <Text
          translate={'FindYourPlan.title2'}
          style={_styles.title}
        />

        <PlansList
          style={_styles.planList}
          cardStyle={_styles.cardStyle}
        />

      </Page>

      {
        loading &&
        <RX.View style={_styles.loadingContainer}>
          <LoadingIndicator />
        </RX.View>
      }
    </>
  )
}

export default FindYourPlan
