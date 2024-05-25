import {StyleSheet, Text} from "react-native";
import Box from "@/app/components/Box";
import Container from "@/app/components/Container";
import VStack from "@/app/components/VStack";
import Heading from "@/app/components/Heading";
import HStack from "@/app/components/HStack";

const App = () => {
    return (
        <Container>
            <Box padding={16} margin={16} backgroundColor="lightblue" style={styles.customBox}>
                <Text>This is a box with padding and margin.</Text>
            </Box>
            <Box padding={10} margin={10} backgroundColor="lightgreen">
                <Text>This is another box with different padding and margin.</Text>
            </Box>
            <Heading level={5}>
                VStack
            </Heading>
            <VStack spacing={16} style={styles.customVStack}>
                <Text style={styles.text}>Item 1</Text>
                <Text style={styles.text}>Item 2</Text>
                <Text style={styles.text}>Item 3</Text>
            </VStack>
            <Heading level={5}>
                HStack
            </Heading>
            <HStack spacing={16} style={styles.customHStack}>
                <Text style={styles.text}>Item 1</Text>
                <Text style={styles.text}>Item 2</Text>
                <Text style={styles.text}>Item 3</Text>
            </HStack>
        </Container>
    );
};

const styles = StyleSheet.create({
    customBox: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'blue',
    },
    customVStack: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
    },
    customHStack: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
    },
});

export default App;