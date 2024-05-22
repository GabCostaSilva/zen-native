import {TextInput, TextInputProps} from "react-native";

export default function Input(props: TextInputProps) {
    return <TextInput
        style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            borderRadius: 5,
            padding: 5,
            flexShrink: 0,
        }}
        onChangeText={props.onChangeText}
        value={props.value}
    />;
}