import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';
import {colors} from '../../styles/index';
import styles from './style';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.action} style={styles.btn_style}>
      <Text style={styles.text_style}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
