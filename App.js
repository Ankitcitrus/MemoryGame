/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/createStore';
import {StyleSheet} from 'react-native';
import MemoryGame from './src/screen/MemoryGame/memory.game.container';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MemoryGame />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
