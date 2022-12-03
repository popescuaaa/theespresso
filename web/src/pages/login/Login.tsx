import React from "react";
import "./Login.css";
import LoginForm from "../../components/form/LoginForm";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Heading, Stack, Avatar, Link } from '@chakra-ui/react'

const Login: React.FC<{}> = () => {
    const navigator = useNavigate();

    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
        navigator("/home");
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="90vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <LoginForm onSubmit={onSubmit} />
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>

    );
}

export default Login;