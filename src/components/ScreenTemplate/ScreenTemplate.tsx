import React from 'react';
import {View, ViewProps} from 'react-native';
import colors from 'src/styles/colors';

export default function ScreenTemplate({children, ...rest}: ViewProps) {
  return (
    <View style={[{backgroundColor: colors.background}, rest.style]}>
      {children}
    </View>
  );
}
