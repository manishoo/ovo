/*
 * RecipePreview.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import { SelectFoodQuery_recipes_recipes } from 'common/FoodDialog/types/SelectFoodQuery'
import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import { translate } from 'common/LocalizedText/LocalizedText'
import Modal from 'common/Modal/Modal'
import { RecipeCardRecipe } from 'common/RecipesList/components/RecipeCard/types/RecipeCardRecipe'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'


const MODAL_ID = 'RecipePreview'
const TEXT_HEADING_WIDTH = 200

interface RecipePreviewProps {
  style?: any,
  onDismiss: () => any,
  inputRef: (ref: any) => any,
  serving?: number,
  recipe: RecipeCardRecipe,
  onSubmit: (recipe: SelectFoodQuery_recipes_recipes, serving: number) => void,
  height: number
}

interface RecipePreviewState {
  serving: number,
}

export default class RecipePreview extends RX.Component<RecipePreviewProps, RecipePreviewState> {
  constructor(props: RecipePreviewProps) {
    super(props)

    this.state = {
      serving: this.props.serving || 1,
    }
  }

  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.previewContainer, style]}
          >
            {this._renderContent(theme)}

            <RX.View
              onPress={this._dismiss}
              style={styles.cancelSelectedMealContainer}
            >
              <Text translate style={[styles.cancelText, { color: theme.colors.primary }]}>Cancel</Text>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onSubmit = (recipe: SelectFoodQuery_recipes_recipes) => () => {
    this.props.onSubmit(recipe, this.state.serving)
    this.props.onDismiss()
  }

  private _renderContent = (theme: Theme) => {
    const { inputRef, recipe } = this.props

    return [
      <RX.View
        style={styles.firstRow}
      >
        <Image
          source={recipe.thumbnail ? recipe.thumbnail.url : ''}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <RX.View>
          <RX.View
            style={styles.textHeadingContainer}
          >
            <Text
              style={styles.bigTitle}
              translations={recipe.title}
            />
          </RX.View>
        </RX.View>
      </RX.View>,
      <RX.View
        style={styles.secondRow}
      >
        <RX.View
          style={styles.flex1}
        >
          <Input
            autoFocus
            inputRef={inputRef}
            value={String(this.state.serving)}
            onChange={(amount: string) => this.setState({ serving: Number(amount) })}
            label={translate('Amount')}
            keyboardType={'number-pad'}
            style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
          />
        </RX.View>

        {/*<RX.View
          style={styles.chartContainer}
        >
          <RX.Text
            style={[styles.chartTextContainer, { color: theme.colors.subtitle }]}
          >MacroNutrients Chart</RX.Text>
        </RX.View>*/}
      </RX.View>,
      <FilledButton
        label={translate('AddIngredient')}
        onPress={this._onSubmit(recipe)}
        containerStyle={styles.addToMeal}
      />
    ]
  }

  private _dismiss = () => {
    this.props.onDismiss()
  }
}

export function showRecipePreviewModal(props: RecipePreviewProps) {
  RX.Modal.show(
    <Modal
      modalId={MODAL_ID}
      modalWidth={500}
      modalHeight={500}
    >
      <RX.View
        style={[
          {
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 8,
          }
        ]}
      >
        <RecipePreview
          {...props}
          style={{
            position: 'absolute',
            top: Styles.values.spacing * 2,
            left: Styles.values.spacing * 2,
            right: Styles.values.spacing * 2,
          }}
          onDismiss={() => Modal.dismissAnimated(MODAL_ID)}
        />
      </RX.View>
    </Modal>,
    MODAL_ID
  )
}

const styles = {
  previewContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // padding: Styles.values.spacing,
    // paddingTop: 70,
  }),
  cancelSelectedMealContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -16,
    top: -16,
    // width: 50,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Styles.values.spacing,
    cursor: 'pointer',
  }),
  cancelText: RX.Styles.createTextInputStyle({
    fontWeight: 'bold',
  }),
  firstRow: RX.Styles.createViewStyle({
    flexDirection: 'row',
    paddingTop: 0,
  }),
  textHeadingContainer: RX.Styles.createViewStyle({
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    [Styles.values.marginEnd]: 50
  }),
  bigTitle: RX.Styles.createTextStyle({
    fontSize: 25,
    width: TEXT_HEADING_WIDTH,
    // wordBreak: 'break-word',
    top: 2
  }),
  smallTitle: RX.Styles.createTextStyle({
    color: 'red',
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: 12,
  }),
  secondRow: RX.Styles.createViewStyle({
    // flexDirection: 'row',
    // alignItems: 'flex-end',
  }),
  flex1: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
  }),
  chartContainer: RX.Styles.createViewStyle({
    flex: 1,
    borderColor: '#eee',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderRadius: 10,
    marginLeft: 20,
  }),
  chartTextContainer: RX.Styles.createTextStyle({
    fontSize: 12,
    width: 100,
    textAlign: 'center',
  }),
  previewStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 20,
    backgroundColor: '#eee'
  }),
  addToMeal: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
    flex: 1,
  }),
  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
  imageStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: Styles.values.spacing,
    [Styles.values.marginEnd]: Styles.values.spacing,
  }),
  row: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  })
}
