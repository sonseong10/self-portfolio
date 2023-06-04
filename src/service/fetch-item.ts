import type {FirebaseApp} from 'firebase/app';
import {getDatabase, ref, onValue, off, Database} from 'firebase/database';
class FetchFirebase {
  db: Database;
  constructor(app: FirebaseApp | undefined) {
    this.db = getDatabase(app);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchData(onUpdate: (value: any) => void, target: string | undefined) {
    const query = ref(this.db, target);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => off(query);
  }
}

export default FetchFirebase;
