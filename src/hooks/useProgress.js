import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const LS_KEY = 'sde-tracker-progress';

/**
 * Firestore-backed progress hook with offline support.
 *
 * - Reads/writes to users/{uid}/data/progress in Firestore.
 * - Firestore's persistentLocalCache means writes are cached immediately
 *   in IndexedDB and synced to the server when the device comes back online.
 * - On first login, any existing localStorage data is migrated to Firestore
 *   so previously saved progress is preserved.
 */
export function useProgress(uid) {
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    if (!uid) { setCompleted({}); return; }

    const ref  = doc(db, 'users', uid, 'data', 'progress');

    const unsub = onSnapshot(ref, (snap) => {
      if (!snap.exists()) {
        // First-ever login — migrate any localStorage progress then clear it
        const local = (() => {
          try { return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}'); }
          catch { return {}; }
        })();
        setDoc(ref, local).catch(console.error); // creates the doc (even if empty)
        localStorage.removeItem(LS_KEY);
        setCompleted(local);
      } else {
        setCompleted(snap.data() ?? {});
      }
    });

    return unsub;
  }, [uid]);

  /** Optimistically flip one task and persist to Firestore. */
  const toggle = (taskId) => {
    setCompleted((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), next).catch(console.error);
      return next;
    });
  };

  const reset = () => {
    if (!window.confirm('Reset all progress? This cannot be undone.')) return;
    setCompleted({});
    if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), {}).catch(console.error);
  };

  const importProgress = (data) => {
    setCompleted(data);
    if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), data).catch(console.error);
  };

  return { completed, toggle, reset, importProgress };
}
