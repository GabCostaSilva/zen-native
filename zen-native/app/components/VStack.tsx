// VStack.tsx

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface VStackProps {
    spacing?: number;
    style?: ViewStyle;
    children: React.ReactNode;
}

const VStack: React.FC<VStackProps> = ({ spacing = 0, style, children }) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            gap: spacing,
        },
    });
    return (
        <View style={[styles.container, style]}>
            {React.Children.map(children, (child, index) => (
                <View style={{ marginBottom: index === React.Children.count(children) - 1 ? 0 : spacing }}>
                    {child}
                </View>
            ))}
        </View>
    );
};


export default VStack;
