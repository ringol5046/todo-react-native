import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';

import Todo from './Todo';

class TodoContainer extends Component {

  state = {
    todos: [],
    isModalVisible: false
  };

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  componentWillMount() {
    axios.get('https://immense-tundra-50530.herokuapp.com/todos', {
      headers: { 'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZkZmY5YjYxZDkxMzAwMTIxNTI3YWQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA5ODE4MjY3fQ.DBwMfTHcVOBUPRwGvlGuIYlK9Ok38x5Dd8fffEO8v-E' }
    })
      .then(response => this.setState({ todos: response.data.todos }));
  }

  renderTodo() {
    return this.state.todos.map(todo =>
      <Todo key={todo.title} data={todo} />
    );
  }

  render() {
    const { viewStyle, modalStyle } = styles;
    console.log(this.state.todos);
    return (
      <View style={viewStyle}>
        <TouchableOpacity onPress={this._showModal}>
          {this.renderTodo()}
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor='white'
          backdropOpacity={1}
          style={modalStyle}
        >
          <View style={{ flex: 1 }}>
            <Text>Hello</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = {
  modalStyle: {
    width:40,
    height:30
  },
  viewStyle: {
    flexDirection: 'row',
    
  }
};

export default TodoContainer;