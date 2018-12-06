import React, {Component} from "react";
import "./styles.css";
import {Layout,Row,Col} from 'antd';
import WeatherCard from '../weather-card';
import DummyWeatherCard from '../dummy-weather-card';
/**
 * @description Weather List Component
 * @type Container
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        const {items,loading,dummyCount} = this.props;
        let cards;
        if(loading){
             cards = [];
            for(let i=0;i<(dummyCount||5);i++){
                cards.push(<Col span={8}  key = {i}><DummyWeatherCard/></Col>)
            }
        } else {
           cards =  (items || []).map((item,index)=> {
               return (
                   <Col xs = {24} sm ={24} md = {12} lg={8} key = {index}>
                       <WeatherCard  {...item}/>
                   </Col>
               )
           });
        }
        return (
            <Layout className="card-list">
                <Row type="flex" justify="center">
                    {cards}
                </Row>
            </Layout>
        )
    }
}

Main.displayName = "Weather-List";