import { useState } from 'react';

const STORAGE_KEY = 'sde-tracker-notes';

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const setNote = (phaseId, text) => {
    setNotes((prev) => {
      const next = { ...prev, [phaseId]: text };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const importNotes = (data) => {
    setNotes(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  return { notes, setNote, importNotes };
}
