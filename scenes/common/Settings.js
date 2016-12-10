// @flow

import React from "react"
import {
    Button,
    Slider,
    Switch,
    Text,
    View
} from "react-native"

export default class Settings extends React.Component {
    render() {
        return (
            <View
                style={styles.container}>
                <View>
                    <View>
                        <Text>
                            Notifications
                        </Text>
                        <Switch
                            value={true}
                            onValueChange={()=>{}}
                        />
                    </View>
                    <View>
                        <Text>
                            Allow push notification of messages at the chosen distance.
                        </Text>
                        <View>
                            <Text>
                                Distance
                            </Text>
                            <View>
                                <Slider
                                    maximumValue={100}
                                    minimumValue={1}
                                    step={1}
                                    value={10}
                                    onSlidingComplete={()=>{}}
                                    onValueChange={()=>{}}
                                />
                                <Text>km</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>
                            History
                        </Text>
                        <Switch
                            value={true}
                            onValueChange={()=>{}}
                        />
                    </View>
                    <View>
                        <Text>
                            Save all the message you come accross!
                        </Text>
                        <View>
                            <Button
                                accessibilityLabel={"Clear all history"}
                                title={"Clear history"}
                                onPress={()=>{}}
                            />
                        </View>
                    </View>
                </View>
                <Button
                    accessibilityLabel={"Delete account"}
                    title={"Delete account"}
                    onPress={()=>{}}
                />
                <Text>
                    Copyright bla bla bla ...
                </Text>
            </View>
        )
    }
}


import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
