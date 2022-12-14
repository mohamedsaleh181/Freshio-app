// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: 'AIzaSyCHd7XCJW9o83k6XTmxTKfeQYGMgB5VxFY',
//   authDomain: 'healthy-food-ed8b5.firebaseapp.com',
//   projectId: 'healthy-food-ed8b5',
//   storageBucket: 'healthy-food-ed8b5.appspot.com',
//   messagingSenderId: '226677264829',
//   appId: '1:226677264829:web:8c12a7ad093172681d02d4',
//   measurementId: 'G-J7BCFFX2QP',
// };
const firebaseConfig = {
  apiKey: "AIzaSyBYIAnhndbZxOji5xqVgChApn9dfCO2cGA",
  authDomain: "freshio-4e9dc.firebaseapp.com",
  projectId: "freshio-4e9dc",
  storageBucket: "freshio-4e9dc.appspot.com",
  messagingSenderId: "816301602566",
  appId: "1:816301602566:web:3598f92afbfd30b1d95087"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
