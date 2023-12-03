import { auth, database } from '../config/firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as authSignOut } from 'firebase/auth';

import { Order, User } from '../interface';

enum Key {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
    USER = 'user',
    PROFILES = 'profiles'
    // CUSTOMER_ID??
}

export function setUser(user: any) {
    // return SecureStorageManager.set(Key.USER, JSON.stringify(user));
}

export async function getUser() {
    // const user = await SecureStorageManager.get(Key.USER)

    // if (!user) {
    //     return null;
    // }

    // return JSON.parse(user);
};

// TODO: handle validation
export async function signInWithEmail(email: string, password: string): Promise<any|null> {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // logged in
        const { user } = userCredential;
        const { uid: id } = user;

        console.log('user', user);

        // const userCollection = collection(database, 'User');
        const documentRef = doc(database, `User/${ id }`);
        const userDocument = await getDoc(documentRef);
        if (!userDocument || !userDocument.exists()) {
            const error: any = new Error('User does not exist in the system');

            error.code = 500;

            throw error;
        }
        
        const data = userDocument.data();

        console.log('data', data);

        return data;
    } catch(error: any) {
        const { code, message } = error;

        console.log(code, message);
    }

    return null;
};

export async function signUpWithEmail(email: string, password: string): Promise<User|null> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // signed up
        const { user } = userCredential;
        const { uid: id, displayName } = user;

        let name = displayName ?? '';

        const documentRef = doc(database, `User/${ id }`);
        const userData: User = {
            id,
            profile: {
                email,
                name
            },
            orders: []
        };

        await setDoc(documentRef, userData);

        console.log('user', user);

        return userData;
    } catch(error: any) {
        const { code, message } = error;

        console.log(code, message);
    }

    return null;
}

// TODO: logout API??
export async function signOut() {
    return authSignOut(auth);
};