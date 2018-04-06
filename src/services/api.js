import firebase from "firebase";
require("firebase/firestore");

export default {
  init
};

/**
 * Inits the database.
 *
 * @export
 * @returns {Promise} To be resolved when finished.
 */
export function init() {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });

  return firebase
    .auth()
    .signInWithEmailAndPassword(
      process.env.FIREBASE_USER,
      process.env.FIREBASE_PASSWORD
    );
}

/**
 * Obtains all words for a given word and language.
 *
 * @export
 * @param {string} word Word to search
 * @param {string} languageCode Language code of the word.
 * @returns {Promise} To be resolved with an Array of words.
 */
export function getWords(word, languageCode) {
  return firebase
    .firestore()
    .collection("words")
    .where("word", "==", word.replace(/[^\w\s]/gi, ""))
    .where("languageCode", "==", languageCode)
    .get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => data.push(doc.data()));
      return data;
    });
}

export function getImageURL(imageId) {
  return firebase
    .storage()
    .ref()
    .child(imageId)
    .getDownloadURL();
}
