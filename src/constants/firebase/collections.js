// App
import Firebase from "./config";
// Firestore DB
export const db = Firebase.firestore();
export const noticeboard = db.collection("noticeboard");
export const availableSubs = db.collection("availableSubs");
export const users = db.collection("users");
export const userNames = db.collection("userNames");
export const privateChats = db.collection("chats");
export const mailbox = db.collection("mailbox");
