import {Stack} from 'expo-router';
import React from 'react';
import {useColorScheme} from '@/hooks/useColorScheme';
import AppContainer from "@/app/components/AppContainer";
import {StatusBar} from "react-native";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <>
            <StatusBar barStyle={'dark-content'}/>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </>
    );
}
