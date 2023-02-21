import React from 'react';
import {StyleSheet, Image} from 'react-native';

import ScreenTemplate from 'src/components/ScreenTemplate/ScreenTemplate';

const logo = require('src/assets/images/logo.png');

export default function OnboardingScreen() {
  return (
    <ScreenTemplate style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.image} />
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '20%',
  },
});
