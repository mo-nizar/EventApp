import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({placeholder, infoText, options, value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={options}
        itemKey={value}
        key={value}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{value ?? placeholder}</Text>
          <Image
            source={require('../assets/icon/down-arrow.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </RNPickerSelect>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  labelWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth:1,
    paddingBottom:10,
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

export default Dropdown;
