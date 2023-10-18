
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDX0Pn8Xv5DzkGxqcycPYhXzrZ-xvTIVuE",
  authDomain: "timetable-ced0f.firebaseapp.com",
  projectId: "timetable-ced0f",
  storageBucket: "timetable-ced0f.appspot.com",
  messagingSenderId: "774761912821",
  appId: "1:774761912821:web:d994437fcef22e9b2668bc",
  measurementId: "G-Y9VRTVWT9Y",
  databaseURL: "https://timetable-ced0f-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;