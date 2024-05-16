import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import {useSelector} from 'react-redux';
import Screen from '../layouts/Screen';

const Badge = (): React.JSX.Element => {
  const profile = useSelector(state => state.profile);

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/images/loreal_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.venue}>RIYADH 2024</Text>
      <View style={styles.greyBorder} />

      <View style={styles.qrConatiner}>
        <View style={styles.imageWrapper}>
          {profile?.QrCode && (
            <Image source={{uri: profile?.QrCode}} style={styles.qrCode} />
          )}

          <Text style={styles.userName}>{profile?.DoctorName}</Text>
        </View>
      </View>
    </Screen>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    marginBottom: 50,
  },
  agenda: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.tertiary,
  },
  userName: {
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.tertiary,
    textTransform: 'capitalize',
  },
  imageWrapper: {
    flex: 1,
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
  qrConatiner: {
    marginTop: 50,
    flex: 1,
  },
  qrCode: {
    borderWidth: 1,
    width: '70%',
    aspectRatio: 1,
    marginBottom: 50,
  },
  greyBorder: {
    backgroundColor: COLORS.grey,
    height: 2,
    marginHorizontal: 20,
  },
});
