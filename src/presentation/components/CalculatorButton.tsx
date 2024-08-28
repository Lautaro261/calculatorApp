import React from 'react';
import {Text, Pressable} from 'react-native';
import { globalStyles } from '../../config/theme/app-theme';

export const CalculatorButton = () => {
  return (
    <Pressable style={globalStyles.button}>
    <Text style={globalStyles.buttonText}>1+</Text>
  </Pressable>
  );
};


