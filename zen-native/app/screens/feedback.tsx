// App.tsx

import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Toast from "@/app/components/Toast";
import VStack from "@/app/components/VStack";

const App = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const [errorToastVisible, setErrorToastVisible] = useState(false);
    const [infoToastVisible, setInfoToastVisible] = useState(false);
    const [warningToastVisible, setWarningToastVisible] = useState(false);
    const [attentionToastVisible, setAttentionToastVisible] = useState(false);

    const showToast = () => {
        setToastVisible(true);
    };

    const showErrorToast = () => {
        setErrorToastVisible(true);
    };
    const showInfoToast = () => {
        setInfoToastVisible(true);
    }
    const showWarningToast = () => {
        setWarningToastVisible(true);
    }
    const showAttentionToast = () => {
        setAttentionToastVisible(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Button title="Show Success Toast" onPress={showToast}/>
            <Button title="Show Info Toast" onPress={showInfoToast}/>
            <Button title="Show Error Toast" onPress={showErrorToast}/>
            <Button title="Show Warning Toast" onPress={showWarningToast}/>
            <Button title="Show Attention Toast" onPress={showAttentionToast}/>
            <Toast
                visible={toastVisible}
                message="This is a success message!"
                type="success"
                onClose={() => setToastVisible(false)}
            />
            <Toast
                visible={errorToastVisible}
                message="This is a error message!"
                type="error"
                onClose={() => setToastVisible(false)}
            />

            <Toast type={"info"} message={"This is an info message"} visible={infoToastVisible}  onClose={() => setInfoToastVisible(false)}/>
            <Toast type={"warning"} message={"This is a warning message"} visible={warningToastVisible}  onClose={() => setWarningToastVisible(false)}/>
            <Toast type={"attention"} message={"This is an attention message"} visible={attentionToastVisible} onClose={() => setAttentionToastVisible(false)}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default App;
