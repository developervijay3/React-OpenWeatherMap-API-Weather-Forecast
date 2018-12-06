import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeatherData} from '../../redux/actions';
import preProcess from '../preprocess';
import {Layout,Card,message,} from 'antd';
import WeatherList from '../../components/weather-list'
import './styles.css';
const {Content,Header } = Layout;
/**
 * @description Home Container
 * @type Container
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }
    /**
     * ComponentDidMount Hook
     */
    componentDidMount(){
        this.getWeatherData();
    }

    /**
     * Fetch Weather Data
     * @returns {Promise.<void>}
     */
    async getWeatherData(){
        try {
            const {getWeatherData} = this.props;
            const action = await getWeatherData();
            if(action.error){
               throw action.payload.response ? action.payload.response.data : "Server not available";
            }
        } catch(e){
            console.error(e);
            message.error("Error while fetching weather data");
        }
        this.setState({
            loading : false
        })
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        const {loading} = this.state;
        const {weather} = this.props;

        return (
            <Content>
                <Header className="header"> {loading?"Fetching Weather Information...": `Weather Data for ${(weather && weather.city)?weather.city.name:""}`}</Header>
                <div className="home-container">
                    <WeatherList items = {weather?weather.list:[]} loading = {loading}/>
                </div>
            </Content>
        )
    }
}
/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch)=>{
    return {
        getWeatherData : (count)=>{
            return dispatch(getWeatherData(count))
        }
    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = ({weather}) => {
    return {
        weather
    }
};
Main.displayName = "Home";
export default preProcess(Main,{
    withRouter : true,
    connect : [mapStateToProps,bindAction]
});
