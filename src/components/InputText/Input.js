import React from 'react';
import {
  
  TextInput,
} from 'react-native';
import { colors } from '../../styles';
import styles from './style';

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCorrect={false}
      keyboardType={props.type}
      maxLength={props.length}
      multiline={props.multiline || false}
      numberOfLines={props.nooflines}
      returnKeyType={props.returnKeyType}
      selectionColor={colors.ALERT}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default Input;
