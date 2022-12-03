import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Divider,
    Input,
    Button
} from '@chakra-ui/react'

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleSubmit = () => {
        /* Validate emil and password */
        if (email.length > 0 && password.length > 0) {
            onSubmit(email, password);
        }
    }

    return (
        <FormControl isInvalid={email == "" && password == ""}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={email} onChange={handleEmailChange} size="lg" />
            <FormLabel mt='2'>Password</FormLabel>
            <Input type='password' value={password} onChange={handlePasswordChange} size="lg" />
            <Divider mt={2} mb={2} />
            <Button colorScheme='teal' size='lg' onClick={handleSubmit}>
                Login
            </Button>
        </FormControl>
    )

}


export default LoginForm;