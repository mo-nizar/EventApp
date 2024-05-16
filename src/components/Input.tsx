import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Input = ({placeholder, infoText, onChangeText, value, type}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          secureTextEntry={type == 'password' && !showPass}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={'black'}
          autoCapitalize={'none'}
        />
        {type == 'password' && (
          <TouchableOpacity
            style={styles.passTouchable}
            onPress={() => setShowPass(!showPass)}>
            {showPass ? (
              <Image
                style={styles.image}
                source={require('../assets/icon/eye-open.png')}
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../assets/icon/eye-close.png')}
              />
            )}
          </TouchableOpacity>
        )}
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
  passTouchable: {
    position: 'absolute',
    right: 0,
    paddingVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default Input;
