import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants';

const Button = ({title, onPress, style, isLoading = false}) => {
  return (
    <TouchableOpacity style={[styles.button(isLoading), style]} onPress={onPress} disabled={isLoading}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:(isLoading) => ({
    backgroundColor: isLoading ? COLORS.grey : COLORS.primary, // Set the background color to blue
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  }),
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
