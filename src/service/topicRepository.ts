import { getDatabase, ref, set, onValue, off, remove } from 'firebase/database';
import { firebaseApp } from './firebase';

class TopicRepository {
  db;
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  syncTopics(userId: string, onUpdate: any) {
    const topicsRef = ref(this.db, `${userId}/topics`);
    onValue(topicsRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(topicsRef);
  }

  saveTopic(userId: string, topic: any) {
    set(ref(this.db, `${userId}/topics/${topic.id}`), topic);
  }

  removeTopic(userId: string, id: any) {
    remove(ref(this.db, `${userId}/topics/${id}`));
  }
}

export default TopicRepository;
