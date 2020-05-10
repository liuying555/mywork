import React, {Component} from 'react';
import { Button } from 'antd';
import Child from './Child'

export default class Life extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count:0
    //     };
    //
    // }
    state = {
        count:0
    }

    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    // 这种写法要绑定this.handleClick.bind(this)
    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div >
                <Button type="primary" onClick={this.handleAdd}>点击一下</Button>
                <Button type="primary" onClick={this.handleClick.bind(this)}>点击一下</Button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}
