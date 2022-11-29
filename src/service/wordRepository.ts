import { getDatabase, ref, set, onValue, off, remove } from 'firebase/database';
import { firebaseApp } from './firebase';

class WordRepository {
  db;
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  syncWords(userId: string, onUpdate: any) {
    const wordsRef = ref(this.db, `${userId}/words`);
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(wordsRef);
  }

  saveWord(userId: string, word: any) {
    set(ref(this.db, `${userId}/words/${word.id}`), word);
  }

  removeWord(userId: string, id: any) {
    remove(ref(this.db, `${userId}/words/${id}`));
  }
}

export default WordRepository;
