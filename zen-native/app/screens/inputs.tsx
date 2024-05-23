import {KeyboardAvoidingView, NativeSyntheticEvent, Platform, StatusBar, TextInputChangeEventData} from "react-native";
import FormControl from "@/app/components/FormControl";
import {useState} from "react";
import Container from "@/app/components/Container";

interface FormState {
    name: string;
    email: string;
    phone: string;
    document: string;
    password: string;
}

interface ErrorState {
    name: boolean;
    email: boolean;
    phone: boolean;
    document: boolean;
}

export default function Inputs() {

    const [errors] = useState<ErrorState>({
        name: false,
        email: false,
        phone: false,
        document: false,
    });

    const handleChange = (field: keyof FormState, value: string | NativeSyntheticEvent<TextInputChangeEventData>) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return <Container>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1,
                width: "100%",
                gap: 8,
                alignItems: "center",
                flexGrow: 1,
            }}
        >
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={"dark-content"}
                showHideTransition={"slide"}
                hidden={false}
            />
            <FormControl
                label="Name"
                value={form.name}
                onChange={(value) => handleChange('name', value)}
                error={errors.name}
                helperText={errors.name ? 'Name must be at least 5 characters long' : 'Enter your name'}
                type="text"
                icon={"user"}
            />
            <FormControl
                label="Email"
                value={form.email}
                onChange={(value) => handleChange('email', value)}
                error={errors.email}
                helperText={errors.email ? 'Invalid email address' : 'Enter your email'}
                type="email"
                icon={"at"}
            />
            <FormControl
                label="Phone"
                value={form.phone}
                onChange={(value) => handleChange('phone', value)}
                error={errors.phone}
                helperText={errors.phone ? 'Invalid phone number' : 'Enter your phone number'}
                type="phone"
                icon={"phone"}
            />
            <FormControl
                label="Document Number"
                value={form.document}
                onChange={(value) => handleChange('document', value)}
                error={true}
                helperText={errors.document ? 'Invalid document number' : 'Enter your document number'}
                type="document"
                icon="briefcase"
            />
            <FormControl
                type={"password"}
                label={"Password"}
                value={form.password}
                onChange={(value) => handleChange('password', value)}
                error={false}
                helperText={"Enter your password"}
                icon={"lock"}/>
        </KeyboardAvoidingView>
    </Container>

}