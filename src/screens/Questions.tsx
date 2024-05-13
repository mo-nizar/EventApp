import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import api from '../services/api';
import {COLORS} from '../constants';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import Button from '../components/Button';
import Screen from '../layouts/Screen';

const Questions = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const [values, SetValues] = useState({
    EventId: 1,
  });

  const handleOnSubmit = async () => {
    setIsLoading(true);
    if (!values.AskedBy || !values.SpeakerName || !values.QuestionDetail) {
      Alert.alert('Term and Condition', 'Please agree terms and condtitions');
      return;
    }

    try {
      const {data} = await api.post('/AskQuestion', null, {
        params: {
          ...values,
        },
      });

      if (data.Status) {
        Alert.alert('Success');
        SetValues({
          ...values,
          AskedBy: null,
          SpeakerName: null,
          QuestionDetail: null,
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Failed', 'Something went wrong');

    } finally {
      setIsLoading(false);
    }
  };

  const InputsFields = [
    {
      label: 'Select Session',
      type: 'dropdown',
      key: 'session',
      options: [
        {label: 'First Session', value: 'First Session', key: 'First Session'},
        {
          label: 'Second Session',
          value: 'Second Session',
          key: 'Second Session',
        },
        {label: 'Third Session', value: 'Third Session', key: 'Third Session'},
      ],
    },
    {
      label: 'Your Name',
      type: 'text',
      key: 'AskedBy',
    },
    {
      label: 'Speaker Name',
      type: 'text',
      key: 'SpeakerName',
    },
    {
      label: 'Ask Question',
      type: 'question',
      key: 'QuestionDetail',
    },
  ];

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>
      <Text style={styles.agenda}>ASK QUESTION</Text>

      <View style={styles.greyBorder} />

      <View style={styles.eventsConatiner}>
        {InputsFields.map((obj, idx) =>
          obj.type === 'dropdown' ? (
            <Dropdown
              key={idx}
              placeholder={obj.label}
              infoText={''}
              options={obj.options}
              value={values[obj.key] ?? null}
              onValueChange={val => SetValues({...values, [obj.key]: val})}
            />
          ) : (
            <Input
              key={idx}
              type={obj.type}
              placeholder={obj.label}
              infoText={''}
              onChangeText={val => SetValues({...values, [obj.key]: val})}
              value={values[obj.key] ?? ''}
            />
          ),
        )}

        <Button
          style={styles.button}
          title="Submit"
          onPress={handleOnSubmit}
          isLoading={isLoading}
        />
      </View>
    </Screen>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: COLORS.light,
  },
  logo: {
    alignSelf: 'center',
  },
  venue: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '300',
    color: COLORS.tertiary,
  },
  agenda: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.tertiary,
  },
  greyBorder: {
    backgroundColor: COLORS.grey,
    height: 2,
  },
  eventsConatiner: {
    marginTop: 50,
    flex: 1,
  },
  button: {
    marginTop: 50,
  },
});
