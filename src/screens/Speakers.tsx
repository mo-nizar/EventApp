import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import api from '../services/api';
import {COLORS} from '../constants';
import RenderHtml from 'react-native-render-html';
import Screen from '../layouts/Screen';

const Speakers = ({navigation}): React.JSX.Element => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {width} = useWindowDimensions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const {data} = await api.post('/LoadSpeakers?EventId=1', null, {});
      let res = data?.Data?.Result;
      if (res) {
        setData(res);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onEventSelect = item => {
    navigation.navigate('SpeakerDetails', {prof: item});
  };

  if (isLoading || !data) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>
      <Text style={styles.agenda}>SPEAKERS</Text>

      <View style={styles.greyBorder} />

      <View style={styles.eventsConatiner}>
        <View contentContainerStyle={styles.eventScroller}>
          {data?.map((item, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => onEventSelect(item)}
                style={styles.eventCard}>
                <View style={styles.time}>
                  <Image
                    source={{uri: item.speaker_image}}
                    style={styles.profImage}
                  />
                </View>
                <View style={styles.topicSpeaker}>
                  <Text style={styles.speaker}>{item.speaker_name}</Text>
                  <RenderHtml
                    contentWidth={width}
                    source={{html: item.speaker_designation}}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Screen>
  );
};

export default Speakers;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 0,
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
    marginHorizontal: 20,
  },
  eventsConatiner: {
    flex: 1,
  },
  profImage: {
    width: '70%',
    aspectRatio: 1,
  },
  eventCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
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
  eventScroller: {
    paddingBottom: 150,
  },
});
