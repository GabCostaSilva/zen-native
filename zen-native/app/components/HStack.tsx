// HStack.tsx

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface HStackProps {
    spacing?: number;
    style?: ViewStyle;
    children: React.ReactNode;
}

const HStack: React.FC<HStackProps> = ({ spacing = 0, style, children }) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: spacing,
        },
    });
    return (
        <View style={[styles.container, style]}>
            {React.Children.map(children, (child, index) => (
                <View style={{ marginRight: index === React.Children.count(children) - 1 ? 0 : spacing }}>
                    {child}
                </View>
            ))}
        </View>
    );
};


export default HStack;
