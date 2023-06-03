import {getDatabase, ref, onValue, off} from 'firebase/database';
class FetchFirebase {
  db: any;
  constructor(app: any) {
    this.db = getDatabase(app);
  }

  /**
   * @param {(arg0: any) => any} onUpdate
   * @param {string | undefined} target
   */
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
