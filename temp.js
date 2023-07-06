// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.FIREBASE_SECRET,
	authDomain: 'd1ce-tabletop-assistant.firebaseapp.com',
	projectId: 'd1ce-tabletop-assistant',
	storageBucket: 'd1ce-tabletop-assistant.appspot.com',
	messagingSenderId: '803470204671',
	appId: '1:803470204671:web:d07088ae914379d2c3b6ca',
	measurementId: 'G-QMTFV08ZV2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
