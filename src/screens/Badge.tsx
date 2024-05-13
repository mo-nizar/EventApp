import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import api from '../services/api';
import {COLORS} from '../constants';

const Badge = (): React.JSX.Element => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [activeDate, setActiveDate] = useState(null);
  const [datesList, setDatesList] = useState([]);
  const [titles, setTitles] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const {data} = await api.post('/LoadAgenda?EventId=1', null, {});

      let res = data?.Data?.Result;
      if (res) {
        setData(groupByDates(res));
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onEventSelect = () => {};

  const onDateSelect = date => {
    setActiveDate(date);
  };
  const groupByDates = data => {
    const groupedData = {};
    let list = [];
    let titles = [];

    data.forEach(item => {
      const date = item.date;
      if (!groupedData[date]) {
        groupedData[date] = [];
      }

      if (!list.includes(item.date)) {
        list.push(item.date);
        titles[item.date] = item.Title;
      }

      setTitles(titles);
      setDatesList(list);
      setActiveDate(list[0]);
      groupedData[date].push(item);
    });

    return groupedData;
  };

  if (isLoading || !data) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>
      <Text style={styles.agenda}>Agenda</Text>

      <View style={styles.greyBorder} />

    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
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
  datesSection: {
    width: '100%',
  },
  dateCard: selected => ({
    backgroundColor: selected ? COLORS.tertiary : COLORS.light,
    borderRadius: 20,
    marginRight: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: COLORS.tertiary,
    maxWidth: '40%',
  }),
  buttonDate: selected => ({
    color: selected ? COLORS.light : COLORS.tertiary,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  }),
  datesScroller: {},
  titleWrapper: {
    backgroundColor: COLORS.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  timeTitle: {
    color: COLORS.light,
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  topicTitle: {
    color: COLORS.light,
    fontSize: 14,
    fontWeight: '600',
    flex: 2,
    textAlign: 'center',
  },
  eventsWrapper: {
    overflow: 'hidden',
  },
  eventCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    borderBottomWidth: 4,
    borderColor: '#26619c',
    backgroundColor: COLORS.bg_1,
  },

  topicSpeaker: {
    flex: 2,
    paddingLeft: 10,
  },
  time: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '300',
    fontSize: 16,
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
  eventScroller:{
    marginBottom: 150,
  },
});
