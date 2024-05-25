// Toast.tsx

import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ToastProps {
    visible: boolean;
    message: string;
    type: 'error' | 'warning' | 'success' | 'info' | 'attention';
    duration?: number;
    onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ visible, message, type, duration = 3000, onClose }) => {
    const [show, setShow] = useState(visible);
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        if (visible) {
            setShow(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();

            const timer = setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    setShow(false);
                    if (onClose) {
                        onClose();
                    }
                });
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [visible, duration, fadeAnim, onClose]);

    if (!show) {
        return null;
    }

    const backgroundColor = getBackgroundColor(type);

    return (
        <Animated.View style={[styles.toast, { backgroundColor, opacity: fadeAnim }]}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={onClose}>
                <Text style={styles.close}>X</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const getBackgroundColor = (type: string) => {
    switch (type) {
        case 'error':
            return 'rgba(217, 83, 79, 0.8)';
        case 'warning':
            return 'rgba(240, 173, 78, 0.8)';
        case 'success':
            return 'rgba(92, 184, 92, 0.8)';
        case 'info':
            return 'rgba(91, 192, 222, 0.8)';
        case 'attention':
            return 'rgba(240, 173, 78, 0.8)';
        default:
            return 'rgba(0, 0, 0, 0.8)';
    }
};

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        left: '10%',
        right: '10%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
    },
    message: {
        color: '#fff',
        flex: 1,
    },
    close: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
    },
});

export default Toast;
