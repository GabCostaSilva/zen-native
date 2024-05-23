import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import Modal from "@/app/components/Modal";
import AppContainer from "@/app/components/AppContainer";
import {ScreenType} from "@/app/screens/screen-type";

const ModalScreen = (props: ScreenType) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <AppContainer>
                <Button title="Open Modal" onPress={handleOpenModal}/>
                <Modal visible={modalVisible} onClose={handleCloseModal} title="My Modal">
                    <Text>This is the content inside the modal!</Text>
                </Modal>
        </AppContainer>
    );
};

export default ModalScreen;
