import React, { Component } from 'react';
import './style.css';
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:"",
      list:["早餐", "午餐", "晚餐"],
    }
  };
  render() {
    return (
      // 可以用Fragment当做占位符标签，也是react中的  
      <div className="todoList">
        <div className="item">
         <label htmlFor="shuru">请输入</label>
         <input id="shuru" value={this.state.inputValue} onChange={this.changeVal.bind(this)} />
         <button onClick={this.handleBtnClick.bind(this)}>提交</button>
         <p>{this.state.inputValue}</p>
        </div>
        <ul>
        {/* dangerouslySetInnerHTML不转意内容 */}
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={index} 
                  onClick={this.delItem.bind(this,index)}
                  dangerouslySetInnerHTML={{__html: item}} 
                >
                {/*使用dangerouslySetInnerHTM，此处不该有内容 {index+1}:{item} */}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  };
  changeVal(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }
  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:""
    })
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