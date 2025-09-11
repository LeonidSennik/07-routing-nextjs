'use client';

import css from './NoteDetails.module.css';
import type { Note } from '../../../types/note';
import { useRouter } from 'next/navigation';

export default function NoteDetailsClient({ note }: { note: Note }) {
  const router = useRouter();

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={() => router.back()}>
          ×
        </button>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </p>
        <span className={css.tag}>{note.tag}</span>
      </div>
    </div>
  );
}
