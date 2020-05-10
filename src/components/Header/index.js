import React, {Component} from 'react';
import { Row, Col } from 'antd';
import  './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // state={};
    componentWillMount(){
        this.setState({
            userName:'河边'
        });
        setInterval(()=>{
            let stysTime= Util.formateDate(new Date().getTime());
            this.setState({
                stysTime
            })
        },1000);
        this.getCaiPiao();
    }
    getCaiPiao(){
        let appkey= '80d65123ab9e033a';
        axios.jsonp({
            url:'https://api.jisuapi.com/caipiao/query?appkey='+appkey+'&caipiaoid=13&issueno='
        }).then((res)=>{
            if(res.status===0){
                let data=res.result.number;
                this.setState({
                    piaoNum:data
                })
            }

        }).catch((res) => {})
    }

    render() {
        return (
            <div  className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                       首页
                    </Col>
                    <Col span={20}  className="weather">
                        <span className="date">{this.state.stysTime}</span>
                        <span className="weather-detail">
                            {this.state.piaoNum}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
