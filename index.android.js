// @flow

import React from "react"
import {
    AppRegistry
} from "react-native"

import {
    Welcome
} from "./scenes/android"

export default class Kruzit extends React.Component {
    render() {
        return (
            <Welcome />
        )
    }
}

AppRegistry.registerComponent("Kruzit", () => Kruzit)
