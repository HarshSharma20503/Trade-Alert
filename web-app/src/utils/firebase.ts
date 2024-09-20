import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from "firebase/messaging";
import { toast } from "react-toastify";

// Define types for Firebase configurations.
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Firebase configurations using Vite environment variables.
const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
};

console.log(firebaseConfig);

// Initialize Firebase app and messaging.
const firebaseApp = initializeApp(firebaseConfig);
const messaging: Messaging = getMessaging(firebaseApp);

/**
 * Requests permission for notifications and returns the Firebase notification token.
 * This function wraps the request in a try-catch block to handle errors.
 */
export const requestFirebaseNotificationPermission = async (): Promise<
  string | null
> => {
  try {
    // Request notification permission from the user
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      toast.error("Please allow notifications to recieve them.");
      throw new Error("Notification permission denied");
    }

    // Get the Firebase token
    const firebaseToken = await getToken(messaging);
    return firebaseToken || null;
  } catch (error) {
    console.error(
      "Error requesting notification permission or getting token:",
      error
    );
    return null;
  }
};

/**
 * Retrieves the Firebase token for messaging.
 * If the token is not available, it requests notification permission.
 * Errors are handled using try-catch blocks.
 */
export const getTokenFromFirebase = async (): Promise<string | null> => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_VAPID_KEY as string,
    });
    console.log("vapidKey", import.meta.env.VITE_VAPID_KEY);
    console.log("Current token", currentToken);
    if (currentToken) {
      console.log("Current token for client: ", currentToken);
      return currentToken;
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
      const permission = await Notification.requestPermission();
      console.log("Access for notification is ", permission);
      return null;
    }
  } catch (error) {
    console.error("An error occurred while retrieving token: ", error);
    return null;
  }
};

/**
 * Listens for incoming messages using Firebase Messaging.
 * Resolves the promise with the message payload when received.
 */
export const onMessageListener = (): Promise<unknown> =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
