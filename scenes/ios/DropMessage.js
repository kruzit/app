// @flow

import React from "react"
import {
    Button,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput
} from "react-native"

export default class DropMessage extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView
                behaviour={'padding'}
                style={styles.container}>
                <Image 
                    source={""}
                    style={styles.image} />
                <Text
                    style={styles.title}>
                    Drop a message!
                </Text>
                <TextInput
                    autoFocus={true}
                    maxLength={144}
                    multiline={false}
                    placeholder={"Whoop whoop!"}
                    returnKeyType={"go"}
                    style={styles.input}
                    onChangeText={()=>{}}
                    onSubmitEditing={()=>{}}
                />
                <Button
                    disabled
                    accessibilityLabel={"Post a message!"}
                    title={"Post!"}
                    onPress={()=>{}}
                />
            </KeyboardAvoidingView>
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
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 5,
        marginBottom: 5,
    },
})
