import React from 'react';
import { animated } from 'react-spring/native';
import { ViewProps, View } from 'react-native';

export const AppAnimatedView = animated<React.FC<ViewProps>>(View as any);