/*
 * PlanForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import { Image as ImageType } from '@Common/Image/types/Image'
import IntlInput from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Translation } from '@Models/common'
import { PlanInput } from '@Models/global-types'
import trimTypeName from '@Utils/trim-type-name'
import { PlanEditPlan } from '@Views/CalendarScreen/components/PlanEdit/types/PlanEditPlan'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'
import FilePicker from 'src/ts/modules/FilePicker/index.web'
import ImageSource from 'src/ts/modules/images/index.web'


const PLAN_CARD_HEIGHT = 220

const _styles = {
  container: RX.Styles.createViewStyle({
    minWidth: 330,
    alignSelf: 'flex-start'
  }),
  imageInput: RX.Styles.createViewStyle({
    height: PLAN_CARD_HEIGHT,
    justifyContent: 'center'
  }),
}

interface PlanFormProps {
  style?: any,
  fieldErrors: any,
  submitDebounce?: number,
  onChange: (planInput: PlanInput) => void,
  plan: PlanEditPlan
}

const PlanImageInput = ({ image, onImageChange, style }: { image: ImageType | null, onImageChange: (image: any, thumbnail: any) => void, style?: any }) => {
  const theme = useTheme()
  const [thumbnail, setThumbnail] = useState()

  const _borderedStyle = useMemo(() => RX.Styles.createViewStyle({
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 10,
  }, false), [theme.colors.primary])

  const _innerViewStyle = useMemo(() => RX.Styles.createViewStyle({
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: Styles.values.spacing / 2,
    alignSelf: 'center',
  }, false), [])

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center'
  }, false), [])

  const _onClearImage = useCallback(() => onImageChange(null, null), [onImageChange])

  return (
    <RX.View
      style={[_containerStyle, style]}
    >
      <FilePicker
        onImageChange={onImageChange}
        onImagePreviewChange={setThumbnail}
        withThumbnail
        compress
      >
        <RX.View
          style={[_borderedStyle, _styles.imageInput]}
        >
          {
            (!!image || !!thumbnail)
            && <Image
              source={thumbnail || image!.url}
              resizeMode={'cover'}
              style={_styles.imageInput}
            />
          }

          {
            !(!!image || !!thumbnail) && <RX.View
              style={_innerViewStyle}
              ignorePointerEvents
            >
              <Image
                source={Image.source.Camera}
                style={{
                  width: 23,
                  height: 20,
                }}
              />
            </RX.View>
          }
        </RX.View>
      </FilePicker>

      {
        (!!image || !!thumbnail) &&
        <RX.View
          style={_innerViewStyle}
          ignorePointerEvents
        >
          <RX.View
            onPress={_onClearImage}
            style={{ cursor: 'pointer' }}
          >
            <Image
              source={ImageSource.RemoveIconWhite}
              style={{
                width: 23,
                height: 23,
              }}
            />
          </RX.View>
        </RX.View>
      }
    </RX.View>
  )
}

const PlanForm = ({ style, fieldErrors, submitDebounce, onChange, plan }: PlanFormProps) => {
  const [name, setName] = useState<Translation[]>(plan.name || [])
  const [description, setDescription] = useState<Translation[]>(plan.description || [])
  const [image, setImage] = useState<any>()

  const count = useRef(0)

  useEffect(debounce(() => {
    count.current++

    if (count.current > 1) {
      onChange({
        name: name.map(trimTypeName),
        description: description.map(trimTypeName),
        thumbnailImage: image ? image.thumbnail : undefined,
        coverImage: image ? image.image : undefined,
      })
    }
  }, submitDebounce || 0), [
    name,
    description,
    image,
  ])

  const _onImageChange = useCallback((image: any, thumbnail: any) => {
    setImage({
      image,
      thumbnail,
    })
  }, [])

  const _planImageInputStyle = useMemo(() => RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing,
  }, false), [])

  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >
      <PlanImageInput
        image={plan.coverImage}
        onImageChange={_onImageChange}
        style={_planImageInputStyle}
      />
      <IntlInput
        translations={name}
        onTranslationsChange={useCallback((translations) => setName(translations), [])}
        label={translate('Name')}
        errorMessage={fieldErrors['name']}
      />
      <IntlInput
        translations={description}
        onTranslationsChange={useCallback((translations) => setDescription(translations), [])}
        label={translate('description')}
        errorMessage={fieldErrors['description']}
      />
    </RX.View>
  )
}

export default PlanForm
