import React, {Component} from "react";
import {Card, Icon,Avatar,Skeleton} from "antd";
import "./styles.css";
const {Meta} = Card;
/**
 * @description Dummy Weather Card Component to show loading status
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
        return (
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Skeleton loading={true} avatar active>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        )
    }
}

Main.displayName = "Dummy-Weather-Card";