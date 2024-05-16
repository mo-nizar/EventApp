import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        options={{title: 'Landing', headerShown: false}}>
        {props => <Screens.Landing {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{title: '', headerShown: false}}
      />

      <Stack.Screen
        name="AgendaPage"
        component={Screens.Agenda}
        options={{title: ''}}
      />
      <Stack.Screen
        name="QuestionsPage"
        component={Screens.Questions}
        options={{title: ''}}
      />
      <Stack.Screen
        name="SpeakersPage"
        component={Screens.Speakers}
        options={{title: ''}}
      />
      <Stack.Screen
        name="BadgePage"
        component={Screens.Badge}
        options={{title: ''}}
      />
      <Stack.Screen
        name="SpeakerDetails"
        component={Screens.SpeakerDetails}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
