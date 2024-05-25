import {ButtonProps as NativeButtonProps, Pressable, StyleSheet, Text} from "react-native";
import {colors} from "@/app/colors";

type ButtonProps = NativeButtonProps & {
    action?: "primary" | "secondary" | "positive" | "negative",
}

export default function Button(props: ButtonProps) {

    const styles = function (pressed: boolean) {
        const action = props.action || "primary";
        return StyleSheet.create({
            button: {
                width: 200,
                height: 50,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: pressed ? colors[action].pressed : colors[action].color,
            },
            text: {
                color: "white",
                fontFamily: "roboto-regular",
                fontWeight: "bold",
            }
        })
    }

    return <Pressable onPress={props.onPress}
                      style={({pressed}) => styles(pressed).button}
                      accessibilityLabel={props.accessibilityLabel}>
        <Text style={styles(false).text}>{props.title || "Button"}</Text>
    </Pressable>
}

