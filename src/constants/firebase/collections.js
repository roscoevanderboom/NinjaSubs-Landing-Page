// App
import Firebase from "./config";
// Firestore DB
export const db = Firebase.firestore();
export const mailbox = db.collection("mailbox");
