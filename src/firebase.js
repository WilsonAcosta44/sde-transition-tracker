import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            'AIzaSyDiuY3OZ-t4RMYgFGUMjF-SQOoLs3kRPyY',
  authDomain:        'sde-transition-tracker.firebaseapp.com',
  projectId:         'sde-transition-tracker',
  storageBucket:     'sde-transition-tracker.firebasestorage.app',
  messagingSenderId: '1093287182988',
  appId:             '1:1093287182988:web:821b1adf39d0622f7471a9',
};

const app = initializeApp(firebaseConfig);

// Firestore with offline persistence — caches to IndexedDB so the app
// works without a connection and syncs automatically when back online.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

export const auth           = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
