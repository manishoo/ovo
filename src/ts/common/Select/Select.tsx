/*
 * Select.tsx
 * Copyright: Ouranos Studio 2019
 */

import { SelectPopup, showSelectDialog } from 'common/Select/components/SelectDialog'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'


const POPUP_ID = 'Select'

export interface Option {
  value: any,
  text: any,
}

interface SelectProps {
  style?: any,
  value?: string,
  options: Option[],
  onChange: (value: any) => void,
  label?: string
}

export default class Select extends RX.Component<SelectProps> {
  private _mountedButton: any
  // @ts-ignore
  private _popupDisplayed: boolean = false

  private _showPopup = () => {
    let popupOptions: RX.Types.PopupOptions = {
      getAnchor: () => {
        return this._mountedButton
      },
      renderPopup: (anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number) => {
        return (
          <SelectPopup
            anchorPosition={anchorPosition}
            anchorOffset={anchorOffset}
            popupWidth={popupWidth}
            popupHeight={popupHeight}
            value={this.props.value}
            onOptionSelect={(option => {
              this.props.onChange(option.value)
              this._popupDisplayed = false
              RX.Popup.dismissAll()
            })}
            options={this.props.options}
          />
        )
      },
      positionPriorities: ['bottom', 'left', 'right', 'top'],
      useInnerPositioning: false,
      onDismiss: () => {
        this._popupDisplayed = false
      }
    }

    RX.Popup.show(popupOptions, POPUP_ID)
    this._popupDisplayed = true
  }

  render() {
    const { style, label } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => [
          !!label && <RX.Text style={[styles.label, { color: theme.colors.labelInput }]}>{label}</RX.Text>,
          <RX.View
            style={[styles.selectContainer, { backgroundColor: theme.colors.textInputBg }, style]}
            onPress={this._handleOnPress}
            activeOpacity={0.4}
            ref={ref => this._mountedButton = ref}
          >
            <Text>{this.props.options.find(p => p.value === this.props.value)!.text}</Text>
          </RX.View>
        ]}
      </ThemeContext.Consumer>
    )
  }

  private _handleOnPress = () => {
    if (RX.Platform.getType() === 'web') {
      this._showPopup()
    } else {
      showSelectDialog({
        onOptionSelect: (option => this.props.onChange(option.value)),
        value: this.props.value,
        options: this.props.options,
      })
    }
  }
}

const styles = {
  selectContainer: RX.Styles.createViewStyle({
    padding: 8,
    borderRadius: 5,
    cursor: 'pointer',
    marginBottom: Styles.values.spacing
  }),

  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
}
