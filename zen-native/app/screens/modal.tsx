import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import Modal from "@/app/components/Modal";
import Container from "@/app/components/Container";

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <Container>
                <Button title="Open Modal" onPress={handleOpenModal}/>
                <Modal visible={modalVisible} onClose={handleCloseModal} title="My Modal">
                    <Text>This is the content inside the modal!</Text>
                </Modal>
        </Container>
    );
};

export default ModalScreen;
