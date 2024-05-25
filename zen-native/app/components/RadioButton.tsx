// RadioButton.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {colors} from "@/app/colors";

interface RadioButtonProps {
    label: string;
    value: string;
    selectedValue: string;
    onValueChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selectedValue, onValueChange }) => {
    const isSelected = value === selectedValue;

    return (
        <TouchableOpacity onPress={() => onValueChange(value)} style={styles.container}>
            <View style={[styles.radioCircle, isSelected && styles.selected]}>
                {isSelected && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    selected: {
        borderColor: colors.primary.color,
    },
    innerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.primary.color,
    },
    label: {
        fontSize: 16,
    },
});

export default RadioButton;
