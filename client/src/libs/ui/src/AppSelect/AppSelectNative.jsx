import * as React from 'react'
import ModalSelector from 'react-native-modal-selector'
import PickerModal from 'react-native-picker-modal-view'
import { AppInput } from '../AppInput/AppInput'
import { Typography } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles'
import { IModalListInDto } from 'react-native-picker-modal-view/dist/Interfaces'
import { AppBottomSheetTouchable } from '../AppBottomSheetTouchable/AppBottomSheetTouchable'
import { isEmpty } from 'lodash'
import { useTranslations } from '../useTranslations'
import { AppSelectProps } from './AppSelect'
import { View } from 'react-native'
import { AppSelectListItem } from './components/AppSelectListItem'
import { AppSelectSearchItem } from './components/AppSelectSearchItem'
import { AppSelectItem } from './AppSelect.interface'
// import { useEffect, useState } from 'react'

const ITEMS_THRESHOLD = 20
const cache: any = new Map()
export interface AppSelectNativeProps<T> extends AppSelectProps<T> {}

export function AppSelectNative<T> ({
  items: _items,
  keyExtractor,
  value,
  children,
  style,
  filter,
  placeholder,
  listItem: ListItem = AppSelectListItem,
  searchItem: SearchItem = AppSelectSearchItem,
  onChange
}: AppSelectNativeProps<T>) {
  let items = _items.filter(i => (filter ? filter(i) : true)),
    label: string = ''
  const { translate } = useTranslations()

  if (!isEmpty(items) && items.length >= ITEMS_THRESHOLD) cache['items'] = items
  if (!isEmpty(value)) cache['value'] = value

  items = cache['items']

  return items && items.length >= ITEMS_THRESHOLD ? (
    <PickerModal
      renderSelectView={(_, __, showModal) => (
        <AppBottomSheetTouchable onPress={showModal} style={style}>
          {children}
          {!children && (
            <AppInput
              icon='chevron-down'
              iconPosition='right'
              editable={false}
              value={label}
              placeholder={placeholder}
            />
          )}
        </AppBottomSheetTouchable>
      )}
      renderListItem={(current, item) => {
        const key = keyExtractor((item as unknown) as AppSelectItem<T>)
        current = cache['value']

        return (
          <ListItem
            key={key}
            item={(item as unknown) as AppSelectItem<T>}
            selected={current.Value === item.Value}
          />
        )
      }}
      renderSearch={(onClose, onBack) => (
        <SearchItem onClose={onClose} onBack={onBack} title={placeholder} />
      )}
      items={(items as unknown) as Array<IModalListInDto<object>>}
      showAlphabeticalIndex={false}
      autoGenerateAlphabeticalIndex={true}
      alphabeticalIndexChars={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')}
      showToTopButton={false}
      sortingLanguage='en'
      onSelected={item => {
        const flag =
          item && item.Value && item.Value['flag'] ? item.Value['flag'] : ''
        cache['label'] = `${flag}  ${item?.Name || ''}`
        label = cache['label']
        const i = (item as unknown) as AppSelectItem<T>

        if (onChange) {
          onChange(i)
        }

        return item
      }}
      selected={(value as unknown) as IModalListInDto<object>}
      onClosed={() => {
        /* noop */
      }}
      onEndReached={() => {
        /* noop */
      }}
    />
  ) : (
    <ModalSelector
      data={items}
      keyExtractor={keyExtractor}
      onChange={item => {
        if (item.value && onChange) {
          onChange(item.value)
        }
      }}
      // onModalClose={() => { if ( item.value ) { onBlur(item.value); } }} // TODO: removed as per API, no item returned onModalClose event
      cancelText={translate('label.cancel')}
      optionTextStyle={{ ...Typography.bodyDefault }}
      selectedItemTextStyle={{ fontFamily: Typography.families.bold }}
      cancelTextStyle={{ ...Typography.bodyDefault, height: 35 }}
      backdropPressToClose={true}
      animationType='fade'
      overlayStyle={{
        flex: 1,
        paddingVertical: 100,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <View>
        {children && <View>{children}</View>}
        {!children && (
          <AppInput
            icon='chevron-down'
            iconPosition='right'
            editable={false}
            value={label}
            placeholder={placeholder}
          />
        )}
      </View>
    </ModalSelector>
  )
}
