import React, {Component} from 'react';
import './index.less'
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div  className="footer">
                Made with ❤ by XTech
            </div>
        )
    }
}
