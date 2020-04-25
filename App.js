import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Provider} from 'react-redux'
import configureStore from './src/configs/configureStore'
import MoviesListingPage from './src/containers/MoviesListingPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});const store = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
            <MoviesListingPage />
        </View>
      </Provider>
    );
  }
}

