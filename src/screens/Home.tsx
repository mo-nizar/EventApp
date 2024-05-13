import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants';

const Home = ({navigation}): React.JSX.Element => {
  const cards: CardItem[] = [
    {
      title: 'Agenda',
      icon: require('../assets/icon/agenda.png'),
      color: COLORS.primary,
      route: 'AgendaPage',
    },
    {
      title: 'Speakers',
      icon: require('../assets/icon/speakers.png'),
      color: COLORS.secondary,
      route: 'SpeakersPage',
    },
    {
      title: 'Badge',
      icon: require('../assets/icon/badge.png'),
      color: COLORS.tertiary,

      route: 'BadgePage',
    },
    {
      title: 'Venue',
      icon: require('../assets/icon/venue.png'),
      color: COLORS.primary,
      route: 'Agenda',
    },
    {
      title: 'Brand Innovation',
      icon: require('../assets/icon/images.png'),
      color: COLORS.secondary,
      route: 'Agenda',
    },
    {
      title: 'Brand Videos',
      icon: require('../assets/icon/videos.png'),
      color: COLORS.tertiary,
      route: 'Agenda',
    },
    {
      title: 'Ask Questions',
      icon: require('../assets/icon/questions.png'),
      color: COLORS.primary,
      route: 'QuestionsPage',
    },
    {
      title: 'Voting',
      icon: require('../assets/icon/voting.png'),
      color: COLORS.secondary,
      route: 'Agenda',
    },
    {
      title: 'Social Media',
      icon: require('../assets/icon/social.png'),
      color: COLORS.tertiary,
      route: 'Agenda',
    },
    {
      title: 'Survey',
      icon: require('../assets/icon/survey.png'),
      color: COLORS.primary,
      route: 'Agenda',
    },
    {
      title: 'CME',
      icon: require('../assets/icon/cme.png'),
      color: COLORS.secondary,
      route: 'Agenda',
    },
    {
      title: 'More',
      icon: require('../assets/icon/more.png'),
      color: COLORS.tertiary,
      route: 'Agenda',
    },
  ];

  interface CardItem {
    title: string;
    icon: string; // Assuming icon is an image resource ID
    color: string;
    route: string;
  }

  const Card = ({route, icon, color}: CardItem) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(route);
        }}
        style={styles.card(color)}>
        <Image style={styles.cardIcon} source={icon} />
        {/* <Text style={styles.cardText}>{title}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item, idx) => idx.toString()}
        numColumns={2}
        contentContainerStyle={styles.cardsContainer}
        renderItem={({item}) => (
          <Card route={item.route} icon={item.icon} color={item.color} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  card: color => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: color, // Default color, you can adjust as needed
    aspectRatio: 1,
    borderRadius: 12,
  }),
  cardIcon: {
    flex: 1,
    aspectRatio: 1,
    // height: a,
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
});
