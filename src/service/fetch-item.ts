import type {FirebaseApp} from 'firebase/app';
import {getDatabase, ref, onValue, off} from 'firebase/database';
class FetchFirebase {
  db: any;
  constructor(app: FirebaseApp | undefined) {
    this.db = getDatabase(app);
  }

  fetchData(onUpdate: (arg0: any) => any, target: string | undefined) {
    const query = ref(this.db, target);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => off(query);
  }
}

export default FetchFirebase;
