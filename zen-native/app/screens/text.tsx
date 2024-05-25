// App.tsx

import React from 'react';
import {StyleSheet} from 'react-native';
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";

const App = () => {
    return (
        <Container>
            <Heading level={1} style={styles.customHeading}>
                Heading Level 1
            </Heading>
            <Heading level={2}>
                Heading Level 2
            </Heading>
            <Heading level={3}>
                Heading Level 3
            </Heading>
            <Heading level={4}>
                Heading Level 4
            </Heading>
            <Heading level={5}>
                Heading Level 5
            </Heading>
            <Heading level={6}>
                Heading Level 6
            </Heading>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    customHeading: {
        color: 'blue',
    },
});

export default App;
