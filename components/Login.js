import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { signIn } from "next-auth/client";

import React from 'react';

const Login = () =>{

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
                src='https://hub.fl1digital.com/wp-content/uploads/2018/04/fl1-logo.png'
                height="250"
                width="250"
                objectFit="contain"
                />
                <h2>Sign In to FL1 Docs</h2>
                <Button 
                    color="blue"
                    buttonType="filled"
                    ripple="light"
                    className="w-44 mt-10"
                    onClick={signIn}
                >
                    Login
                </Button>
        </div>
    );
};

export default Login;
