import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }
    // 继承父组件的属性函数方法，执行函数调用
    handleClick(){
        const { xbNumber, deteleItem } = this.props; 
        console.log(xbNumber);
        deteleItem(xbNumber);
    }
}

export default TodoItem;