import React, {Component} from 'react';
import { View, Text } from 'react-native';
import TodoContainer from './src/components/TodoContainer';
import Header from './src/components/Header';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText={'Task Pool'} />
        <TodoContainer />
      </View>
    );
  }
}

export default App;