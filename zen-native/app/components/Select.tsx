// Select.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';

interface SelectProps {
    label: string;
    items: Item[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ label, items, value, onValueChange, placeholder }) => {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <RNPickerSelect
                onValueChange={onValueChange}
                items={items}
                value={value}
                placeholder={{ label: placeholder || 'Select an option', value: null }}
                style={pickerSelectStyles}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 40,
        minWidth: 240,
        fontSize: 16,
        borderWidth: .5,
        flexShrink: 0,
        borderColor: 'gray',
        borderRadius: 5,
        color: 'black',
        padding: 5, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default Select;
