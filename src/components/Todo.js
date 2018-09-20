import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Todo = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.data.title}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 15
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderRadius: 100/2
  }
}

export default Todo;