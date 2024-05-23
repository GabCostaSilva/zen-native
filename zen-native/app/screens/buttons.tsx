import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import React from "react";

export default function Buttons() {
    return (
        <Container>
            <Button title="Primary Button" action={"primary"}/>
            <Button title="Secondary Button" action={"secondary"}/>
            <Button title="Positive Button" action={"positive"}/>
            <Button title="Negative Button" action={"negative"}/>
        </Container>
    );
}