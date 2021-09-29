import { getDatabase, ref, onValue, off } from "firebase/database";
class FetchSkills {
  constructor(app) {
    this.db = getDatabase(app);
  }
  fetchSkils(onUpdate) {
    const query = ref(this.db, `skills`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
}

export default FetchSkills;
