import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

/**
 * Manages Google authentication state.
 *
 * user === undefined  →  Firebase is still checking (show loading spinner)
 * user === null       →  Signed out (show login screen)
 * user === object     →  Signed in (show app)
 */
export function useAuth() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ?? null));
    return unsub;
  }, []);

  const signIn  = () => signInWithPopup(auth, googleProvider);
  const signOut = () => fbSignOut(auth);

  return { user, loading: user === undefined, signIn, signOut };
}
