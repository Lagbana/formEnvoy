/* Custom text input with icon
=============================== */

import React, { useEffect, forwardRef } from 'react'
import {
  TextInput,
  Text,
  StyleSheet,
  Platform,
  TextInputProps
} from 'react-native'
import { useSpring } from 'react-spring/native'
import { BaseInput, BaseInputProps } from './components/BaseInput'
import { AppPill } from '../AppPill'
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles'
import { AppAnimatedView } from '../AppAnimatedView/AppAnimatedView'
import { AppIcon } from '../AppIcon'

export interface AppInputProps
  extends Omit<TextInputProps, 'style'>,
    BaseInputProps {
  type?: 'text' | 'name' | 'email' | 'phone' | 'password' | 'number' | 'address'
  error?: string
  disabled?: boolean
  numLines?: number
  beforeComponent?: React.ReactNode
  afterComponent?: React.ReactNode
}

// TODO: [COL-114] fix hardware keyboard input type not compatible when type specified
export const AppInput = forwardRef<TextInput, AppInputProps>(
  (
    {
      type,
      icon,
      iconPosition = 'left',
      value,
      error,
      placeholder,
      editable = true,
      disabled,
      returnKeyType = 'done',
      keyboardType = 'default',
      textContentType = 'none',
      autoCompleteType = 'off',
      autoCapitalize = 'sentences',
      numLines = 1,
      beforeComponent,
      afterComponent,
      ...props
    },
    ref
  ) => {
    const styles = StyleSheet.create({
      baseInput: {
        display: 'flex',
        alignItems: 'center', // ios = flex-end?
        flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        zIndex: 2
      },
      textInput: {
        fontSize: Typography.sizes.input,
        color: disabled ? Colors.gray : Colors.grayDark,
        fontFamily: Typography.families.medium,
        flex: 1,
        minHeight: numLines * 24,
        padding: 0
      },
      error: {
        marginRight: 'auto',
        zIndex: 1
      },
      placeholder: {
        color: '#c7c7cc'
      }
    })

    // base input props

    const inputProps: TextInputProps = {
      returnKeyType,
      keyboardType,
      textContentType,
      autoCompleteType,
      autoCapitalize,
      placeholder,
      value,
      multiline: Boolean(numLines > 1)
    }

    // shorthand types

    if (type === 'name') {
      inputProps.autoCompleteType = 'name'
      inputProps.textContentType = 'name'
    }

    if (type === 'email') {
      inputProps.keyboardType = 'email-address'
      inputProps.autoCompleteType = 'email'
      inputProps.textContentType = 'emailAddress'
      inputProps.autoCapitalize = 'none'
    }

    if (type === 'phone') {
      inputProps.keyboardType = 'phone-pad'
      inputProps.autoCompleteType = 'tel'
      inputProps.textContentType = 'telephoneNumber'
    }

    if (type === 'number') {
      inputProps.keyboardType = 'number-pad'
    }

    if (type === 'password') {
      inputProps.autoCompleteType = 'password'
      inputProps.textContentType = 'password'
    }

    if (type === 'address') {
      inputProps.autoCompleteType = 'street-address'
      inputProps.textContentType = 'fullStreetAddress'
    }

    // web

    if (Platform.OS === 'web') {
      if (inputProps.autoCompleteType) {
        // inputProps.autoComplete = inputProps.autoCompleteType; // TODO: fix this enable autocomplete for web
        delete inputProps.autoCompleteType
      }
    }

    // password or editable?

    const isPassword = type === 'password'
    const isEditable = editable !== false && !disabled

    // anim

    const [errorAnim, setErrorAnim] = useSpring(() => ({
      config: { tension: 300, friction: 30 },
      opacity: 0
    }))

    useEffect(() => {
      setErrorAnim({
        opacity: error ? 1 : 0
      })
    }, [error])

    return (
      <>
        <BaseInput
          style={{ ...styles.baseInput, ...props.style }}
          icon={icon}
          iconPosition={iconPosition}
        >
          {beforeComponent}
          {!isEditable && (
            <>
              <Text
                style={[
                  styles.textInput,
                  placeholder && !value ? styles.placeholder : {}
                ]}
                numberOfLines={numLines}
              >
                {placeholder && !value ? placeholder : value}
              </Text>
              {disabled && (
                <AppIcon
                  name='lock'
                  size={18}
                  color={styles.placeholder.color}
                />
              )}
            </>
          )}
          {isEditable && (
            <TextInput
              ref={ref}
              {...inputProps}
              {...props}
              style={styles.textInput}
              enablesReturnKeyAutomatically={true}
              secureTextEntry={isPassword}
              placeholderTextColor={styles.placeholder.color}
              numberOfLines={numLines}
            />
          )}
          {afterComponent}
        </BaseInput>
        <AppAnimatedView style={{opacity:errorAnim.opacity as number}}>
          {error && (
            <AppPill style={styles.error} icon='x' color='red' label={error} />
          )}
        </AppAnimatedView>
      </>
    )
  }
)
