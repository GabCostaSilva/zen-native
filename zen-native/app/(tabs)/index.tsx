import React from "react";
import {Link} from "expo-router";
import Button from "@/app/components/Button";
import {StyleSheet, View} from "react-native";

export default function Index() {
    return (<View style={style.container}>
            <Link href="/screens/modal" asChild={true}>
                <Button title="Modal"/>
            </Link>
            <Link href="/screens/buttons" asChild={true}>
                <Button title="Buttons"/>
            </Link>
            <Link href="/screens/inputs" asChild={true}>
                <Button title="Form"/>
            </Link>
            <Link href="/screens/text" asChild={true}>
                <Button title="Typography"/>
            </Link>
            <Link href={"/screens/structure"} asChild={true}>
                <Button title="Layout"/>
            </Link>
            <Link href={"/screens/feedback"} asChild={true}>
                <Button title="Feedback"/>
            </Link>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
//TODO:
// - CREATE TOAST COMPONENT USING GLUESTACK STYLING
// - CREATE SPIINER COMPONENT USING GLUESTACK STYLING
// - CREATE ALERT COMPONENT USING GLUESTACK STYLING
// - CREATE BADGE COMPONENT USING GLUESTACK STYLING
// - CREATE AVATAR COMPONENT USING GLUESTACK STYLING
// - TIME INPUT
// - CREATE CURRENCY INPUT
// - DIFFERENT TYPES OF BUTTONS


