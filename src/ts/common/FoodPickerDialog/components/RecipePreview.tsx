// /*
//  * RecipePreview.tsx
//  * Copyright: Ouranos Studio 2019
//  */
//
// import Styles from '@App/Styles'
// import { Theme } from '@App/Theme'
// import { ThemeContext } from '@App/ThemeContext'
// import FilledButton from '@Common/FilledButton/FilledButton'
// import {
//   FoodPreviewMealItem,
//   FoodPreviewMealItem_item_Recipe
// } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
// import Image from '@Common/Image/Image'
// import InputNumber from '@Common/Input/InputNumber'
// import { translate } from '@Common/LocalizedText/LocalizedText'
// import Modal from '@Common/Modal/Modal'
// import Text from '@Common/Text/Text'
// import RX from 'reactxp'
//
//
// const MODAL_ID = 'RecipePreview'
// const TEXT_HEADING_WIDTH = 200
//
// export interface RecipePreviewRecipe extends FoodPreviewMealItem_item_Recipe {}
// export interface RecipePreviewMealItem extends FoodPreviewMealItem {}
//
// interface RecipePreviewProps {
//   style?: any,
//   onDismiss: () => any,
//   inputRef: (ref: any) => any,
//   serving?: number,
//   recipe: RecipePreviewRecipe,
//   onSubmit: (mealItem: RecipePreviewMealItem) => void,
//   height: number
// }
//
// interface RecipePreviewState {
//   serving: number,
// }
//
// export default class RecipePreview extends RX.Component<RecipePreviewProps, RecipePreviewState> {
//   constructor(props: RecipePreviewProps) {
//     super(props)
//
//     this.state = {
//       serving: this.props.serving || 1,
//     }
//   }
//
//   public render() {
//     const { style } = this.props
//
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <RX.View
//             style={[styles.previewContainer, style]}
//           >
//             {this._renderContent(theme)}
//
//             <RX.View
//               onPress={this._dismiss}
//               style={styles.cancelSelectedMealContainer}
//             >
//               <Text translate style={[styles.cancelText, { color: theme.colors.primary }]}>Cancel</Text>
//             </RX.View>
//           </RX.View>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
//
//   private _onSubmit = (recipe: RecipePreviewRecipe) => () => {
//     this.props.onSubmit(recipe)
//     this.props.onDismiss()
//   }
//
//   private _renderContent = (theme: Theme) => {
//     const { inputRef, recipe } = this.props
//
//     return [
//       <RX.View
//         style={styles.firstRow}
//       >
//         <Image
//           source={recipe.thumbnail ? recipe.thumbnail.url : ''}
//           style={styles.imageStyle}
//           resizeMode={'cover'}
//         />
//         <RX.View>
//           <RX.View
//             style={styles.textHeadingContainer}
//           >
//             <Text
//               style={styles.bigTitle}
//               translations={recipe.title}
//             />
//           </RX.View>
//         </RX.View>
//       </RX.View>,
//       <RX.View
//         style={styles.secondRow}
//       >
//         <RX.View
//           style={styles.flex1}
//         >
//           <InputNumber
//             autoFocus
//             inputRef={inputRef}
//             value={this.state.serving}
//             onChange={serving => this.setState({ serving })}
//             label={translate('Amount')}
//             keyboardType={'number-pad'}
//             style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
//           />
//         </RX.View>
//
//         {/*<RX.View
//           style={styles.chartContainer}
//         >
//           <RX.Text
//             style={[styles.chartTextContainer, { color: theme.colors.subtitle }]}
//           >MacroNutrients Chart</RX.Text>
//         </RX.View>*/}
//       </RX.View>,
//       <FilledButton
//         label={translate('AddIngredient')}
//         onPress={this._onSubmit(recipe)}
//         containerStyle={styles.addToMeal}
//       />
//     ]
//   }
//
//   private _dismiss = () => {
//     this.props.onDismiss()
//   }
// }
//
// export function showRecipePreviewModal(props: RecipePreviewProps) {
//   RX.Modal.show(
//     <Modal
//       modalId={MODAL_ID}
//       modalWidth={500}
//       modalHeight={500}
//     >
//       <RX.View
//         style={[
//           {
//             flex: 1,
//             backgroundColor: '#fff',
//             borderRadius: 8,
//           }
//         ]}
//       >
//         <RecipePreview
//           {...props}
//           style={{
//             position: 'absolute',
//             top: Styles.values.spacing * 2,
//             left: Styles.values.spacing * 2,
//             right: Styles.values.spacing * 2,
//           }}
//           onDismiss={() => Modal.dismissAnimated(MODAL_ID)}
//         />
//       </RX.View>
//     </Modal>,
//     MODAL_ID
//   )
// }
//
// const styles = {
//   previewContainer: RX.Styles.createViewStyle({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     // padding: Styles.values.spacing,
//     // paddingTop: 70,
//   }),
//   cancelSelectedMealContainer: RX.Styles.createViewStyle({
//     position: 'absolute',
//     [Styles.values.end]: -16,
//     top: -16,
//     // width: 50,
//     // height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: Styles.values.spacing,
//     cursor: 'pointer',
//   }),
//   cancelText: RX.Styles.createTextInputStyle({
//     fontWeight: 'bold',
//   }),
//   firstRow: RX.Styles.createViewStyle({
//     flexDirection: 'row',
//     paddingTop: 0,
//   }),
//   textHeadingContainer: RX.Styles.createViewStyle({
//     // flex: 1,
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     [Styles.values.marginEnd]: 50
//   }),
//   bigTitle: RX.Styles.createTextStyle({
//     fontSize: 25,
//     width: TEXT_HEADING_WIDTH,
//     // wordBreak: 'break-word',
//     top: 2
//   }),
//   smallTitle: RX.Styles.createTextStyle({
//     color: 'red',
//   }),
//   subtitle: RX.Styles.createTextStyle({
//     fontSize: 12,
//   }),
//   secondRow: RX.Styles.createViewStyle({
//     // flexDirection: 'row',
//     // alignItems: 'flex-end',
//   }),
//   flex1: RX.Styles.createViewStyle({
//     flex: 1,
//     flexDirection: 'row',
//   }),
//   chartContainer: RX.Styles.createViewStyle({
//     flex: 1,
//     borderColor: '#eee',
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 120,
//     borderRadius: 10,
//     marginLeft: 20,
//   }),
//   chartTextContainer: RX.Styles.createTextStyle({
//     fontSize: 12,
//     width: 100,
//     textAlign: 'center',
//   }),
//   previewStyle: RX.Styles.createImageStyle({
//     width: 80,
//     height: 80,
//     marginRight: 16,
//     borderRadius: 20,
//     backgroundColor: '#eee'
//   }),
//   addToMeal: RX.Styles.createViewStyle({
//     marginTop: Styles.values.spacing,
//     flex: 1,
//   }),
//   label: RX.Styles.createTextStyle({
//     fontWeight: '500',
//     marginBottom: Styles.values.spacing / 2,
//   }),
//   imageStyle: RX.Styles.createImageStyle({
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     backgroundColor: '#ddd',
//     marginBottom: Styles.values.spacing,
//     [Styles.values.marginEnd]: Styles.values.spacing,
//   }),
//   row: RX.Styles.createViewStyle({
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'stretch'
//   })
// }
