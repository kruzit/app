// @flow

import React from "react"
import {
    AppRegistry,
    Navigator,
    Text,
    View
} from "react-native"

import {
    DropMessage,
    MessageDetails,
    MessageList,
    Settings,
    Welcome
} from "./scenes/ios"

export default class Kruzit extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: "welcome" }}
                renderScene={ this.renderScene }
                navigationBar={ this.navigationBar() }
            />
        )
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case "drop":
                return (<DropMessage />)
            case "list":
                return (<MessageList />)
            case "message":
                return (<MessageDetails />)
            case "settings":
                return (<Settings />)
            case "welcome":
                return (<Welcome />)
        }
    }

    navigationBar() { 
        return (
            <Navigator.NavigationBar 
                routeMapper={{
                    LeftButton: (route, navigator) => {
                        return (
                            <Text 
                                onPress={() => {
                                    navigator.replace({ id:"settings" })
                                }}>
                                Settings
                            </Text>
                        )
                    },
                    Title: (route, navigator) => {
                        return (
                            <Text 
                                onPress={() => {
                                    navigator.replace({ id:"drop" })
                                }}>
                                Drop
                            </Text>
                        )
                    },
                    RightButton: (route, navigator) => {
                        return (
                            <Text 
                                onPress={() => {
                                    navigator.replace({ id:"list" })
                                }}>
                                List
                            </Text>
                        )
                    }
                }}
            />
        )
    }
}

AppRegistry.registerComponent("Kruzit", () => Kruzit)
