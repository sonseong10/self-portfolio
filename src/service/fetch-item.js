import { getDatabase, ref, onValue, off } from "firebase/database";
class FetchFirebase {
  constructor(app) {
    this.db = getDatabase(app);
  }

  fetchData(onUpdate, target) {
    const query = ref(this.db, target);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
}

export default FetchFirebase;
