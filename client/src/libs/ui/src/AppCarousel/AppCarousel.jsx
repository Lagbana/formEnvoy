import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from 'libs/ui/src/WebButton/node_modules/libs/ui/src/WebLoading/node_modules/colibri/styles';
import { times } from 'lodash';

export interface AppCarouselProps {
	onChange?: (index: number) => void;
	itemsPerInterval?: number;
	items: any[];
}

export const AppCarousel: React.FC<AppCarouselProps> = ({ onChange, itemsPerInterval = 1, items }) => {

  const [interval, setInterval] = useState<number|undefined>(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    },
    bullets: {
      position: 'absolute',
      bottom: 60,
      left: 20,
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 5,
    },
    bullet: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: Colors.white,
      marginRight: 12,
      opacity: 0.5,
    },
    activeBullet: {
      opacity: 1,
      transform: [{ scale: 1.4 }],
    },
    slide: {
      flexBasis: '100%',
      flex: 1,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
  });

  const init = (w: number) => {
		
		setWidth(w);

		const totalItems = items.length;
		
		setIntervals(Math.ceil(totalItems / itemsPerInterval));
		
	};
	

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  const getCarouselItem = (index: number) => (
    <View key={index} style={styles.slide}>
      {items[index]}
    </View>
  );

	const bullets = times(intervals).map(
		(index) => (
			<View
        key={index}
        style={[styles.bullet, interval === index + 1 ? styles.activeBullet : {}]}
      />
		)
	);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
					const index = getInterval(data.nativeEvent.contentOffset.x);
					setInterval(index);
					
					if (index && onChange) {
						onChange(index);
					}

        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item, index) => getCarouselItem(index))}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};
