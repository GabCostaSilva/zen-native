import {ButtonProps as NativeButtonProps, Pressable, StyleSheet, Text} from "react-native";

type ButtonProps = NativeButtonProps & {
    action?: "primary" | "secondary" | "positive" | "negative",
}

const colors = {
    primary: {
        color: "rgba(0, 119, 230, 1)",
        pressed: "rgba(0, 119, 230, 0.8)",
    },
    secondary: {
        color: "#5F5F5F",
        pressed: "#3F3F3F",
    },
    positive: {
        color: "#059669",
        pressed: "#047857",
    },
    negative: {
        color: "#DC2626",
        pressed: "#B91C1C",
    }
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

