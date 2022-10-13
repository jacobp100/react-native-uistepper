import * as React from 'react';

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import UIStepper from 'react-native-uistepper';

export default function App() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <UIStepper value={value} onValueChange={setValue} />
      <Text>{value}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
