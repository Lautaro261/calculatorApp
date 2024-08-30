import React from 'react';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>

        <CalculatorButton label="C" color={colors.lightGray}/>
        <CalculatorButton label="+/-" color={colors.lightGray}/>
        <CalculatorButton label="del" color={colors.lightGray}/>
        <CalculatorButton label="/" color={colors.orange} />

      </View>
    </View>
  );
};

//const styles = StyleSheet.create({});
