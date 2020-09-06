import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDDEYjDSImTcc_MZLseQ2c7zKb9aBA93nI",
  authDomain: "crown-clothing-db-8b1e2.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-8b1e2.firebaseio.com",
  projectId: "crown-clothing-db-8b1e2",
  storageBucket: "crown-clothing-db-8b1e2.appspot.com",
  messagingSenderId: "680040126047",
  appId: "1:680040126047:web:f4a7d2b3d91419dbf9edea",
  measurementId: "G-57Y6YPX1SV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

//for creating the userProfile and storing in firebase db.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const userdetails = await userRef.get();

  if (!userdetails.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({ displayName, email, createdDate, ...additionalData });
    } catch (error) {
      console.log("Error Creating User" + error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

//function for adding the collections in Firebase.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collections = fireStore.collection(collectionKey);
  const batch = fireStore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collections.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

//convert the collections array into object from the firestore.
export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items,
    };
  });
  return transformedCollection.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export default firebase;
