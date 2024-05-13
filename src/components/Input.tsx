import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = ({placeholder, infoText, onChangeText, value, type}) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          secureTextEntry={type == 'password'}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={'black'}
        />
      </View>
      <Text style={styles.infoText}>{infoText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
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

export default Input;
