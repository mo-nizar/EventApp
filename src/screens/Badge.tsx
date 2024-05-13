import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import api from '../services/api';
import {COLORS} from '../constants';

const Badge = (): React.JSX.Element => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const {data} = await api.post('/LoadAgenda?EventId=1', null, {});

      if (data) {
        setData(data);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>
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
    marginBottom:50,
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
});
