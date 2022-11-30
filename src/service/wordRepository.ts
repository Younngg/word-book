import { getDatabase, ref, set, onValue, off, remove } from 'firebase/database';
import { firebaseApp } from './firebase';

class WordRepository {
  db;
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  syncWords(userId: string, topicId: any, onUpdate: any) {
    const wordsRef = ref(this.db, `${userId}/topics/${topicId}/words`);
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      data ? onUpdate(data) : onUpdate({});
    });
  }

  offSyncWords(userId: string, topicId: any) {
    const wordsRef = ref(this.db, `${userId}/topics/${topicId}/words`);
    off(wordsRef);
  }

  saveWord(userId: string, word: any) {
    set(ref(this.db, `${userId}/topics/${word.topic}/words/${word.id}`), word);
  }

  removeWord(userId: string, word: any) {
    remove(ref(this.db, `${userId}/topics/${word.topic}/words/${word.id}`));
  }
}

export default WordRepository;
