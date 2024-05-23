import {TextInput, TextInputProps} from "react-native";

type InputProps = TextInputProps & {
    error?: boolean;
};
export default function Input(props: InputProps) {
    return <TextInput
        style={{
            height: 40,
            borderColor: 'gray',
            // borderWidth: 1,
            minWidth: 200,
            borderRadius: 5,
            padding: 5,
            flexShrink: 0,
        }}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        inputMode={props.inputMode}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
    />;
}