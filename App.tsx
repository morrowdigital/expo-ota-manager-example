import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initialiseOtaManager } from "expo-ota-manager";
import {useEffect} from "react";

export default function App() {
  useEffect(() => {
    initialiseOtaManager({})
  }, []);
  return (
    <View style={styles.container}>
      <Text>Version 1.0.7</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
