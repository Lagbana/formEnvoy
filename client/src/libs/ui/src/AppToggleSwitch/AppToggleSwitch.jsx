import React from 'react'
import { SwitchToggle } from 'dooboo-ui'

import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles'

export const AppToggleSwitch = ({ enabled = false, ...props }) => {
  const styles = {
    container: {
      width: 50,
      height: 26,
      padding: 4,
      borderRadius: 13
    },
    circle: {
      width: 18,
      height: 18,
      borderRadius: 9
    }
  }

  return (
    <SwitchToggle
      duration={200}
      switchOn={enabled}
      containerStyle={styles.container}
      circleStyle={styles.circle}
      circleColorOn={Colors.white}
      backgroundColorOff='#e0e0e0'
      backgroundColorOn={Colors.green}
      onPress={() => {}}
      {...props}
    />
  )
}
