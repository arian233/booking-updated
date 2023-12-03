// referencing https://colinhacks.com/essays/nextjs-firebase-authentication
// import * as firebaseAdmin from 'firebase-admin';

// const credential = firebaseAdmin.credential;
// const initializeApp = firebaseAdmin.initializeApp;

// import serviceAccount from './serviceAccountKey.json';

// if (!firebaseAdmin.apps.length) {
//     initializeApp(
//         {
//             credential: credential.cert(serviceAccount),
//             databaseURL: process.env.FIREBASE_DATABASE_URL
//         }
//     );
// }

// export { firebaseAdmin };

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDl9bpaTtLV8QwkqUj8-pcX48j-IXwwonQ',
    authDomain: 'bookboy-1bedc.firebaseapp.com',
    databaseURL: 'https://bookboy-1bedc-default-rtdb.firebaseio.com',
    projectId: 'bookboy-1bedc',
    storageBucket: 'bookboy-1bedc.appspot.com',
    messagingSenderId: '556472020639',
    appId: '1:556472020639:web:a0e026a6035b4de9c0fcaa',
    measurementId: 'G-PHFZP0PB48'
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const database = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(database, 'localhost', 8080);
connectFunctionsEmulator(functions, 'localhost', 5001);

export {
    analytics,
    auth,
    database,
    functions
};