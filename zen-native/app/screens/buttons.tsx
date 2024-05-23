import AppContainer from "@/app/components/AppContainer";
import Button from "@/app/components/Button";
import React from "react";
import {ScreenType} from "@/app/screens/screen-type";

export default function Buttons(props: ScreenType) {
    return (
        <AppContainer>
            <Button title="Primary Button" action={"primary"}/>
            <Button title="Secondary Button" action={"secondary"}/>
            <Button title="Positive Button" action={"positive"}/>
            <Button title="Negative Button" action={"negative"}/>
        </AppContainer>
    );
}