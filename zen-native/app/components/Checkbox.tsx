// Checkbox.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {colors} from "@/app/colors";

interface CheckboxProps {
    label: string;
    isChecked: boolean;
    onToggle: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onToggle }) => {
    return (
        <TouchableOpacity onPress={onToggle} style={styles.container}>
            <View style={[styles.checkbox, isChecked && styles.checked]}>
                {isChecked && <FontAwesome name="check" size={16} color="white"/>}
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
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.primary.color,
        borderColor: colors.primary.color,
    },
    label: {
        fontSize: 16,
    },
});

export default Checkbox;
