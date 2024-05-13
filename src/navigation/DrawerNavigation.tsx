import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from '../screens';
import {COLORS} from '../constants';

const cards = [
  {
    title: 'Home',
    icon: require('../assets/icon/agenda.png'),
    color: '#74b3ce',
    route: 'Home',
    component: Screens.Home,
  },
  {
    title: 'Agenda',
    icon: require('../assets/icon/agenda.png'),
    color: '#74b3ce',
    route: 'Agenda',
    component: Screens.Agenda,
  },
  {
    title: 'Speakers',
    icon: require('../assets/icon/speakers.png'),
    color: '#26619c',
    route: 'Speakers',
    component: Screens.Speakers,
  },
  {
    title: 'Badge',
    icon: require('../assets/icon/badge.png'),
    color: '#1d4646',
    route: 'Badge',
    component: Screens.Badge,
  },
  {
    title: 'Venue',
    icon: require('../assets/icon/venue.png'),
    color: '#3a7ca5',
    route: 'Venue',
    component: Screens.Agenda,
  },
  {
    title: 'Brand Innovation',
    icon: require('../assets/icon/images.png'),
    color: '#74b3ce',
    route: 'Agenda',
    component: Screens.Agenda,
  },
  {
    title: 'Brand Videos',
    icon: require('../assets/icon/videos.png'),
    color: '#00004d',
    route: 'Agenda',
    component: Screens.Agenda,
  },
  {
    title: 'Ask Questions',
    icon: require('../assets/icon/questions.png'),
    color: '#3a7ca5',
    route: 'Questions',
    component: Screens.Questions,
  },
  {
    title: 'Voting',
    icon: require('../assets/icon/voting.png'),
    color: '#3a7ca5',
    route: 'Agenda',
    component: Screens.Agenda,
  },
  {
    title: 'CME',
    icon: require('../assets/icon/cme.png'),
    color: '#1d4646',
    route: 'Agenda',
    component: Screens.Agenda,
  },
  {
    title: 'More',
    icon: require('../assets/icon/more.png'),
    color: '#1d4646',
    route: 'Agenda',
    component: Screens.Agenda,
  },
];

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {cards.map(item => (
        <Drawer.Screen
          name={item.title}
          component={item.component}
          key={item.title}
          options={{
            headerStyle: {
              backgroundColor:
                item.title == 'Home' ? COLORS.tertiary : COLORS.light,
            },
            headerTitleStyle:{
              color: item.title == 'Home' ? COLORS.light : COLORS.tertiary,
          },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}
