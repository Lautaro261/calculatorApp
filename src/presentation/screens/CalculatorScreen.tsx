/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
  } = useCalculator();






  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>

        <Text
        style={globalStyles.mainResult}
        adjustsFontSizeToFit
        numberOfLines={1}
        >{number}</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>console.log('C')} label="C" color={colors.lightGray} blackText={true}/>
        <CalculatorButton onPress={()=>console.log('+/-')} label="+/-" color={colors.lightGray} blackText={true}/>
        <CalculatorButton onPress={()=>console.log('del')} label="del" color={colors.lightGray} blackText={true}/>
        <CalculatorButton onPress={()=>console.log('/')} label="/" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('7')} label="7"  />
        <CalculatorButton onPress={()=>buildNumber('8')} label="8"  />
        <CalculatorButton onPress={()=>buildNumber('9')} label="9"  />
        <CalculatorButton onPress={()=>console.log('x')} label="x" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('4')} label="4"  />
        <CalculatorButton onPress={()=>buildNumber('5')} label="5"  />
        <CalculatorButton onPress={()=>buildNumber('6')} label="6"  />
        <CalculatorButton onPress={()=>console.log('-')} label="-" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('1')} label="1"  />
        <CalculatorButton onPress={()=>buildNumber('2')} label="2"  />
        <CalculatorButton onPress={()=>buildNumber('3')} label="3"  />
        <CalculatorButton onPress={()=>console.log('+')} label="+" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={()=>buildNumber('0')} label="0"  doubleSize={true}/>
        <CalculatorButton onPress={()=>buildNumber('.')} label="."  />
        <CalculatorButton onPress={()=>console.log('=')} label="=" color={colors.orange} />
      </View>
    </View>
  );
};

//const styles = StyleSheet.create({});
