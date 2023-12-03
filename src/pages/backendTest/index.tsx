import React, { useState } from 'react';
import { auth, functions } from '../../config/firebase';
import { httpsCallable } from "firebase/functions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUpWithEmail, signInWithEmail } from '../../utility';

export default function BackendTest() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setEmail(value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setPassword(value);
    };

    // TODO: convert to general functions
    // TODO: use with firebase listeners??
    // TODO: handle errors (there is an error where user already exists)
    // see: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword
    const handleSignUp = async () => {
        const user = await signUpWithEmail(email, password);

        console.log('user', user);
    };

    const handleSignIn = async () => {
        const user = await signInWithEmail(email, password);

        console.log('handle sign in complete');
        console.log('user', user);
    };

    interface Response {
        status: string;
        code: number;
        message: string;
    }

    const handleLoginCall = async () => {
        const login = httpsCallable(functions, 'login');

        const result = await login(
            {

            }
        );

        // Read result of the Cloud Function.
        const data = result.data as Response;
        const { message: sanitizedMessage } = data;

        console.log(JSON.stringify(data));
    };

    return (
        <div>
            <h1>Home</h1>
            <input type='text' value={email} onChange={handleEmail} />
            <br />
            <br />
            <input type='text' value={password} onChange={handlePassword} />
            <br />
            <br />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleSignIn}>Login</button>
            <button onClick={handleLoginCall}>Login</button>
        </div>
    )

};