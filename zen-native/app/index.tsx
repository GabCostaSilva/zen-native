import {SafeAreaView, Text, View} from "react-native";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

export default function Index() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                justifyContent: "center",
                gap: 8,
                alignItems: "center",
                flexGrow: 1,
            }}
        >
            <Button title="Primary Button" action={"primary"}/>
            <Button title="Secondary Button" action={"secondary"}/>
            <Button title="Positive Button" action={"positive"}/>
            <Button title="Negative Button" action={"negative"}/>
            <Input/>
        </SafeAreaView>
    );
}
