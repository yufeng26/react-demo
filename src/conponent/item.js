import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        console.log("child-render");
        const { content , test } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content} - { test }
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
// 子组件接收父组件数据格式验证
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,  
    // content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    deteleItem: PropTypes.func,
    xbNumber: PropTypes.number,
}
// 子组件默认属性值
TodoItem.defaultProps = {
    test:"hello"
}

export default TodoItem;