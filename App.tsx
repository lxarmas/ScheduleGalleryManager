/**
 * Welcome Page for React Native App
 */

import React from 'react';
import { StatusBar, StyleSheet, View, Text, Button, useColorScheme, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WelcomeContent />
    </SafeAreaProvider>
  );
}

function WelcomeContent() {
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    alert('Get Started button pressed!');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to the Gallery Manager</Text>
      <Text style={styles.subtitle}>Your journey starts here.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={handlePress} color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '60%',
  },
});
