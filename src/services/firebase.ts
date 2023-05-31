import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

const app = firebase.initializeApp({
  apiKey: '<api_key>',
  databaseURL: 'https://<project>.firebaseio.com',
  authDomain: '<project>.firebaseapp.com',
  projectId: '<project>'
});

export const FireAuth = app.auth();
export const FireFuncs = app.functions('europe-west1');

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const fire = firebase;
