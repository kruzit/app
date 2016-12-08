// @flow

import React from "react"
import {
    AppRegistry,
    Text,
    View
} from "react-native"

import styles from "./styles"

export default class Kruzit extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{"\n"}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent("Kruzit", () => Kruzit)
