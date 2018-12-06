import React, {Component} from "react";
import {Avatar, Card} from "antd";
import {getYear,getMonth,getDate,getDay,camelize} from '../../utils/common'
import "./styles.css";
const {Meta} = Card;
/**
 * @description Weather Card Component
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
     * Get Description
     * @param description
     * @param date
     * @returns {string}
     */
    getDescription(description, date) {
        return `${camelize(description)} on ${getDay(date)}(${getDate(date * 1000)}-${getMonth(date * 1000)}-${getYear(date * 1000)})`
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        const {weather, dt, humidity, pressure, speed, rain} = this.props;
        const {icon, main, description} = weather[0];
        return (
            <Card
                style={{ width: 400, marginTop: 16 }}
                actions={[
                    <span>Humidity {`(${humidity || '-'}%)`}</span>,
                    <span>Pressure {`(${pressure || '-'})`}</span>,
                    <span>Wind Speed {`(${speed || '-'})`}</span>,
                    <span>Rainfall in mm {`(${rain || '-'})`}</span>
                ]}
            >
                <Meta
                    avatar={<Avatar src={`https://openweathermap.org/img/w/${icon}.png`}/>}
                    title={main}
                    description={this.getDescription(description, dt)}
                />
            </Card>
        )
    }


}


Main.displayName = "Weather-Card";