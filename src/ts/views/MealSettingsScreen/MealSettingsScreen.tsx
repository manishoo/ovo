/*
 * MealSettingsScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { MealAvailableTime, MealSize } from '@Models/global-types'
import { MealSettingsMeal } from '@Views/MealSettingsScreen/types/MealSettingsMeal'
import gql from 'graphql-tag'
import RX from 'reactxp'


interface MealSettingsScreenProps {
  style?: any,
  meal?: MealSettingsMeal,
  onSubmit: (meal: MealSettingsMeal) => void,
}

interface MealSettingsScreenState {
  meal: MealSettingsMeal
}

const MODAL_ID = 'mealSettingsModal'

export default class MealSettingsScreen extends RX.Component<MealSettingsScreenProps, MealSettingsScreenState> {
  static fragments = {
    mealSettingsMeal: gql`
      fragment MealSettingsMeal on UserMeal {
        id
        availableTime
        size
        cook
        time
        name
      }
    `
  }

  constructor(props) {
    super(props)

    this.state = {
      meal: props.meal || {
        availableTime: MealAvailableTime.someTime,
        size: MealSize.normal,
        cook: true,
        id: String(Math.random()),
        name: translate(translate.keys.Snack),
        time: '09:00', //FIXME use now!
      }
    }
  }

  static showModal = (props: MealSettingsScreenProps) => (
    RX.Modal.show(
      <Modal
        modalId={MODAL_ID}
        fullWidth
        fullHeight
      >
        <MealSettingsScreen
          {...props}
        />
      </Modal>,
      MODAL_ID,
    )
  )

  render() {
    const { meal } = this.state

    return (
      <RX.View style={[styles.container]}>
        <Navbar
          inModal
          onBackPress={() => Modal.dismissAnimated(MODAL_ID)}
          title={translate(translate.keys.editMealSettings)}
        >
          <Text
            translate={translate.keys.Save}
            onPress={() => Modal.dismissAnimated(MODAL_ID).then(() => this.props.onSubmit(meal))}
          />
        </Navbar>

        <RX.View style={styles.innerContainer}>
          <Input
            value={meal.name}
            label={translate(translate.keys.Name)}
            onChangeText={name => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                name,
              }
            }))}
          />

          <Select
            label={translate(translate.keys.mealSize)}
            value={meal.size}
            options={[
              ...Object.keys(MealSize).map(key => ({
                value: MealSize[key],
                text: <Text translate={key} />,
              }))
            ]}
            onChange={size => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                size,
              }
            }))}
            style={{
              minWidth: 100,
              [Styles.values.marginEnd]: Styles.values.spacing / 2,
            }}
          />

          <Select
            label={translate(translate.keys.availableTime)}
            value={meal.availableTime}
            options={[
              ...Object.keys(MealAvailableTime).map(key => ({
                value: MealAvailableTime[key],
                text: <Text translate={key} />,
              }))
            ]}
            onChange={availableTime => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                availableTime,
              }
            }))}
            style={{
              minWidth: 100,
              [Styles.values.marginEnd]: Styles.values.spacing / 2,
            }}
          />
        </RX.View>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
  }),
  innerContainer: RX.Styles.createViewStyle({})
}
