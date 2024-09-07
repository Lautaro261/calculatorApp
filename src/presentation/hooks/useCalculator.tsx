import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clean = () => {
    return setNumber('0');
  };



  //Borrar el ultimo numero
  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if(number.includes('-')){
      currentSign = '-';
      temporalNumber = number.substring(1); // si tengo -88 va a quitar el "-"  entonces temporalNumber = 88
    }

  if(temporalNumber.length > 1){
    return setNumber( currentSign + temporalNumber.slice(0, -1));
  }

  setNumber('0');

  };


  // Cambiar el signo
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };



  const buildNumber = (numberString: string) => {
    //
    if (number.includes('.') && numberString === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      //Validacion:  Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //Validacion: si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //Validacion: si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //Validacion: Evitar el 00000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  return {
    //Properties
    number,

    //Methods
    buildNumber,
    clean,
    toggleSign,
    deleteOperation,
  };
};
