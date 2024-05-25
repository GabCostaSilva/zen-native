// Heading.tsx

import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    style?: TextStyle;
}

const Heading: React.FC<HeadingProps> = ({ level, children, style }) => {
    const getHeadingStyle = (level: number): TextStyle => {
        switch (level) {
            case 1:
                return styles.h1;
            case 2:
                return styles.h2;
            case 3:
                return styles.h3;
            case 4:
                return styles.h4;
            case 5:
                return styles.h5;
            case 6:
                return styles.h6;
            default:
                return styles.h1;
        }
    };

    return (
        <Text style={[getHeadingStyle(level), style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h4: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h5: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    h6: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Heading;
