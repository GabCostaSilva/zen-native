import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import React from "react";

export type AppContainerProps = {
    children: any;
    gap?: number;
}
// @ts-ignore
const Container = ({children, gap = 8}: AppContainerProps) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        scrollContainer: {
            padding: 16,
            gap: gap,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {children}
        </ScrollView>
    </SafeAreaView>
}


export default Container;