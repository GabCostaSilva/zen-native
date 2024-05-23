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
                <Button title="Inputs"/>
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
// - CREATE MODAL COMPONENT
// - CREATE SELECT INPUT
// - CREATE CHECKBOX INPUT
// - CREATE RADIO INPUT
// - CREATE DATE INPUT
// - TIME INPUT
// - CREATE FILE INPUT
// - CREATE RANGE INPUT
// - CREATE TEXTAREA INPUT
// - CREATE CURRENCY INPUT
// - DIFFERENT TYPES OF BUTTONS


