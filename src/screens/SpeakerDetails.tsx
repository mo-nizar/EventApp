import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import api from '../services/api';
import {COLORS} from '../constants';
import RenderHtml from 'react-native-render-html';
import Screen from '../layouts/Screen';

const SpeakerDetails = ({route}): React.JSX.Element => {
  const [data, setData] = useState([]);
  const {width} = useWindowDimensions();

  useEffect(() => {
    setData(route.params.prof);
  }, []);

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>

      <View style={styles.eventsConatiner}>
        <TouchableOpacity style={styles.eventCard}>
          <View style={styles.time}>
            <Image
              source={{uri: data?.speaker_image}}
              style={styles.profImage}
            />
          </View>
          <View style={styles.topicSpeaker}>
            <RenderHtml
              contentWidth={width}
              source={{html: data?.speaker_designation}}
            />
            <Text style={styles.speaker}>{data?.speaker_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default SpeakerDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: COLORS.light,
    paddingBottom: 150,
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
    marginHorizontal: 20,
  },
  eventsConatiner: {
    marginTop: 50,
    flex: 1,
  },
  titleWrapper: {
    backgroundColor: COLORS.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  profImage: {
    width: '70%',
    aspectRatio: 1,
    marginBottom: 50,
  },
  eventCard: {
    flex:1,
    alignItems: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,

    backgroundColor: COLORS.light,
  },

  topicSpeaker: {
    flex: 3,
    paddingLeft: 10,
  },
  time: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '300',
  },
  topic: {
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: '300',
    fontSize: 16,
  },
  speaker: {
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: '600',
    fontSize: 16,
  },
  datesWrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventScroller: {
    paddingBottom: 150,
  },
});
