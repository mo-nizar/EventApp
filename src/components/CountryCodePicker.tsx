/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';

const CountryCodePicker = ({type, placeholder, infoText, onValueChange}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.labelWrapper}>
        <Text style={styles.label}>
          {' '}
          {countryCode ? countryCode : infoText}
        </Text>
        <Image
          source={require('../assets/icon/down-arrow.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
      <Text style={styles.infoText}> {placeholder}</Text>
      <CountryPicker
        lang="en"
        show={show}
        pickerButtonOnPress={item => {
          onValueChange(item.dial_code);
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    color: 'black',
  },
  label: {
    color: 'black',
  },
  labelWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingLeft: 0,
    width: '100%',
  },
  infoText: {
    marginTop: 4,
    color: 'gray',
  },
});
