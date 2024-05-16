import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView contentContainerStyle={[styles.container, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: COLORS.light,
  },
  safearea: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});

export default Screen;
