/* AppCarousel slide
=============================== */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { useSpring } from 'react-spring/native';
import { Typography, Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { useAppCarouselSlide } from 'app/hooks/useAppCarouselSlide';
import { AppAnimatedView } from '../AppAnimatedView';
import { AppText } from '../AppText';

export const AppCarouselSlide = ({
  active,
  title,
  description,
  image,
  onFocus = () => {},
  onBlur = () => {},
}) => {
  // vars

  const { focus } = useAppCarouselSlide(active);
	const [layout, setLayout] = useState((vh(100) > 667 && vh(100) / vw(100) > 16 / 9) ? 'large' : 'small');

  // hooks

  useEffect(() => {
    if (focus) {
      onFocus();
    } else {
      onBlur();
    }
  }, [focus]);
	
  // styles
		const [contentAnim, setContentAnim] = useSpring(() => ({
			config: { tension: 400, friction: 30 },
			 opacity: 0, translateY: 10 ,
		}));

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: Colors.purple,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      marginTop: layout === 'large' ? vh(10) : vh(5),
    },
    content: {
      marginTop: layout === 'large' ? -vw(10) : -vw(14),
			paddingHorizontal: 20,
    },
    title: {
      ...Typography.titleLarge,
      fontSize: layout === 'large' ? 34 : 30,
      lineHeight: layout === 'large' ? 40 : 36,
      color: Colors.white,
      marginBottom: 20,
    },
    description: {
      ...Typography.bodySmall,
      lineHeight: 24,
      color: Colors.white,
      opacity: 0.75,
    },
  });

  // anim


  useEffect(() => {
    setContentAnim({
      opacity: focus ? 1 : 0,
      translateY: focus ? 0 : 10,
    });
  }, [focus]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>{image()}</View>
      <AppAnimatedView
        style={[
          styles.content,
          {
            opacity: contentAnim.opacity as number,
            transform: [{ translateY: contentAnim.translateY }],
          }
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <AppText style={styles.description}>{description}</AppText>
      </AppAnimatedView>
    </View>
  );
};
