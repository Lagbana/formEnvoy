import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  PanResponder,
  Animated,
  Platform,
  ViewStyle,
} from 'react-native';
import { useAnimations } from '../hooks';
import { Typography, Layouts, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { AppAnimatedView } from '../AppAnimatedView/AppAnimatedView';
import { AppIcon } from '../AppIcon';

export interface AppViolatorProps {
  message?: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  onDismiss?: () => void;
  interactive?: boolean;
  style?: ViewStyle;
}

export const AppViolator: React.FC<AppViolatorProps> = (props) => {

  // vars
  const {
    message = '',
    icon,
    backgroundColor = 'purple',
    textColor = 'white',
    onPress,
    onDismiss,
    interactive = true,
    style,
	} = props;
	
  const { animateOne } = useAnimations();
	const [visible, setVisible] = useState(true);
  const translate = new Animated.ValueXY({ x: 0, y: 0 });
  const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: translate.x,
            dy: translate.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -30) {
          setVisible(false);
          if (onDismiss) {
            onDismiss();
          }
        }
        Animated.spring(
          translate, // Auto-multiplexed
          { tension: 200, useNativeDriver: true, toValue: { x: 0, y: 0 } } // Back to zero
        ).start();
      },
    });

  const constrainedY = translate.y.interpolate({
    inputRange: [-100, 0, 10],
    outputRange: [-100, 0, 0],
  });

  const opacity = translate.y.interpolate({
    inputRange: [-40, 0],
    outputRange: [0, 1],
  });

  // styles

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: Platform.OS === 'web' ? 15 : 0,
      paddingBottom: 15,
			justifyContent: 'center',
    },
    violator: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingVertical: 7,
      paddingHorizontal: 12,
      backgroundColor: Colors[backgroundColor],
      ...Layouts.shadowTile,
      borderRadius: 999,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: Colors[textColor],
      ...Typography.labelXsmall,
    },
    icon: {
      color: Colors[textColor],
      marginLeft: -1,
      marginRight: 8,
    },
  });

	// animations
	
	const violatorAnim: any = animateOne({
		from: {
			config: { tension: 500, friction: 30 },
			opacity: 0,
			translateY: -80,
		},
		to: {
			opacity: 1,
			translateY: 0,
			delay: 500,
		}
	});	

  return (
    <View
      style={[styles.container, style]}
      pointerEvents={interactive ? 'box-none' : 'none'}
    >
      {visible && interactive && (
        <Animated.View
          pointerEvents="box-none"
          style={{ opacity, transform: [{ translateY: constrainedY }] }}
          {...panResponder.panHandlers}
        >
          <SafeAreaView />
          <AppAnimatedView
            pointerEvents="box-none"
            style={{
							opacity: violatorAnim.opacity as number,
							transform: [{ translateY: violatorAnim.translateY }],
            }}
          >
            <TouchableOpacity onPress={onPress} style={styles.violator}>
              {!!icon && <AppIcon name={icon} size={16} style={styles.icon} />}
              <Text style={styles.label}>{message}</Text>
            </TouchableOpacity>
          </AppAnimatedView>
        </Animated.View>
      )}
      {visible && !interactive && (
        <View>
          <SafeAreaView />
          <AppAnimatedView
            style={{
              opacity: violatorAnim.opacity as number,
              transform: [{ translateY: violatorAnim.translateY }],
            }}
          >
            <View style={styles.violator}>
              {!!icon && <AppIcon name={icon} size={16} style={styles.icon} />}
              <Text style={styles.label}>{message}</Text>
            </View>
          </AppAnimatedView>
        </View>
      )}
    </View>
  );
};
