import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCEDsERLd5HULKu8l9UfUX0_hYEmvjO4II",
    authDomain: "meeting-invite.firebaseapp.com",
    databaseURL: "https://meeting-invite.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
