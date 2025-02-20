import { openDB } from "idb";

const DB_NAME = "QuizDB";
const STORE_NAME = "attempts";

async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function saveAttempt(score) {
  try {
    const db = await initDB();
    await db.add(STORE_NAME, { score, timestamp: new Date().toISOString() });
    console.log("Attempt saved successfully!");
  } catch (error) {
    console.error("Error saving attempt:", error);
  }
}

export async function getAttempts() {
  try {
    const db = await initDB();
    const attempts = await db.getAll(STORE_NAME);
    console.log("Fetched attempts:", attempts);
    return attempts;
  } catch (error) {
    console.error("Error fetching attempts:", error);
    return [];
  }
}
