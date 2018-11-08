import React, { Component } from 'react';
// 此处应用到ES6解构赋值 const { Component } = react.conponent
import Todolist from './conponent/Todolist3-5';
class App extends Component {
  render() {
    return (
      // jsx语法，js中写的标签
      <Todolist></Todolist>
    );
  }
}

export default App;
