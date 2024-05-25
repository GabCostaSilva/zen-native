// Box.tsx

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface BoxProps {
    padding?: number;
    margin?: number;
    backgroundColor?: string;
    style?: ViewStyle;
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ padding, margin, backgroundColor, style, children }) => {
    return (
        <View style={[{ padding, margin, backgroundColor }, style]}>
            {children}
        </View>
    );
};

export default Box;
