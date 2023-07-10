import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { config } from "./firebase-config.js";

const firebaseConfig = config;

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
