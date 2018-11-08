import React, { Component } from 'react';
import './style.css';
import TodoItem from './item.js'
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:"",
      list:["早餐", "午餐", "晚餐"],
    }
    this.changeVal = this.changeVal.bind(this);
    this.delItem = this.delItem.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  };
  render() {
    const { inputValue } = this.state;
    return (
      // 可以用Fragment当做占位符标签，也是react中的  
      <div className="todoList">
        <div className="item">
         <label htmlFor="shuru">请输入</label>
         <input id="shuru" value={inputValue} onChange={this.changeVal} />
         <button onClick={this.handleBtnClick}>提交</button>
         {/* <p>{this.state.inputValue}</p> */}
        </div>
        <ul>
        {/* dangerouslySetInnerHTML不转意内容 */}
         { this.getItem() }
        </ul>
      </div>
    );
  };
  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} content={item} xbNumber={index}  deteleItem={this.delItem}></TodoItem>
      )
    })
  }
  changeVal(e) {
    console.log(e.target.value);
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list:[...prevState.list, this.state.inputValue],
      inputValue:""
    }))
  }
  delItem(index) {
    const zclist = [...this.state.list];
    // react中要改变state中的值，需要先拷贝一份，然后用副本修改，然后用setState重新赋值，不要直接修改，如this.state.list.splice(index,1)
    zclist.splice(index, 1);
    this.setState({
      list:zclist
    })
  }
}

export default Todolist;