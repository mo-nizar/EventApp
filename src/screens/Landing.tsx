import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Input from '../components/Input';
import Screen from '../layouts/Screen';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Dropdown from '../components/Dropdown';
import CountryCodePicker from '../components/CountryCodePicker';
import api from '../services/api';
import {setProfile} from '../store/profileSlice';
import {useDispatch} from 'react-redux';

const Landing = ({navigation}): React.JSX.Element => {
  const InputFields = [
    {
      label: 'Full Name *',
      type: 'text',
      placeholder: 'Enter Full Name',
      key: 'UserName',
    },
    {
      label: 'Email *',
      type: 'text',
      placeholder: 'Enter a valid email',
      key: 'Email',
    },
    {
      label: 'Password *',
      type: 'password',
      placeholder: 'Enter a password',
      key: 'Password',
    },
    {
      label: 'Select Speciality',
      type: 'dropdown',
      placeholder: 'speciality',
      key: 'Speciality',
      options: [
        {label: 'Football', value: 'football', key: 'football'},
        {label: 'Baseball', value: 'baseball', key: 'baseball'},
        {label: 'Hockey', value: 'hockey', key: 'hockey'},
      ],
    },
    {
      label: 'Select Country',
      type: 'country',
      placeholder: 'country',
      key: 'Country',
    },
    {
      label: 'Mobile Number',
      type: 'number',
      placeholder: 'Enter Mobile Number',
      key: 'Mobile',
    },
    {
      label: 'Instagram @',
      type: 'text',
      placeholder: 'Instagram @',
      key: 'InstagramLink',
    },
    {
      label: 'Tik Tok @',
      type: 'text',
      placeholder: 'Tik Tok @',
      key: 'TikTokLink',
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const LoginInputFields = [
    {
      label: 'Email *',
      type: 'text',
      placeholder: 'Enter a valid email',
      key: 'email',
    },
    {
      label: 'Password *',
      type: 'password',
      placeholder: 'Enter a password',
      key: 'password',
    },
  ];

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const {data} = await api.post('/UserLogin', null, {
        params: {
          Email: values.Email,
          Password: values.Password,
        },
      });

      if (data.Status) {
        dispatch(setProfile({...data}));

        navigation.navigate('Root');
      } else {
        throw new Error();
      }
    } catch (err) {
      Alert.alert('Failed', 'Something went wront please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!values.Userconsent) {
      Alert.alert('Term and Condition', 'Please agree terms and condtitions');
      return;
    }
    if (!values.UserName || !values.Email || !values.Password) {
      Alert.alert('Incomplete', 'Please fill all the mandatory details');
      return;
    }
    setIsLoading(true);
    try {
      const {data} = await api.post('/RegisterUser', null, {
        params: {
          ...values,
          Userconsent: values.Userconsent ? 'true' : 'false',
        },
      });

      if (data?.Status) {
        Alert.alert('Registration Successful');
        setRegister(false);
      } else if (data?.Message.includes('Email Exists')) {
        Alert.alert('Email Exists Already.');
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Failed', 'Something went wront please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const [values, SetValues] = useState({});
  const [isRegistration, setRegister] = useState(false);

  return (
    <>
      {isRegistration ? (
        <Screen>
          <>
            <Text style={styles.title}>LDB ME</Text>
            <Text style={styles.desc}>Create Account</Text>
            {InputFields.map((obj, idx) =>
              obj.type === 'dropdown' ? (
                <Dropdown
                  key={idx}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  options={obj.options}
                  value={values[obj.key] ?? null}
                  onValueChange={val => SetValues({...values, [obj.key]: val})}
                />
              ) : obj.type === 'country' ? (
                <CountryCodePicker
                  key={idx}
                  type={obj.type}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  onValueChange={val => SetValues({...values, [obj.key]: val})}
                />
              ) : (
                <Input
                  key={idx}
                  type={obj.type}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  onChangeText={val => SetValues({...values, [obj.key]: val})}
                  value={values[obj.key] ?? ''}
                />
              ),
            )}

            <View style={styles.descriptionWrapper}>
              <CheckBox
                title={''}
                onPress={(isChecked: boolean) =>
                  SetValues({...values, ['Userconsent']: isChecked})
                }
              />
              <Text style={styles.descriptionText}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
              </Text>
            </View>

            <Button
              title="Register"
              onPress={handleRegister}
              isLoading={isLoading}
            />

            <View style={styles.linkWrapper}>
              <TouchableOpacity
                style={styles.touchableLink}
                onPress={() => setRegister(!isRegistration)}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
        </Screen>
      ) : (
        <View style={styles.container}>
          <>
            <Text style={styles.title}>LDB ME</Text>
            <Text style={[styles.desc, styles.loginTitle]}>Login</Text>

            {LoginInputFields.map((obj, idx) =>
              obj.type === 'dropdown' ? (
                <Dropdown
                  key={idx}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  options={obj.options}
                  value={values[obj.key] ?? null}
                  onValueChange={val => SetValues({...values, [obj.key]: val})}
                />
              ) : obj.type === 'country' ? (
                <CountryCodePicker
                  key={idx}
                  type={obj.type}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  onValueChange={val => SetValues({...values, [obj.key]: val})}
                />
              ) : (
                <Input
                  key={idx}
                  type={obj.type}
                  placeholder={obj.label}
                  infoText={obj.placeholder}
                  onChangeText={val => SetValues({...values, [obj.key]: val})}
                  value={values[obj.key] ?? ''}
                />
              ),
            )}

            <Button
              style={styles.button}
              title="Login"
              onPress={handleLogin}
              isLoading={isLoading}
            />

            <View style={styles.linkWrapper}>
              <TouchableOpacity style={styles.touchableLink}>
                <Text style={styles.link}>Forget Password</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touchableLink}
                onPress={() => setRegister(!isRegistration)}>
                <Text style={styles.link}>or Create Account</Text>
              </TouchableOpacity>
            </View>
          </>
        </View>
      )}
    </>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    textAlign: 'center',
  },
  descriptionWrapper: {
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row',
  },
  descriptionText: {
    fontFamily: '',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'justify',
  },
  touchableLink: {
    alignItems: 'center',
    marginTop: 10,
  },
  linkWrapper: {
    marginTop: 20,
  },
  link: {
    fontWeight: '600',
    color: '#1e9acc',
  },
  button: {
    marginTop: 40,
    width: '100%',
  },
  desc: {
    marginTop: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  loginTitle: {
    marginBottom: 60,
  },
});
