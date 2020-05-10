import React, {Component} from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillUnmount(){
        console.log('WillUnmount')
    }
    componentDidMount(){
        console.log('DidMount')
    }
    componentWillReceiveProps(newProps){
        console.log('willProps'+newProps.name);
        return true;
    }
    shouldComponentUpdate(){
        console.log('shouldUpdate')
        return true;
    }
    componentWillUpdate(){
        console.log('WillUpdate')
        return true;
    }
    componentDidUpdate(){
        console.log('DidUpdate')
    }
    render() {
        return (
            <div >
                <p>这是子组件。测试子给组件的生命周期</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
