import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react';
import { StyleSheet} from 'react-native';

const CheckBox = ({title, onPress}) => {
  return (
    <BouncyCheckbox
      fillColor="#1e9acc"
      unFillColor="#FFFFFF"
      iconStyle={{ borderColor: "#1e9acc" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked: boolean) => onPress(isChecked)}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e9acc', // Set the background color to blue
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckBox;
