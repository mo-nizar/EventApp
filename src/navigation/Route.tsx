import {NavigationContainer} from '@react-navigation/native';
import React, {createRef} from 'react';
import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';

export const navigationRef = createRef();

export const navigate = (name, params) =>
  navigationRef.current?.navigate?.(name, params);

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={() => {}}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Route;
