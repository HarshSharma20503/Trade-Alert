/**
 * This script sets up Firebase messaging in a Service Worker.
 *
 * The script starts by importing the necessary Firebase scripts and initializing
 *  the Firebase app with the given configuration.
 * It then retrieves the Firebase messaging instance and sets up
 *  event listeners for background messages.
 *
 * The `onBackgroundMessage` function displays a notification with the title
 *  and body specified in the payload, as well as custom options like
 *  the notification icon and vibration pattern.
 * The `notificationclick` event opens a new window to the "/journal"
 *  route when the notification is clicked.
 */
importScripts(
  "https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "./images/logo.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "test-tag",
    data: {
      url: "https://web.dev/push-notifications-overview/",
    },
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// Code for adding event on click of notification
self.addEventListener("notificationclick", (event) => {
  // Hide the notification
  event.notification.close();

  clients.openWindow("/journal");
});
