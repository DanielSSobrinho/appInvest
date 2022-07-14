import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RotasTab from './pages/RotasTab';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <RotasTab/>
    </NavigationContainer>
  );
}

